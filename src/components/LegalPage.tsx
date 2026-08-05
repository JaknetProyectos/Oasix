"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { T } from "@/components/T";
import {
  CalendarDays,
  Database,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

export default function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f8f5]">
      <Header />

      <main className="relative flex-1 overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
        {/* Decoraciones de fondo */}
        <div className="pointer-events-none absolute -left-52 top-10 h-[40rem] w-[40rem] rounded-full bg-emerald-300/20 blur-[160px]" />
        <div className="pointer-events-none absolute -right-52 top-1/3 h-[38rem] w-[38rem] rounded-full bg-cyan-300/15 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-[32rem] w-[32rem] rounded-full bg-amber-200/20 blur-[140px]" />

        <div className="container relative z-10 mx-auto max-w-7xl px-6">
          {/* Encabezado editorial */}
          <section className="relative mb-8 overflow-hidden rounded-[2.5rem] bg-emerald-950 px-7 py-12 text-white shadow-[0_35px_100px_-45px_rgba(6,78,59,0.75)] animate-fade-up md:rounded-[4rem] md:px-12 md:py-16 lg:px-16">
            <div className="pointer-events-none absolute -right-28 -top-28 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-8 hidden font-bricolage text-[11rem] font-black leading-none text-white/[0.025] lg:block">
              01
            </div>

            <div className="relative z-10 max-w-4xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-100 backdrop-blur-sm">
                <ShieldCheck
                  className="h-4 w-4 text-amber-300"
                  strokeWidth={2.5}
                />
                <T>Protección de tu información</T>
              </div>

              <h1 className="max-w-4xl font-bricolage text-4xl font-black leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl">
                <T>Aviso de Privacidad</T>
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-emerald-100/75">
                  <CalendarDays
                    className="h-4 w-4 text-cyan-200"
                    strokeWidth={2.5}
                  />
                  <T>Actualizado: Octubre 2026</T>
                </div>

                <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-bold text-emerald-100/75">
                  <FileText
                    className="h-4 w-4 text-amber-300"
                    strokeWidth={2.5}
                  />
                  Oasix
                </div>
              </div>
            </div>
          </section>

          {/* Contenido */}
          <div className="grid items-start gap-8 lg:grid-cols-12">
            {/* Índice lateral */}
            <aside className="animate-fade-up lg:sticky lg:top-32 lg:col-span-4">
              <div className="overflow-hidden rounded-[2rem] border border-emerald-950/10 bg-white/90 p-6 shadow-[0_25px_70px_-45px_rgba(6,78,59,0.4)] backdrop-blur-sm md:p-7">
                <span className="mb-6 block text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
                  <T>Contenido del documento</T>
                </span>

                <nav className="space-y-3">
                  <a
                    href="#introduccion"
                    className="group flex items-center justify-between rounded-2xl border border-emerald-950/5 bg-[#f4f8f5] px-4 py-4 transition-all hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-950 text-[10px] font-black text-amber-300">
                        00
                      </span>

                      <span className="text-sm font-black text-emerald-950">
                        <T>Introducción</T>
                      </span>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-emerald-300 transition-transform group-hover:scale-125" />
                  </a>

                  <a
                    href="#recopilacion"
                    className="group flex items-center justify-between rounded-2xl border border-emerald-950/5 bg-[#f4f8f5] px-4 py-4 transition-all hover:border-emerald-300 hover:bg-emerald-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-[10px] font-black text-emerald-800">
                        01
                      </span>

                      <span className="text-sm font-black text-emerald-950">
                        <T>Recopilación de Datos</T>
                      </span>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-emerald-300 transition-transform group-hover:scale-125" />
                  </a>

                  <a
                    href="#uso"
                    className="group flex items-center justify-between rounded-2xl border border-emerald-950/5 bg-[#f4f8f5] px-4 py-4 transition-all hover:border-amber-300 hover:bg-amber-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-[10px] font-black text-amber-800">
                        02
                      </span>

                      <span className="text-sm font-black text-emerald-950">
                        <T>Uso de la Información</T>
                      </span>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-amber-300 transition-transform group-hover:scale-125" />
                  </a>

                  <a
                    href="#proteccion"
                    className="group flex items-center justify-between rounded-2xl border border-emerald-950/5 bg-[#f4f8f5] px-4 py-4 transition-all hover:border-cyan-300 hover:bg-cyan-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-100 text-[10px] font-black text-cyan-800">
                        03
                      </span>

                      <span className="text-sm font-black text-emerald-950">
                        <T>Protección de Datos</T>
                      </span>
                    </div>

                    <span className="h-2 w-2 rounded-full bg-cyan-300 transition-transform group-hover:scale-125" />
                  </a>
                </nav>

                <div className="mt-6 rounded-2xl bg-emerald-950 p-5 text-white">
                  <ShieldCheck
                    className="mb-4 h-6 w-6 text-amber-300"
                    strokeWidth={2.5}
                  />

                  <p className="font-bricolage text-lg font-black leading-tight">
                    <T>Tu privacidad es parte de nuestra experiencia.</T>
                  </p>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-emerald-100/60">
                    <T>
                      En Oasix manejamos tu información con responsabilidad,
                      seguridad y transparencia.
                    </T>
                  </p>
                </div>
              </div>
            </aside>

            {/* Documento */}
            <article className="animate-fade-up lg:col-span-8">
              <div className="space-y-5 rounded-[2.5rem] border border-emerald-950/10 bg-white/95 p-6 shadow-[0_35px_100px_-55px_rgba(6,78,59,0.5)] backdrop-blur-sm md:rounded-[3rem] md:p-10 lg:p-12">
                {/* Introducción */}
                <section
                  id="introduccion"
                  className="scroll-mt-36 rounded-[2rem] border border-emerald-950/5 bg-[#f4f8f5] p-6 md:p-8"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-950 text-amber-300">
                      <ShieldCheck
                        className="h-6 w-6"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div>
                      <span className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-700">
                        Oasix
                      </span>

                      <h2 className="font-bricolage text-2xl font-black text-emerald-950">
                        <T>Nuestra responsabilidad</T>
                      </h2>
                    </div>
                  </div>

                  <p className="text-base font-medium leading-8 text-slate-600 md:text-lg">
                    <T>
                      En Oasix, valoramos y respetamos su privacidad. Este
                      documento describe cómo recopilamos, utilizamos y
                      protegemos su información personal al interactuar con
                      nuestros servicios y plataformas.
                    </T>
                  </p>
                </section>

                {/* Recopilación */}
                <section
                  id="recopilacion"
                  className="scroll-mt-36 rounded-[2rem] border border-emerald-200 bg-emerald-50/70 p-6 md:p-8"
                >
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
                        <Database
                          className="h-6 w-6"
                          strokeWidth={2.5}
                        />
                      </div>

                      <h3 className="font-bricolage text-2xl font-black text-emerald-950">
                        <T>1. Recopilación de Datos</T>
                      </h3>
                    </div>

                    <span className="hidden font-bricolage text-5xl font-black leading-none text-emerald-950/[0.06] sm:block">
                      01
                    </span>
                  </div>

                  <p className="text-base font-medium leading-8 text-slate-600 md:text-lg">
                    <T>
                      Podemos recopilar información personal como su nombre,
                      dirección de correo electrónico, número de teléfono y
                      detalles de facturación cuando solicita una cotización o
                      realiza una reserva a través de nuestro sitio web.
                    </T>
                  </p>
                </section>

                {/* Uso */}
                <section
                  id="uso"
                  className="scroll-mt-36 rounded-[2rem] border border-amber-200 bg-amber-50/70 p-6 md:p-8"
                >
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-200 text-amber-900">
                        <FileText
                          className="h-6 w-6"
                          strokeWidth={2.5}
                        />
                      </div>

                      <h3 className="font-bricolage text-2xl font-black text-emerald-950">
                        <T>2. Uso de la Información</T>
                      </h3>
                    </div>

                    <span className="hidden font-bricolage text-5xl font-black leading-none text-amber-950/[0.06] sm:block">
                      02
                    </span>
                  </div>

                  <p className="text-base font-medium leading-8 text-slate-600 md:text-lg">
                    <T>
                      La información proporcionada se utiliza exclusivamente
                      para la gestión de sus reservas, la coordinación de
                      logística en experiencias gastronómicas y, si usted lo
                      autoriza, para el envío de boletines exclusivos y
                      promociones.
                    </T>
                  </p>
                </section>

                {/* Protección */}
                <section
                  id="proteccion"
                  className="scroll-mt-36 rounded-[2rem] border border-cyan-200 bg-cyan-50/70 p-6 md:p-8"
                >
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-200 text-cyan-950">
                        <LockKeyhole
                          className="h-6 w-6"
                          strokeWidth={2.5}
                        />
                      </div>

                      <h3 className="font-bricolage text-2xl font-black text-emerald-950">
                        <T>3. Protección de Datos</T>
                      </h3>
                    </div>

                    <span className="hidden font-bricolage text-5xl font-black leading-none text-cyan-950/[0.06] sm:block">
                      03
                    </span>
                  </div>

                  <p className="text-base font-medium leading-8 text-slate-600 md:text-lg">
                    <T>
                      Implementamos medidas de seguridad de alto nivel,
                      incluyendo encriptación de datos, para proteger su
                      información contra accesos no autorizados, alteraciones o
                      divulgación.
                    </T>
                  </p>
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