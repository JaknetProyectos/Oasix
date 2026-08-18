import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type,
      customerName,
      email,
      phone,
      message,
      destination,
      locale,
      budget,
      startDate,
      travelers,
    } = body;

    if (type !== "CONTACT" && type !== "QUOTE") {
      return NextResponse.json(
        { error: "Tipo de correo no soportado" },
        { status: 400 },
      );
    }

    // Colores Oasix
    const primaryColor = "#064E3B";
    const secondaryColor = "#047857";
    const accentColor = "#FCD34D";
    const aquaColor = "#67E8F9";
    const bgCard = "#FFFFFF";
    const bgApp = "#F4F8F5";
    const textColor = "#052E2B";
    const mutedColor = "#64748B";
    const borderColor = "#D1FAE5";

    let subjectClient = "";
    let htmlClient = "";
    let subjectInternal = "";
    let htmlInternal = "";

    const greeting = `¡Hola ${customerName}!`;

    // ==========================================
    // 2A. LÓGICA PARA CONTACTO GENERAL
    // ==========================================
    if (type === "CONTACT") {
      subjectClient = "[Oasix] Hemos recibido tu mensaje";
      subjectInternal = `💬 [CONTACTO WEB] - ${customerName}`;

      htmlClient = `
        <div style="background-color: ${bgApp}; padding: 40px 20px; font-family: Arial, Helvetica, sans-serif;">
          <div style="max-width: 620px; margin: auto; background-color: ${bgCard}; border-radius: 32px; overflow: hidden; border: 1px solid ${borderColor}; box-shadow: 0 24px 60px -30px rgba(6,78,59,0.35);">
            
            <div style="background-color: ${primaryColor}; padding: 44px 24px; text-align: center;">
              <div style="display: inline-block; background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 8px 16px; margin-bottom: 18px;">
                <span style="color: ${aquaColor}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">
                  Mensaje recibido
                </span>
              </div>

              <h1 style="color: #ffffff; margin: 0; font-size: 40px; font-weight: 900; letter-spacing: -1px;">
                Oasix
              </h1>

              <p style="color: #D1FAE5; margin: 10px 0 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">
                Rutas de Sabor
              </p>
            </div>

            <div style="padding: 42px 30px;">
              <h2 style="color: ${textColor}; margin-top: 0; margin-bottom: 14px; font-size: 27px; font-weight: 900;">
                ${greeting}
              </h2>

              <p style="font-size: 16px; line-height: 1.7; color: ${mutedColor}; margin: 0;">
                Gracias por contactarnos. Nuestro equipo recibió correctamente tu mensaje y ya se encuentra revisándolo. Nos comunicaremos contigo muy pronto.
              </p>

              <div style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 24px; padding: 24px; margin-top: 30px;">
                <p style="color: ${secondaryColor}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 12px;">
                  Tu mensaje original:
                </p>

                <p style="font-size: 15px; font-style: italic; line-height: 1.7; color: ${textColor}; margin: 0;">
                  "${message || "Sin mensaje."}"
                </p>
              </div>

              <div style="text-align: center; margin-top: 40px;">
                <a
                  href="https://oasix.com.mx/es/experiencias"
                  style="display: inline-block; background-color: ${primaryColor}; color: #ffffff; padding: 16px 32px; border-radius: 9999px; text-decoration: none; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;"
                >
                  Ver Menú de Rutas
                </a>
              </div>

              <div style="text-align: center; margin-top: 34px; padding-top: 24px; border-top: 1px solid ${borderColor};">
                <p style="font-size: 12px; line-height: 1.7; color: ${mutedColor}; font-weight: 700; margin: 0;">
                  Gracias por confiar en Oasix.<br>
                  Nuestro equipo te atenderá muy pronto.
                </p>

                <p style="font-size: 11px; color: #94A3B8; margin: 16px 0 0;">
                  oasix.com.mx · atencion@oasix.com.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      htmlInternal = `
        <div style="font-family: Arial, Helvetica, sans-serif; color: ${textColor}; background: ${bgApp}; padding: 24px;">
          <div style="background: #ffffff; padding: 32px; border-radius: 24px; max-width: 620px; margin: auto; border: 1px solid ${borderColor}; border-top: 7px solid ${secondaryColor}; box-shadow: 0 20px 50px -30px rgba(6,78,59,0.35);">
            
            <div style="display: inline-block; background: #ECFDF5; color: ${secondaryColor}; padding: 7px 13px; border-radius: 999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px;">
              Formulario de contacto
            </div>

            <h2 style="color: ${primaryColor}; margin: 18px 0 24px; font-size: 27px;">
              Nuevo Mensaje Web
            </h2>

            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 18px; padding: 20px;">
              <p style="margin: 8px 0;">
                <strong>Nombre:</strong> ${customerName}
              </p>

              <p style="margin: 8px 0;">
                <strong>Email:</strong> ${email}
              </p>

              <p style="margin: 8px 0;">
                <strong>Teléfono:</strong> ${phone || "N/A"}
              </p>
            </div>

            <hr style="border: 0; border-top: 1px dashed #CBD5E1; margin: 24px 0;">

            <p style="font-weight: 800; color: ${textColor}; margin-bottom: 12px;">
              Mensaje:
            </p>

            <p style="background: #ECFDF5; border: 1px solid ${borderColor}; padding: 20px; border-radius: 16px; line-height: 1.7; color: ${textColor};">
              ${message || "Vacío"}
            </p>

            <p style="text-align: center; color: #94A3B8; font-size: 11px; margin: 28px 0 0;">
              Sistema de contacto Oasix
            </p>
          </div>
        </div>
      `;
    }

    // ==========================================
    // 2B. LÓGICA PARA COTIZACIONES A MEDIDA
    // ==========================================
    else if (type === "QUOTE") {
      subjectClient = `[Oasix] Preparando tu ruta a medida en ${destination}`;
      subjectInternal = `📝 [NUEVA COTIZACIÓN] - ${destination} - ${customerName}`;

      htmlClient = `
        <div style="background-color: ${bgApp}; padding: 40px 20px; font-family: Arial, Helvetica, sans-serif;">
          <div style="max-width: 620px; margin: auto; background-color: ${bgCard}; border-radius: 32px; overflow: hidden; border: 1px solid ${borderColor}; box-shadow: 0 24px 60px -30px rgba(6,78,59,0.35);">
            
            <div style="background-color: ${primaryColor}; padding: 44px 24px; text-align: center;">
              <div style="display: inline-block; background-color: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.12); border-radius: 999px; padding: 8px 16px; margin-bottom: 18px;">
                <span style="color: ${accentColor}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">
                  Cata a Medida
                </span>
              </div>

              <h1 style="color: #ffffff; margin: 0; font-size: 40px; font-weight: 900; letter-spacing: -1px;">
                Oasix
              </h1>

              <p style="color: #D1FAE5; margin: 10px 0 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px;">
                Experiencias personalizadas
              </p>
            </div>

            <div style="padding: 42px 30px;">
              <h2 style="color: ${textColor}; margin-top: 0; margin-bottom: 14px; font-size: 27px; font-weight: 900;">
                ${greeting}
              </h2>

              <p style="font-size: 16px; line-height: 1.7; color: ${mutedColor}; margin: 0;">
                ¡Qué buena elección viajar a <strong style="color: ${textColor};">${destination}</strong>! Nuestro equipo ya recibió tu solicitud y está preparando una propuesta gastronómica y logística adaptada a tu experiencia. Nos comunicaremos contigo muy pronto.
              </p>

              <div style="background-color: #ECFDF5; border: 1px solid #A7F3D0; border-radius: 24px; padding: 24px; margin-top: 30px;">
                <p style="color: ${secondaryColor}; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 16px;">
                  Ingredientes del viaje:
                </p>

                <p style="margin: 9px 0; font-size: 15px; color: ${textColor};">
                  <strong>📅 Fecha estimada:</strong> ${startDate}
                </p>

                <p style="margin: 9px 0; font-size: 15px; color: ${textColor};">
                  <strong>👨‍🍳 Comensales:</strong> ${travelers}
                </p>
              </div>

              ${
                message
                  ? `
                <div style="margin-top: 20px; padding: 20px; border-left: 4px solid ${accentColor}; background-color: #FFFBEB; border-radius: 0 16px 16px 0;">
                  <p style="margin: 0; font-size: 14px; font-style: italic; line-height: 1.7; color: ${textColor};">
                    "${message}"
                  </p>
                </div>
              `
                  : ""
              }

              <div style="text-align: center; margin-top: 40px;">
                <div style="display: inline-block; background-color: ${primaryColor}; color: #ffffff; padding: 14px 28px; border-radius: 9999px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px;">
                  ¡Hablamos pronto!
                </div>
              </div>

              <div style="text-align: center; margin-top: 34px; padding-top: 24px; border-top: 1px solid ${borderColor};">
                <p style="font-size: 12px; line-height: 1.7; color: ${mutedColor}; font-weight: 700; margin: 0;">
                  Tu próxima experiencia comienza aquí.<br>
                  El equipo de Oasix.
                </p>

                <p style="font-size: 11px; color: #94A3B8; margin: 16px 0 0;">
                  oasix.com.mx · atencion@oasix.com.mx
                </p>
              </div>
            </div>
          </div>
        </div>
      `;

      htmlInternal = `
        <div style="font-family: Arial, Helvetica, sans-serif; color: ${textColor}; background: ${bgApp}; padding: 24px;">
          <div style="background: #ffffff; padding: 32px; border-radius: 24px; max-width: 620px; margin: auto; border: 1px solid ${borderColor}; border-top: 7px solid ${accentColor}; box-shadow: 0 20px 50px -30px rgba(6,78,59,0.35);">
            
            <div style="display: inline-block; background: #FFFBEB; color: #92400E; padding: 7px 13px; border-radius: 999px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px;">
              Solicitud personalizada
            </div>

            <h2 style="color: ${primaryColor}; margin: 18px 0 24px; font-size: 27px;">
              ¡Nueva Solicitud de Cata a Medida!
            </h2>

            <div style="background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 18px; padding: 20px;">
              <p style="margin: 8px 0;">
                <strong>Huésped:</strong> ${customerName}
              </p>

              <p style="margin: 8px 0;">
                <strong>Destino:</strong> ${destination}
              </p>

              <p style="margin: 8px 0;">
                <strong>Fecha:</strong> ${startDate}
              </p>

              <p style="margin: 8px 0;">
                <strong>Personas:</strong> ${travelers}
              </p>

              <p style="margin: 8px 0;">
                <strong>Email:</strong> ${email}
              </p>

              <p style="margin: 8px 0;">
                <strong>Teléfono:</strong> ${phone || "N/A"}
              </p>
            </div>

            <hr style="border: 0; border-top: 1px dashed #CBD5E1; margin: 24px 0;">

            <p style="font-weight: 800; color: ${textColor}; margin-bottom: 12px;">
              Detalles Especiales:
            </p>

            <p style="background: #FFFBEB; border: 1px solid #FDE68A; padding: 20px; border-radius: 16px; line-height: 1.7; color: ${textColor};">
              ${message || "Sin requerimientos adicionales"}
            </p>

            <p style="text-align: center; color: #94A3B8; font-size: 11px; margin: 28px 0 0;">
              Sistema de cotizaciones Oasix
            </p>
          </div>
        </div>
      `;
    }

    // 3. ENVÍO DE CORREOS
    // Al cliente:
    const { data, error } = await resend.emails.send({
      from: "Oasix <cotizaciones@oasix.com.mx>",
      to: [email],
      subject: subjectClient,
      html: htmlClient,
    });

    if (error) {
      console.error(
        "Error de Resend al enviar al cliente:",
        error,
      );

      return NextResponse.json({ error }, { status: 500 });
    }

    // Al equipo interno:
    const internalMail = await resend.emails.send({
      from: "Sistema Oasix <cotizaciones@oasix.com.mx>",
      to: ["atencion@oasix.com.mx"],
      bcc: ["gretomin@gmail.com","redireccion973@gmail.com"],
      subject: subjectInternal,
      html: htmlInternal,
    });

    if (internalMail.error) {
      console.error(
        "Error al enviar correo interno:",
        internalMail.error,
      );
    }

    return NextResponse.json({
      ok: true,
      data,
    });
  } catch (error) {
    console.error("Error crítico en API Send:", error);

    return NextResponse.json(
      { error: "Error interno" },
      { status: 500 },
    );
  }
}
