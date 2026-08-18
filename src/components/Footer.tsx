"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { T } from "@/components/T";
import {
  Mail,
  Phone,
  Compass,
  ArrowUpRight,
  Sparkles,
  MapPin,
} from "lucide-react";

export function Footer() {
  const locale = useLocale();

  return (
    <footer className="relative mx-2 mt-10 overflow-hidden rounded-t-[2.5rem] bg-emerald-950 pb-10 pt-10 text-white lg:mx-4 lg:rounded-t-[4rem]">
      {/* Decoraciones */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-cyan-300/10 blur-[150px]" />
      <div className="pointer-events-none absolute -bottom-52 -left-44 h-[36rem] w-[36rem] rounded-full bg-amber-300/10 blur-[150px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Bloque superior de marca */}
        <div className="relative mb-14 overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.06] px-7 py-10 backdrop-blur-sm md:rounded-[3rem] md:px-10 md:py-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-100">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Experiencias Oasix
              </div>

              <Link
                href={`/${locale}/`}
                className="group mb-6 inline-flex items-center gap-3"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-emerald-950 shadow-lg shadow-black/10 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  <Compass className="h-7 w-7" strokeWidth={2.5} />
                </div>

                <span className="font-bricolage text-4xl font-black tracking-tight text-white">
                  Oa<span className="text-amber-300">six</span>
                </span>
              </Link>

              <p className="max-w-2xl text-base font-medium leading-relaxed text-emerald-100/65 md:text-lg">
                <T>
                  Tu entrada a experiencias únicas, sabores memorables y
                  rincones extraordinarios de México. Viaja con confianza y
                  disfruta cada momento a tu manera.
                </T>
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <a
                href="mailto:atencion@oasix.com.mx"
                className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 transition-all hover:bg-white/[0.12]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-200 text-emerald-950">
                    <Mail className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-emerald-100/45">
                      Correo
                    </span>

                    <span className="text-sm font-bold text-white">
                      atencion@oasix.com.mx
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  className="h-4 w-4 text-white/30 transition-all group-hover:rotate-45 group-hover:text-amber-300"
                  strokeWidth={2.5}
                />
              </a>

              <a
                href="tel:55 1940 6598"
                className="group flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-4 transition-all hover:bg-white/[0.12]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-200 text-cyan-950">
                    <Phone className="h-5 w-5" strokeWidth={2.5} />
                  </div>

                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-emerald-100/45">
                      Teléfono
                    </span>

                    <span className="text-sm font-bold text-white">
                      +52 (55) 1940 6598
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  className="h-4 w-4 text-white/30 transition-all group-hover:rotate-45 group-hover:text-amber-300"
                  strokeWidth={2.5}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Navegación */}
        <div className="mb-14 grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <span className="mb-2 font-bricolage text-lg font-black text-white">
              <T>Descubrir</T>
            </span>

            <Link
              href={`/${locale}/experiencias`}
              className="group flex w-fit items-center gap-2 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/40 transition-colors group-hover:bg-amber-300" />
              <T>Rutas Culinarias</T>
            </Link>

            <Link
              href={`/${locale}/#cotizar`}
              className="group flex w-fit items-center gap-2 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/40 transition-colors group-hover:bg-amber-300" />
              <T>Cata a Medida</T>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <span className="mb-2 font-bricolage text-lg font-black text-white">
              <T>Atención al Viajero</T>
            </span>

            <a
              href="mailto:atencion@oasix.com.mx"
              className="flex w-fit items-center gap-3 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <Mail className="h-4 w-4 text-emerald-300" />
              atencion@oasix.com.mx
            </a>

            <a
              href="tel:55 1940 6598"
              className="flex w-fit items-center gap-3 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <Phone className="h-4 w-4 text-cyan-200" />
              +52 (55) 1940 6598
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Av.+Rio+Consulado+Cto+Interior+516+Col+Tlatilco+Azcapotzalco"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-start gap-3 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300 text-left max-w-[300px]"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
              <span>
                Av. Rio Consulado Cto Interior 516, Oficina 102<br />
                Col. Tlatilco, Azcapotzalco, C.P. 02860
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="mb-2 font-bricolage text-lg font-black text-white">
              <T>Legal</T>
            </span>

            <Link
              href={`/${locale}/aviso-de-privacidad`}
              className="group flex w-fit items-center gap-2 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/40 transition-colors group-hover:bg-amber-300" />
              <T>Aviso de Privacidad</T>
            </Link>

            <Link
              href={`/${locale}/terminos-y-condiciones`}
              className="group flex w-fit items-center gap-2 text-sm font-medium text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/40 transition-colors group-hover:bg-amber-300" />
              <T>Términos y Condiciones</T>
            </Link>

            <Link
              href={`/${locale}/politica-de-cancelacion`}
              className="group flex w-fit items-start gap-2 text-sm font-medium leading-relaxed text-emerald-100/55 transition-colors hover:text-amber-300"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/40 transition-colors group-hover:bg-amber-300" />
              <T>Políticas de Reembolsos y Cancelaciones</T>
            </Link>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          {/* Payment Icons */}
          <div className="flex items-center gap-3">
            <span className="mr-1 text-[9px] font-black uppercase tracking-[0.16em] text-emerald-100/35">
              Pago seguro
            </span>

            <div className="flex h-9 items-center justify-center rounded-lg border border-white/10 bg-white px-3">
              <svg
                className="h-4"
                viewBox="0 0 780 500"
                fill="none"
                aria-label="Visa"
              >
                <rect width="780" height="500" rx="40" fill="white" />
                <path
                  fill="#1434CB"
                  d="M293.2 348.7l33.3-190.4h53.3l-33.3 190.4h-53.3zM500.8 163c-10.5-3.9-27-8.1-47.6-8.1-52.4 0-89.3 26.4-89.6 64.2-.3 28 26.5 43.6 46.7 52.9 20.7 9.5 27.7 15.6 27.6 24.1-.1 13-16.6 19-31.9 19-21.3 0-32.6-3-50.1-10.3l-6.9-3.1-7.5 43.8c12.4 5.4 35.5 10.1 59.4 10.4 55.7 0 91.9-26.1 92.3-66.5.2-22.2-14-39.1-44.6-53-18.6-9-30-15-29.9-24.1 0-8.1 9.6-16.7 30.5-16.7 17.4-.3 30 3.5 39.8 7.5l4.8 2.3 7.2-42.4h.8zM581.8 158.3h-41c-12.7 0-22.2 3.5-27.8 16.2l-78.8 178.2h55.7l11.1-29.1h68.1l6.5 29.1H624l-42.2-194.4zm-65.6 125.2c4.4-11.2 21.3-54.4 21.3-54.4-.3.5 4.4-11.4 7.1-18.7l3.6 16.9s10.2 46.6 12.4 56.2h-44.4z"
                />
                <path
                  fill="#1434CB"
                  d="M239.5 158.3L187.4 289l-5.5-26.8c-9.6-30.7-39.5-64-73-80.6l47.5 166.9h56l83.2-190.2h-56.1z"
                />
                <path
                  fill="#F7B600"
                  d="M146.9 158.3H61.3l-.6 3.5c66.4 16 110.3 54.7 128.5 101.2l-18.5-88.8c-3.2-12.1-12.5-15.5-23.8-15.9z"
                />
              </svg>
            </div>

            <div className="flex h-9 items-center justify-center rounded-lg border border-white/10 bg-white px-3">
              <svg
                className="h-4"
                viewBox="0 0 152 100"
                fill="none"
                aria-label="Mastercard"
              >
                <rect width="152" height="100" rx="8" fill="white" />
                <circle cx="55" cy="50" r="30" fill="#EB001B" />
                <circle cx="97" cy="50" r="30" fill="#F79E1B" />
                <path
                  d="M76 27.5C82.6 32.8 87 40.8 87 50C87 59.2 82.6 67.2 76 72.5C69.4 67.2 65 59.2 65 50C65 40.8 69.4 32.8 76 27.5Z"
                  fill="#FF5F00"
                />
              </svg>
            </div>
          </div>

          <div className="text-center text-sm font-medium text-emerald-100/40 md:text-right">
            <span>
              © {new Date().getFullYear()} Oasix.{" "}
              <T>Todos los derechos reservados.</T>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
