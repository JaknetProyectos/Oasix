"use client";

import { T } from "@/components/T";
import { ChefHat, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f4f8f5] px-4 pb-16 pt-28 md:px-6 md:pb-24 md:pt-32">
      {/* Decoraciones ambientales */}
      <div className="pointer-events-none absolute -left-52 top-0 h-[40rem] w-[40rem] rounded-full bg-emerald-300/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-52 bottom-0 h-[38rem] w-[38rem] rounded-full bg-cyan-300/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-amber-200/20 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-950/10 bg-emerald-950 shadow-[0_45px_130px_-55px_rgba(6,78,59,0.75)] animate-bounce-up md:min-h-[760px] md:rounded-[4rem]">
          {/* Imagen panorámica */}
          <div className="relative h-[430px] w-full md:absolute md:inset-0 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070"
              alt="Mercado de Comida Mexicana"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/15 to-transparent md:bg-gradient-to-r md:from-emerald-950 md:via-emerald-950/55 md:to-emerald-950/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-emerald-950/50" />
          </div>

          {/* Marca vertical */}
          <div className="absolute right-7 top-8 z-20 hidden items-center gap-4 text-white/50 lg:flex">
            <span className="text-[9px] font-black uppercase tracking-[0.35em]">
              Oasix
            </span>

            <span className="h-px w-12 bg-white/30" />

            <span className="text-[9px] font-black uppercase tracking-[0.35em]">
              México
            </span>
          </div>

          <div className="relative z-10 flex min-h-full flex-col justify-end md:min-h-[760px] md:p-8 lg:p-12">
            {/* Panel editorial */}
            <div className="relative -mt-12 mx-4 overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/95 p-7 shadow-2xl shadow-black/20 backdrop-blur-2xl md:m-0 md:max-w-[660px] md:rounded-[3rem] md:p-10 lg:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-amber-200/25 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-800">
                  <Sparkles className="h-4 w-4" />
                  <T>Siente el Sabor Local</T>
                </div>

                <h1 className="font-bricolage text-5xl font-black leading-[0.98] tracking-tight text-emerald-950 sm:text-6xl md:text-7xl lg:text-[5.2rem]">
                  <T>Cómete a</T>{" "}
                  <span className="relative inline-block text-emerald-700">
                    <T>México</T>

                    <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-amber-300/75" />
                  </span>{" "}
                  <T>a mordidas.</T>
                </h1>

                <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-slate-500 md:text-lg">
                  <T>
                    De los secretos del mercado tradicional a cenas exclusivas
                    con chefs locales. Creamos rutas gastronómicas que activan
                    cada uno de tus sentidos.
                  </T>
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3 rounded-2xl border border-emerald-950/10 bg-[#f4f8f5] px-4 py-3">
                    <MapPin
                      className="h-5 w-5 text-emerald-700"
                      strokeWidth={2.5}
                    />

                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-[0.18em] text-emerald-950/40">
                        Destino
                      </span>

                      <span className="text-sm font-black text-emerald-950">
                        México
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
                    <ChefHat
                      className="h-5 w-5 text-amber-700"
                      strokeWidth={2.5}
                    />

                    <div>
                      <span className="block text-[8px] font-black uppercase tracking-[0.18em] text-amber-900/45">
                        <T>Más de</T>
                      </span>

                      <span className="text-sm font-black text-emerald-950">
                        15+ <T>Rutas de Sabor</T>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fotografía secundaria flotante */}
            <div className="absolute bottom-10 right-10 hidden h-52 w-52 overflow-hidden rounded-full border-[6px] border-white shadow-2xl shadow-black/30 lg:block">
              <Image
                src="https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=2070"
                alt="Tacos Gourmet"
                fill
                sizes="208px"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>

            {/* Sello flotante */}
            <div className="absolute bottom-44 right-8 hidden w-44 rotate-3 rounded-[1.75rem] border border-white/15 bg-emerald-950/85 p-4 text-white shadow-xl backdrop-blur-xl lg:block">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300 text-emerald-950">
                <ChefHat className="h-5 w-5" strokeWidth={2.5} />
              </div>

              <p className="text-[9px] font-black uppercase tracking-[0.18em] text-emerald-200/60">
                <T>Experiencias creadas</T>
              </p>

              <p className="mt-1 font-bricolage text-lg font-black leading-tight">
                <T>Con sabor y carácter local</T>
              </p>
            </div>
          </div>
        </div>

        {/* Línea editorial inferior */}
        <div className="mt-6 flex items-center justify-between gap-5 px-3">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-emerald-950/25 md:w-20" />

            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-emerald-950/45">
              Gastronomía · Cultura · Experiencias
            </span>
          </div>

          <span className="hidden text-[9px] font-black uppercase tracking-[0.2em] text-emerald-950/35 sm:block">
            Oasix © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}