"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";
import { useLocale } from "next-intl";

export default function AvisoPrivacidadPage() {
  const locale = useLocale();
  const isEs = locale === "es";

  return (
    <div className="min-h-screen flex flex-col bg-[#f5faf7]">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] bg-emerald-300/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 -left-40 w-[30rem] h-[30rem] bg-cyan-300/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-200/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <div className="text-center mb-14 animate-bounce-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-950 text-emerald-50 rounded-full mb-7 font-bold text-xs uppercase tracking-[0.18em] border border-emerald-800 shadow-lg shadow-emerald-950/10">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              {isEs ? "Protegemos tu información" : "We protect your information"}
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-bricolage text-emerald-950 tracking-tight">
              {isEs ? "Aviso de Privacidad" : "Privacy Notice"}
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-emerald-900/65 font-medium leading-relaxed">
              {isEs
                ? "Conoce cómo recopilamos, utilizamos y protegemos la información personal que compartes con Oasix."
                : "Learn how we collect, use, and protect the personal information you share with Oasix."}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-7 md:p-16 shadow-[0_30px_90px_-40px_rgba(6,78,59,0.35)] border border-emerald-950/10 animate-bounce-up delay-100 prose prose-lg max-w-none prose-headings:font-bricolage prose-headings:font-black prose-headings:text-emerald-950 prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-emerald-950/10 prose-h2:pb-4 prose-p:text-slate-600 prose-p:font-medium prose-p:leading-8 prose-strong:text-emerald-950 prose-li:text-slate-600 prose-li:font-medium prose-li:leading-8 prose-ul:my-6 prose-li:marker:text-emerald-500">
            {isEs ? (
              <>
                <h2>A. Responsable de los datos personales</h2>
                <p>
                  <strong>A.1. Identidad del responsable.</strong> El tratamiento de los
                  datos personales recabados a través de oasix.com.mx, así como por otros
                  medios electrónicos o físicos, corresponde a GREATDEN S.A. DE C.V. (en
                  adelante, “OASIX” o el “Responsable”).
                </p>
                <p>
                  <strong>A.2. Domicilio.</strong> Av. Río Consulado Cto Interior 516,
                  Oficina 102, Col. Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Ciudad de
                  México.
                </p>
                <p>
                  <strong>A.3. Medios de contacto.</strong> Para privacidad y datos
                  personales: atencion@oasix.com.mx.
                </p>

                <h2>B. Titulares de los datos</h2>
                <p>
                  <strong>B.1. Alcance subjetivo.</strong> Aplica a toda persona física
                  cuyos datos sean tratados por OASIX.
                </p>
                <p>
                  <strong>B.2. Colectivos incluidos (enunciativo).</strong> Clientes,
                  prospectos, visitantes del sitio, aliados comerciales (contactos de
                  empresas), proveedores y sus representantes, candidatos a empleo y
                  asistentes a eventos/experiencias.
                </p>
                <p>
                  <strong>B.3. Obtención.</strong> Cualquier persona que proporcione datos
                  mediante formularios web, correo, mensajería, llamadas, contratos,
                  tarjetas, QR, check-in en eventos o comunicación directa se considera
                  Titular.
                </p>

                <h2>C. Categorías de datos que podremos recabar</h2>
                <ul>
                  <li>
                    <strong>C.1. Identificación:</strong> nombre completo, edad/fecha de
                    nacimiento, nacionalidad, género, CURP/RFC (si procede), firma
                    autógrafa/electrónica.
                  </li>
                  <li>
                    <strong>C.2. Contacto:</strong> domicilio, correos, teléfonos (incl.
                    WhatsApp laboral/personal).
                  </li>
                  <li>
                    <strong>C.3. Fiscales/Facturación:</strong> razón social, RFC,
                    domicilio fiscal, CFDI/uso del CFDI.
                  </li>
                  <li>
                    <strong>C.4. Preferencias y servicio:</strong> idioma, número de
                    acompañantes, restricciones alimenticias, accesibilidad, horarios
                    preferidos, comentarios logísticos.
                  </li>
                  <li>
                    <strong>C.5. Relación proveedor/aliado:</strong> datos de contacto de
                    representantes, poderes/identificación para firma (cuando resulte
                    necesario).
                  </li>
                  <li>
                    <strong>C.6. Candidatos:</strong> CV, historial laboral/formativo,
                    referencias, expectativa económica, disponibilidad.
                  </li>
                  <li>
                    <strong>C.7. Imagen y voz:</strong> fotografías, audio y video
                    captados en eventos y experiencias (ver finalidad secundaria).
                  </li>
                  <li>
                    <strong>C.8. Datos sensibles (casos excepcionales):</strong> alergias,
                    condiciones médicas relevantes o movilidad cuando sean indispensables
                    para seguridad/adecuación del servicio. Se tratarán con
                    consentimiento expreso y medidas reforzadas.
                  </li>
                </ul>
                <p>
                  No solicitamos datos de convicciones religiosas, ideología, orientación
                  sexual ni información financiera completa de tarjetas.
                </p>

                <h2>D. Finalidades del tratamiento</h2>
                <p>
                  <strong>D.1. Finalidades primarias (indispensables para la relación):</strong>
                </p>
                <ul>
                  <li>Gestionar solicitudes y reservaciones (altas, cambios, confirmaciones).</li>
                  <li>
                    Contratación y operación de servicios (experiencias, tours, fan zones,
                    reservaciones en restaurantes/bares, logística).
                  </li>
                  <li>
                    Cobranza y pagos vía pasarelas seguras; facturación y comprobación
                    contable.
                  </li>
                  <li>
                    Atención al cliente (incidencias, reprogramaciones, cancelaciones y
                    reembolsos conforme a políticas).
                  </li>
                  <li>
                    Cumplimientos legales (fiscales, comerciales, seguridad/sanidad,
                    respuesta a autoridades).
                  </li>
                  <li>
                    Gestión de proveedores/aliados (alta, verificación, administración
                    contractual).
                  </li>
                  <li>Procesos de selección (para candidatos).</li>
                </ul>
                <p>
                  <strong>D.2. Finalidades secundarias (opcionales):</strong>
                </p>
                <ul>
                  <li>
                    Comunicaciones comerciales (promociones, newsletters, encuestas,
                    invitaciones).
                  </li>
                  <li>
                    Análisis y métricas de uso del sitio, preferencias y tendencias para
                    mejorar servicios.
                  </li>
                  <li>
                    Uso de imagen/voz captada en eventos para fines promocionales de
                    OASIX (sitio, redes, materiales).
                  </li>
                  <li>
                    Perfilamiento básico (p. ej., segmentos por destino preferido o franja
                    horaria) sin decisiones automatizadas que produzcan efectos legales.
                  </li>
                </ul>
                <p>
                  Puedes optar por no recibir comunicaciones promocionales o negar las
                  finalidades secundarias escribiendo a atencion@oasix.com.mx. La negativa
                  no afecta la prestación de los servicios primarios.
                </p>

                <h2>E. Base de licitud</h2>
                <p>
                  Tratamos datos conforme a la LFPDPPP bajo: (i) consentimiento; (ii)
                  ejecución de contrato/relación jurídica; (iii) cumplimiento legal; (iv)
                  interés legítimo (p. ej. seguridad del sitio, métricas de mejora,
                  prevención de fraude), sin menoscabar tus derechos. Los datos sensibles se
                  tratan únicamente con consentimiento expreso y cuando sean estrictamente
                  necesarios.
                </p>

                <h2>F. Transferencias y destinatarios</h2>
                <p>
                  <strong>F.1. Nacionales/internacionales (cuando apliquen):</strong>
                </p>
                <ul>
                  <li>
                    Proveedores de servicios necesarios para operar (pasarelas de pago,
                    hosting, CRM, email, mensajería, verificación de identidad, venues,
                    restaurantes/bares, guías, transportistas, fotógrafos, productoras).
                  </li>
                  <li>
                    Aliados/comerciales para co-ejecución del servicio contratado o
                    administración.
                  </li>
                  <li>
                    Autoridades administrativas o judiciales, cuando exista requerimiento u
                    obligación.
                  </li>
                  <li>
                    Auditores/asesores (legales, contables, fiscales) bajo deber de
                    confidencialidad.
                  </li>
                </ul>
                <p>
                  <strong>F.2. Encargados.</strong> Algunos terceros actúan como encargados
                  (procesan por cuenta del Responsable) bajo contratos con cláusulas de
                  confidencialidad y seguridad.
                </p>
                <p>
                  <strong>F.3. No comercialización.</strong> No vendemos tus datos. Fuera
                  de estos supuestos, cualquier transferencia requerirá tu consentimiento
                  expreso.
                </p>

                <h2>G. Medidas de seguridad</h2>
                <ul>
                  <li>
                    <strong>G.1.</strong> Controles administrativos, técnicos y físicos
                    proporcionales al riesgo: control de accesos, principio de mínima
                    necesidad, registros, entrenamiento, acuerdos de confidencialidad.
                  </li>
                  <li>
                    <strong>G.2. Seguridad tecnológica:</strong> cifrado TLS/SSL,
                    segmentación de redes, hash de contraseñas, registros de acceso,
                    pasarelas certificadas (p. ej., PCI DSS), monitoreo antifraude.
                  </li>
                  <li>
                    <strong>G.3. Gestión de incidentes:</strong> procedimiento interno de
                    respuesta a brechas; notificación a titulares y autoridades cuando
                    legalmente proceda.
                  </li>
                  <li>
                    <strong>G.4.</strong> Aun con medidas reforzadas, ningún sistema es
                    invulnerable; se limita la responsabilidad conforme a ley y T&C.
                  </li>
                </ul>

                <h2>H. Conservación (retención) de datos</h2>
                <p>
                  <strong>H.1.</strong> Conservamos datos solo el tiempo necesario para
                  finalidades declaradas y plazos legales (fiscales, comerciales,
                  prescripción).
                </p>
                <p>
                  <strong>H.2.</strong> Cumplidas finalidades/plazos, procedemos a
                  supresión, bloqueo o anonimización segura.
                </p>
                <p>
                  <strong>H.3. Criterios:</strong> tipo de dato, riesgo, obligaciones
                  regulatorias, defensa de derechos y necesidades operativas.
                </p>

                <h2>I. Derechos ARCO, limitación de uso y revocación del consentimiento</h2>
                <p>
                  <strong>I.1. Ejercicio ARCO.</strong> Envía solicitud a
                  atencion@oasix.com.mx con: Nombre completo y copia de identificación;
                  descripción de los derechos a ejercer (acceso/rectificación/cancelación/oposición);
                  datos/periodo a localizar; medio para notificar respuesta.
                </p>
                <p>
                  <strong>I.2. Plazos.</strong> Responderemos en máximo 20 días hábiles; de
                  ser procedente, ejecutaremos en 15 días hábiles siguientes.
                </p>
                <p>
                  <strong>I.3. Prevención.</strong> Si faltara información, te requeriremos
                  en 5 días hábiles; tendrás 10 días hábiles para completar.
                </p>
                <p>
                  <strong>I.4. Limitación de uso/divulgación.</strong> Puedes solicitar
                  inscripción/actualización en nuestros listados de no contacto (opt-out
                  marketing).
                </p>
                <p>
                  <strong>I.5. Revocación.</strong> Puedes revocar tu consentimiento para
                  finalidades no indispensables; en finalidades primarias, la revocación
                  puede imposibilitar la prestación/continuidad del servicio.
                </p>
                <p>
                  <strong>I.6. Medios alternos.</strong> También puedes ejercer derechos a
                  través de representante legal con poderes suficientes.
                </p>

                <h2>J. Menores y personas con capacidad limitada</h2>
                <p>
                  <strong>J.1.</strong> No recabamos intencionalmente datos de menores de
                  18 años sin consentimiento de madre/padre/tutor.
                </p>
                <p>
                  <strong>J.2.</strong> Si detectamos registro sin autorización, procedemos
                  a supresión.
                </p>
                <p>
                  <strong>J.3.</strong> Para accesos a experiencias con restricción de edad
                  (p. ej., alcohol), se podrá solicitar identificación.
                </p>

                <h2>K. Cookies, web beacons y tecnologías similares</h2>
                <p>
                  <strong>K.1. Finalidad.</strong> Usamos cookies y tecnologías afines para:
                  (i) recordar sesión/preferencias (idioma, zona horaria), (ii) analítica
                  de uso y desempeño del sitio, (iii) seguridad y prevención de fraude,
                  (iv) eventualmente publicidad y retargeting.
                </p>
                <p>
                  <strong>K.2. Tipos.</strong> Esenciales: funcionamiento del sitio/checkout.
                  De desempeño/analítica: métricas y mejoras (p. ej., páginas visitadas,
                  tiempo de sesión). Funcionales: recordar opciones del usuario.
                  Publicidad: mostrar anuncios relevantes (si se habilitan).
                </p>
                <p>
                  <strong>K.3. Gestión.</strong> Puedes deshabilitarlas en tu navegador o
                  configurar preferencias; desactivar cookies esenciales puede afectar el
                  funcionamiento.
                </p>
                <p>
                  <strong>K.4. Señales “Do Not Track”.</strong> Si tu navegador envía DNT,
                  haremos esfuerzos razonables para respetar dicha preferencia conforme a
                  nuestras capacidades técnicas.
                </p>
                <p>
                  <strong>K.5. Terceros.</strong> Herramientas analíticas/ads de terceros
                  (si se usan) operan con sus propias políticas; te sugerimos revisarlas.
                </p>

                <h2>L. Decisiones automatizadas y perfilamiento</h2>
                <p>
                  <strong>L.1.</strong> No adoptamos decisiones automatizadas que produzcan
                  efectos legales significativos.
                </p>
                <p>
                  <strong>L.2.</strong> Podemos realizar perfilamiento básico (segmentos
                  por destino/horarios/frecuencia) para mejorar comunicaciones; puedes
                  oponerte vía ARCO.
                </p>

                <h2>M. Uso de imagen en eventos/experiencias</h2>
                <p>
                  <strong>M.1.</strong> En actividades organizadas por OASIX podremos
                  registrar foto/video/voz para documentación y promoción.
                </p>
                <p>
                  <strong>M.2.</strong> Antes de la captura con fines promocionales
                  procuraremos señalización o cláusula visible; podrás manifestar
                  oposición razonable cuando sea viable sin afectar la operación/seguridad.
                </p>
                <p>
                  <strong>M.3.</strong> Cuando se trate de menores, requerimos
                  consentimiento del tutor.
                </p>

                <h2>N. Transferencias internacionales y hosting</h2>
                <p>
                  <strong>N.1.</strong> Algunos proveedores tecnológicos pueden hospedar o
                  procesar datos fuera de México bajo cláusulas contractuales y
                  salvaguardas adecuadas.
                </p>
                <p>
                  <strong>N.2.</strong> Adoptamos medidas para asegurar que dichos terceros
                  mantengan estándares de seguridad y confidencialidad equivalentes.
                </p>

                <h2>O. Quejas y medios de defensa</h2>
                <p>
                  <strong>O.1.</strong> Si consideras que tu derecho a la protección de
                  datos ha sido vulnerado, puedes acudir ante OASIX (atencion@oasix.com.mx).
                </p>
                <p>
                  <strong>O.2.</strong> También puedes presentar una queja ante el INAI
                  conforme a los plazos y procedimientos legales.
                </p>

                <h2>P. Modificaciones al Aviso</h2>
                <p>
                  <strong>P.1.</strong> Podremos modificar este Aviso por cambios legales,
                  regulatorios, contractuales, tecnológicos u operativos.
                </p>
                <p>
                  <strong>P.2.</strong> La versión vigente estará disponible en
                  oasix.com.mx y entrará en vigor desde su publicación. Recomiendamos
                  revisarlo periódicamente.
                </p>

                <h2>Q. Aceptación</h2>
                <p>
                  <strong>Q.1.</strong> Al proporcionar datos, navegar en el sitio, enviar
                  formularios, contratar o asistir a eventos/experiencias, declaras que
                  leíste y aceptas este Aviso.
                </p>
                <p>
                  <strong>Q.2.</strong> Para finalidades secundarias y/o datos sensibles,
                  recabaremos tu consentimiento expreso.
                </p>
              </>
            ) : (
              <>
                <h2>A. Data Controller</h2>
                <p>
                  <strong>A.1. Identity of the controller.</strong> The processing of personal data collected through oasix.com.mx, as well as by other electronic or physical means, corresponds to GREATDEN S.A. DE C.V. (hereinafter, "OASIX" or the "Controller").
                </p>
                <p>
                  <strong>A.2. Address.</strong> Av. Río Consulado Cto Interior 516, Oficina 102, Col. Tlatilco, Alcaldía Azcapotzalco, C.P. 02860, Mexico City.
                </p>
                <p>
                  <strong>A.3. Contact methods.</strong> For privacy and personal data: atencion@oasix.com.mx.
                </p>

                <h2>B. Data Subjects</h2>
                <p>
                  <strong>B.1. Subjective scope.</strong> Applies to any natural person whose data is processed by OASIX.
                </p>
                <p>
                  <strong>B.2. Included groups (enunciative).</strong> Clients, prospects, site visitors, commercial allies (company contacts), suppliers and their representatives, job candidates, and attendees to events/experiences.
                </p>
                <p>
                  <strong>B.3. Collection.</strong> Anyone who provides data via web forms, mail, messaging, calls, contracts, cards, QR, event check-in, or direct communication is considered a Data Subject.
                </p>

                <h2>C. Categories of data we may collect</h2>
                <ul>
                  <li>
                    <strong>C.1. Identification:</strong> full name, age/date of birth, nationality, gender, CURP/RFC (if applicable), handwritten/electronic signature.
                  </li>
                  <li>
                    <strong>C.2. Contact:</strong> address, emails, phone numbers (incl. work/personal WhatsApp).
                  </li>
                  <li>
                    <strong>C.3. Tax/Billing:</strong> corporate name, RFC, tax address, CFDI/CFDI usage.
                  </li>
                  <li>
                    <strong>C.4. Preferences and service:</strong> language, number of companions, dietary restrictions, accessibility, preferred schedules, logistical comments.
                  </li>
                  <li>
                    <strong>C.5. Supplier/ally relationship:</strong> contact data of representatives, powers of attorney/identification for signing (when necessary).
                  </li>
                  <li>
                    <strong>C.6. Candidates:</strong> CV, work/educational history, references, economic expectation, availability.
                  </li>
                  <li>
                    <strong>C.7. Image and voice:</strong> photographs, audio, and video captured at events and experiences (see secondary purpose).
                  </li>
                  <li>
                    <strong>C.8. Sensitive data (exceptional cases):</strong>{" "}
                    allergies, relevant medical conditions, or mobility when indispensable for safety/adaptation of the service. They will be processed with express consent and reinforced measures.
                  </li>
                </ul>
                <p>
                  We do not request data on religious convictions, ideology, sexual orientation, or complete financial card information.
                </p>

                <h2>D. Purposes of processing</h2>
                <p>
                  <strong>D.1. Primary purposes (indispensable for the relationship):</strong>
                </p>
                <ul>
                  <li>Manage requests and reservations (registrations, changes, confirmations).</li>
                  <li>
                    Contracting and operation of services (experiences, tours, fan zones, restaurant/bar reservations, logistics).
                  </li>
                  <li>
                    Collection and payments via secure gateways; billing and accounting verification.
                  </li>
                  <li>
                    Customer service (incidents, rescheduling, cancellations, and refunds according to policies).
                  </li>
                  <li>
                    Legal compliance (tax, commercial, safety/health, response to authorities).
                  </li>
                  <li>
                    Supplier/ally management (registration, verification, contractual administration).
                  </li>
                  <li>Selection processes (for candidates).</li>
                </ul>
                <p>
                  <strong>D.2. Secondary purposes (optional):</strong>
                </p>
                <ul>
                  <li>
                    Commercial communications (promotions, newsletters, surveys, invitations).
                  </li>
                  <li>
                    Analysis and metrics of site usage, preferences, and trends to improve services.
                  </li>
                  <li>
                    Use of image/voice captured at events for promotional purposes of OASIX (site, networks, materials).
                  </li>
                  <li>
                    Basic profiling (e.g., segments by preferred destination or time slot) without automated decisions that produce legal effects.
                  </li>
                </ul>
                <p>
                  You can choose not to receive promotional communications or deny secondary purposes by writing to atencion@oasix.com.mx. The refusal does not affect the provision of primary services.
                </p>

                <h2>E. Lawful basis</h2>
                <p>
                  We process data according to the LFPDPPP under: (i) consent; (ii) execution of a contract/legal relationship; (iii) legal compliance; (iv) legitimate interest (e.g., site security, improvement metrics, fraud prevention), without undermining your rights. Sensitive data is processed strictly with express consent and when strictly necessary.
                </p>

                <h2>F. Transfers and recipients</h2>
                <p>
                  <strong>F.1. National/international (when applicable):</strong>
                </p>
                <ul>
                  <li>
                    Service providers necessary to operate (payment gateways, hosting, CRM, email, messaging, identity verification, venues, restaurants/bars, guides, transporters, photographers, production companies).
                  </li>
                  <li>
                    Commercial allies/partners for co-execution of the contracted service or administration.
                  </li>
                  <li>
                    Administrative or judicial authorities, when there is a valid requirement or obligation.
                  </li>
                  <li>
                    Auditors/advisors (legal, accounting, tax) under a duty of confidentiality.
                  </li>
                </ul>
                <p>
                  <strong>F.2. Processors.</strong> Some third parties act as processors (process on behalf of the Controller) under contracts with confidentiality and security clauses.
                </p>
                <p>
                  <strong>F.3. No commercialization.</strong> We do not sell your data. Outside these scenarios, any transfer will require your express consent.
                </p>

                <h2>G. Security measures</h2>
                <ul>
                  <li>
                    <strong>G.1.</strong> Administrative, technical, and physical controls proportional to the risk: access control, principle of least privilege, logs, training, confidentiality agreements.
                  </li>
                  <li>
                    <strong>G.2. Technological security:</strong> TLS/SSL encryption, network segmentation, password hashing, access logs, certified gateways (e.g., PCI DSS), anti-fraud monitoring.
                  </li>
                  <li>
                    <strong>G.3. Incident management:</strong> internal response procedure for breaches; notification to data subjects and authorities when legally appropriate.
                  </li>
                  <li>
                    <strong>G.4.</strong> Even with reinforced measures, no system is invulnerable; liability is limited according to the law and T&Cs.
                  </li>
                </ul>

                <h2>H. Data retention</h2>
                <p>
                  <strong>H.1.</strong> We retain data only for the time necessary for declared purposes and legal terms (tax, commercial, prescription).
                </p>
                <p>
                  <strong>H.2.</strong> Once purposes/terms are fulfilled, we proceed to secure deletion, blocking, or anonymization.
                </p>
                <p>
                  <strong>H.3.</strong> Criteria: type of data, risk, regulatory obligations, defense of rights, and operational needs.
                </p>

                <h2>I. ARCO rights, use limitation, and consent revocation</h2>
                <p>
                  <strong>I.1. ARCO exercise.</strong> Send a request to atencion@oasix.com.mx with: full name and copy of identification; description of the rights to exercise (access/rectification/cancellation/opposition); data/period to locate; and means to notify the response.
                </p>
                <p>
                  <strong>I.2. Deadlines.</strong> We will respond within a maximum of 20 business days; if applicable, we will execute it within the following 15 business days.
                </p>
                <p>
                  <strong>I.3. Prevention.</strong> If information is missing, we will request it within 5 business days; you will have 10 business days to complete it.
                </p>
                <p>
                  <strong>I.4. Limitation of use/disclosure.</strong> You may request enrollment/update in our do-not-contact lists (marketing opt-out).
                </p>
                <p>
                  <strong>I.5. Revocation.</strong> You may revoke your consent for non-essential purposes; for primary purposes, revocation may make it impossible to provide/continue the service.
                </p>
                <p>
                  <strong>I.6. Alternate means.</strong> You may also exercise rights through a legal representative with sufficient powers.
                </p>

                <h2>J. Minors and persons with limited capacity</h2>
                <p>
                  <strong>J.1.</strong> We do not intentionally collect data from minors under 18 without the consent of a mother/father/guardian.
                </p>
                <p>
                  <strong>J.2.</strong> If we detect registration without authorization, we will proceed to delete it.
                </p>
                <p>
                  <strong>J.3.</strong> For access to age-restricted experiences (e.g., alcohol), identification may be requested.
                </p>

                <h2>K. Cookies, web beacons, and similar technologies</h2>
                <p>
                  <strong>K.1. Purpose.</strong> We use cookies and similar technologies to: (i) remember sessions/preferences (language, time zone), (ii) analytics on site use and performance, (iii) security and fraud prevention, (iv) eventually advertising and retargeting.
                </p>
                <p>
                  <strong>K.2. Types.</strong> Essential: site/checkout operation. Performance/analytics: metrics and improvements (e.g., visited pages, session time). Functional: remember user options. Advertising: show relevant ads (if enabled).
                </p>
                <p>
                  <strong>K.3. Management.</strong> You can disable them in your browser or configure preferences; disabling essential cookies may affect functionality.
                </p>
                <p>
                  <strong>K.4. "Do Not Track" signals.</strong> If your browser sends a DNT signal, we will make reasonable efforts to respect this preference according to our technical capabilities.
                </p>
                <p>
                  <strong>K.5. Third parties.</strong> Third-party analytics/ads tools (if used) operate under their own policies; we suggest reviewing them.
                </p>

                <h2>L. Automated decisions and profiling</h2>
                <p>
                  <strong>L.1.</strong> We do not make automated decisions that produce significant legal effects.
                </p>
                <p>
                  <strong>L.2.</strong> We may perform basic profiling (segments by destination/schedules/frequency) to improve communications; you can object via ARCO.
                </p>

                <h2>M. Use of image in events/experiences</h2>
                <p>
                  <strong>M.1.</strong> In activities organized by OASIX, we may record photo/video/voice for documentation and promotion.
                </p>
                <p>
                  <strong>M.2.</strong> Before capture for promotional purposes, we will seek to place signage or a visible clause; you may express reasonable opposition when viable without affecting operation/security.
                </p>
                <p>
                  <strong>M.3.</strong> When it concerns minors, we require the guardian's consent.
                </p>

                <h2>N. International transfers and hosting</h2>
                <p>
                  <strong>N.1.</strong> Some technology providers may host or process data outside Mexico under contractual clauses and adequate safeguards.
                </p>
                <p>
                  <strong>N.2.</strong> We adopt measures to ensure that such third parties maintain equivalent security and confidentiality standards.
                </p>

                <h2>O. Complaints and means of defense</h2>
                <p>
                  <strong>O.1.</strong> If you consider that your right to data protection has been violated, you may go to OASIX (atencion@oasix.com.mx).
                </p>
                <p>
                  <strong>O.2.</strong> You may also file a complaint with the INAI according to the legal deadlines and procedures.
                </p>

                <h2>P. Modifications to the Notice</h2>
                <p>
                  <strong>P.1.</strong> We may modify this Notice due to legal, regulatory, contractual, technological, or operational changes.
                </p>
                <p>
                  <strong>P.2.</strong> The current version will be available at oasix.com.mx and will enter into force upon publication. We recommend reviewing it periodically.
                </p>

                <h2>Q. Acceptance</h2>
                <p>
                  <strong>Q.1.</strong> By providing data, browsing the site, submitting forms, contracting, or attending events/experiences, you declare that you have read and accept this Notice.
                </p>
                <p>
                  <strong>Q.2.</strong> For secondary purposes and/or sensitive data, we will obtain your express consent.
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
