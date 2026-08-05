"use client";

import { useLocale } from "next-intl";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { supabase } from "@/lib/supabase";
import {
  Loader2,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  Experience,
  SupabaseExperienceResponse,
} from "@/lib/types";
import { T } from "@/components/T";

type ExperienceWithPrice = Experience & {
  displayPrice: number;
};

function ExperienciasContent() {
  const locale = useLocale();

  const [experiences, setExperiences] = useState<
    ExperienceWithPrice[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: actData, error } = await supabase
          .from("activities_vm")
          .select(`
            id, title, slug, description, location, images, category_id,
            categories:categories_vm(id, name, slug),
            activity_packages:activity_packages_vm(price)
          `);

        if (error) {
          console.error(
            "Error detallado de Supabase:",
            JSON.stringify(error),
          );

          return;
        }

        if (actData) {
          const mappedData: ExperienceWithPrice[] = (
            actData as unknown as SupabaseExperienceResponse[]
          ).map((item) => ({
            ...item,
            categories: item.categories || undefined,
            description: item.description || "",
            images: item.images || [],
            displayPrice: item.activity_packages?.[0]?.price || 0,
          }));

          setExperiences(mappedData);
        }
      } catch (error) {
        console.error("Error inesperado:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
    }).format(price);
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

  return (
    <div className="min-h-screen flex flex-col bg-[#f4f8f5]">
      <Header />

      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Decoraciones de fondo */}
        <div className="absolute -top-48 -right-48 w-[42rem] h-[42rem] bg-emerald-300/20 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -left-48 w-[38rem] h-[38rem] bg-cyan-300/15 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute -bottom-40 right-1/4 w-[32rem] h-[32rem] bg-amber-200/20 rounded-full blur-[140px] pointer-events-none" />

        {/* Encabezado */}
        <div className="container mx-auto px-6 max-w-7xl mb-16 text-center animate-bounce-up relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-50 px-5 py-2.5 rounded-full font-black text-[10px] uppercase tracking-[0.18em] mb-5 border border-emerald-800 shadow-lg shadow-emerald-950/10">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />

            <T>El Menú Principal</T>
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-bricolage text-emerald-950 leading-[1.05] mb-5 tracking-tight">
            <T>Nuestras</T>{" "}
            <span className="text-emerald-700">
              <T>Rutas de Sabor</T>
            </span>
          </h1>

          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            <T>
              Descubre tu siguiente destino gastronómico. Experiencias
              creadas para conquistar tu paladar.
            </T>
          </p>
        </div>

        {/* Grid de experiencias */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, idx) => {
              const thumbImage =
                exp.images?.length > 0
                  ? exp.images[0]
                  : "/placeholder.jpg";

              return (
                <Link
                  key={exp.id}
                  href={`/${locale}/experiencias/${exp.id}`}
                  className="group block animate-bounce-up"
                  style={{
                    animationDelay: `${idx * 50}ms`,
                  }}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-[2.25rem] md:rounded-[2.75rem] p-4 shadow-[0_25px_70px_-40px_rgba(6,78,59,0.4)] border border-emerald-950/10 hover:-translate-y-2 hover:shadow-[0_35px_90px_-40px_rgba(6,78,59,0.55)] transition-all duration-500 h-full flex flex-col">
                    {/* Imagen */}
                    <div className="relative aspect-[4/3] w-full rounded-[1.75rem] md:rounded-[2.25rem] overflow-hidden mb-6 bg-emerald-50">
                      <Image
                        src={thumbImage}
                        alt={exp.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent pointer-events-none" />

                      {/* Precio */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-2xl shadow-lg border border-white/70 font-black text-emerald-800 flex flex-col items-end leading-none">
                        <span className="text-[9px] text-slate-400 uppercase tracking-wider mb-1">
                          <T>IVA incluido</T>
                        </span>

                        <span className="text-lg">
                          {formatPrice(exp.displayPrice)}
                        </span>
                      </div>

                      {exp.categories?.name && (
                        <div className="absolute bottom-4 left-4 max-w-[80%] bg-emerald-950/90 backdrop-blur-md text-white px-3.5 py-2 rounded-full border border-white/10 font-black text-[9px] uppercase tracking-[0.14em]">
                          <T>{exp.categories.name}</T>
                        </div>
                      )}
                    </div>

                    {/* Información */}
                    <div className="px-2 pb-1 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-[0.15em] mb-3">
                        <div className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center">
                          <MapPin
                            className="w-3.5 h-3.5 text-emerald-700"
                            strokeWidth={2.5}
                          />
                        </div>

                        <T>{exp.location}</T>
                      </div>

                      <h3 className="text-2xl font-black font-bricolage text-emerald-950 mb-5 leading-tight group-hover:text-emerald-700 transition-colors">
                        <T>{exp.title}</T>
                      </h3>

                      {/* Acción */}
                      <div className="mt-auto pt-5 flex items-center justify-between border-t border-emerald-950/10">
                        <span className="text-sm font-black text-emerald-950 group-hover:text-emerald-700 transition-colors">
                          <T>Conocer la ruta</T>
                        </span>

                        <div className="w-10 h-10 rounded-full bg-[#f4f8f5] border border-emerald-950/5 flex items-center justify-center text-emerald-800 group-hover:bg-emerald-950 group-hover:border-emerald-950 group-hover:text-white transition-all duration-300">
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ExperienciasPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#f4f8f5]">
          <div className="w-20 h-20 rounded-[1.75rem] bg-white border border-emerald-950/10 shadow-xl shadow-emerald-950/10 flex items-center justify-center">
            <Loader2
              className="w-10 h-10 animate-spin text-emerald-800"
              strokeWidth={3}
            />
          </div>
        </div>
      }
    >
      <ExperienciasContent />
    </Suspense>
  );
}