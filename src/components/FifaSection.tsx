"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import Image from "next/image";
import {
  Trophy,
  ArrowUpRight,
  Star,
  Utensils,
} from "lucide-react";

export function FifaSection() {
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#f4f8f5] py-24 md:py-32">
      {/* Decoraciones de fondo */}
      <div className="pointer-events-none absolute -left-52 -top-52 h-[40rem] w-[40rem] rounded-full bg-emerald-300/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-48 top-1/3 h-[36rem] w-[36rem] rounded-full bg-cyan-300/15 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[34rem] w-[34rem] rounded-full bg-amber-200/20 blur-[140px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative min-h-[720px] overflow-hidden rounded-[2.75rem] border border-emerald-950/10 bg-emerald-950 shadow-[0_45px_120px_-55px_rgba(6,78,59,0.75)] animate-bounce-up md:min-h-[680px] md:rounded-[4rem]">
          {/* Imagen principal */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070"
              alt="Mundial Gastronomía"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/80 to-emerald-950/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-emerald-950/20" />
          </div>

          {/* Elementos decorativos */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute bottom-8 right-8 hidden font-bricolage text-[9rem] font-black leading-none text-white/[0.04] lg:block">
            26
          </div>

          <div className="relative z-10 flex min-h-[720px] flex-col justify-between p-7 md:min-h-[680px] md:p-12 lg:p-16">
            {/* Indicadores superiores */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-md">
                <Trophy
                  className="h-4 w-4 text-amber-300"
                  strokeWidth={3}
                />
                <T>Mundial 2026</T>
              </div>

              <div className="hidden items-center gap-3 rounded-full border border-white/15 bg-emerald-950/30 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-emerald-100 backdrop-blur-md sm:flex">
                <Star
                  className="h-3.5 w-3.5 text-amber-300"
                  fill="currentColor"
                />
                Experiencia Oasix
              </div>
            </div>

            {/* Contenido inferior */}
            <div className="grid items-end gap-10 lg:grid-cols-12">
              <div className="max-w-3xl lg:col-span-8">
                <div className="mb-5 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200">
                  <span className="h-px w-12 bg-cyan-200/70" />
                  Hospitalidad y gastronomía
                </div>

                <h2 className="font-bricolage text-4xl font-black leading-[1.03] tracking-tight text-white md:text-6xl lg:text-7xl">
                  <T>Hospitalidad</T>{" "}
                  <span className="relative inline-block text-amber-300">
                    <T>Gourmet</T>
                    <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-cyan-300/40" />
                  </span>{" "}
                  <T>en el Mundial.</T>
                </h2>

                <p className="mt-7 max-w-2xl text-base font-medium leading-relaxed text-emerald-100/70 md:text-lg">
                  <T>
                    Asegura tu lugar en los recintos más exclusivos durante los
                    partidos. Nos encargamos de reservas privadas, pantallas
                    gigantes y la mejor comida para que tú solo grites el gol.
                  </T>
                </p>
              </div>

              {/* Pase flotante */}
              <div className="lg:col-span-4">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/95 p-6 text-emerald-950 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-7">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-200/40 blur-2xl" />

                  <div className="relative z-10">
                    <div className="mb-7 flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-amber-300">
                        <Utensils
                          className="h-6 w-6"
                          strokeWidth={2.5}
                        />
                      </div>

                      <span className="rounded-full border border-emerald-950/10 bg-[#f4f8f5] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-700">
                        Acceso especial
                      </span>
                    </div>

                    <p className="mb-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                      Pase de hospitalidad
                    </p>

                    <p className="font-bricolage text-2xl font-black leading-tight text-emerald-950">
                      Vive cada partido con sabor, comodidad y atención
                      personalizada.
                    </p>

                    <div className="my-6 border-t border-dashed border-emerald-950/20" />

                    <Link
                      href={`/${locale}/#contacto`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl bg-amber-300 px-5 font-black text-emerald-950 shadow-lg shadow-amber-300/20 transition-colors hover:bg-amber-200"
                    >
                      <T>Asegurar Espacio</T>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-950 text-white transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={2.5}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}