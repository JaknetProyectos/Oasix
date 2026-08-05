import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { CartItem } from "@/lib/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// --- CREDENCIALES OCTANO ---
const OCTANO_EMAIL = process.env.OCTANO_EMAIL!;
const OCTANO_PASSWORD = process.env.OCTANO_PASSWORD!;

// La URL se obtiene directamente de la integración de Octano
const OCTANO_BASE_URL = "https://pagos.octanopayments.com/api/v1";

const resend = new Resend(process.env.RESEND_API_KEY);

const formatPrice = (price: number) =>
  new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(price);

const getOctanoJsonHeaders = (extraHeaders = {}) => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  Origin: "https://oasix.com.mx",
  ...extraHeaders,
});

async function safeOctanoFetch(
  url: string,
  options: RequestInit,
  stepName: string,
) {
  const res = await fetch(url, options);
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (e) {
    console.error(
      `Respuesta cruda de Octano en [${stepName}]:`,
      text,
    );

    throw new Error(
      `Falla en ${stepName}. Octano respondió: ${text.slice(0, 50)}...`,
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      locale,
      contactInfo,
      billingInfo,
      orderNotes,
      cart,
      cardInfo,
      formattedTotal,
      manualFolioData,
    } = body;

    const tempReferenceId = `REF-${Date.now()}`;

    // =========================================================================
    // 1. SIGNIN EN OCTANO
    // =========================================================================
    const signinBody = new URLSearchParams();

    signinBody.append("email", OCTANO_EMAIL);
    signinBody.append("password", OCTANO_PASSWORD);

    const signinData = await safeOctanoFetch(
      `${OCTANO_BASE_URL}/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
          Origin: "https://oasix.com.mx",
        },
        body: signinBody.toString(),
      },
      "Login Octano",
    );

    if (!signinData.authToken) {
      throw new Error(
        "Credenciales de Octano incorrectas o bloqueadas.",
      );
    }

    const authToken = signinData.authToken;

    // =========================================================================
    // 2. TOKENIZACIÓN DE TARJETA OCTANO
    // =========================================================================
    const cardPayload = {
      cardData: {
        cardNumber: cardInfo.number,
        cardholderName: cardInfo.name,
        expirationMonth: cardInfo.expiry.split("/")[0],
        expirationYear: cardInfo.expiry.split("/")[1],
      },
    };

    const tokenData = await safeOctanoFetch(
      `${OCTANO_BASE_URL}/card/tokenizer`,
      {
        method: "POST",
        headers: getOctanoJsonHeaders({
          Authorization: `Bearer ${authToken}`,
        }),
        body: JSON.stringify(cardPayload),
      },
      "Tokenización de Tarjeta",
    );

    if (!tokenData.cardNumberToken) {
      throw new Error(
        "Tarjeta rechazada por Octano (Datos inválidos o encriptación fallida).",
      );
    }

    const cardToken = tokenData.cardNumberToken;

    // =========================================================================
    // 3. PREPARAR ITEMS PARA LA VENTA
    // =========================================================================
    const octanoItems = manualFolioData
      ? [
          {
            title: `Pago Cotización: ${manualFolioData.folio}`,
            amount: manualFolioData.amount,
            quantity: 1,
            id: manualFolioData.folio,
          },
        ]
      : cart.items.map((item: CartItem) => ({
          title: item.experience.title,
          amount: item.pricePerPerson,
          quantity: item.people,
          id: item.packageId.toString(),
        }));

    const finalAmountToCharge = manualFolioData
      ? manualFolioData.amount
      : cart.total;

    // =========================================================================
    // 4. PROCESAR LA VENTA
    // =========================================================================
    const salePayload = {
      amount: Number(finalAmountToCharge.toFixed(2)),
      currency: 484,
      reference: tempReferenceId,
      customerInformation: {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName || "Sin apellido",
        middleName: "",
        email: contactInfo.email,
        phone1: contactInfo.phone,
        city: billingInfo.localidad || "Ciudad de México",
        address1: billingInfo.direccion || "Sin Especificar",
        postalCode: billingInfo.codigo_postal || "00000",
        state: billingInfo.estado || "CDMX",
        country: "Mx",
        ip: "127.0.0.1",
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: cardInfo.cvv,
      },
      items: octanoItems,
      redirectUrl: "https://oasix.com.mx",
    };

    const saleData = await safeOctanoFetch(
      `${OCTANO_BASE_URL}/sale`,
      {
        method: "POST",
        headers: getOctanoJsonHeaders({
          Authorization: `Bearer ${authToken}`,
        }),
        body: JSON.stringify(salePayload),
      },
      "Procesar Venta",
    );

    if (
      saleData.status !== "APPROVED" &&
      saleData.status !== "PENDING"
    ) {
      console.error("❌ DETALLE DEL RECHAZO OCTANO:", saleData);

      throw new Error(
        `Pago declinado: ${
          saleData.message ||
          saleData.responseCode ||
          "Tarjeta rechazada por el banco"
        }`,
      );
    }

    // =========================================================================
    // 5. GUARDAR EN SUPABASE
    // =========================================================================
    const { data: customer, error: custError } = await supabase
      .from("customers_vm")
      .upsert(
        {
          first_name: contactInfo.firstName,
          last_name: contactInfo.lastName,
          email: contactInfo.email,
          phone: contactInfo.phone,
        },
        {
          onConflict: "email",
        },
      )
      .select()
      .single();

    if (custError) {
      throw new Error(
        "Error guardando cliente en la base de datos.",
      );
    }

    const { data: booking, error: bookError } = await supabase
      .from("bookings_vm")
      .insert({
        customer_id: customer.id,
        session_id: manualFolioData
          ? manualFolioData.folio
          : null,
        total_amount: finalAmountToCharge,
        payment_status: "paid",
        transaction_id:
          saleData.transactionId ||
          saleData.authorizationNumber ||
          tempReferenceId,
        payment_provider: "octano",
        payment_date: new Date().toISOString(),
        pais: billingInfo.pais,
        direccion: billingInfo.direccion,
        localidad: billingInfo.localidad,
        estado: billingInfo.estado,
        codigo_postal: billingInfo.codigo_postal,
        order_notes: orderNotes || null,
      })
      .select()
      .single();

    if (bookError) {
      throw new Error(
        "Error guardando reserva en la base de datos.",
      );
    }

    if (cart.items.length > 0) {
      const validBookingItems = cart.items
        .filter((item: CartItem) => item.packageId > 0)
        .map((item: CartItem) => ({
          booking_id: booking.id,
          package_id: item.packageId,
          scheduled_date: item.date,
          pax_qty: item.people,
          unit_price: item.pricePerPerson,
        }));

      if (validBookingItems.length > 0) {
        const { error: itemsError } = await supabase
          .from("booking_items_vm")
          .insert(validBookingItems);

        if (itemsError) {
          throw new Error(
            "Error guardando items de reserva en la BD.",
          );
        }
      }
    }

    // =========================================================================
    // 6. CORREOS ELECTRÓNICOS — ESTILO OASIX
    // =========================================================================
    const primaryColor = "#064E3B";
    const secondaryColor = "#047857";
    const accentColor = "#FCD34D";
    const aquaColor = "#67E8F9";
    const bgCard = "#FFFFFF";
    const bgApp = "#F4F8F5";
    const textColor = "#052E2B";
    const mutedColor = "#64748B";
    const borderColor = "#D1FAE5";

    const isEnglish = locale === "en";

    const subjectClient = isEnglish
      ? "Your experience with Oasix is confirmed"
      : "Tu experiencia con Oasix está confirmada";

    const greeting = isEnglish
      ? `Hi ${contactInfo.firstName}!`
      : `¡Hola ${contactInfo.firstName}!`;

    const confirmationText = isEnglish
      ? "Your payment was completed successfully and your experience is now confirmed. We will be ready to welcome you."
      : "Tu pago se completó correctamente y tu experiencia ya está confirmada. Estaremos listos para recibirte.";

    const totalLabel = isEnglish
      ? "Total Paid"
      : "Total Pagado";

    const quoteLabel = isEnglish
      ? "Custom Experience"
      : "Experiencia a Medida (Folio VIP)";

    const folioLabel = "Folio";

    const qtyLabel = isEnglish
      ? "Guests"
      : "Asistentes";

    const priceLabel = isEnglish
      ? "Price"
      : "Inversión";

    const experienceLabel = isEnglish
      ? "Experience"
      : "Experiencia";

    const detailsLabel = isEnglish
      ? "Traveler Details"
      : "Datos del Viajero";

    const htmlClient = `
      <div style="background-color: ${bgApp}; padding: 40px 20px; font-family: Arial, Helvetica, sans-serif;">
        <div style="max-width: 620px; margin: auto; background-color: ${bgCard}; border-radius: 32px; overflow: hidden; box-shadow: 0 24px 60px -30px rgba(6, 78, 59, 0.35); border: 1px solid ${borderColor};">

          <div style="background-color: ${primaryColor}; padding: 44px 24px; text-align: center; position: relative;">
            <div style="display: inline-block; background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 8px 16px; margin-bottom: 18px;">
              <span style="color: ${aquaColor}; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">
                Experiencias que conectan
              </span>
            </div>

            <h1 style="color: #ffffff; margin: 0; font-size: 42px; font-weight: 900; letter-spacing: -1px;">
              Oasix
            </h1>

            <p style="color: #D1FAE5; margin: 10px 0 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">
              Rutas de Sabor
            </p>
          </div>

          <div style="padding: 42px 30px;">
            <h2 style="color: ${textColor}; margin-top: 0; margin-bottom: 12px; font-size: 29px; font-weight: 900;">
              ${greeting}
            </h2>

            <p style="font-size: 16px; line-height: 1.7; color: ${mutedColor}; margin-top: 0;">
              ${confirmationText}
            </p>

            <div style="margin-top: 32px;">
              ${
                !manualFolioData
                  ? cart.items
                      .map(
                        (item: CartItem) => `
                  <div style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 24px; padding: 22px; margin-bottom: 16px;">
                    <p style="color: ${secondaryColor}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px;">
                      ✦ ${item.levelName}
                    </p>

                    <p style="margin: 0 0 14px; font-weight: 900; font-size: 20px; color: ${textColor}; line-height: 1.3;">
                      ${item.experience.title}
                    </p>

                    <table style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="color: ${mutedColor}; font-size: 13px;">
                          📅 ${item.date}
                        </td>

                        <td style="text-align: center; color: ${textColor}; font-weight: 700; font-size: 13px;">
                          ${qtyLabel}: ${item.people}
                        </td>

                        <td style="text-align: right; color: ${secondaryColor}; font-weight: 900; font-size: 17px;">
                          ${formatPrice(item.totalPrice)}
                        </td>
                      </tr>
                    </table>
                  </div>
                `,
                      )
                      .join("")
                  : `
                <div style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 24px; padding: 22px; margin-bottom: 16px;">
                  <p style="color: ${secondaryColor}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 8px;">
                    🎟️ ${folioLabel}: ${manualFolioData.folio}
                  </p>

                  <p style="margin: 0 0 14px; font-weight: 900; font-size: 20px; color: ${textColor};">
                    ${quoteLabel}
                  </p>

                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="color: ${mutedColor}; font-size: 13px;">
                        📅 Por confirmar
                      </td>

                      <td style="text-align: center; color: ${textColor}; font-weight: 700; font-size: 13px;">
                        ${qtyLabel}: 1
                      </td>

                      <td style="text-align: right; color: ${secondaryColor}; font-weight: 900; font-size: 17px;">
                        ${formatPrice(manualFolioData.amount)}
                      </td>
                    </tr>
                  </table>
                </div>
              `
              }
            </div>

            <div style="background-color: ${primaryColor}; color: #ffffff; border-radius: 24px; padding: 26px; margin: 32px 0; text-align: center;">
              <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: #A7F3D0;">
                ${totalLabel}
              </span>

              <span style="font-size: 38px; font-weight: 900; display: block; margin-top: 7px; color: ${accentColor};">
                ${formattedTotal}
              </span>
            </div>

            <div style="padding: 24px; border-radius: 24px; border: 1px solid ${borderColor}; background-color: #ffffff;">
              <h3 style="margin: 0 0 16px; font-size: 16px; font-weight: 900; color: ${textColor};">
                ${detailsLabel}
              </h3>

              <p style="margin: 7px 0; font-size: 14px; color: ${mutedColor};">
                <strong style="color: ${textColor};">Email:</strong>
                ${contactInfo.email}
              </p>

              <p style="margin: 7px 0; font-size: 14px; color: ${mutedColor};">
                <strong style="color: ${textColor};">Tel:</strong>
                ${contactInfo.phone}
              </p>

              ${
                orderNotes
                  ? `
                <div style="margin-top: 18px; padding-top: 18px; border-top: 1px dashed #D1D5DB;">
                  <p style="margin: 0; font-size: 13px; color: ${secondaryColor}; font-weight: 800;">
                    📝 Notas:
                  </p>

                  <p style="margin: 7px 0 0; font-size: 14px; line-height: 1.6; color: ${textColor};">
                    ${orderNotes}
                  </p>
                </div>
              `
                  : ""
              }
            </div>

            <div style="text-align: center; margin-top: 34px;">
              <p style="font-size: 12px; line-height: 1.7; color: ${mutedColor}; font-weight: 700;">
                Tu experiencia está lista. Nos vemos muy pronto.<br>
                El equipo de Oasix.
              </p>

              <p style="font-size: 11px; color: #94A3B8; margin-top: 18px;">
                oasix.com.mx · atencion@oasix.com.mx
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Oasix <reservas@oasix.com.mx>",
      to: [contactInfo.email],
      subject: subjectClient,
      html: htmlClient,
    });

    // =========================================================================
    // NOTIFICACIÓN INTERNA PARA EL EQUIPO
    // =========================================================================
    const subjectInternal = `🌿 [VENTA NUEVA] - ${formattedTotal} - ${contactInfo.firstName}`;

    const htmlInternal = `
      <div style="font-family: Arial, Helvetica, sans-serif; color: ${textColor}; background: ${bgApp}; padding: 24px;">
        <div style="background: #ffffff; padding: 32px; border-radius: 24px; max-width: 620px; margin: auto; border: 1px solid ${borderColor}; border-top: 7px solid ${secondaryColor}; box-shadow: 0 20px 50px -30px rgba(6,78,59,0.35);">

          <div style="display: inline-block; background: #ECFDF5; color: ${secondaryColor}; padding: 7px 13px; border-radius: 999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px;">
            Venta procesada con Octano
          </div>

          <h2 style="color: ${primaryColor}; margin: 18px 0 8px; font-size: 27px;">
            Nueva reservación en Oasix
          </h2>

          <p style="font-size: 36px; font-weight: 900; color: ${secondaryColor}; margin: 10px 0;">
            ${formattedTotal}
          </p>

          <p style="color: ${mutedColor}; font-size: 13px;">
            <strong style="color: ${textColor};">Transacción:</strong>
            ${
              saleData.transactionId ||
              saleData.authorizationNumber ||
              tempReferenceId
            }
          </p>

          <hr style="border: 0; border-top: 1px dashed #CBD5E1; margin: 24px 0;">

          <h3 style="color: ${textColor}; margin-bottom: 15px;">
            Datos del Cliente
          </h3>

          <p>
            <strong>Nombre:</strong>
            ${contactInfo.firstName} ${contactInfo.lastName}
          </p>

          <p>
            <strong>Email:</strong>
            ${contactInfo.email}
          </p>

          <p>
            <strong>Teléfono:</strong>
            ${contactInfo.phone}
          </p>

          <p>
            <strong>Notas Especiales:</strong>
            ${orderNotes || "Ninguna"}
          </p>

          <hr style="border: 0; border-top: 1px dashed #CBD5E1; margin: 24px 0;">

          <h3 style="color: ${textColor}; margin-bottom: 15px;">
            Resumen
          </h3>

          <ul style="background: #ECFDF5; border: 1px solid ${borderColor}; padding: 22px 42px; border-radius: 18px; line-height: 1.6;">
            ${
              !manualFolioData
                ? cart.items
                    .map(
                      (item: CartItem) => `
                <li style="margin-bottom: 10px;">
                  <strong>${item.experience.title}</strong>
                  (x${item.people}) — ${formatPrice(item.totalPrice)}
                </li>
              `,
                    )
                    .join("")
                : `
              <li>
                Pago Manual Folio:
                <strong>${manualFolioData.folio}</strong>
              </li>
            `
            }
          </ul>

          <p style="text-align: center; color: #94A3B8; font-size: 11px; margin: 28px 0 0;">
            Sistema de reservaciones Oasix
          </p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "Sistema Oasix <reservas@oasix.com.mx>",
      to: ["atencion@oasix.com.mx"],
      subject: subjectInternal,
      html: htmlInternal,
    });

    return NextResponse.json({
      success: true,
      bookingId: booking.id,
    });
  } catch (error: unknown) {
    console.error("Error capturado en Backend:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Error interno del servidor";

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
      },
      {
        status: 400,
      },
    );
  }
}