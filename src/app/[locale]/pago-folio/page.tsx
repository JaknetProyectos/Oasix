"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocale as useNextLocale } from "next-intl";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";
import { useCart } from "@/context/CartContext";
import {
  ArrowRight,
  ShieldCheck,
  Ticket,
  Sparkles,
} from "lucide-react";

export default function PagoFolioPage() {
  const router = useRouter();
  const locale = useNextLocale();
  const { addToCart } = useCart();

  const [monto, setMonto] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [folio, setFolio] = useState("");
  const [fecha, setFecha] = useState("");

  // Traduciendo los Placeholders mediante hook
  const phMonto = useT("0.00");
  const phTitular = useT("Titular de la Reserva");
  const phEmail = useT("Correo Electrónico");
  const phFolio = useT("Folio");

  const handleMontoChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    setMonto(val);
  };

  const isFormValid =
    parseFloat(monto) > 0 &&
    nombre.trim().length > 0 &&
    email.includes("@") &&
    folio.trim().length > 0 &&
    fecha !== "";

  const handleConfirmarReserva = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    const montoNumerico = parseFloat(monto);

    const customExperienceItem = {
      packageId: 0,
      experience: {
        id: 0,
        title: "Ruta de Autor (Diseño Personalizado)",
        slug: "ruta-autor-personalizada",
        description: `Pago asociado al folio: ${folio}`,
        location: "Destino a Medida",
        images: [
          "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070",
        ],
        category_id: 0,
      },
      levelName: "Folio VIP",
      date: fecha,
      people: 1,
      pricePerPerson: montoNumerico,
      totalPrice: montoNumerico,
    };

    addToCart(customExperienceItem);

    sessionStorage.setItem(
      "explonix_temp_contact",
      JSON.stringify({
        nombre,
        email,
        folio,
      }),
    );

    router.push(`/${locale}/checkout`);
  };

  const bentoInput =
    "w-full bg-[#f4f8f5] border border-emerald-950/10 rounded-2xl px-6 py-5 text-emerald-950 font-bold focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:shadow-xl focus:shadow-emerald-950/5 outline-none transition-all placeholder:text-slate-400 placeholder:font-medium text-lg";

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f5]">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute -top-48 -right-48 w-[42rem] h-[42rem] bg-emerald-300/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -left-52 w-[38rem] h-[38rem] bg-cyan-300/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-[34rem] h-[34rem] bg-amber-200/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-24 items-center">
            {/* Información */}
            <div className="w-full lg:w-5/12 animate-bounce-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950 text-emerald-50 rounded-full mb-6 font-black text-[10px] uppercase tracking-[0.18em] border border-emerald-800 shadow-lg shadow-emerald-950/10">
                <Ticket className="w-4 h-4 text-amber-300" />

                <T>Acceso Directo</T>
              </div>

              <h1 className="text-5xl md:text-6xl font-black font-bricolage text-emerald-950 leading-[1.05] mb-6 tracking-tight">
                <T>Paga tu ruta</T>{" "}
                <span className="text-emerald-700">
                  <T>personalizada</T>
                </span>
                .
              </h1>

              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                <T>
                  Captura los datos de tu folio para completar el pago de tu
                  experiencia creada a medida. Tu reservación ya está lista.
                </T>
              </p>

              <div className="bg-emerald-950 rounded-[2.5rem] md:rounded-[3rem] p-8 text-white shadow-[0_30px_80px_-35px_rgba(6,78,59,0.7)] relative overflow-hidden border border-emerald-800">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

                <div className="absolute top-4 right-4 text-white/[0.04] rotate-12 pointer-events-none">
                  <Sparkles className="w-36 h-36" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-amber-300 text-emerald-950 rounded-2xl flex items-center justify-center shadow-lg shadow-black/10">
                      <ShieldCheck
                        className="w-7 h-7"
                        strokeWidth={2.5}
                      />
                    </div>

                    <p className="font-black text-lg uppercase tracking-tight leading-none">
                      <T>Pago 100% Seguro</T>
                    </p>
                  </div>

                  <p className="text-emerald-100/60 font-medium text-sm leading-relaxed">
                    <T>
                      Protegemos tu información con cifrado seguro para mantener
                      resguardado el pago de tu experiencia gastronómica.
                    </T>
                  </p>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="w-full lg:w-7/12 animate-bounce-up delay-150">
              <form
                onSubmit={handleConfirmarReserva}
                className="bg-white/95 backdrop-blur-xl p-7 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_35px_100px_-45px_rgba(6,78,59,0.55)] border border-emerald-950/10 relative overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-10 p-7 md:p-8 bg-emerald-50 rounded-[2rem] md:rounded-[2.5rem] border border-emerald-200 text-center group transition-all focus-within:bg-white focus-within:border-emerald-600 focus-within:ring-4 focus-within:ring-emerald-500/10">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-emerald-700 mb-3 block">
                      <T>Monto del Folio (MXN)</T>
                    </label>

                    <div className="flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-black text-emerald-700/40 mr-2 font-bricolage">
                        $
                      </span>

                      <input
                        type="text"
                        value={monto}
                        onChange={handleMontoChange}
                        placeholder={phMonto}
                        required
                        inputMode="decimal"
                        className="bg-transparent border-none text-5xl md:text-6xl font-black font-bricolage text-emerald-800 outline-none w-full text-center placeholder:text-emerald-700/10 min-w-0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <input
                      type="text"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      required
                      className={bentoInput}
                      placeholder={phTitular}
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={bentoInput}
                      placeholder={phEmail}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                    <div className="relative">
                      <input
                        type="text"
                        value={folio}
                        onChange={(e) =>
                          setFolio(e.target.value.toUpperCase())
                        }
                        required
                        className={`${bentoInput} uppercase pr-14`}
                        placeholder={phFolio}
                      />

                      <Ticket className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-700/30 pointer-events-none" />
                    </div>

                    <input
                      type="date"
                      value={fecha}
                      onChange={(e) => setFecha(e.target.value)}
                      required
                      className={`${bentoInput} text-slate-500 focus:text-emerald-950`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className="btn-3d w-full bg-amber-300 text-emerald-950 min-h-20 px-6 rounded-[2rem] font-black text-xl md:text-2xl hover:bg-amber-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-amber-300 flex items-center justify-center gap-4 shadow-xl shadow-amber-300/20"
                  >
                    <T>Continuar al Pago</T>

                    <ArrowRight
                      className="w-7 h-7 md:w-8 md:h-8"
                      strokeWidth={3}
                    />
                  </button>

                  <div className="mt-5 flex items-center justify-center gap-2 text-slate-400">
                    <ShieldCheck className="w-4 h-4" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
                      <T>Información protegida durante el proceso</T>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}