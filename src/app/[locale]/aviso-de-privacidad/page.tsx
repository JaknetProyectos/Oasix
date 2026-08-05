"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export default function AvisoPrivacidadPage() {
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
              Protegemos tu información
            </div>

            <h1 className="text-4xl md:text-6xl font-black font-bricolage text-emerald-950 tracking-tight">
              Aviso de Privacidad
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-emerald-900/65 font-medium leading-relaxed">
              Conoce cómo recopilamos, utilizamos y protegemos la información
              personal que compartes con Oasix.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-7 md:p-16 shadow-[0_30px_90px_-40px_rgba(6,78,59,0.35)] border border-emerald-950/10 animate-bounce-up delay-100 prose prose-lg max-w-none prose-headings:font-bricolage prose-headings:font-black prose-headings:text-emerald-950 prose-h2:mt-12 prose-h2:mb-5 prose-h2:border-b prose-h2:border-emerald-950/10 prose-h2:pb-4 prose-p:text-slate-600 prose-p:font-medium prose-p:leading-8 prose-strong:text-emerald-950 prose-li:text-slate-600 prose-li:font-medium prose-li:leading-8 prose-ul:my-6 prose-li:marker:text-emerald-500">
            <h2>A. Responsable de los datos personales</h2>

            <p>
              <strong>A.1. Identidad del responsable.</strong> El manejo de los
              datos personales obtenidos mediante OASIX.com.mx, además de otros
              canales electrónicos o físicos, será responsabilidad de GREATDEN
              S.A. DE C.V. (en adelante, “OASIX” o el “Responsable”).
            </p>

            <p>
              <strong>A.2. Domicilio.</strong> Av. Río Consulado Cto Interior
              516, Oficina 102, Col. Tlatilco, Alcaldía Azcapotzalco, C.P.
              02860, Ciudad de México.
            </p>

            <p>
              <strong>A.3. Medios de contacto.</strong> Para asuntos
              relacionados con privacidad y datos personales:
              atencion@oasix.com.mx.
            </p>

            <h2>B. Titulares de los datos</h2>

            <p>
              <strong>B.1. Alcance subjetivo.</strong> Este Aviso aplica a toda
              persona física cuya información personal sea tratada por OASIX.
            </p>

            <p>
              <strong>B.2. Colectivos incluidos (enunciativo).</strong> Incluye
              clientes, prospectos, usuarios del sitio, aliados comerciales y
              contactos empresariales, proveedores y sus representantes,
              candidatos laborales y asistentes a eventos o experiencias.
            </p>

            <p>
              <strong>B.3. Obtención.</strong> Se considera Titular a cualquier
              persona que facilite información mediante formularios, correo,
              mensajería, llamadas, contratos, tarjetas, códigos QR, registros
              de eventos o comunicación directa.
            </p>

            <h2>C. Categorías de datos que podremos recabar</h2>

            <ul>
              <li>
                <strong>C.1. Identificación:</strong> nombre completo, edad o
                fecha de nacimiento, nacionalidad, género, CURP o RFC cuando
                corresponda y firma autógrafa o electrónica.
              </li>

              <li>
                <strong>C.2. Contacto:</strong> domicilio, direcciones de correo
                y números telefónicos, incluyendo WhatsApp personal o laboral.
              </li>

              <li>
                <strong>C.3. Fiscales/Facturación:</strong> razón social, RFC,
                domicilio fiscal, información de CFDI y uso correspondiente.
              </li>

              <li>
                <strong>C.4. Preferencias y servicio:</strong> idioma, cantidad
                de acompañantes, restricciones alimentarias, necesidades de
                accesibilidad, horarios preferentes y observaciones logísticas.
              </li>

              <li>
                <strong>C.5. Relación proveedor/aliado:</strong> datos de
                representantes, poderes e identificaciones requeridas para
                formalizar documentos cuando resulte necesario.
              </li>

              <li>
                <strong>C.6. Candidatos:</strong> currículum, trayectoria
                laboral y académica, referencias, expectativa económica y
                disponibilidad.
              </li>

              <li>
                <strong>C.7. Imagen y voz:</strong> fotografías, grabaciones de
                audio y videos obtenidos durante eventos y experiencias,
                conforme a la finalidad secundaria indicada.
              </li>

              <li>
                <strong>C.8. Datos sensibles (casos excepcionales):</strong>{" "}
                alergias, condiciones médicas relevantes o necesidades de
                movilidad cuando sean indispensables para la seguridad o
                adaptación del servicio. Estos datos se tratarán con
                consentimiento expreso y protección reforzada.
              </li>
            </ul>

            <p>
              No requerimos información sobre creencias religiosas, ideología,
              orientación sexual ni datos financieros completos de tarjetas.
            </p>

            <h2>D. Finalidades del tratamiento</h2>

            <p>
              <strong>
                D.1. Finalidades primarias (indispensables para la relación):
              </strong>
            </p>

            <ul>
              <li>
                Administrar solicitudes y reservaciones, incluyendo registros,
                modificaciones y confirmaciones.
              </li>

              <li>
                Contratar y operar servicios, experiencias, recorridos, fan
                zones, reservaciones en restaurantes o bares y actividades
                logísticas.
              </li>

              <li>
                Gestionar cobros y pagos mediante plataformas seguras, además de
                facturación y comprobación contable.
              </li>

              <li>
                Brindar atención al cliente ante incidencias, reprogramaciones,
                cancelaciones y reembolsos conforme a las políticas aplicables.
              </li>

              <li>
                Atender obligaciones legales, fiscales, comerciales, sanitarias
                o de seguridad, así como solicitudes de autoridades.
              </li>

              <li>
                Administrar proveedores y aliados, incluyendo registro,
                validación y seguimiento contractual.
              </li>

              <li>Desarrollar procesos de reclutamiento para candidatos.</li>
            </ul>

            <p>
              <strong>D.2. Finalidades secundarias (opcionales):</strong>
            </p>

            <ul>
              <li>
                Enviar promociones, boletines, encuestas, invitaciones y otras
                comunicaciones comerciales.
              </li>

              <li>
                Analizar métricas del sitio, hábitos, preferencias y tendencias
                para optimizar nuestros servicios.
              </li>

              <li>
                Utilizar imágenes o grabaciones obtenidas en eventos para
                promoción de OASIX en el sitio, redes sociales y materiales
                publicitarios.
              </li>

              <li>
                Realizar segmentación básica por destino, horario u otras
                preferencias, sin decisiones automatizadas con consecuencias
                legales.
              </li>
            </ul>

            <p>
              Puedes rechazar las comunicaciones promocionales o las finalidades
              secundarias escribiendo a atencion@oasix.com.mx. Esta decisión no
              afectará la prestación de los servicios principales.
            </p>

            <h2>E. Base de licitud</h2>

            <p>
              Tratamos la información conforme a la LFPDPPP con base en: (i) el
              consentimiento; (ii) la ejecución de un contrato o relación
              jurídica; (iii) el cumplimiento de obligaciones legales; y (iv)
              el interés legítimo, como seguridad del sitio, mejora de métricas
              o prevención de fraude, sin afectar tus derechos. Los datos
              sensibles únicamente serán tratados con consentimiento expreso y
              cuando resulten indispensables.
            </p>

            <h2>F. Transferencias y destinatarios</h2>

            <p>
              <strong>
                F.1. Nacionales/internacionales (cuando apliquen):
              </strong>
            </p>

            <ul>
              <li>
                Proveedores necesarios para la operación, como pasarelas de
                pago, hosting, CRM, correo, mensajería, validación de identidad,
                recintos, restaurantes, bares, guías, transportistas,
                fotógrafos y productoras.
              </li>

              <li>
                Socios o aliados comerciales que participen en la ejecución o
                administración del servicio contratado.
              </li>

              <li>
                Autoridades administrativas o judiciales cuando exista una
                obligación o requerimiento válido.
              </li>

              <li>
                Auditores y asesores legales, contables o fiscales sujetos a
                obligaciones de confidencialidad.
              </li>
            </ul>

            <p>
              <strong>F.2. Encargados.</strong> Determinados terceros podrán
              actuar como encargados y procesar información por cuenta del
              Responsable mediante contratos con obligaciones de seguridad y
              confidencialidad.
            </p>

            <p>
              <strong>F.3. No comercialización.</strong> No comercializamos tus
              datos. Cualquier transferencia distinta a las mencionadas
              requerirá tu consentimiento expreso.
            </p>

            <h2>G. Medidas de seguridad</h2>

            <ul>
              <li>
                <strong>
                  G.1. Controles administrativos, técnicos y físicos
                </strong>{" "}
                adecuados al nivel de riesgo, como control de accesos, principio
                de mínima necesidad, registros, capacitación y convenios de
                confidencialidad.
              </li>

              <li>
                <strong>G.2. Seguridad tecnológica:</strong> cifrado TLS o SSL,
                segmentación de redes, hash de contraseñas, bitácoras de acceso,
                pasarelas certificadas, como PCI DSS, y supervisión antifraude.
              </li>

              <li>
                <strong>G.3. Gestión de incidentes:</strong> contamos con
                procedimientos internos para atender vulneraciones y notificar
                a titulares o autoridades cuando legalmente corresponda.
              </li>

              <li>
                <strong>G.4.</strong> Aunque utilizamos medidas reforzadas,
                ningún sistema es completamente invulnerable; la responsabilidad
                se limitará conforme a la legislación y los Términos y
                Condiciones.
              </li>
            </ul>

            <h2>H. Conservación (retención) de datos</h2>

            <p>
              <strong>H.1.</strong> Conservamos la información únicamente
              durante el periodo necesario para cumplir las finalidades
              informadas y los plazos fiscales, comerciales o de prescripción.
            </p>

            <p>
              <strong>H.2.</strong> Una vez concluidas las finalidades y los
              plazos aplicables, procederemos a eliminar, bloquear o anonimizar
              los datos de manera segura.
            </p>

            <p>
              <strong>H.3.</strong> Consideramos el tipo de información, nivel
              de riesgo, obligaciones regulatorias, defensa de derechos y
              requerimientos operativos.
            </p>

            <h2>
              I. Derechos ARCO, limitación de uso y revocación del consentimiento
            </h2>

            <p>
              <strong>I.1. Ejercicio ARCO.</strong> Envía tu solicitud a
              atencion@oasix.com.mx incluyendo nombre completo y copia de una
              identificación; descripción del derecho que deseas ejercer
              —acceso, rectificación, cancelación u oposición—; datos y periodo
              a localizar, y medio para recibir la respuesta.
            </p>

            <p>
              <strong>I.2. Plazos.</strong> Responderemos en un plazo máximo de
              20 días hábiles y, cuando resulte procedente, ejecutaremos la
              solicitud dentro de los siguientes 15 días hábiles.
            </p>

            <p>
              <strong>I.3. Prevención.</strong> Cuando falte información,
              podremos solicitarla dentro de los siguientes 5 días hábiles y
              tendrás 10 días hábiles para completarla.
            </p>

            <p>
              <strong>I.4. Limitación de uso/divulgación.</strong> Puedes pedir
              tu registro o actualización en nuestras listas de exclusión para
              comunicaciones comerciales.
            </p>

            <p>
              <strong>I.5. Revocación.</strong> Puedes retirar tu consentimiento
              para finalidades no esenciales. Cuando se trate de finalidades
              primarias, la revocación podría impedir la prestación o
              continuidad del servicio.
            </p>

            <p>
              <strong>I.6. Medios alternos.</strong> También podrás ejercer tus
              derechos mediante un representante legal que cuente con facultades
              suficientes.
            </p>

            <h2>J. Menores y personas con capacidad limitada</h2>

            <p>
              <strong>J.1.</strong> No recopilamos deliberadamente información
              de menores de 18 años sin autorización de su madre, padre o tutor.
            </p>

            <p>
              <strong>J.2.</strong> Si identificamos un registro realizado sin
              autorización, procederemos a eliminarlo.
            </p>

            <p>
              <strong>J.3.</strong> Para ingresar a experiencias con límites de
              edad, como aquellas relacionadas con alcohol, podremos solicitar
              una identificación.
            </p>

            <h2>K. Cookies, web beacons y tecnologías similares</h2>

            <p>
              <strong>K.1. Finalidad.</strong> Empleamos cookies y tecnologías
              relacionadas para: (i) recordar sesiones y preferencias, como
              idioma o zona horaria; (ii) analizar el uso y rendimiento del
              sitio; (iii) fortalecer la seguridad y prevenir fraudes; y (iv)
              habilitar eventualmente publicidad o retargeting.
            </p>

            <p>
              <strong>K.2. Tipos.</strong> Esenciales: necesarias para el sitio
              y el proceso de compra. De desempeño/analítica: utilizadas para
              métricas y mejoras, como páginas consultadas o duración de la
              sesión. Funcionales: recuerdan configuraciones del usuario.
              Publicidad: permiten mostrar anuncios relevantes cuando se
              encuentren habilitadas.
            </p>

            <p>
              <strong>K.3. Gestión.</strong> Puedes desactivarlas desde la
              configuración del navegador o ajustar tus preferencias. El
              bloqueo de cookies esenciales podría limitar algunas funciones.
            </p>

            <p>
              <strong>K.4. Señales “Do Not Track”.</strong> Cuando el navegador
              envíe una señal DNT, realizaremos esfuerzos razonables para
              atenderla dentro de nuestras capacidades técnicas.
            </p>

            <p>
              <strong>K.5. Terceros.</strong> Las herramientas externas de
              analítica o publicidad, cuando sean utilizadas, estarán sujetas a
              sus propias políticas, por lo que recomendamos consultarlas.
            </p>

            <h2>L. Decisiones automatizadas y perfilamiento</h2>

            <p>
              <strong>L.1.</strong> No tomamos decisiones automatizadas que
              generen efectos legales significativos para los titulares.
            </p>

            <p>
              <strong>L.2.</strong> Podemos efectuar segmentaciones básicas por
              destino, horario o frecuencia para mejorar nuestras
              comunicaciones. Puedes oponerte mediante el ejercicio de tus
              derechos ARCO.
            </p>

            <h2>M. Uso de imagen en eventos/experiencias</h2>

            <p>
              <strong>M.1.</strong> Durante actividades organizadas por OASIX
              podremos obtener fotografías, videos o grabaciones de voz para
              documentación y promoción.
            </p>

            <p>
              <strong>M.2.</strong> Antes de realizar capturas promocionales
              procuraremos colocar señalización o cláusulas visibles. Podrás
              expresar una oposición razonable cuando sea viable y no
              comprometa la operación o seguridad.
            </p>

            <p>
              <strong>M.3.</strong> En el caso de menores de edad, será
              necesario contar con autorización de su tutor.
            </p>

            <h2>N. Transferencias internacionales y hosting</h2>

            <p>
              <strong>N.1.</strong> Algunos proveedores tecnológicos podrían
              almacenar o procesar información fuera de México mediante
              cláusulas contractuales y medidas de protección adecuadas.
            </p>

            <p>
              <strong>N.2.</strong> Implementamos acciones para procurar que
              estos proveedores mantengan niveles equivalentes de seguridad y
              confidencialidad.
            </p>

            <h2>O. Quejas y medios de defensa</h2>

            <p>
              <strong>O.1.</strong> Si consideras vulnerado tu derecho a la
              protección de datos, puedes comunicarte directamente con OASIX
              mediante atencion@oasix.com.mx.
            </p>

            <p>
              <strong>O.2.</strong> También puedes presentar una queja ante la
              autoridad competente conforme a los procedimientos y plazos
              establecidos legalmente.
            </p>

            <h2>P. Modificaciones al Aviso</h2>

            <p>
              <strong>P.1.</strong> Este Aviso podrá actualizarse debido a
              modificaciones legales, regulatorias, contractuales, tecnológicas
              u operativas.
            </p>

            <p>
              <strong>P.2.</strong> La versión vigente se publicará en
              OASIX.com.mx y surtirá efectos desde su publicación. Sugerimos
              consultarla periódicamente.
            </p>

            <h2>Q. Aceptación</h2>

            <p>
              <strong>Q.1.</strong> Al compartir información, utilizar el sitio,
              enviar formularios, contratar servicios o participar en eventos o
              experiencias, confirmas que has leído y aceptado este Aviso.
            </p>

            <p>
              <strong>Q.2.</strong> Para finalidades secundarias o el
              tratamiento de datos sensibles, solicitaremos tu consentimiento
              expreso.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}