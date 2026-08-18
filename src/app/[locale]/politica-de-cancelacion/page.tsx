"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLocale } from "next-intl";

export default function PoliticaDeReembolsosPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-[#f2efe8] text-[#182b3a]">
      <Header />

      <main className="relative flex-1 pb-24 pt-32 md:pb-32 md:pt-40">
        {/* Fondo editorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-[#182b3a]/10" />
          <div className="absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#b96045]/15" />
          <div className="absolute -right-10 top-40 h-52 w-52 rounded-full border border-[#182b3a]/10" />
          <div className="absolute left-0 top-[60rem] h-px w-36 bg-[#b96045]/30 md:w-72" />
          <div className="absolute right-0 top-[118rem] h-px w-44 bg-[#182b3a]/15 md:w-80" />
          <span className="absolute bottom-10 left-5 hidden font-serif text-[15rem] italic leading-none text-[#182b3a]/[0.025] lg:block">
            O
          </span>
        </div>

        <div className="container relative mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10 animate-fade-in-up">
          {/* Encabezado */}
          <header className="mb-20 grid border-y border-[#182b3a]/15 py-10 md:mb-28 md:grid-cols-[240px_minmax(0,1fr)] md:py-14 lg:grid-cols-[300px_minmax(0,1fr)]">
            <div className="mb-10 flex flex-col justify-between border-[#182b3a]/15 md:mb-0 md:min-h-[290px] md:border-r md:pr-10">
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.34em] text-[#b96045]">
                  {isEs ? "Documento Legal" : "Legal Document"}
                </span>
                <span className="mt-6 block font-serif text-6xl italic leading-none text-[#182b3a]/15">
                  10
                </span>
              </div>

              <div className="mt-12 hidden md:block">
                <span className="block text-[9px] font-semibold uppercase tracking-[0.26em] text-[#182b3a]/40">
                  Oasix
                </span>
                <span className="mt-2 block max-w-[180px] text-xs font-light leading-relaxed text-[#182b3a]/60">
                  {isEs ? "Condiciones aplicables a cancelaciones y devoluciones." : "Conditions applicable to cancellations and refunds."}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-end md:pl-10 lg:pl-16">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                {isEs ? "Reservaciones y servicios" : "Reservations and services"}
              </p>
              <h1 className="max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-[#182b3a] sm:text-6xl md:text-7xl lg:text-[6rem]">
                {isEs ? "Política de Reembolsos y Cancelaciones" : "Refund and Cancellation Policy"}
              </h1>
              <div className="mt-8 flex items-center gap-5 border-t border-[#182b3a]/15 pt-7">
                <span className="h-px w-16 bg-[#b96045]" />
                <span className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/45">
                  Oasix · México
                </span>
              </div>
            </div>
          </header>

          <div className="grid gap-16 lg:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
            {/* Información lateral */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 border-t border-[#182b3a]/20 pt-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#b96045]">
                  {isEs ? "Referencia" : "Reference"}
                </p>
                <p className="mt-6 max-w-[220px] font-serif text-2xl leading-snug text-[#182b3a]">
                  {isEs ? "Condiciones claras para cada reservación." : "Clear conditions for every reservation."}
                </p>

                <div className="mt-10 space-y-7 border-l border-[#182b3a]/15 pl-5">
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      {isEs ? "Sitio" : "Site"}
                    </span>
                    <span className="mt-2 block text-sm font-light text-[#182b3a]/65">
                      oasix.com.mx
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      {isEs ? "Contacto" : "Contact"}
                    </span>
                    <span className="mt-2 block break-all text-sm font-light text-[#182b3a]/65">
                      atencion@oasix.com.mx
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#182b3a]/40">
                      {isEs ? "Secciones" : "Sections"}
                    </span>
                    <span className="mt-2 block font-serif text-3xl italic text-[#182b3a]/30">
                      01 — 11
                    </span>
                  </div>
                </div>

                <div className="mt-12 h-px w-full bg-[#182b3a]/15" />
                <p className="mt-6 text-xs font-light leading-relaxed text-[#182b3a]/50">
                  {isEs 
                    ? "Recomendamos revisar las condiciones particulares de cada servicio antes de confirmar una reservación." 
                    : "We recommend reviewing the specific conditions of each service before confirming a reservation."}
                </p>
              </div>
            </aside>

            {/* Documento */}
            <article className="min-w-0 border-t border-[#182b3a]/20">
              <div className="divide-y divide-[#182b3a]/15 text-sm font-light leading-[1.85] text-[#42515b] md:text-[15px] [&_strong]:font-semibold [&_strong]:text-[#182b3a]">
                
                {/* 1 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">01</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "1. Alcance" : "1. Scope"}
                    </h3>
                    {isEs ? (
                      <div className="space-y-6">
                        <p>La presente Política regula los supuestos en los que procede o no la devolución de pagos realizados por los Usuarios a través de los canales oficiales de OASIX (sitio web, correo electrónico o plataformas digitales autorizadas).</p>
                        <p>Aplica a todos los Servicios contratados, incluidos eventos, experiencias gastronómicas, tours, fan zones y reservaciones en restaurantes o bares asociados.</p>
                        <p>Forma parte integral de los Términos y Condiciones Generales de Contratación de OASIX.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <p>This Policy governs the scenarios in which refunds of payments made by Users through official OASIX channels (website, email, or authorized digital platforms) are applicable or not.</p>
                        <p>It applies to all contracted Services, including events, gastronomic experiences, tours, fan zones, and reservations at partner restaurants or bars.</p>
                        <p>It forms an integral part of the General Contracting Terms and Conditions of OASIX.</p>
                      </div>
                    )}
                  </div>
                </section>

                {/* 2 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">02</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "2. Condiciones generales de reembolso" : "2. General refund conditions"}
                    </h3>
                    <p className="mb-6">
                      <strong>2.1.</strong> {isEs ? "El Usuario podrá solicitar un reembolso siempre que:" : "The User may request a refund provided that:"}
                    </p>
                    {isEs ? (
                      <ul className="space-y-4 border-l border-[#b96045]/50 pl-6">
                        <li>Se cumpla con el plazo mínimo de aviso indicado en las condiciones particulares del Servicio (ejemplo: 7 días naturales para eventos generales, 7 días para tours gastronómicos, 7 día para experiencias de consumo inmediato).</li>
                        <li>El proveedor correspondiente confirme que el reembolso es procedente conforme a sus políticas internas.</li>
                        <li>El pago haya sido acreditado correctamente a través de los sistemas autorizados por OASIX.</li>
                      </ul>
                    ) : (
                      <ul className="space-y-4 border-l border-[#b96045]/50 pl-6">
                        <li>The minimum notice period indicated in the specific conditions of the Service is met (e.g., 7 calendar days for general events, 7 days for gastronomic tours, 7 days for immediate consumption experiences).</li>
                        <li>The corresponding provider confirms that the refund is applicable according to their internal policies.</li>
                        <li>The payment has been correctly credited through the systems authorized by OASIX.</li>
                      </ul>
                    )}
                    <p className="mt-8">
                      <strong>2.2.</strong> {isEs 
                        ? "Ningún reembolso será procesado si la solicitud se presenta fuera de los plazos establecidos o en contravención a las políticas de los proveedores." 
                        : "No refund will be processed if the request is submitted outside the established deadlines or in contravention of provider policies."}
                    </p>
                  </div>
                </section>

                {/* 3 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">03</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "3. Servicios no reembolsables" : "3. Non-refundable services"}
                    </h3>
                    <p className="mb-6">
                      <strong>3.1.</strong> {isEs ? "No procederá reembolso alguno en los siguientes supuestos:" : "No refunds will be granted under the following circumstances:"}
                    </p>
                    {isEs ? (
                      <ul className="grid gap-px border border-[#182b3a]/15 bg-[#182b3a]/15 md:grid-cols-2">
                        <li className="bg-[#f2efe8] p-6">Reservaciones en fechas de alta demanda (ejemplo: partidos de la Copa Mundial FIFA 2026, festividades nacionales o eventos masivos).</li>
                        <li className="bg-[#f2efe8] p-6">Servicios que indiquen expresamente la cláusula “no reembolsable” en sus condiciones particulares.</li>
                        <li className="bg-[#f2efe8] p-6">Pagos de anticipos, apartados o depósitos de garantía para asegurar disponibilidad.</li>
                        <li className="bg-[#f2efe8] p-6">Cancelaciones motivadas por incumplimiento del Usuario (ej. impuntualidad, falta de documentos, incumplimiento de requisitos de acceso, conducta inapropiada, consumo excesivo de alcohol o sustancias).</li>
                      </ul>
                    ) : (
                      <ul className="grid gap-px border border-[#182b3a]/15 bg-[#182b3a]/15 md:grid-cols-2">
                        <li className="bg-[#f2efe8] p-6">Reservations on high-demand dates (e.g., FIFA World Cup 2026 matches, national holidays, or mass events).</li>
                        <li className="bg-[#f2efe8] p-6">Services that expressly state the "non-refundable" clause in their specific conditions.</li>
                        <li className="bg-[#f2efe8] p-6">Advance payments, reservations, or security deposits to guarantee availability.</li>
                        <li className="bg-[#f2efe8] p-6">Cancellations caused by User non-compliance (e.g., tardiness, lack of documents, failure to meet access requirements, inappropriate conduct, excessive alcohol or substance consumption).</li>
                      </ul>
                    )}
                    <p className="mt-8 border-y border-[#b96045]/30 py-6 font-serif text-xl leading-relaxed text-[#182b3a]">
                      <strong>3.2.</strong> {isEs 
                        ? "El Usuario reconoce y acepta que, en estos casos, la pérdida del monto pagado será total." 
                        : "The User acknowledges and agrees that, in these cases, the loss of the paid amount will be total."}
                    </p>
                  </div>
                </section>

                {/* 4 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">04</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "4. Procedimiento para solicitar un reembolso" : "4. Procedure to request a refund"}
                    </h3>
                    <p className="mb-6">
                      <strong>4.1.</strong> {isEs 
                        ? "El Usuario deberá enviar un correo electrónico a atencion@oasix.com.mx, indicando:" 
                        : "The User must send an email to atencion@oasix.com.mx, indicating:"}
                    </p>
                    {isEs ? (
                      <ul className="grid border-t border-[#182b3a]/15 sm:grid-cols-2">
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pr-6">Nombre completo del titular de la reservación.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pl-6">Número de reservación.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pr-6">Servicio contratado.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pl-6">Fecha prevista del Servicio.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:col-span-2">Motivo de la cancelación y solicitud de reembolso.</li>
                      </ul>
                    ) : (
                      <ul className="grid border-t border-[#182b3a]/15 sm:grid-cols-2">
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pr-6">Full name of the reservation holder.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pl-6">Reservation number.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pr-6">Contracted service.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:pl-6">Scheduled date of the Service.</li>
                        <li className="border-b border-[#182b3a]/15 py-4 sm:col-span-2">Reason for cancellation and refund request.</li>
                      </ul>
                    )}
                    <div className="mt-8 space-y-6">
                      <p>
                        <strong>4.2.</strong> {isEs 
                          ? "OASIX confirmará la recepción de la solicitud y gestionará ante el proveedor correspondiente la procedencia o improcedencia del reembolso." 
                          : "OASIX will confirm receipt of the request and coordinate with the corresponding provider the approval or denial of the refund."}
                      </p>
                      <p>
                        <strong>4.3.</strong> {isEs 
                          ? "En caso de ser aprobado, se notificará al Usuario el monto a devolver y la fecha estimada de acreditación." 
                          : "If approved, the User will be notified of the amount to be returned and the estimated accreditation date."}
                      </p>
                    </div>
                  </div>
                </section>

                {/* 5 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">05</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "5. Forma y tiempos de devolución" : "5. Refund method and timing"}
                    </h3>
                    {isEs ? (
                      <div className="space-y-6">
                        <p><strong>5.1.</strong> Los reembolsos se efectuarán, siempre que sea técnicamente posible, a través del mismo método de pago utilizado por el Usuario.</p>
                        <p><strong>5.2.</strong> En caso de imposibilidad técnica, el reembolso podrá realizarse mediante transferencia bancaria a una cuenta a nombre del titular original de la reservación.</p>
                        <p><strong>5.3.</strong> Los plazos de acreditación dependen de las instituciones financieras, pudiendo variar entre 5 y 20 días hábiles posteriores a la confirmación del reembolso.</p>
                        <p><strong>5.4.</strong> OASIX no será responsable por demoras imputables a bancos, pasarelas de pago o terceros ajenos a su control.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <p><strong>5.1.</strong> Refunds will be made, whenever technically possible, through the same payment method used by the User.</p>
                        <p><strong>5.2.</strong> In the event of technical impossibility, the refund may be made via bank transfer to an account in the name of the original reservation holder.</p>
                        <p><strong>5.3.</strong> Crediting periods depend on financial institutions and may vary between 5 and 20 business days following refund confirmation.</p>
                        <p><strong>5.4.</strong> OASIX will not be liable for delays attributable to banks, payment gateways, or third parties beyond its control.</p>
                      </div>
                    )}
                  </div>
                </section>

                {/* 6 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">06</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "6. Reembolsos parciales" : "6. Partial refunds"}
                    </h3>
                    {isEs ? (
                      <div className="space-y-6">
                        <p><strong>6.1.</strong> Cuando un Usuario haya utilizado parcialmente un Servicio contratado (ejemplo: asistencia a una parte del evento, consumo de algunos beneficios de un paquete), sólo podrá solicitar un reembolso parcial, si así lo autoriza el proveedor.</p>
                        <p><strong>6.2.</strong> En ningún caso procederá la devolución íntegra del monto pagado si parte del Servicio ya fue disfrutado por el Usuario.</p>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <p><strong>6.1.</strong> When a User has partially used a contracted Service (e.g., attending a portion of the event, consuming some benefits of a package), they may only request a partial refund, if authorized by the provider.</p>
                        <p><strong>6.2.</strong> Under no circumstances will a full refund of the paid amount be granted if part of the Service has already been enjoyed by the User.</p>
                      </div>
                    )}
                  </div>
                </section>

                {/* 7 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">07</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "7. Cancelación por parte de OASIX o proveedores" : "7. Cancellation by OASIX or providers"}
                    </h3>
                    <p className="mb-6">
                      <strong>7.1.</strong> {isEs 
                        ? "En caso de cancelación de un Servicio por causas imputables a OASIX o a un proveedor, el Usuario podrá optar entre:" 
                        : "In the event of a Service cancellation due to causes attributable to OASIX or a provider, the User may choose between:"}
                    </p>
                    <div className="grid gap-px border border-[#182b3a]/15 bg-[#182b3a]/15 sm:grid-cols-2">
                      <div className="bg-[#f2efe8] p-6">
                        <span className="mb-4 block font-serif text-3xl italic text-[#b96045]">A</span>
                        {isEs ? "La reprogramación del Servicio en otra fecha." : "Rescheduling the Service for another date."}
                      </div>
                      <div className="bg-[#f2efe8] p-6">
                        <span className="mb-4 block font-serif text-3xl italic text-[#b96045]">B</span>
                        {isEs ? "La devolución íntegra del monto pagado." : "A full refund of the amount paid."}
                      </div>
                    </div>
                    <p className="mt-8">
                      <strong>7.2.</strong> {isEs 
                        ? "No procederá indemnización adicional por daños indirectos, pérdidas de oportunidad o lucro cesante." 
                        : "No additional compensation will be granted for indirect damages, loss of opportunity, or lost profits."}
                    </p>
                  </div>
                </section>

                {/* 8 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">08</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "8. Casos de fuerza mayor o causas ajenas a OASIX" : "8. Force majeure or causes beyond OASIX's control"}
                    </h3>
                    <p className="mb-6">
                      <strong>8.1.</strong> {isEs 
                        ? "No procederán reembolsos cuando la cancelación o modificación del Servicio se deba a:" 
                        : "Refunds will not apply when the cancellation or modification of the Service is due to:"}
                    </p>
                    {isEs ? (
                      <ul className="border-t border-[#182b3a]/15">
                        <li className="border-b border-[#182b3a]/15 py-4">Condiciones climáticas adversas.</li>
                        <li className="border-b border-[#182b3a]/15 py-4">Medidas gubernamentales, sanitarias o de seguridad.</li>
                        <li className="border-b border-[#182b3a]/15 py-4">Fallas técnicas o cortes de transmisión.</li>
                        <li className="border-b border-[#182b3a]/15 py-4">Cualquier evento calificado como caso fortuito o fuerza mayor.</li>
                      </ul>
                    ) : (
                      <ul className="border-t border-[#182b3a]/15">
                        <li className="border-b border-[#182b3a]/15 py-4">Adverse weather conditions.</li>
                        <li className="border-b border-[#182b3a]/15 py-4">Government, health, or security measures.</li>
                        <li className="border-b border-[#182b3a]/15 py-4">Technical failures or broadcast cuts.</li>
                        <li className="border-b border-[#182b3a]/15 py-4">Any event classified as unforeseeable circumstances or force majeure.</li>
                      </ul>
                    )}
                    <p className="mt-8">
                      <strong>8.2.</strong> {isEs 
                        ? "En estos casos, OASIX podrá ofrecer al Usuario alternativas razonables (reprogramación, sustitución por otro Servicio similar), sin que exista obligación de devolución del monto pagado." 
                        : "In these cases, OASIX may offer the User reasonable alternatives (rescheduling, substitution with another similar Service), without any obligation to refund the amount paid."}
                    </p>
                  </div>
                </section>

                {/* 9 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">09</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "9. Contracargos y pagos no reconocidos" : "9. Chargebacks and unrecognized payments"}
                    </h3>
                    <p className="mb-6">
                      <strong>9.1.</strong> {isEs 
                        ? "Si un Usuario inicia un contracargo con su banco o institución financiera, OASIX se reserva el derecho de:" 
                        : "If a User initiates a chargeback with their bank or financial institution, OASIX reserves the right to:"}
                    </p>
                    {isEs ? (
                      <ul className="space-y-4 border-l border-[#b96045]/50 pl-6">
                        <li>Suspender la prestación del Servicio.</li>
                        <li>Rechazar futuras contrataciones del Usuario.</li>
                        <li>Reclamar judicial o extrajudicialmente los montos adeudados, incluyendo comisiones y gastos legales.</li>
                      </ul>
                    ) : (
                      <ul className="space-y-4 border-l border-[#b96045]/50 pl-6">
                        <li>Suspend the provision of the Service.</li>
                        <li>Reject future bookings from the User.</li>
                        <li>Claim judicially or extrajudicially the amounts owed, including commissions and legal expenses.</li>
                      </ul>
                    )}
                  </div>
                </section>

                {/* 10 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">10</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "10. Aceptación expresa" : "10. Express Acceptance"}
                    </h3>
                    <p className="border-y border-[#b96045]/30 py-7 font-serif text-xl leading-relaxed text-[#182b3a]">
                      {isEs 
                        ? "Al confirmar su reservación y efectuar el pago correspondiente, el Usuario declara haber leído, comprendido y aceptado íntegramente la presente Política de Reembolsos, así como los Términos y Condiciones Generales de Contratación de OASIX." 
                        : "By confirming their reservation and making the corresponding payment, the User declares to have read, understood, and fully accepted this Refund Policy, as well as the General Contracting Terms and Conditions of OASIX."}
                    </p>
                  </div>
                </section>

                {/* 11 */}
                <section className="grid gap-8 py-12 md:grid-cols-[80px_minmax(0,1fr)] md:py-16">
                  <div>
                    <span className="font-serif text-5xl italic leading-none text-[#b96045]">11</span>
                  </div>
                  <div>
                    <h3 className="mb-8 font-serif text-3xl leading-tight tracking-[-0.025em] text-[#182b3a] md:text-4xl">
                      {isEs ? "11. Contacto" : "11. Contact"}
                    </h3>
                    <p>
                      {isEs 
                        ? "Para cualquier consulta relacionada con esta política, el cliente podrá comunicarse al correo atencion@oasix.com.mx o acudir directamente al domicilio de OASIX en Av. Río Consulado Cto Interior 516, Oficina 102, Colonia Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Ciudad de México." 
                        : "For any inquiries related to this policy, the client may communicate via email to atencion@oasix.com.mx or go directly to OASIX's address at Av. Río Consulado Cto Interior 516, Oficina 102, Colonia Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Mexico City."}
                    </p>

                    <div className="mt-12 grid border-y border-[#182b3a]/20 py-8 sm:grid-cols-2">
                      <div className="pb-7 sm:border-r sm:border-[#182b3a]/15 sm:pb-0 sm:pr-8">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#b96045]">
                          Oasix
                        </span>
                        <p className="mt-3 font-serif text-2xl text-[#182b3a]">
                          {isEs ? "Curaduría de experiencias personalizadas." : "Curation of personalized experiences."}
                        </p>
                      </div>

                      <div className="border-t border-[#182b3a]/15 pt-7 sm:border-t-0 sm:pl-8 sm:pt-0">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#182b3a]/45">
                          {isEs ? "Contacto" : "Contact"}
                        </span>
                        <p className="mt-3 break-all text-sm text-[#182b3a]/65">
                          atencion@oasix.com.mx
                        </p>
                        <p className="mt-1 text-sm text-[#182b3a]/65">
                          oasix.com.mx
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
