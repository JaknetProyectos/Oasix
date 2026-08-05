"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import {
  Loader2,
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Utensils,
  CheckCircle2,
} from "lucide-react";
import { T } from "@/components/T";
import { useCart } from "@/context/CartContext";
import { ActivityPackage, Experience } from "@/lib/types";

export default function ExperienceDetailPage() {
  const params = useParams();
  const locale = useLocale();
  const router = useRouter();
  const { addToCart } = useCart();

  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  // Estados para reserva
  const [selectedDate, setSelectedDate] = useState("");
  const [pax, setPax] = useState(1);
  const [selectedPackage, setSelectedPackage] =
    useState<ActivityPackage | null>(null);

  useEffect(() => {
    async function fetchDetail() {
      const { data, error } = await supabase
        .from("activities_vm")
        .select(`
          *,
          categories:categories_vm(name, slug),
          packages:activity_packages_vm(*)
        `)
        .eq("id", params.id as string)
        .single();

      if (error) {
        console.error(
          "Error de Supabase (Detalle):",
          JSON.stringify(error),
        );
      }

      if (data) {
        if (data.packages) {
          data.packages.sort(
            (a: ActivityPackage, b: ActivityPackage) =>
              a.min_pax - b.min_pax,
          );
        }

        setExperience(data);
      }

      setLoading(false);
    }

    fetchDetail();
  }, [params.id]);

  // LÓGICA CORE INTACTA
  useEffect(() => {
    if (experience?.packages && experience.packages.length > 0) {
      const matchedPackage = experience.packages.find(
        (pkg: ActivityPackage) => {
          const max = pkg.max_pax || 999;

          return pax >= pkg.min_pax && pax <= max;
        },
      );

      if (matchedPackage) {
        setSelectedPackage(matchedPackage);
      } else {
        setSelectedPackage(
          experience.packages[experience.packages.length - 1],
        );
      }
    }
  }, [pax, experience]);

  const handleAddToCart = () => {
    if (!selectedDate || !selectedPackage || !experience) return;

    const cartItem = {
      packageId: selectedPackage.id,
      experience: experience,
      levelName: selectedPackage.package_name,
      date: selectedDate,
      people: pax,
      pricePerPerson: selectedPackage.price,
      totalPrice: selectedPackage.price * pax,
    };

    addToCart(cartItem);
    router.push(`/${locale}/carrito`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f8f5]">
        <div className="w-20 h-20 rounded-[1.75rem] bg-white border border-emerald-950/10 shadow-xl shadow-emerald-950/10 flex items-center justify-center">
          <Loader2
            className="w-10 h-10 animate-spin text-emerald-800"
            strokeWidth={3}
          />
        </div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f8f5] px-6">
        <div className="bg-white border border-emerald-950/10 rounded-[2rem] px-10 py-8 shadow-xl text-emerald-950 font-black text-xl">
          <T>Experiencia no encontrada</T>
        </div>
      </div>
    );
  }

  const mainImage = experience.images?.[0] || "/placeholder.jpg";

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f5]">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute -top-48 -left-48 w-[42rem] h-[42rem] bg-emerald-300/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -right-56 w-[42rem] h-[42rem] bg-cyan-300/15 rounded-full blur-[170px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-200/20 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-10 animate-bounce-up">
            {experience.categories?.name && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950 text-emerald-50 rounded-full mb-5 font-black text-[10px] uppercase tracking-[0.18em] border border-emerald-800 shadow-lg shadow-emerald-950/10">
                <Utensils className="w-3.5 h-3.5 text-amber-300" />

                <T>{experience.categories.name}</T>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-black font-bricolage text-emerald-950 leading-[1.05] mb-4 tracking-tight max-w-5xl">
              <T>{experience.title}</T>
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Info de la Experiencia */}
            <div className="w-full lg:w-7/12 animate-bounce-up delay-100">
              <div className="relative aspect-[4/3] w-full rounded-[2.25rem] md:rounded-[3.25rem] overflow-hidden mb-10 shadow-[0_35px_90px_-35px_rgba(6,78,59,0.45)] border-4 border-white group">
                <Image
                  src={mainImage}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
                  {experience.duration && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md text-emerald-950 rounded-full font-black text-xs shadow-lg">
                      <Clock
                        className="w-4 h-4 text-emerald-700"
                        strokeWidth={2.5}
                      />

                      <T>{experience.duration}</T>
                    </div>
                  )}

                  {experience.location && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-950/90 backdrop-blur-md text-white rounded-full font-black text-xs shadow-lg">
                      <MapPin
                        className="w-4 h-4 text-amber-300"
                        strokeWidth={2.5}
                      />

                      <T>{experience.location}</T>
                    </div>
                  )}
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 font-medium mb-10">
                <p className="text-xl text-emerald-950 font-bold mb-12 leading-relaxed">
                  <T>{experience.description}</T>
                </p>

                <div className="bg-white/90 backdrop-blur-sm p-7 md:p-10 rounded-[2.25rem] md:rounded-[3rem] border border-emerald-950/10 shadow-[0_25px_70px_-40px_rgba(6,78,59,0.35)] mb-8">
                  <h3 className="text-2xl font-black font-bricolage text-emerald-950 mb-7 flex items-center gap-3">
                    <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center border border-amber-200">
                      <Utensils
                        className="w-6 h-6 text-amber-800"
                        strokeWidth={2.5}
                      />
                    </div>

                    <T>El Menú (Incluye)</T>
                  </h3>

                  <ul className="space-y-4 list-none pl-0 mb-0">
                    {experience.included_general?.map(
                      (item: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 bg-[#f4f8f5] border border-emerald-950/5 rounded-2xl px-4 py-3.5"
                        >
                          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />

                          <span className="text-emerald-950 font-medium">
                            <T>{item}</T>
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="bg-emerald-950 p-7 md:p-8 rounded-[2.25rem] md:rounded-[2.75rem] border border-emerald-800 mb-8 flex flex-col gap-5 shadow-[0_25px_70px_-35px_rgba(6,78,59,0.6)] relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-300/10 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-amber-200/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex items-center gap-4 text-white font-bold">
                    <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center">
                      <Clock
                        className="w-5 h-5 text-emerald-300"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-emerald-200/60 mb-1">
                        <T>Duración</T>
                      </span>

                      <T>{experience.duration || ""}</T>
                    </div>
                  </div>

                  {experience.important_info?.["Horario de inicio"] && (
                    <div className="relative z-10 flex items-center gap-4 text-white font-bold">
                      <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center">
                        <Clock
                          className="w-5 h-5 text-amber-300"
                          strokeWidth={2.5}
                        />
                      </div>

                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.18em] text-emerald-200/60 mb-1">
                          <T>Iniciamos a las</T>
                        </span>

                        <T>
                          {experience.important_info[
                            "Horario de inicio"
                          ][0] || ""}
                        </T>
                      </div>
                    </div>
                  )}

                  <div className="relative z-10 flex items-center gap-4 text-white font-bold">
                    <div className="w-11 h-11 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center">
                      <MapPin
                        className="w-5 h-5 text-cyan-300"
                        strokeWidth={2.5}
                      />
                    </div>

                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-emerald-200/60 mb-1">
                        <T>Punto de Encuentro</T>
                      </span>

                      <T>{experience.location}</T>
                    </div>
                  </div>
                </div>

                {experience.important_info?.Notas && (
                  <div className="bg-amber-50 p-6 md:p-7 rounded-[2rem] border border-amber-200">
                    <p className="font-black text-amber-900 text-xs uppercase tracking-[0.18em] mb-4">
                      <T>A tomar en cuenta</T>
                    </p>

                    <div className="space-y-3">
                      {experience.important_info.Notas.map(
                        (nota: string, i: number) => (
                          <p
                            key={i}
                            className="mb-0 text-sm text-amber-950/75 font-medium flex gap-3 leading-relaxed"
                          >
                            <span className="text-amber-600 font-black">
                              •
                            </span>

                            <T>{nota}</T>
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Columna Derecha: Módulo de Reserva */}
            <div className="w-full lg:w-5/12 sticky top-32 animate-bounce-up delay-200">
              <div className="bg-white/95 backdrop-blur-xl p-7 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_90px_-40px_rgba(6,78,59,0.5)] border border-emerald-950/10 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full mb-4 font-black text-[9px] uppercase tracking-[0.18em] border border-emerald-200">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      <T>Selecciona tu experiencia</T>
                    </div>

                    <h3 className="text-3xl font-black font-bricolage text-emerald-950 tracking-tight">
                      <T>Reserva tu lugar</T>
                    </h3>
                  </div>

                  {/* Tabla de Precios */}
                  <div className="mb-10">
                    <label className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mb-4 block">
                      <T>Tarifa por persona</T>
                    </label>

                    <div className="space-y-3">
                      {experience.packages?.map(
                        (pkg: ActivityPackage) => (
                          <div
                            key={pkg.id}
                            onClick={() => setPax(pkg.min_pax)}
                            className={`flex justify-between items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${
                              selectedPackage?.id === pkg.id
                                ? "bg-emerald-950 border-emerald-950 shadow-lg shadow-emerald-950/15"
                                : "bg-[#f4f8f5] border-emerald-950/5 hover:bg-white hover:border-emerald-300"
                            }`}
                          >
                            <div
                              className={`font-bold ${
                                selectedPackage?.id === pkg.id
                                  ? "text-white"
                                  : "text-emerald-950"
                              }`}
                            >
                              <T>{pkg.package_name}</T>
                            </div>

                            <div
                              className={`font-black text-lg whitespace-nowrap ${
                                selectedPackage?.id === pkg.id
                                  ? "text-amber-300"
                                  : "text-emerald-800"
                              }`}
                            >
                              {new Intl.NumberFormat("es-MX", {
                                style: "currency",
                                currency: "MXN",
                                minimumFractionDigits: 0,
                              }).format(pkg.price)}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Controles de Reserva */}
                  <div className="space-y-8">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mb-3 block">
                        <T>Elige la fecha de tu visita</T>
                      </label>

                      <div className="flex items-center bg-[#f4f8f5] border border-emerald-950/10 rounded-2xl px-5 h-16 focus-within:ring-4 focus-within:ring-emerald-500/10 focus-within:border-emerald-600 focus-within:bg-white transition-all">
                        <CalendarIcon className="w-5 h-5 text-emerald-700 mr-3 shrink-0" />

                        <input
                          type="date"
                          className="w-full bg-transparent outline-none text-emerald-950 font-bold text-base md:text-lg"
                          value={selectedDate}
                          onChange={(e) =>
                            setSelectedDate(e.target.value)
                          }
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 items-end">
                      <div className="w-full sm:w-1/3">
                        <label className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400 mb-3 block">
                          <T>Comensales</T>
                        </label>

                        <input
                          type="number"
                          min={1}
                          value={pax}
                          onChange={(e) =>
                            setPax(parseInt(e.target.value) || 1)
                          }
                          className="w-full bg-[#f4f8f5] border border-emerald-950/10 rounded-2xl text-center text-2xl font-black h-16 outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-600 focus:bg-white transition-all text-emerald-950"
                        />
                      </div>

                      <button
                        onClick={handleAddToCart}
                        disabled={!selectedDate}
                        className="btn-3d w-full sm:flex-1 bg-amber-300 text-emerald-950 h-16 rounded-2xl font-black text-lg hover:bg-amber-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-xl shadow-amber-300/20"
                      >
                        <T>Añadir</T>
                      </button>
                    </div>

                    {selectedPackage && (
                      <div className="bg-emerald-950 p-6 rounded-[2rem] flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center text-white mt-8 shadow-xl shadow-emerald-950/20 border border-emerald-800 relative overflow-hidden">
                        <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-cyan-300/10 rounded-full blur-2xl pointer-events-none" />

                        <span className="relative z-10 font-black uppercase tracking-[0.16em] text-[10px] text-emerald-200/70">
                          <T>Total estimado</T>
                        </span>

                        <span className="relative z-10 text-3xl font-black font-bricolage text-amber-300">
                          {new Intl.NumberFormat("es-MX", {
                            style: "currency",
                            currency: "MXN",
                            minimumFractionDigits: 0,
                          }).format(selectedPackage.price * pax)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}