"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle,
  ChefHat,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Ticket,
  UserRound,
  UsersRound,
  Utensils,
} from "lucide-react";

export function Pricing() {
  const locale = useLocale();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [lugar, setLugar] = useState("");
  const [fecha, setFecha] = useState("");
  const [asistentes, setAsistentes] = useState("");
  const [detalles, setDetalles] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Traduciendo los placeholders mediante hook para evitar fallos de TS
  const phNombre = useT("Tu Nombre Completo");
  const phEmail = useT("Correo Electrónico");
  const phTelefono = useT("Teléfono Móvil");
  const phDestino = useT("¿A qué destino viajamos?");
  const phAsistentes = useT("¿Cuántos son?");
  const phDetalles = useT(
    "Cuéntanos más... alergias, tipo de comida que buscas, ocasión especial.",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "QUOTE",
          customerName: nombre,
          email: email,
          phone: telefono,
          destination: lugar,
          startDate: fecha,
          travelers: asistentes,
          budget: "A convenir",
          message: detalles,
          locale: locale,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setNombre("");
        setEmail("");
        setTelefono("");
        setLugar("");
        setFecha("");
        setAsistentes("");
        setDetalles("");

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert(
          "Ocurrió un error al enviar su solicitud. Inténtelo de nuevo.",
        );
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "h-14 w-full rounded-2xl border border-emerald-950/10 bg-[#f4f8f5] px-5 pl-12 text-base font-bold text-emerald-950 outline-none transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10";

  const labelClass =
    "mb-2.5 block text-[10px] font-black uppercase tracking-[0.16em] text-emerald-950/50";

  return (
    <section
      id="cotizar"
      className="relative scroll-mt-24 overflow-hidden bg-[#f4f8f5] py-24 md:py-32"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute -left-52 top-0 h-[40rem] w-[40rem] rounded-full bg-emerald-300/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-52 top-1/3 h-[38rem] w-[38rem] rounded-full bg-cyan-300/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-amber-200/20 blur-[140px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <div className="mx-auto mb-14 max-w-4xl text-center animate-bounce-up md:mb-18">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800">
            <Utensils className="h-4 w-4" strokeWidth={2.5} />
            <T>Cata a Medida</T>
          </div>

          <h2 className="font-bricolage text-5xl font-black leading-[1.03] tracking-tight text-emerald-950 md:text-6xl lg:text-7xl">
            <T>Diseñemos tu propio</T>{" "}
            <span className="relative inline-block text-emerald-700">
              <T>festín</T>

              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-amber-300/75" />
            </span>
            .
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-relaxed text-slate-500">
            <T>
              ¿Una celebración inolvidable o una salida corporativa? Comparte
              tus antojos y diseñaremos una ruta gastronómica con la logística
              ideal para tu grupo.
            </T>
          </p>
        </div>

        {/* Contenedor principal */}
        <div className="grid overflow-hidden rounded-[2.5rem] border border-emerald-950/10 bg-white shadow-[0_45px_120px_-60px_rgba(6,78,59,0.65)] animate-bounce-up delay-100 md:rounded-[4rem] lg:grid-cols-12">
          {/* Panel informativo */}
          <aside className="relative overflow-hidden bg-emerald-950 px-7 py-12 text-white md:px-12 md:py-14 lg:col-span-4 lg:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-28 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl" />

            <span className="pointer-events-none absolute bottom-0 right-5 font-bricolage text-[9rem] font-black leading-none text-white/[0.025]">
              01
            </span>

            <div className="relative z-10 flex h-full flex-col">
              <div>
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-emerald-950 shadow-xl shadow-black/10">
                  <ChefHat className="h-7 w-7" strokeWidth={2.5} />
                </div>

                <span className="mb-4 block text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
                  <T>Experiencia personalizada</T>
                </span>

                <h3 className="font-bricolage text-3xl font-black leading-tight md:text-4xl">
                  <T>Cuéntanos la idea. Nosotros creamos la ruta.</T>
                </h3>

                <p className="mt-5 text-base font-medium leading-relaxed text-emerald-100/65">
                  <T>
                    Tomamos en cuenta el destino, la fecha, el número de
                    asistentes y cada detalle especial para preparar una
                    propuesta pensada para ustedes.
                  </T>
                </p>
              </div>

              {/* Beneficios */}
              <div className="mt-10 space-y-3">
                {[
                  "Selección gastronómica personalizada",
                  "Coordinación de espacios y traslados",
                  "Atención antes y durante la experiencia",
                ].map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3.5"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[9px] font-black text-amber-300">
                      0{index + 1}
                    </span>

                    <span className="text-sm font-bold text-emerald-50/80">
                      <T>{benefit}</T>
                    </span>
                  </div>
                ))}
              </div>

              {/* Acceso por folio */}
              <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm lg:mt-auto">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-200 text-cyan-950">
                    <Ticket className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div>
                    <h3 className="font-bricolage text-xl font-black">
                      <T>¿Ya tienes un Folio?</T>
                    </h3>

                    <p className="mt-1 text-sm font-medium leading-relaxed text-emerald-100/55">
                      <T>
                        Continúa directamente con el pago de tu experiencia.
                      </T>
                    </p>
                  </div>
                </div>

                <Link
                  href={`/${locale}/pago-folio`}
                  className="group flex min-h-14 w-full items-center justify-between rounded-2xl bg-white px-5 font-black text-emerald-950 transition-colors hover:bg-amber-300"
                >
                  <T>Pagar Folio</T>

                  <ArrowRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </Link>
              </div>
            </div>
          </aside>

          {/* Área del formulario */}
          <div className="relative px-6 py-10 md:px-10 md:py-12 lg:col-span-8 lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />

            <div className="relative z-10">
              {isSuccess ? (
                <div className="flex min-h-[650px] flex-col items-center justify-center text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 scale-125 rounded-full bg-emerald-300/25 blur-2xl" />

                    <div className="relative flex h-24 w-24 rotate-3 items-center justify-center rounded-[2rem] bg-emerald-950 text-amber-300 shadow-2xl shadow-emerald-950/20">
                      <CheckCircle
                        className="h-12 w-12"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>

                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-800">
                    <Sparkles className="h-4 w-4" />
                    <T>Solicitud enviada</T>
                  </div>

                  <h3 className="font-bricolage text-4xl font-black tracking-tight text-emerald-950">
                    <T>¡Receta Recibida!</T>
                  </h3>

                  <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed text-slate-500">
                    <T>
                      Nuestro equipo ya está preparando tu propuesta
                      personalizada. Nos comunicaremos contigo muy pronto para
                      revisar los detalles.
                    </T>
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-9 flex flex-col gap-4 border-b border-emerald-950/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
                        <T>Solicitud personalizada</T>
                      </span>

                      <h3 className="font-bricolage text-3xl font-black tracking-tight text-emerald-950 md:text-4xl">
                        <T>Comencemos con los detalles</T>
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <T>Respuesta personalizada</T>
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-x-5 gap-y-6 md:grid-cols-12"
                  >
                    {/* Datos personales */}
                    <div className="md:col-span-12">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950 text-[9px] font-black text-amber-300">
                          01
                        </span>

                        <span className="text-xs font-black uppercase tracking-[0.17em] text-emerald-950">
                          <T>Información de contacto</T>
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-12">
                      <label className={labelClass}>
                        <T>Nombre completo</T>
                      </label>

                      <div className="relative">
                        <UserRound
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700"
                          strokeWidth={2.2}
                        />

                        <input
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                          autoComplete="name"
                          className={inputClass}
                          placeholder={phNombre}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-6">
                      <label className={labelClass}>
                        <T>Correo electrónico</T>
                      </label>

                      <div className="relative">
                        <Mail
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700"
                          strokeWidth={2.2}
                        />

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          autoComplete="email"
                          className={inputClass}
                          placeholder={phEmail}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-6">
                      <label className={labelClass}>
                        <T>Teléfono móvil</T>
                      </label>

                      <div className="relative">
                        <Phone
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700"
                          strokeWidth={2.2}
                        />

                        <input
                          type="tel"
                          value={telefono}
                          onChange={(e) => setTelefono(e.target.value)}
                          required
                          autoComplete="tel"
                          className={inputClass}
                          placeholder={phTelefono}
                        />
                      </div>
                    </div>

                    {/* Datos del viaje */}
                    <div className="mt-3 md:col-span-12">
                      <div className="mb-5 flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-300 text-[9px] font-black text-emerald-950">
                          02
                        </span>

                        <span className="text-xs font-black uppercase tracking-[0.17em] text-emerald-950">
                          <T>Datos de la experiencia</T>
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-5">
                      <label className={labelClass}>
                        <T>Destino</T>
                      </label>

                      <div className="relative">
                        <MapPin
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700"
                          strokeWidth={2.2}
                        />

                        <input
                          type="text"
                          value={lugar}
                          onChange={(e) => setLugar(e.target.value)}
                          required
                          className={inputClass}
                          placeholder={phDestino}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-4">
                      <label className={labelClass}>
                        <T>Fecha estimada</T>
                      </label>

                      <div className="relative">
                        <CalendarDays
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700"
                          strokeWidth={2.2}
                        />

                        <input
                          type="date"
                          value={fecha}
                          onChange={(e) => setFecha(e.target.value)}
                          required
                          className={`${inputClass} text-slate-500 focus:text-emerald-950`}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-3">
                      <label className={labelClass}>
                        <T>Asistentes</T>
                      </label>

                      <div className="relative">
                        <UsersRound
                          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-700"
                          strokeWidth={2.2}
                        />

                        <input
                          type="number"
                          value={asistentes}
                          onChange={(e) => setAsistentes(e.target.value)}
                          required
                          min="1"
                          className={inputClass}
                          placeholder={phAsistentes}
                        />
                      </div>
                    </div>

                    <div className="md:col-span-12">
                      <label className={labelClass}>
                        <T>Detalles adicionales</T>
                      </label>

                      <textarea
                        value={detalles}
                        onChange={(e) => setDetalles(e.target.value)}
                        rows={5}
                        className="w-full resize-none rounded-2xl border border-emerald-950/10 bg-[#f4f8f5] px-5 py-4 text-base font-bold leading-relaxed text-emerald-950 outline-none transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
                        placeholder={phDetalles}
                      />
                    </div>

                    <div className="mt-3 md:col-span-12">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex min-h-18 w-full items-center justify-center gap-3 rounded-[1.5rem] bg-amber-300 px-6 text-xl font-black text-emerald-950 shadow-xl shadow-amber-300/20 transition-all hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <Loader2
                            className="h-7 w-7 animate-spin"
                            strokeWidth={3}
                          />
                        ) : (
                          <Utensils
                            className="h-6 w-6 transition-transform duration-300 group-hover:rotate-6"
                            strokeWidth={2.5}
                          />
                        )}

                        {isSubmitting ? (
                          <T>Cocinando propuesta...</T>
                        ) : (
                          <T>Pedir Presupuesto</T>
                        )}

                        {!isSubmitting && (
                          <ArrowRight
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                            strokeWidth={2.5}
                          />
                        )}
                      </button>

                      <p className="mt-4 text-center text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        <T>
                          Revisaremos tu solicitud para preparar una propuesta
                          personalizada
                        </T>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}