"use client";

import { T } from "@/components/T";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowRight,
  Calendar,
  MapPin,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function CarritoPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const locale = useLocale();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");

    return date.toLocaleDateString("es-MX", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f4]">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decoración */}
        <div className="absolute -top-32 -left-32 w-[34rem] h-[34rem] bg-emerald-300/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute top-1/3 -right-52 w-[38rem] h-[38rem] bg-cyan-300/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-200/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 animate-bounce-up">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950 text-emerald-50 rounded-full mb-4 font-black text-[10px] uppercase tracking-[0.18em] border border-emerald-800 shadow-lg shadow-emerald-950/10">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                <T>Experiencias elegidas para ti</T>
              </div>

              <h1 className="text-5xl md:text-6xl font-black font-bricolage text-emerald-950 tracking-tight">
                <T>Tu Orden</T>
              </h1>
            </div>

            {cart.items.length > 0 && (
              <button
                onClick={clearCart}
                className="group flex items-center gap-3 text-slate-500 hover:text-emerald-800 font-bold text-sm transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-emerald-950/10 shadow-sm flex items-center justify-center group-hover:bg-emerald-950 group-hover:text-white group-hover:border-emerald-950 transition-all">
                  <Trash2 className="w-4 h-4" />
                </div>

                <T>Vaciar selección</T>
              </button>
            )}
          </div>

          {cart.items.length === 0 ? (
            <div className="bg-white/90 backdrop-blur-xl rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 text-center shadow-[0_30px_80px_-40px_rgba(6,78,59,0.35)] border border-emerald-950/10 animate-bounce-up relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="w-24 h-24 bg-[#edf6f0] rounded-[2rem] flex items-center justify-center mx-auto mb-7 border border-emerald-950/5 shadow-inner">
                  <ShoppingBag
                    className="w-10 h-10 text-emerald-700"
                    strokeWidth={1.5}
                  />
                </div>

                <h2 className="text-3xl font-black font-bricolage text-emerald-950 mb-4">
                  <T>Tu bolsa está vacía</T>
                </h2>

                <p className="text-slate-500 font-medium mb-10 text-lg max-w-xl mx-auto leading-relaxed">
                  <T>
                    Las experiencias están listas, solo necesitas elegir tu
                    primera ruta.
                  </T>
                </p>

                <Link
                  href={`/${locale}/experiencias`}
                  className="btn-3d bg-emerald-950 text-white px-10 py-5 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-xl shadow-emerald-950/20 hover:bg-emerald-800 transition-colors"
                >
                  <T>Explorar Rutas</T>

                  <ArrowRight className="w-5 h-5" strokeWidth={3} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Lista de Experiencias */}
              <div className="lg:col-span-8 space-y-6">
                {cart.items.map((item, idx) => {
                  const itemImage =
                    item.experience.images?.[0] || "/placeholder.jpg";

                  return (
                    <div
                      key={`${item.packageId}-${item.date}`}
                      className="group bg-white/95 backdrop-blur-sm rounded-[2rem] md:rounded-[2.75rem] p-4 shadow-[0_20px_60px_-35px_rgba(6,78,59,0.3)] border border-emerald-950/10 flex flex-col sm:flex-row gap-6 animate-bounce-up hover:-translate-y-1 hover:shadow-[0_25px_70px_-35px_rgba(6,78,59,0.4)] transition-all duration-300"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="w-full sm:w-48 aspect-square relative rounded-[1.75rem] md:rounded-[2.25rem] overflow-hidden shrink-0 bg-emerald-50">
                        <Image
                          src={itemImage}
                          alt={item.experience.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 via-transparent to-transparent pointer-events-none" />
                      </div>

                      <div className="flex-1 py-2 flex flex-col">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <div className="bg-amber-100 text-amber-900 px-3 py-1.5 rounded-full font-black text-[10px] uppercase tracking-wider border border-amber-200">
                            <T>{item.levelName}</T>
                          </div>

                          <button
                            onClick={() =>
                              removeFromCart(item.packageId, item.date)
                            }
                            className="w-9 h-9 rounded-full bg-[#f4f8f4] flex items-center justify-center text-slate-400 hover:text-white hover:bg-emerald-950 transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        <h3 className="text-2xl font-black font-bricolage text-emerald-950 mb-4 leading-tight">
                          <T>{item.experience.title}</T>
                        </h3>

                        <div className="flex flex-wrap gap-3 mb-6">
                          <div className="flex items-center gap-2 bg-[#f4f8f4] px-3 py-2 rounded-xl text-xs font-bold text-slate-500 border border-emerald-950/5">
                            <MapPin
                              className="w-3.5 h-3.5 text-emerald-700"
                              strokeWidth={3}
                            />

                            {item.experience.location}
                          </div>

                          <div className="flex items-center gap-2 bg-[#f4f8f4] px-3 py-2 rounded-xl text-xs font-bold text-slate-500 uppercase border border-emerald-950/5">
                            <Calendar
                              className="w-3.5 h-3.5 text-emerald-700"
                              strokeWidth={3}
                            />

                            <T>{formatDate(item.date)}</T>
                          </div>
                        </div>

                        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4 mt-auto bg-[#f4f8f4] p-2.5 rounded-2xl border border-emerald-950/5">
                          <div className="flex items-center justify-center gap-3 px-1">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.packageId,
                                  item.date,
                                  item.people - 1,
                                )
                              }
                              disabled={item.people <= 1}
                              className="w-10 h-10 rounded-xl bg-white border border-emerald-950/10 shadow-sm flex items-center justify-center text-emerald-950 hover:bg-emerald-950 hover:text-white disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-emerald-950 transition-all"
                            >
                              <Minus
                                className="w-4 h-4"
                                strokeWidth={3}
                              />
                            </button>

                            <span className="font-black text-xl w-7 text-center font-bricolage text-emerald-950">
                              {item.people}
                            </span>

                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.packageId,
                                  item.date,
                                  item.people + 1,
                                )
                              }
                              className="w-10 h-10 rounded-xl bg-emerald-950 shadow-md shadow-emerald-950/10 flex items-center justify-center text-white hover:bg-emerald-800 transition-all"
                            >
                              <Plus className="w-4 h-4" strokeWidth={3} />
                            </button>
                          </div>

                          <div className="px-3 text-center xs:text-right">
                            <p className="text-2xl font-black text-emerald-800 font-bricolage leading-none">
                              {formatPrice(item.totalPrice)}
                            </p>

                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                              IVA Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Resumen Bento */}
              <div className="lg:col-span-4 sticky top-32">
                <div className="bg-emerald-950 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 text-white shadow-[0_30px_80px_-30px_rgba(6,78,59,0.65)] relative overflow-hidden animate-bounce-up delay-200 border border-emerald-800">
                  <div className="absolute -right-16 -bottom-16 w-56 h-56 bg-cyan-300/15 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -left-20 -top-20 w-52 h-52 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/10 text-emerald-100 text-[10px] font-black uppercase tracking-[0.16em] mb-5">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <T>Resumen de compra</T>
                    </div>

                    <h2 className="text-3xl font-black font-bricolage mb-8 tracking-tight">
                      <T>Total de la Cuenta</T>
                    </h2>

                    <div className="space-y-4 mb-10">
                      <div className="flex justify-between items-center text-emerald-200/70 font-bold text-sm uppercase tracking-widest">
                        <T>Subtotal</T>

                        <span className="text-white">
                          {formatPrice(cart.total)}
                        </span>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
                        <span className="text-emerald-300 font-black uppercase tracking-widest text-xs">
                          <T>Total Final</T>
                        </span>

                        <span className="text-4xl xl:text-5xl font-black font-bricolage text-amber-300 leading-none break-words">
                          {formatPrice(cart.total)}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/${locale}/checkout`}
                      className="btn-3d w-full min-h-16 px-5 rounded-2xl bg-amber-300 text-emerald-950 font-black text-xl flex items-center justify-center gap-3 hover:bg-amber-200 transition-colors shadow-xl shadow-black/10"
                    >
                      <T>Pagar ahora</T>

                      <ArrowRight className="w-6 h-6" strokeWidth={3} />
                    </Link>

                    <p className="mt-5 text-center text-xs text-emerald-100/55 font-medium">
                      <T>Pago protegido y confirmación inmediata</T>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}