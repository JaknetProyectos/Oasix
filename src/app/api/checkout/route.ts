import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { CartItem } from '@/lib/types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; 
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// --- CREDENCIALES KEYCOP ---
const KEYCOP_EMAIL = process.env.KEYCOP_EMAIL!;
const KEYCOP_PASSWORD = process.env.KEYCOP_PASSWORD!;
const KEYCOP_BASE_URL = 'https://pagos.keycop.com.mx/api/v1';

const resend = new Resend(process.env.RESEND_API_KEY);
const formatPrice = (price: number) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(price);

const getKeycopHeaders = (extraHeaders = {}) => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
  'Origin': 'https://oasix.com.mx', 
  ...extraHeaders
});

async function safeKeycopFetch(url: string, options: RequestInit, stepName: string) {
  const res = await fetch(url, options);
  const text = await res.text(); 
  
  try {
    return JSON.parse(text);
  } catch (e) {
    console.error(`Respuesta cruda de Keycop en [${stepName}]:`, text);
    throw new Error(`Falla en ${stepName}. Keycop respondió: ${text.slice(0, 50)}...`);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { locale, contactInfo, billingInfo, orderNotes, cart, cardInfo, formattedTotal, manualFolioData} = body;

    const tempReferenceId = `REF-${Date.now()}`;

    // 1. SIGNIN EN KEYCOP
    const signinData = await safeKeycopFetch(`${KEYCOP_BASE_URL}/signin`, {
      method: 'POST',
      headers: getKeycopHeaders(),
      body: JSON.stringify({ email: KEYCOP_EMAIL, password: KEYCOP_PASSWORD })
    }, 'Login Keycop');
    
    if (!signinData.authToken) {
      throw new Error("Credenciales de Keycop incorrectas o bloqueadas.");
    }
    const authToken = signinData.authToken;

    // 2. TOKENIZACIÓN DE TARJETA KEYCOP
    const cardPayload = {
      cardData: {
        cardNumber: cardInfo.number.replace(/\s/g, ''), 
        cardholderName: cardInfo.name,
        expirationMonth: cardInfo.expiry.split('/')[0].trim(),
        expirationYear: cardInfo.expiry.split('/')[1].trim(),
      }
    };

    const tokenData = await safeKeycopFetch(`${KEYCOP_BASE_URL}/card/tokenizer`, {
      method: 'POST',
      headers: getKeycopHeaders({ 
        'Authorization': `Bearer ${authToken}` 
      }),
      body: JSON.stringify(cardPayload)
    }, 'Tokenización de Tarjeta');

    if (!tokenData.cardNumberToken) {
      throw new Error("Tarjeta rechazada por Keycop (Datos inválidos o encriptación fallida).");
    }
    const cardToken = tokenData.cardNumberToken;

    // 3. PREPARAR ITEMS PARA LA VENTA
    const keycopItems = manualFolioData 
      ? [{ title: `Pago Cotización: ${manualFolioData.folio}`, amount: manualFolioData.amount, quantity: 1, id: manualFolioData.folio }]
      : cart.items.map((item: CartItem) => ({
          title: item.experience.title,
          amount: item.pricePerPerson,
          quantity: item.people,
          id: item.packageId.toString(), // <-- Actualizado a packageId
    }));

    const finalAmountToCharge = manualFolioData ? manualFolioData.amount : cart.total;

    // 4. PROCESAR LA VENTA
    const salePayload = {
      amount: Number(finalAmountToCharge.toFixed(2)),
      currency: 484, // MXN
      reference: tempReferenceId,
      customerInformation: {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName || 'Sin apellido',
        middleName: '',
        email: contactInfo.email,
        phone1: contactInfo.phone,
        city: billingInfo.localidad || 'Ciudad de México',
        address1: billingInfo.direccion || 'Sin Especificar',
        postalCode: billingInfo.codigo_postal || '00000',
        state: billingInfo.estado || 'CDMX',
        country: 'MX',
        ip: '127.0.0.1' 
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: cardInfo.cvv.replace(/\s/g, '')
      },
      items: keycopItems,
      redirectUrl: 'https://oasix.com.mx' 
    };

    const saleData = await safeKeycopFetch(`${KEYCOP_BASE_URL}/sale`, {
      method: 'POST',
      headers: getKeycopHeaders({ 
        'Authorization': `Bearer ${authToken}` 
      }),
      body: JSON.stringify(salePayload)
    }, 'Procesar Venta');
    
    if (saleData.status !== 'APPROVED' && saleData.status !== 'PENDING') {
      console.error("❌ DETALLE DEL RECHAZO KEYCOP:", saleData); 
      throw new Error(`Pago declinado: ${saleData.message || saleData.responseCode || 'Tarjeta rechazada por el banco'}`);
    }

    // 5. GUARDAR EN SUPABASE (Tablas OASIX)
    const { data: customer, error: custError } = await supabase
      .from('customers_oasix') // <-- Actualizado
      .upsert({ 
        first_name: contactInfo.firstName, 
        last_name: contactInfo.lastName || 'Sin apellido', 
        email: contactInfo.email, 
        phone: contactInfo.phone || ''
      }, { onConflict: 'email' })
      .select().single();

    if (custError) {
      console.error("Error BD Cliente:", custError);
      throw new Error(`Error guardando cliente en la base de datos: ${custError.message}`);
    }

    const { data: booking, error: bookError } = await supabase
      .from('bookings_oasix') // <-- Actualizado
      .insert({
        customer_id: customer.id,
        session_id: manualFolioData ? manualFolioData.folio : null,
        total_amount: finalAmountToCharge,
        payment_status: 'paid',
        transaction_id: saleData.transactionId || saleData.authorizationNumber || tempReferenceId,
        payment_provider: 'keycop', 
        payment_date: new Date().toISOString(),
        pais: billingInfo.pais,
        direccion: billingInfo.direccion,
        localidad: billingInfo.localidad,
        estado: billingInfo.estado,
        codigo_postal: billingInfo.codigo_postal,
        order_notes: orderNotes || null 
      })
      .select().single();

    if (bookError) {
      console.error("Error BD Reserva:", bookError);
      throw new Error(`Error guardando reserva en la base de datos: ${bookError.message}`);
    }

    if (cart.items.length > 0) {
      const validBookingItems = cart.items
        .filter((item: CartItem) => item.packageId > 0) // <-- Filtrar por packageId
        .map((item: CartItem) => ({
          booking_id: booking.id,
          package_id: item.packageId, // <-- Actualizado al nuevo esquema
          scheduled_date: item.date,
          scheduled_time: item.time || null, // <-- Añadido al nuevo esquema
          pax_qty: item.people,
          unit_price: item.pricePerPerson
        }));
        
      if (validBookingItems.length > 0) {
        const { error: itemsError } = await supabase.from('booking_items_oasix').insert(validBookingItems); // <-- Actualizado
        if (itemsError) {
          console.error("Error BD Items:", itemsError);
          throw new Error("Error guardando items de reserva en la BD.");
        }
      }  
    }
   
    // 6. CORREOS ELECTRÓNICOS CON PALETA DE COLORES GLOBAL.CSS
    const bgSand = '#F8F6F1';
    const fgDeepJungle = '#092A18';
    const primaryTurquoise = '#12A595';
    const mutedGreen = '#527A66';
    const borderGreen = '#CFDDD4';
    const mutedBg = '#E1E8E4';

    const currentLocale = String(locale || 'es').toLowerCase();
    const isEnglish = currentLocale.startsWith('en');
    const subjectClient = isEnglish 
      ? `Booking Confirmation - Thank you for traveling with Oasix` 
      : `Confirmación de Reserva - Gracias por viajar con Oasix`;

    const greeting = isEnglish ? `Hello ${contactInfo.firstName},` : `Estimado/a ${contactInfo.firstName},`;
    const confirmationText = isEnglish ? "Your dossier has been confirmed and your payment was successfully processed." : "Tu dossier ha sido confirmado y el pago se procesó exitosamente.";
    const totalLabel = isEnglish ? "TOTAL INVESTMENT:" : "VALOR DE INVERSIÓN:";
    const quoteLabel = isEnglish ? "Custom Route Payment" : "Diseño de Ruta a la Medida";
    const folioLabel = isEnglish ? "Folio" : "Folio";
    const qtyLabel = isEnglish ? "Pax." : "Pax.";
    const priceLabel = isEnglish ? "Price" : "Precio";
    const experienceLabel = isEnglish ? "Experience / Package" : "Experiencia / Paquete";
    const detailsLabel = isEnglish ? "Contact & Billing Details" : "Detalles de Contacto y Facturación";
    const phoneLabel = isEnglish ? "Phone:" : "Teléfono:";
    const addressLabel = isEnglish ? "Address:" : "Dirección:";
    const notesLabel = isEnglish ? "Concierge Notes:" : "Indicaciones al Concierge:";
    
    const htmlClient = `
        <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; max-width: 600px; margin: auto; color: ${fgDeepJungle}; border: 1px solid ${borderGreen}; border-radius: 12px; overflow: hidden; background-color: ${bgSand};">
          <div style="background-color: ${fgDeepJungle}; padding: 50px 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 32px; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; font-family: 'Archivo', sans-serif;">OASIX</h1>
          </div>
          <div style="padding: 50px 40px; background-color: #ffffff;">
            <h2 style="color: ${fgDeepJungle}; margin-top: 0; font-size: 22px; font-weight: normal; font-family: 'Archivo', sans-serif;">${greeting}</h2>
            <p style="font-size: 16px; line-height: 1.8; color: ${fgDeepJungle};">${confirmationText}</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 40px; margin-top: 40px;">
              <thead>
                <tr style="border-bottom: 1px solid ${borderGreen}; text-align: left;">
                  <th style="padding: 12px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: ${mutedGreen};">${experienceLabel}</th>
                  <th style="padding: 12px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: ${mutedGreen}; text-align: center;">${qtyLabel}</th>
                  <th style="padding: 12px 0; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: ${mutedGreen}; text-align: right;">${priceLabel}</th>
                </tr>
              </thead>
              <tbody>
                ${!manualFolioData ? cart.items.map((item: CartItem) => `
                  <tr style="border-bottom: 1px solid ${borderGreen};">
                    <td style="padding: 24px 0;">
                      <p style="margin: 0; font-weight: bold; font-size: 16px; color: ${fgDeepJungle}; font-family: 'Archivo', sans-serif;">${item.experience.title}</p>
                      <p style="margin: 8px 0 0; font-size: 13px; color: ${mutedGreen}; text-transform: uppercase; letter-spacing: 1px;">
                        🗓 ${item.date} ${item.time ? `🕒 ${item.time}` : ''}<br>
                        ✨ Nivel: ${item.levelName}
                      </p>
                    </td>
                    <td style="padding: 24px 0; text-align: center; vertical-align: top; font-weight: normal; color: ${fgDeepJungle};">${item.people}</td>
                    <td style="padding: 24px 0; text-align: right; font-weight: bold; font-size: 15px; color: ${primaryTurquoise}; vertical-align: top;">${formatPrice(item.totalPrice)}</td>
                  </tr>
                `).join('') : `
                   <tr style="border-bottom: 1px solid ${borderGreen};">
                    <td style="padding: 24px 0;">
                      <p style="margin: 0; font-weight: bold; font-size: 16px; color: ${fgDeepJungle}; font-family: 'Archivo', sans-serif;">${quoteLabel}</p>
                      <p style="margin: 8px 0 0; font-size: 13px; color: ${mutedGreen}; text-transform: uppercase; letter-spacing: 1px;">${folioLabel}: ${manualFolioData.folio}</p>
                    </td>
                    <td style="padding: 24px 0; text-align: center; vertical-align: top; font-weight: normal; color: ${fgDeepJungle};">1</td>
                    <td style="padding: 24px 0; text-align: right; font-weight: bold; font-size: 15px; color: ${primaryTurquoise}; vertical-align: top;">${formatPrice(manualFolioData.amount)}</td>
                  </tr>
                `}
              </tbody>
            </table>

            <div style="padding: 20px 0; border-bottom: 1px solid ${borderGreen}; margin-bottom: 40px; text-align: right;">
              <span style="font-size: 12px; font-weight: bold; color: ${mutedGreen}; text-transform: uppercase; letter-spacing: 2px;">${totalLabel} </span>
              <span style="font-size: 32px; font-weight: normal; color: ${primaryTurquoise}; display: block; margin-top: 8px; font-family: 'Archivo', sans-serif;">${formattedTotal}</span>
            </div>

            <div style="padding: 30px; background-color: ${mutedBg}; border-left: 3px solid ${primaryTurquoise}; border-radius: 0 8px 8px 0;">
              <h3 style="margin: 0 0 20px; font-size: 12px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; color: ${fgDeepJungle}; font-family: 'Archivo', sans-serif;">${detailsLabel}</h3>
              <p style="margin: 10px 0; font-size: 13px; color: ${fgDeepJungle};"><strong>Email:</strong> ${contactInfo.email}</p>
              <p style="margin: 10px 0; font-size: 13px; color: ${fgDeepJungle};"><strong>${phoneLabel}</strong> ${contactInfo.phone}</p>
              <p style="margin: 10px 0; font-size: 13px; color: ${fgDeepJungle};"><strong>${addressLabel}</strong> ${billingInfo.direccion}, ${billingInfo.localidad}, ${billingInfo.estado}, ${billingInfo.codigo_postal}, ${billingInfo.pais}</p>
              ${orderNotes ? `<p style="margin: 15px 0 0; font-size: 13px; color: ${fgDeepJungle}; border-top: 1px solid ${borderGreen}; padding-top: 15px;"><strong>${notesLabel}</strong> ${orderNotes}</p>` : ''}
            </div>

          </div>
        </div>
    `;

    await resend.emails.send({
      from: 'OASIX  <atencion@oasix.com.mx>', 
      to: [contactInfo.email], 
      subject: subjectClient,
      html: htmlClient,
    });

    // --- NOTIFICACIÓN INTERNA PARA EL EQUIPO ---
    const subjectInternal = `[NUEVO DOSSIER] - ${formattedTotal} - ${contactInfo.firstName} ${contactInfo.lastName}`;
    
    const htmlInternal = `
      <div style="font-family: 'Plus Jakarta Sans', Arial, sans-serif; color: ${fgDeepJungle};">
        <h2 style="color: ${fgDeepJungle}; font-family: 'Archivo', sans-serif;">¡Nuevo Dossier Confirmado! (Vía Keycop)</h2>
        <p>Se ha procesado un pago exitoso a través de la plataforma Oasix.</p>
        <hr style="border: none; border-top: 1px solid ${borderGreen};" />
        <p><strong>Valor de Inversión:</strong> <span style="color: ${primaryTurquoise}; font-weight: bold;">${formattedTotal}</span></p>
        <p><strong>ID Transacción (Keycop):</strong> ${saleData.transactionId || saleData.authorizationNumber}</p>
        <hr style="border: none; border-top: 1px solid ${borderGreen};" />
        <h3 style="font-family: 'Archivo', sans-serif;">Datos del Viajero:</h3>
        <p><strong>Nombre:</strong> ${contactInfo.firstName} ${contactInfo.lastName}</p>
        <p><strong>Email:</strong> ${contactInfo.email}</p>
        <p><strong>Teléfono:</strong> ${contactInfo.phone}</p>
        <p><strong>Dirección:</strong> ${billingInfo.direccion}, ${billingInfo.localidad}, ${billingInfo.estado}, ${billingInfo.codigo_postal}</p>
        <p><strong>Indicaciones:</strong> ${orderNotes || 'Ninguna'}</p>
        <hr style="border: none; border-top: 1px solid ${borderGreen};" />
        <h3 style="font-family: 'Archivo', sans-serif;">Ruta Seleccionada:</h3>
        <ul>
          ${!manualFolioData ? cart.items.map((item: CartItem) => `
            <li>${item.experience.title} - ${item.levelName} (x${item.people}) - ${formatPrice(item.totalPrice)}</li>
          `).join('') : `<li>Diseño de Ruta a la Medida - Folio: ${manualFolioData.folio}</li>`}
        </ul>
      </div>
    `;

    await resend.emails.send({
      from: 'Sistema Oasix <atencion@oasix.com.mx>',
      to: ['atencion@oasix.com.mx'],
      bcc: ["gretomin@gmail.com"],
      subject: subjectInternal,
      html: htmlInternal,
    });

    return NextResponse.json({ 
      success: true, 
      bookingId: booking.id,
    });

  } catch (error: unknown) {
    console.error("Error capturado en Backend:", error);
    const errorMessage = error instanceof Error ? error.message : "Error interno del servidor";
    return NextResponse.json({ success: false, message: errorMessage }, { status: 400 });
  }
}
