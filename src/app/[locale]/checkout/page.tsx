"use client";

import { useLocale } from "next-intl";
import { useState, Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import {
  CheckCircle,
  Loader2,
  User,
  FileText,
  Lock,
  CreditCard,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";

function CheckoutContent() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const finalTotal = cart.total;

  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [billingInfo, setBillingInfo] = useState({
    pais: "",
    direccion: "",
    localidad: "",
    estado: "",
    codigo_postal: "",
  });

  const [addNotes, setAddNotes] = useState(false);
  const [orderNotes, setOrderNotes] = useState("");

  const [cardInfo, setCardInfo] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const locale = useLocale();

  useEffect(() => {
    const savedData = sessionStorage.getItem("explonix_temp_contact");

    if (savedData) {
      const { nombre, email, folio } = JSON.parse(savedData);

      setContactInfo((prev) => ({
        ...prev,
        firstName: nombre,
        email: email,
      }));

      setOrderNotes(`Pago referente al Folio: ${folio}`);
      setAddNotes(true);
      sessionStorage.removeItem("explonix_temp_contact");
    }
  }, []);

  const phNombre = useT("Nombre");
  const phApellidos = useT("Apellidos");
  const phEmail = useT("Email");
  const phTelefono = useT("Teléfono");
  const phPais = useT("País");
  const phDireccion = useT("Dirección");
  const phLocalidad = useT("Ciudad");
  const phEstado = useT("Estado");
  const phCP = useT("C.P.");
  const phTarjeta = useT("Número de tarjeta");
  const phNombreTarjeta = useT("Nombre en tarjeta");
  const phFecha = useT("MM/AA");
  const phCvv = useT("CVV");
  const phNotas = useT(
    "Ej: Soy alérgico a los mariscos, mesa cerca de la ventana...",
  );
  const textProcesando = useT("Cocinando pago...");
  const textPagar = useT("Confirmar Pago");

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(price);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          locale,
          contactInfo,
          billingInfo,
          orderNotes: addNotes ? orderNotes : null,
          cart,
          cardInfo,
          formattedTotal: formatPrice(finalTotal),
          manualFolioData: null,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Error procesando el pago");
      }

      setShowSuccess(true);
      clearCart();
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Error desconocido";

      alert(`Error al procesar el pago: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const isFormValid =
    contactInfo.firstName &&
    contactInfo.email &&
    contactInfo.phone &&
    billingInfo.pais &&
    billingInfo.direccion &&
    billingInfo.localidad &&
    billingInfo.estado &&
    billingInfo.codigo_postal &&
    cardInfo.number.length >= 15 &&
    cardInfo.name &&
    cardInfo.expiry.length === 5 &&
    cardInfo.cvv.length >= 3 &&
    cart.items.length > 0;

  const handleExpiryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    let val = e.target.value.replace(/\D/g, "");

    if (val.length > 4) {
      val = val.slice(0, 4);
    }

    if (val.length > 2) {
      val = `${val.slice(0, 2)}/${val.slice(2)}`;
    }

    setCardInfo({
      ...cardInfo,
      expiry: val,
    });
  };

  const bentoInput =
    "w-full bg-[#f4f8f5] border border-emerald-950/10 rounded-2xl px-5 py-4 text-emerald-950 font-bold shadow-inner shadow-emerald-950/[0.02] focus:border-emerald-600 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none placeholder:text-slate-400 placeholder:font-medium";

  if (showSuccess) {
    return (
      <main className="flex-1 pt-40 pb-24 flex items-center justify-center px-6 relative overflow-hidden bg-[#f4f8f5]">
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] bg-emerald-300/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] bg-cyan-300/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-200/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="max-w-2xl w-full text-center bg-white/90 backdrop-blur-xl border border-emerald-950/10 rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 shadow-[0_35px_100px_-45px_rgba(6,78,59,0.55)] animate-bounce-up relative z-10 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="w-24 h-24 bg-emerald-950 text-emerald-100 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-950/25 rotate-3">
              <CheckCircle className="w-12 h-12" strokeWidth={2.5} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-black uppercase tracking-[0.18em]">
              <Sparkles className="w-3.5 h-3.5" />
              <T>Reservación confirmada</T>
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-bricolage mb-5 text-emerald-950 tracking-tight">
              <T>¡Buen Provecho!</T>
            </h1>

            <p className="text-slate-500 font-medium mb-10 text-lg md:text-xl leading-relaxed max-w-xl mx-auto">
              <T>
                Tu pago quedó confirmado. Enviamos los detalles de tu
                experiencia gastronómica a tu correo electrónico.
              </T>
            </p>

            <Link
              href={`/${locale}/`}
              className="btn-3d bg-emerald-950 text-white font-black rounded-2xl px-10 py-5 text-lg transition-colors inline-flex items-center gap-3 hover:bg-emerald-800 shadow-xl shadow-emerald-950/20"
            >
              <T>Volver al Inicio</T>
              <ArrowRight className="w-5 h-5" strokeWidth={3} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 pt-32 pb-24 relative overflow-hidden bg-[#f4f8f5]">
      <div className="absolute -top-40 -left-40 w-[38rem] h-[38rem] bg-emerald-300/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-52 w-[40rem] h-[40rem] bg-cyan-300/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-200/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-12 animate-bounce-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950 text-emerald-50 rounded-full mb-4 font-black text-[10px] uppercase tracking-[0.18em] border border-emerald-800 shadow-lg shadow-emerald-950/10">
            <Lock className="w-3.5 h-3.5 text-emerald-300" />
            <T>Proceso protegido</T>
          </div>

          <h1 className="text-5xl md:text-6xl font-black font-bricolage text-emerald-950 tracking-tight">
            <T>Checkout</T>
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-8 space-y-8 animate-bounce-up delay-100">
            {/* Panel Contacto Bento */}
            <div className="bg-white/95 backdrop-blur-sm p-7 md:p-10 border border-emerald-950/10 shadow-[0_25px_70px_-40px_rgba(6,78,59,0.35)] rounded-[2.25rem] md:rounded-[3rem]">
              <h2 className="text-2xl font-black font-bricolage mb-8 flex items-center gap-3 text-emerald-950 tracking-tight">
                <div className="w-11 h-11 bg-emerald-100 rounded-2xl flex items-center justify-center border border-emerald-200">
                  <User
                    className="text-emerald-800 w-5 h-5"
                    strokeWidth={2.5}
                  />
                </div>

                <T>¿Quién viaja?</T>
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  value={contactInfo.firstName}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      firstName: e.target.value,
                    })
                  }
                  placeholder={phNombre}
                  required
                  className={bentoInput}
                />

                <input
                  value={contactInfo.lastName}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      lastName: e.target.value,
                    })
                  }
                  placeholder={phApellidos}
                  className={bentoInput}
                />

                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      email: e.target.value,
                    })
                  }
                  placeholder={phEmail}
                  required
                  className={bentoInput}
                />

                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) =>
                    setContactInfo({
                      ...contactInfo,
                      phone: e.target.value,
                    })
                  }
                  placeholder={phTelefono}
                  required
                  className={bentoInput}
                />
              </div>
            </div>

            {/* Panel Facturación Bento */}
            <div className="bg-white/95 backdrop-blur-sm p-7 md:p-10 border border-emerald-950/10 shadow-[0_25px_70px_-40px_rgba(6,78,59,0.35)] rounded-[2.25rem] md:rounded-[3rem]">
              <h2 className="text-2xl font-black font-bricolage mb-8 flex items-center gap-3 text-emerald-950 tracking-tight">
                <div className="w-11 h-11 bg-cyan-100 rounded-2xl flex items-center justify-center border border-cyan-200">
                  <FileText
                    className="text-cyan-800 w-5 h-5"
                    strokeWidth={2.5}
                  />
                </div>

                <T>Datos de Facturación</T>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                <input
                  placeholder={phPais}
                  required
                  value={billingInfo.pais}
                  onChange={(e) =>
                    setBillingInfo({
                      ...billingInfo,
                      pais: e.target.value,
                    })
                  }
                  className={`md:col-span-12 ${bentoInput}`}
                />

                <input
                  placeholder={phDireccion}
                  required
                  value={billingInfo.direccion}
                  onChange={(e) =>
                    setBillingInfo({
                      ...billingInfo,
                      direccion: e.target.value,
                    })
                  }
                  className={`md:col-span-12 ${bentoInput}`}
                />

                <input
                  placeholder={phLocalidad}
                  required
                  value={billingInfo.localidad}
                  onChange={(e) =>
                    setBillingInfo({
                      ...billingInfo,
                      localidad: e.target.value,
                    })
                  }
                  className={`md:col-span-4 ${bentoInput}`}
                />

                <input
                  placeholder={phEstado}
                  required
                  value={billingInfo.estado}
                  onChange={(e) =>
                    setBillingInfo({
                      ...billingInfo,
                      estado: e.target.value,
                    })
                  }
                  className={`md:col-span-4 ${bentoInput}`}
                />

                <input
                  placeholder={phCP}
                  required
                  value={billingInfo.codigo_postal}
                  onChange={(e) =>
                    setBillingInfo({
                      ...billingInfo,
                      codigo_postal: e.target.value,
                    })
                  }
                  className={`md:col-span-4 ${bentoInput}`}
                />
              </div>

              <div className="mt-10 pt-8 border-t border-emerald-950/10">
                <label className="flex items-center gap-4 cursor-pointer text-emerald-950 font-black text-sm group">
                  <input
                    type="checkbox"
                    checked={addNotes}
                    onChange={(e) => setAddNotes(e.target.checked)}
                    className="w-5 h-5 accent-emerald-700 rounded-lg"
                  />

                  <T>Agregar solicitudes especiales o alergias</T>
                </label>

                {addNotes && (
                  <textarea
                    placeholder={phNotas}
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    className={`${bentoInput} mt-6 min-h-[120px] resize-none`}
                  />
                )}
              </div>
            </div>

            {/* Panel Pago Estilo Tarjeta VIP */}
            <div className="bg-emerald-950 p-7 md:p-12 shadow-[0_35px_90px_-35px_rgba(6,78,59,0.7)] rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden text-white border border-emerald-800">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

              <div className="absolute -top-20 -right-20 p-6 opacity-[0.04] pointer-events-none rotate-12">
                <CreditCard className="w-[400px] h-[400px]" />
              </div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                  <h2 className="text-3xl font-black font-bricolage flex items-center gap-4 tracking-tight">
                    <div className="p-3 bg-amber-300/15 rounded-2xl border border-amber-200/10">
                      <CreditCard
                        className="text-amber-300 w-7 h-7"
                        strokeWidth={2.5}
                      />
                    </div>

                    <T>Método de Pago</T>
                  </h2>

                  <div className="h-8 ">
                    <img
                      src="/logo-keycop-2.png"
                      alt="Keycop"
                      className="h-full object-contain filter brightness-0 invert"
                    />
                  </div>
                </div>

                <div className="grid gap-6 max-w-lg">
                  <div className="relative">
                    <input
                      placeholder={phTarjeta}
                      required
                      maxLength={19}
                      value={cardInfo.number}
                      onChange={(e) =>
                        setCardInfo({
                          ...cardInfo,
                          number: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      className="bg-white/10 border border-white/10 rounded-2xl h-16 font-mono text-xl tracking-[0.18em] focus:bg-white/15 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/10 transition-all outline-none w-full px-6 pr-16 text-white placeholder:text-white/30"
                    />

                    <CreditCard className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-100/30" />
                  </div>

                  <input
                    placeholder={phNombreTarjeta}
                    required
                    value={cardInfo.name}
                    onChange={(e) =>
                      setCardInfo({
                        ...cardInfo,
                        name: e.target.value.toUpperCase(),
                      })
                    }
                    className="bg-white/10 border border-white/10 rounded-2xl h-16 font-bold focus:bg-white/15 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/10 transition-all outline-none w-full px-6 text-white placeholder:text-white/30"
                  />

                  <div className="grid grid-cols-2 gap-5 md:gap-6">
                    <input
                      placeholder={phFecha}
                      required
                      maxLength={5}
                      value={cardInfo.expiry}
                      onChange={handleExpiryChange}
                      className="bg-white/10 border border-white/10 rounded-2xl h-16 font-bold text-center focus:bg-white/15 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/10 transition-all outline-none text-white placeholder:text-white/30"
                    />

                    <input
                      placeholder={phCvv}
                      type="password"
                      required
                      maxLength={4}
                      value={cardInfo.cvv}
                      onChange={(e) =>
                        setCardInfo({
                          ...cardInfo,
                          cvv: e.target.value.replace(/\D/g, ""),
                        })
                      }
                      className="bg-white/10 border border-white/10 rounded-2xl h-16 font-mono text-center tracking-widest focus:bg-white/15 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/10 transition-all outline-none text-white placeholder:text-white/30"
                    />
                  </div>

                  <div className="flex items-center gap-4 mt-8 p-4 bg-white/[0.07] rounded-2xl border border-white/10">
                    <ShieldCheck
                      className="w-8 h-8 text-emerald-300 shrink-0"
                      strokeWidth={2.5}
                    />

                    <p className="text-[11px] font-black text-emerald-50/60 tracking-wide uppercase leading-relaxed">
                      <T>
                        Tu información se mantiene segura mediante cifrado.
                      </T>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Resumen */}
          <div className="lg:col-span-4 animate-bounce-up delay-200">
            <div className="bg-white/95 backdrop-blur-xl p-7 lg:p-10 sticky top-32 border border-emerald-950/10 shadow-[0_30px_80px_-35px_rgba(6,78,59,0.4)] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative">
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <h2 className="text-2xl font-black font-bricolage mb-8 text-emerald-950 border-b border-emerald-950/10 pb-6 tracking-tight flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-emerald-700" />
                  <T>Tu Itinerario</T>
                </h2>

                <div className="space-y-6 mb-10">
                  {cart.items.length === 0 ? (
                    <div className="bg-[#f4f8f5] border border-emerald-950/5 rounded-2xl p-5">
                      <p className="text-slate-500 font-medium text-sm">
                        <T>Aún no seleccionaste ninguna ruta.</T>
                      </p>
                    </div>
                  ) : (
                    cart.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start gap-4 pb-5 border-b border-emerald-950/5 last:border-b-0 last:pb-0"
                      >
                        <span className="text-slate-500 font-medium text-sm leading-snug">
                          <span className="font-black text-emerald-950 block mb-1">
                            <T>{item.experience.title}</T>
                          </span>

                          <span className="text-xs">
                            x{item.people} <T>asistentes</T>
                          </span>
                        </span>

                        <span className="font-black text-emerald-950 text-sm whitespace-nowrap">
                          {formatPrice(item.totalPrice)}
                        </span>
                      </div>
                    ))
                  )}
                </div>

                <div className="border-t border-emerald-950/10 pt-8">
                  <div className="flex justify-between items-end gap-4 mb-10">
                    <span className="text-emerald-700 font-black uppercase tracking-widest text-[10px] mb-2">
                      <T>Total a Pagar</T>
                    </span>

                    <div className="text-right">
                      <div className="text-4xl font-black font-bricolage text-emerald-950 leading-none">
                        {formatPrice(finalTotal)}
                      </div>

                      <div className="text-[9px] font-black text-slate-400 mt-2 uppercase tracking-widest leading-none">
                        <T>IVA incluido</T>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!isFormValid || isProcessing}
                    className="btn-3d w-full bg-amber-300 text-emerald-950 font-black min-h-20 px-5 rounded-[2rem] shadow-xl shadow-amber-300/20 transition-all text-xl group flex items-center justify-center gap-3 hover:bg-amber-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-amber-300"
                  >
                    {isProcessing ? (
                      <Loader2
                        className="animate-spin w-7 h-7"
                        strokeWidth={3}
                      />
                    ) : (
                      <ArrowRight className="w-7 h-7" strokeWidth={3} />
                    )}

                    {isProcessing ? textProcesando : textPagar}
                  </button>

                  <div className="mt-5 flex items-center justify-center gap-2 text-slate-400">
                    <Lock className="w-3.5 h-3.5" />

                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      <T>Compra segura y protegida</T>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f5]">
      <Header />

      <Suspense
        fallback={
          <div className="flex-1 flex items-center justify-center bg-[#f4f8f5]">
            <div className="w-20 h-20 rounded-[1.75rem] bg-white border border-emerald-950/10 shadow-xl flex items-center justify-center">
              <Loader2
                className="animate-spin w-10 h-10 text-emerald-800"
                strokeWidth={3}
              />
            </div>
          </div>
        }
      >
        <CheckoutContent />
      </Suspense>

      <Footer />
    </div>
  );
}