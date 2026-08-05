"use client";

import { T } from "@/components/T";
import {
  Utensils,
  Sparkles,
  Map,
  ChefHat,
  ArrowUpRight,
} from "lucide-react";

export function AboutServices() {
  const services = [
    {
      number: "01",
      title: "Curaduría Culinaria",
      description:
        "Diseño de menús, catas y degustaciones de alta gama de la mano de chefs locales galardonados.",
      icon: ChefHat,
      cardClass:
        "bg-emerald-950 text-white border-emerald-800 shadow-[0_35px_90px_-40px_rgba(6,78,59,0.75)]",
      iconClass:
        "bg-amber-300 text-emerald-950 border-amber-200",
      numberClass: "text-white/[0.06]",
      descriptionClass: "text-emerald-100/70",
      arrowClass:
        "bg-white/10 text-emerald-100 border-white/10 group-hover:bg-amber-300 group-hover:text-emerald-950",
      decoration:
        "absolute -right-20 -bottom-24 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl",
    },
    {
      number: "02",
      title: "Atmósferas Únicas",
      description:
        "Cenas en cenotes ocultos, veladas clandestinas y caminatas por mercados vibrantes. El entorno importa tanto como la comida.",
      icon: Sparkles,
      cardClass:
        "bg-amber-50 text-emerald-950 border-amber-200 shadow-[0_35px_90px_-45px_rgba(180,83,9,0.35)]",
      iconClass:
        "bg-emerald-950 text-amber-300 border-emerald-800",
      numberClass: "text-amber-900/[0.07]",
      descriptionClass: "text-amber-950/65",
      arrowClass:
        "bg-white text-emerald-950 border-amber-200 group-hover:bg-emerald-950 group-hover:text-white",
      decoration:
        "absolute -left-24 -top-24 w-72 h-72 bg-amber-300/25 rounded-full blur-3xl",
    },
    {
      number: "03",
      title: "Sabores Auténticos",
      description:
        "Te llevamos a las joyas escondidas que solo los locales conocen.",
      icon: Utensils,
      cardClass:
        "bg-white text-emerald-950 border-emerald-950/10 shadow-[0_35px_90px_-45px_rgba(6,78,59,0.4)]",
      iconClass:
        "bg-emerald-100 text-emerald-800 border-emerald-200",
      numberClass: "text-emerald-950/[0.05]",
      descriptionClass: "text-slate-500",
      arrowClass:
        "bg-[#f4f8f5] text-emerald-800 border-emerald-950/10 group-hover:bg-emerald-950 group-hover:text-white",
      decoration:
        "absolute -right-20 -top-24 w-64 h-64 bg-emerald-200/25 rounded-full blur-3xl",
    },
    {
      number: "04",
      title: "Logística Impecable",
      description:
        "Nos encargamos de todos los traslados. Tú solo disfruta el bocado.",
      icon: Map,
      cardClass:
        "bg-cyan-950 text-white border-cyan-800 shadow-[0_35px_90px_-40px_rgba(8,51,68,0.65)]",
      iconClass:
        "bg-cyan-200 text-cyan-950 border-cyan-100",
      numberClass: "text-white/[0.06]",
      descriptionClass: "text-cyan-100/65",
      arrowClass:
        "bg-white/10 text-cyan-100 border-white/10 group-hover:bg-cyan-200 group-hover:text-cyan-950",
      decoration:
        "absolute -left-20 -bottom-24 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f4f8f5] py-24 md:py-32">
      {/* Fondo decorativo */}
      <div className="absolute -top-52 -right-52 h-[42rem] w-[42rem] rounded-full bg-emerald-300/20 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 -left-52 h-[38rem] w-[38rem] rounded-full bg-cyan-300/15 blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-52 right-1/4 h-[36rem] w-[36rem] rounded-full bg-amber-200/20 blur-[150px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Introducción lateral */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 animate-bounce-up">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-800 bg-emerald-950 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-50 shadow-lg shadow-emerald-950/10">
                <Sparkles className="h-4 w-4 text-amber-300" />
                <T>Nuestro Secreto</T>
              </div>

              <h2 className="max-w-xl font-bricolage text-5xl font-black leading-[1.02] tracking-tight text-emerald-950 md:text-6xl">
                <T>Forjamos recuerdos a través del</T>{" "}
                <span className="relative inline-block text-emerald-700">
                  <T>paladar</T>
                  <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-amber-300/70" />
                </span>
                .
              </h2>

              <p className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-slate-500">
                <T>
                  Desde veladas íntimas hasta recorridos callejeros,
                  orquestamos cada elemento para garantizar una experiencia que
                  te dejará con un excelente sabor de boca.
                </T>
              </p>

              <div className="mt-10 hidden items-center gap-4 lg:flex">
                <div className="h-px w-20 bg-emerald-950/20" />

                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-950/40">
                  Experiencias Oasix
                </span>
              </div>
            </div>
          </div>

          {/* Tarjetas apiladas */}
          <div className="space-y-6 lg:col-span-7">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className={`group relative min-h-[300px] overflow-hidden rounded-[2.5rem] border p-7 transition-all duration-500 hover:-translate-y-2 md:rounded-[3rem] md:p-10 ${service.cardClass} animate-bounce-up`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div
                    className={`${service.decoration} pointer-events-none`}
                  />

                  <span
                    className={`absolute -right-2 -top-12 font-bricolage text-[10rem] font-black leading-none md:text-[13rem] ${service.numberClass}`}
                  >
                    {service.number}
                  </span>

                  <div className="relative z-10 flex h-full min-h-[240px] flex-col justify-between">
                    <div className="flex items-start justify-between gap-5">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border shadow-sm ${service.iconClass}`}
                      >
                        <Icon className="h-7 w-7" strokeWidth={2.5} />
                      </div>

                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 group-hover:rotate-45 ${service.arrowClass}`}
                      >
                        <ArrowUpRight
                          className="h-5 w-5"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    <div className="mt-14 max-w-xl">
                      <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] opacity-45">
                        Servicio {service.number}
                      </span>

                      <h3 className="mb-4 font-bricolage text-3xl font-black leading-tight md:text-4xl">
                        <T>{service.title}</T>
                      </h3>

                      <p
                        className={`max-w-xl text-base font-medium leading-relaxed md:text-lg ${service.descriptionClass}`}
                      >
                        <T>{service.description}</T>
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}