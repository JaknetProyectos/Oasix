"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChefHat,
  Globe2,
  Menu,
  Route,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  WandSparkles,
  X,
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { T } from "@/components/T";

export function Header() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { getItemCount } = useCart();

  const itemCount = getItemCount();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // CONTROL DE IDIOMA PRESERVANDO EL HASH ANCHOR
  const handleLocaleSwitch = (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    const newLocale = locale === "es" ? "en" : "es";

    if (!pathname) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;

    const newPath = segments.join("/") || "/";

    const currentHash =
      typeof window !== "undefined" ? window.location.hash : "";

    router.push(newPath + currentHash);
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4 md:top-5 md:px-6">
        <div
          className={`pointer-events-auto mx-auto flex w-full max-w-7xl items-center gap-3 border transition-all duration-500 ${
            isScrolled
              ? "rounded-[1.5rem] border-emerald-950/10 bg-white/90 p-2 shadow-[0_22px_70px_-35px_rgba(6,78,59,0.5)] backdrop-blur-2xl"
              : "rounded-[1.75rem] border-white/80 bg-white/95 p-2.5 shadow-[0_18px_60px_-35px_rgba(6,78,59,0.4)]"
          }`}
        >
          {/* Identidad */}
          <Link
            href={`/${locale}/`}
            className="group flex min-w-0 shrink-0 items-center gap-3 rounded-[1.25rem] px-1.5 py-1.5 md:min-w-[220px]"
          >
            <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[1.15rem] bg-emerald-950 text-amber-300 shadow-lg shadow-emerald-950/20 transition-all duration-300 group-hover:-rotate-3 group-hover:scale-105">
              <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-cyan-300/20 blur-lg" />

              <UtensilsCrossed
                className="relative z-10 h-5 w-5"
                strokeWidth={2.5}
              />
            </div>

            <div className="hidden min-w-0 sm:block">
              <span className="block font-bricolage text-2xl font-black leading-none tracking-tight text-emerald-950">
                Oa<span className="text-emerald-700">six</span>
              </span>

              <span className="mt-1.5 block truncate text-[8px] font-black uppercase tracking-[0.21em] text-emerald-950/40">
                <T>México servido a tu manera</T>
              </span>
            </div>
          </Link>

          {/* Navegación de escritorio */}
          <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            <Link
              href={`/${locale}/experiencias`}
              className="group flex min-w-[210px] items-center gap-3 rounded-[1.25rem] border border-transparent px-4 py-2.5 transition-all hover:border-emerald-950/10 hover:bg-[#f4f8f5]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-800 transition-colors group-hover:bg-emerald-950 group-hover:text-amber-300">
                <Route className="h-5 w-5" strokeWidth={2.4} />
              </div>

              <div>
                <span className="block text-sm font-black leading-tight text-emerald-950">
                  <T>Rutas Culinarias</T>
                </span>

                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                  <T>Explora experiencias</T>
                </span>
              </div>
            </Link>

            <Link
              href={`/${locale}/#cotizar`}
              className="group flex min-w-[210px] items-center gap-3 rounded-[1.25rem] border border-transparent px-4 py-2.5 transition-all hover:border-emerald-950/10 hover:bg-[#f4f8f5]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 transition-colors group-hover:bg-amber-300 group-hover:text-emerald-950">
                <WandSparkles
                  className="h-5 w-5"
                  strokeWidth={2.4}
                />
              </div>

              <div>
                <span className="block text-sm font-black leading-tight text-emerald-950">
                  <T>Cata a Medida</T>
                </span>

                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.13em] text-slate-400">
                  <T>Diseña tu recorrido</T>
                </span>
              </div>
            </Link>
          </nav>

          {/* Acciones */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            {/* Idioma */}
            <button
              type="button"
              onClick={handleLocaleSwitch}
              aria-label="Cambiar idioma"
              className="group hidden h-12 items-center gap-2 rounded-[1.15rem] border border-emerald-950/10 bg-[#f4f8f5] px-4 text-emerald-950 transition-all hover:border-emerald-950 hover:bg-emerald-950 hover:text-white sm:flex"
            >
              <Globe2 className="h-4 w-4" strokeWidth={2.5} />

              <span className="text-[10px] font-black tracking-[0.15em]">
                {locale === "es" ? "EN" : "ES"}
              </span>
            </button>

            {/* Carrito */}
            <Link
              href={`/${locale}/carrito`}
              className="group hidden h-12 items-center gap-3 rounded-[1.15rem] bg-amber-300 px-4 text-emerald-950 shadow-lg shadow-amber-300/20 transition-all hover:bg-amber-200 md:flex"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-950 text-white">
                <ShoppingBag
                  className="h-4 w-4"
                  strokeWidth={2.5}
                />

                {itemCount > 0 && (
                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-amber-300 bg-white px-1 text-[9px] font-black text-emerald-950">
                    {itemCount}
                  </span>
                )}
              </div>

              <div className="text-left">
                <span className="block text-[9px] font-black uppercase tracking-[0.14em] text-emerald-900/55">
                  <T>Mi selección</T>
                </span>

                <span className="block text-sm font-black leading-tight">
                  <T>Revisar orden</T>
                </span>
              </div>

              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
                strokeWidth={2.5}
              />
            </Link>

            {/* Idioma móvil */}
            <button
              type="button"
              onClick={handleLocaleSwitch}
              aria-label="Cambiar idioma"
              className="flex h-11 min-w-11 items-center justify-center rounded-xl border border-emerald-950/10 bg-[#f4f8f5] px-3 text-[10px] font-black tracking-[0.12em] text-emerald-950 transition-colors hover:bg-emerald-950 hover:text-white sm:hidden"
            >
              {locale === "es" ? "EN" : "ES"}
            </button>

            {/* Menú móvil */}
            <button
              type="button"
              aria-label="Abrir menú"
              aria-expanded={mobileMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 text-white shadow-lg shadow-emerald-950/20 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Fondo del menú móvil */}
      <button
        type="button"
        aria-label="Cerrar menú"
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-[59] bg-emerald-950/55 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          mobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Menú móvil lateral */}
      <aside
        className={`fixed bottom-0 right-0 top-0 z-[60] w-full max-w-md overflow-hidden bg-[#f4f8f5] shadow-[-30px_0_90px_-40px_rgba(6,78,59,0.7)] transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-32 h-96 w-96 rounded-full bg-amber-200/25 blur-3xl" />

        <div className="relative z-10 flex min-h-full flex-col p-6 sm:p-8">
          {/* Cabecera */}
          <div className="flex items-center justify-between">
            <Link
              href={`/${locale}/`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-amber-300">
                <ChefHat className="h-6 w-6" strokeWidth={2.5} />
              </div>

              <div>
                <span className="block font-bricolage text-3xl font-black leading-none tracking-tight text-emerald-950">
                  Oa<span className="text-emerald-700">six</span>
                </span>

                <span className="mt-1.5 block text-[8px] font-black uppercase tracking-[0.2em] text-emerald-950/40">
                  <T>Sabores que se recorren</T>
                </span>
              </div>
            </Link>

            <button
              type="button"
              aria-label="Cerrar menú"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-950/10 bg-white text-emerald-950 shadow-sm"
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Introducción */}
          <div className="mt-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 text-[9px] font-black uppercase tracking-[0.18em] text-emerald-800">
              <Sparkles className="h-3.5 w-3.5" />
              <T>Descubre otra forma de viajar</T>
            </div>

            <p className="max-w-sm font-bricolage text-3xl font-black leading-tight tracking-tight text-emerald-950">
              <T>
                Elige una ruta, crea una experiencia y disfruta México a tu
                ritmo.
              </T>
            </p>
          </div>

          {/* Navegación */}
          <nav className="my-auto space-y-3 py-10">
            <Link
              href={`/${locale}/`}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between rounded-[1.5rem] border border-emerald-950/10 bg-white p-4 shadow-sm transition-all hover:border-emerald-300"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 text-[10px] font-black text-amber-300">
                  01
                </span>

                <div>
                  <span className="block font-bricolage text-xl font-black text-emerald-950">
                    <T>Inicio</T>
                  </span>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    <T>Volver a Oasix</T>
                  </span>
                </div>
              </div>

              <ArrowUpRight
                className="h-5 w-5 text-emerald-950/25 transition-all group-hover:rotate-45 group-hover:text-emerald-700"
                strokeWidth={2.5}
              />
            </Link>

            <Link
              href={`/${locale}/experiencias`}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between rounded-[1.5rem] border border-emerald-950/10 bg-white p-4 shadow-sm transition-all hover:border-emerald-300"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-[10px] font-black text-emerald-800">
                  02
                </span>

                <div>
                  <span className="block font-bricolage text-xl font-black text-emerald-950">
                    <T>Rutas Culinarias</T>
                  </span>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    <T>Encuentra tu próxima ruta</T>
                  </span>
                </div>
              </div>

              <ArrowUpRight
                className="h-5 w-5 text-emerald-950/25 transition-all group-hover:rotate-45 group-hover:text-emerald-700"
                strokeWidth={2.5}
              />
            </Link>

            <Link
              href={`/${locale}/#cotizar`}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between rounded-[1.5rem] border border-amber-200 bg-amber-50 p-4 shadow-sm transition-all hover:border-amber-300"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300 text-[10px] font-black text-emerald-950">
                  03
                </span>

                <div>
                  <span className="block font-bricolage text-xl font-black text-emerald-950">
                    <T>Cata a Medida</T>
                  </span>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-amber-900/50">
                    <T>Creamos algo solo para ti</T>
                  </span>
                </div>
              </div>

              <ArrowUpRight
                className="h-5 w-5 text-emerald-950/25 transition-all group-hover:rotate-45 group-hover:text-emerald-700"
                strokeWidth={2.5}
              />
            </Link>
          </nav>

          {/* Carrito móvil */}
          <div className="rounded-[1.75rem] bg-emerald-950 p-3 shadow-xl shadow-emerald-950/20">
            <Link
              href={`/${locale}/carrito`}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex min-h-16 items-center justify-between gap-4 rounded-[1.25rem] border border-white/10 bg-white/[0.07] px-4"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-amber-300 text-emerald-950">
                  <ShoppingBag
                    className="h-5 w-5"
                    strokeWidth={2.5}
                  />

                  {itemCount > 0 && (
                    <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-emerald-950 bg-white px-1 text-[9px] font-black">
                      {itemCount}
                    </span>
                  )}
                </div>

                <div>
                  <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-emerald-100/45">
                    <T>Tu selección</T>
                  </span>

                  <span className="block font-bricolage text-lg font-black text-white">
                    <T>Revisar orden</T>
                  </span>
                </div>
              </div>

              <ArrowUpRight
                className="h-5 w-5 text-amber-300 transition-transform duration-300 group-hover:rotate-45"
                strokeWidth={2.5}
              />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}