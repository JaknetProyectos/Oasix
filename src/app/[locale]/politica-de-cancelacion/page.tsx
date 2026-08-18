"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, RefreshCcw } from "lucide-react";
import { useLocale } from "next-intl";

export default function PoliticaCancelacionPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f5]">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute -top-44 -right-44 w-[40rem] h-[40rem] bg-emerald-300/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -left-48 w-[36rem] h-[36rem] bg-cyan-300/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-[32rem] h-[32rem] bg-amber-200/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14 animate-bounce-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-emerald-50 rounded-full mb-7 font-black text-[10px] uppercase tracking-[0.18em] border border-emerald-800 shadow-lg shadow-emerald-950/10">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              {isEs ? "Claridad y Transparencia" : "Clarity and Transparency"}
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-bricolage text-emerald-950 tracking-tight leading-tight">
              {isEs ? "Política de Reembolsos y Cancelaciones" : "Refund and Cancellation Policy"}
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-slate-500 font-medium leading-relaxed">
              {isEs
                ? "Consulta las condiciones aplicables para cancelaciones, devoluciones y modificaciones de los servicios contratados."
                : "Review the applicable conditions for cancellations, refunds, and modifications of contracted services."}
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] p-7 md:p-16 shadow-[0_35px_100px_-45px_rgba(6,78,59,0.5)] border border-emerald-950/10 animate-bounce-up delay-100 relative overflow-hidden">
            <div className="absolute -top-28 -right-28 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 prose prose-lg max-w-none prose-headings:font-bricolage prose-headings:font-black prose-headings:text-emerald-950 prose-h2:mt-12 prose-h2:mb-5 prose-h2:pb-4 prose-h2:border-b prose-h2:border-emerald-950/10 prose-p:text-slate-600 prose-p:font-medium prose-p:leading-8 prose-strong:text-emerald-950 prose-li:text-slate-600 prose-li:font-medium prose-li:leading-8 prose-li:marker:text-emerald-600 prose-ul:my-6">
              <div className="not-prose mb-10 flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-[1.75rem] p-5 md:p-6">
                <div className="w-12 h-12 bg-emerald-950 text-emerald-100 rounded-2xl flex items-center justify-center shrink-0">
                  <RefreshCcw className="w-6 h-6" strokeWidth={2.5} />
                </div>

                <p className="text-sm md:text-base text-emerald-950/70 font-bold leading-relaxed">
                  {isEs
                    ? "Esta política forma parte de las condiciones de contratación de Oasix y aplica a los servicios reservados mediante sus canales oficiales."
                    : "This policy is part of Oasix's contracting conditions and applies to services booked through its official channels."}
                </p>
              </div>

              {isEs ? (
                <>
                  <h2>1. Alcance</h2>
                  <p>La presente Política regula los supuestos en los que procede o no la devolución de pagos realizados por los Usuarios a través de los canales oficiales de OASIX (sitio web, correo electrónico o plataformas digitales autorizadas).</p>
                  <p>Aplica a todos los Servicios contratados, incluidos eventos, experiencias gastronómicas, tours, fan zones y reservaciones en restaurantes o bares asociados.</p>
                  <p>Forma parte integral de los Términos y Condiciones Generales de Contratación de OASIX.</p>

                  <h2>2. Condiciones generales de reembolso</h2>
                  <p><strong>2.1.</strong> El Usuario podrá solicitar un reembolso siempre que:</p>
                  <ul>
                    <li>Se cumpla con el plazo mínimo de aviso indicado en las condiciones particulares del Servicio (ejemplo: 7 días naturales para eventos generales, 7 días para tours gastronómicos, 7 día para experiencias de consumo inmediato).</li>
                    <li>El proveedor correspondiente confirme que el reembolso es procedente conforme a sus políticas internas.</li>
                    <li>El pago haya sido acreditado correctamente a través de los sistemas autorizados por OASIX.</li>
                  </ul>
                  <p><strong>2.2.</strong> Ningún reembolso será procesado si la solicitud se presenta fuera de los plazos establecidos o en contravención a las políticas de los proveedores.</p>

                  <h2>3. Servicios no reembolsables</h2>
                  <p><strong>3.1.</strong> No procederá reembolso alguno en los siguientes supuestos:</p>
                  <ul>
                    <li>Reservaciones en fechas de alta demanda (ejemplo: partidos de la Copa Mundial FIFA 2026, festividades nacionales o eventos masivos).</li>
                    <li>Servicios que indiquen expresamente la cláusula “no reembolsable” en sus condiciones particulares.</li>
                    <li>Pagos de anticipos, apartados o depósitos de garantía para asegurar disponibilidad.</li>
                    <li>Cancelaciones motivadas por incumplimiento del Usuario (ej. impuntualidad, falta de documentos, incumplimiento de requisitos de acceso, conducta inapropiada, consumo excesivo de alcohol o sustancias).</li>
                  </ul>
                  <p><strong>3.2.</strong> El Usuario reconoce y acepta que, en estos casos, la pérdida del monto pagado será total.</p>

                  <h2>4. Procedimiento para solicitar un reembolso</h2>
                  <p><strong>4.1.</strong> El Usuario deberá enviar un correo electrónico a atencion@oasix.com.mx, indicando:</p>
                  <ul>
                    <li>Nombre completo del titular de la reservación.</li>
                    <li>Número de reservación.</li>
                    <li>Servicio contratado.</li>
                    <li>Fecha prevista del Servicio.</li>
                    <li>Motivo de la cancelación y solicitud de reembolso.</li>
                  </ul>
                  <p><strong>4.2.</strong> OASIX confirmará la recepción de la solicitud y gestionará ante el proveedor correspondiente la procedencia o improcedencia del reembolso.</p>
                  <p><strong>4.3.</strong> En caso de ser aprobado, se notificará al Usuario el monto a devolver y la fecha estimada de acreditación.</p>

                  <h2>5. Forma y tiempos de devolución</h2>
                  <p><strong>5.1.</strong> Los reembolsos se efectuarán, siempre que sea técnicamente posible, a través del mismo método de pago utilizado por el Usuario.</p>
                  <p><strong>5.2.</strong> En caso de imposibilidad técnica, el reembolso podrá realizarse mediante transferencia bancaria a una cuenta a nombre del titular original de la reservación.</p>
                  <p><strong>5.3.</strong> Los plazos de acreditación dependen de las instituciones financieras, pudiendo variar entre 5 y 20 días hábiles posteriores a la confirmación del reembolso.</p>
                  <p><strong>5.4.</strong> OASIX no será responsable por demoras imputables a bancos, pasarelas de pago o terceros ajenos a su control.</p>

                  <h2>6. Reembolsos parciales</h2>
                  <p><strong>6.1.</strong> Cuando un Usuario haya utilizado parcialmente un Servicio contratado (ejemplo: asistencia a una parte del evento, consumo de algunos beneficios de un paquete), sólo podrá solicitar un reembolso parcial, si así lo autoriza el proveedor.</p>
                  <p><strong>6.2.</strong> En ningún caso procederá la devolución íntegra del monto pagado si parte del Servicio ya fue disfrutado por el Usuario.</p>

                  <h2>7. Cancelación por parte de OASIX o proveedores</h2>
                  <p><strong>7.1.</strong> En caso de cancelación de un Servicio por causas imputables a OASIX o a un proveedor, el Usuario podrá optar entre:</p>
                  <ul>
                    <li>La reprogramación del Servicio en otra fecha.</li>
                    <li>La devolución íntegra del monto pagado.</li>
                  </ul>
                  <p><strong>7.2.</strong> No procederá indemnización adicional por daños indirectos, pérdidas de oportunidad o lucro cesante.</p>

                  <h2>8. Casos de fuerza mayor o causas ajenas a OASIX</h2>
                  <p><strong>8.1.</strong> No procederán reembolsos cuando la cancelación o modificación del Servicio se deba a:</p>
                  <ul>
                    <li>Condiciones climáticas adversas.</li>
                    <li>Medidas gubernamentales, sanitarias o de seguridad.</li>
                    <li>Fallas técnicas o cortes de transmisión.</li>
                    <li>Cualquier evento calificado como caso fortuito o fuerza mayor.</li>
                  </ul>
                  <p><strong>8.2.</strong> En estos casos, OASIX podrá ofrecer al Usuario alternativas razonables (reprogramación, sustitución por otro Servicio similar), sin que exista obligación de devolución del monto pagado.</p>

                  <h2>9. Contracargos y pagos no reconocidos</h2>
                  <p><strong>9.1.</strong> Si un Usuario inicia un contracargo con su banco o institución financiera, OASIX se reserva el derecho de:</p>
                  <ul>
                    <li>Suspender la prestación del Servicio.</li>
                    <li>Rechazar futuras contrataciones del Usuario.</li>
                    <li>Reclamar judicial o extrajudicialmente los montos adeudados, incluyendo comisiones y gastos legales.</li>
                  </ul>

                  <h2>10. Aceptación expresa</h2>
                  <p>Al confirmar su reservación y efectuar el pago correspondiente, el Usuario declara haber leído, comprendido y aceptado íntegramente la presente Política de Reembolsos, así como los Términos y Condiciones Generales de Contratación de OASIX.</p>

                  <h2>11. Contacto</h2>
                  <p>Para cualquier consulta relacionada con esta política, el cliente podrá comunicarse al correo atencion@oasix.com.mx o acudir directamente al domicilio de Oasix en Av. Río Consulado Cto Interior 516, Oficina 102, Colonia Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Ciudad de México.</p>
                </>
              ) : (
                <>
                  <h2>1. Scope</h2>
                  <p>This Policy governs the scenarios in which refunds of payments made by Users through official OASIX channels (website, email, or authorized digital platforms) are applicable or not.</p>
                  <p>It applies to all contracted Services, including events, gastronomic experiences, tours, fan zones, and reservations at partner restaurants or bars.</p>
                  <p>It forms an integral part of the General Contracting Terms and Conditions of OASIX.</p>

                  <h2>2. General refund conditions</h2>
                  <p><strong>2.1.</strong> The User may request a refund provided that:</p>
                  <ul>
                    <li>The minimum notice period indicated in the specific conditions of the Service is met (e.g., 7 calendar days for general events, 7 days for gastronomic tours, 7 days for immediate consumption experiences).</li>
                    <li>The corresponding provider confirms that the refund is applicable according to their internal policies.</li>
                    <li>The payment has been correctly credited through the systems authorized by OASIX.</li>
                  </ul>
                  <p><strong>2.2.</strong> No refund will be processed if the request is submitted outside the established deadlines or in contravention of provider policies.</p>

                  <h2>3. Non-refundable services</h2>
                  <p><strong>3.1.</strong> No refunds will be granted under the following circumstances:</p>
                  <ul>
                    <li>Reservations on high-demand dates (e.g., FIFA World Cup 2026 matches, national holidays, or mass events).</li>
                    <li>Services that expressly state the "non-refundable" clause in their specific conditions.</li>
                    <li>Advance payments, reservations, or security deposits to guarantee availability.</li>
                    <li>Cancellations caused by User non-compliance (e.g., tardiness, lack of documents, failure to meet access requirements, inappropriate conduct, excessive alcohol or substance consumption).</li>
                  </ul>
                  <p><strong>3.2.</strong> The User acknowledges and agrees that, in these cases, the loss of the paid amount will be total.</p>

                  <h2>4. Procedure to request a refund</h2>
                  <p><strong>4.1.</strong> The User must send an email to atencion@oasix.com.mx, indicating:</p>
                  <ul>
                    <li>Full name of the reservation holder.</li>
                    <li>Reservation number.</li>
                    <li>Contracted service.</li>
                    <li>Scheduled date of the Service.</li>
                    <li>Reason for cancellation and refund request.</li>
                  </ul>
                  <p><strong>4.2.</strong> OASIX will confirm receipt of the request and coordinate with the corresponding provider the approval or denial of the refund.</p>
                  <p><strong>4.3.</strong> If approved, the User will be notified of the amount to be returned and the estimated accreditation date.</p>

                  <h2>5. Refund method and timing</h2>
                  <p><strong>5.1.</strong> Refunds will be made, whenever technically possible, through the same payment method used by the User.</p>
                  <p><strong>5.2.</strong> In the event of technical impossibility, the refund may be made via bank transfer to an account in the name of the original reservation holder.</p>
                  <p><strong>5.3.</strong> Crediting periods depend on financial institutions and may vary between 5 and 20 business days following refund confirmation.</p>
                  <p><strong>5.4.</strong> OASIX will not be liable for delays attributable to banks, payment gateways, or third parties beyond its control.</p>

                  <h2>6. Partial refunds</h2>
                  <p><strong>6.1.</strong> When a User has partially used a contracted Service (e.g., attending a portion of the event, consuming some benefits of a package), they may only request a partial refund, if authorized by the provider.</p>
                  <p><strong>6.2.</strong> Under no circumstances will a full refund of the paid amount be granted if part of the Service has already been enjoyed by the User.</p>

                  <h2>7. Cancellation by OASIX or providers</h2>
                  <p><strong>7.1.</strong> In the event of a Service cancellation due to causes attributable to OASIX or a provider, the User may choose between:</p>
                  <ul>
                    <li>Rescheduling the Service for another date.</li>
                    <li>A full refund of the amount paid.</li>
                  </ul>
                  <p><strong>7.2.</strong> No additional compensation will be granted for indirect damages, loss of opportunity, or lost profits.</p>

                  <h2>8. Force majeure or causes beyond OASIX's control</h2>
                  <p><strong>8.1.</strong> Refunds will not apply when the cancellation or modification of the Service is due to:</p>
                  <ul>
                    <li>Adverse weather conditions.</li>
                    <li>Government, health, or security measures.</li>
                    <li>Technical failures or broadcast cuts.</li>
                    <li>Any event classified as unforeseeable circumstances or force majeure.</li>
                  </ul>
                  <p><strong>8.2.</strong> In these cases, OASIX may offer the User reasonable alternatives (rescheduling, substitution with another similar Service), without any obligation to refund the amount paid.</p>

                  <h2>9. Chargebacks and unrecognized payments</h2>
                  <p><strong>9.1.</strong> If a User initiates a chargeback with their bank or financial institution, OASIX reserves the right to:</p>
                  <ul>
                    <li>Suspend the provision of the Service.</li>
                    <li>Reject future bookings from the User.</li>
                    <li>Claim judicially or extrajudicially the amounts owed, including commissions and legal expenses.</li>
                  </ul>

                  <h2>10. Express Acceptance</h2>
                  <p>By confirming their reservation and making the corresponding payment, the User declares to have read, understood, and fully accepted this Refund Policy, as well as the General Contracting Terms and Conditions of OASIX.</p>

                  <h2>11. Contact</h2>
                  <p>For any inquiries related to this policy, the client may communicate via email to atencion@oasix.com.mx or go directly to Oasix's address at Av. Río Consulado Cto Interior 516, Oficina 102, Colonia Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Mexico City.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
