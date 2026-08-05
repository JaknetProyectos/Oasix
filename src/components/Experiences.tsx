"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";

export function Experiences() {
  const locale = useLocale();

  const tours = [
    {
      id: 1,
      title: "Sabor Local en Mercado",
      location: "San Rafael, CDMX",
      image:
        "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070",
      price: "$1,670 MXN",
    },
    {
      id: 9,
      title: "Tacos y Tequila Gourmet",
      location: "San Miguel de Allende",
      image:
        "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=2070",
      price: "$1,680 MXN",
    },
    {
      id: 10,
      title: "Sabores Tradicionales",
      location: "Oaxaca",
      image:
        "https://images.unsplash.com/photo-1599974519780-60b7643b67be?q=80&w=2070",
      price: "$4,600 MXN",
    },
  ];

  const featuredTour = tours[0];
  const stackedTours = tours.slice(1);

  return (
    <section className="relative mx-4 my-10 overflow-hidden rounded-[2.5rem] bg-emerald-950 py-20 text-white md:mx-8 md:rounded-[4rem] md:py-28">
      {/* Decoraciones */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[40rem] w-[40rem] rounded-full bg-cyan-300/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-52 -left-44 h-[38rem] w-[38rem] rounded-full bg-amber-300/10 blur-[150px]" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-emerald-300/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <div className="mb-14 flex flex-col gap-8 animate-bounce-up md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-100">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <T>Prueba México</T>
            </div>

            <h2 className="font-bricolage text-4xl font-black leading-[1.04] tracking-tight text-white md:text-5xl lg:text-6xl">
              <T>Las Rutas Favoritas</T>
            </h2>
          </div>

          <Link
            href={`/${locale}/experiencias`}
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-amber-300 px-7 py-4 font-black text-emerald-950 shadow-xl shadow-black/10 transition-all hover:bg-amber-200"
          >
            <T>Ver Menú Completo</T>

            <ArrowRight
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={3}
            />
          </Link>
        </div>

        {/* Composición editorial */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Experiencia principal */}
          <Link
            href={`/${locale}/experiencias/${featuredTour.id}`}
            className="group block animate-bounce-up lg:col-span-8"
          >
            <article className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-emerald-900 shadow-[0_35px_90px_-40px_rgba(0,0,0,0.7)] md:min-h-[640px] md:rounded-[3.25rem]">
              <Image
                src={featuredTour.image}
                alt={featuredTour.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/35 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 z-10 md:left-8 md:top-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-emerald-950 shadow-xl backdrop-blur-xl">
                  <Star
                    className="h-4 w-4 text-amber-500"
                    fill="currentColor"
                  />
                  <T>Top Choice</T>
                </div>
              </div>

              <div className="absolute right-6 top-6 z-10 md:right-8 md:top-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-amber-300 group-hover:text-emerald-950">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-10">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                    <MapPin
                      className="h-4 w-4 text-cyan-200"
                      strokeWidth={2.5}
                    />
                    <T>{featuredTour.location}</T>
                  </div>

                  <div className="rounded-full bg-amber-300 px-4 py-2 text-sm font-black text-emerald-950 shadow-lg">
                    {featuredTour.price}
                  </div>
                </div>

                <h3 className="max-w-3xl font-bricolage text-4xl font-black leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
                  <T>{featuredTour.title}</T>
                </h3>

                <div className="mt-7 flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-emerald-100/70">
                  <span className="h-px w-12 bg-amber-300" />
                  <T>Descubrir experiencia</T>
                </div>
              </div>
            </article>
          </Link>

          {/* Experiencias secundarias */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            {stackedTours.map((tour, idx) => (
              <Link
                href={`/${locale}/experiencias/${tour.id}`}
                key={tour.id}
                className="group block flex-1 animate-bounce-up"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >
                <article className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.1] md:min-h-[307px]">
                  <div className="relative h-44 w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/55 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-emerald-950/75 px-3 py-2 text-[10px] font-black uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      <MapPin
                        className="h-3.5 w-3.5 text-cyan-200"
                        strokeWidth={2.5}
                      />
                      <T>{tour.location}</T>
                    </div>
                  </div>

                  <div className="flex flex-1 items-end justify-between gap-5 px-3 pb-3 pt-5">
                    <div>
                      <span className="mb-2 block text-[9px] font-black uppercase tracking-[0.18em] text-emerald-200/50">
                        Ruta 0{idx + 2}
                      </span>

                      <h3 className="font-bricolage text-2xl font-black leading-tight text-white transition-colors group-hover:text-amber-300">
                        <T>{tour.title}</T>
                      </h3>

                      <p className="mt-3 font-black text-amber-300">
                        {tour.price}
                      </p>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-amber-300 group-hover:text-emerald-950">
                      <ArrowUpRight
                        className="h-5 w-5"
                        strokeWidth={2.5}
                      />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}