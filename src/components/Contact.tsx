"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { T } from "@/components/T";
import { useT } from "@/hooks/useT";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  Smile,
  ArrowUpRight,
  Send,
} from "lucide-react";

export function Contact() {
  const locale = useLocale();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Traduciendo los Placeholders mediante hook
  const phNombre = useT("Tu Nombre");
  const phEmail = useT("Tu Correo");
  const phMensaje = useT("¿En qué te ayudamos hoy?");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "CONTACT",
          customerName: nombre,
          email: email,
          message: mensaje,
          locale: locale,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setNombre("");
        setEmail("");
        setMensaje("");

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("No se pudo enviar el mensaje. Inténtelo de nuevo.");
      }
    } catch (error) {
      console.error("Error enviando mensaje de contacto:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-[#f4f8f5] border border-emerald-950/10 rounded-2xl px-5 py-4 text-emerald-950 font-bold outline-none transition-all placeholder:text-slate-400 placeholder:font-medium focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-500/10";

  const contactItems = [
    {
      title: "Nuestra Cocina (Sede)",
      description:
        "Av. Rio Consulado Cto Interior 516 Oficina 102 Col Tlatilco, Azcapotzalco Cp 02860",
      icon: MapPin,
      iconClass: "bg-amber-300 text-emerald-950",
    },
    {
      title: "Llámanos",
      description: "+52 (55) 1940 6598",
      icon: Phone,
      iconClass: "bg-cyan-200 text-cyan-950",
    },
    {
      title: "Escríbenos",
      description: "atencion@oasix.com.mx",
      icon: Mail,
      iconClass: "bg-emerald-200 text-emerald-950",
    },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[#f4f8f5] py-24 scroll-mt-20 md:py-32"
    >
      {/* Decoraciones */}
      <div className="pointer-events-none absolute -left-52 -top-52 h-[40rem] w-[40rem] rounded-full bg-emerald-300/20 blur-[160px]" />
      <div className="pointer-events-none absolute -right-52 top-1/3 h-[38rem] w-[38rem] rounded-full bg-cyan-300/15 blur-[160px]" />
      <div className="pointer-events-none absolute -bottom-48 left-1/3 h-[34rem] w-[34rem] rounded-full bg-amber-200/20 blur-[140px]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2.5rem] border border-emerald-950/10 bg-white shadow-[0_40px_110px_-55px_rgba(6,78,59,0.55)] md:rounded-[4rem]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Panel informativo */}
            <div className="relative overflow-hidden bg-emerald-950 px-7 py-12 text-white animate-bounce-up md:px-12 md:py-16 lg:col-span-5 lg:p-14">
              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -left-28 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-100">
                  <Smile className="h-4 w-4 text-amber-300" />
                  <T>Hola</T>
                </div>

                <h2 className="font-bricolage text-4xl font-black leading-[1.04] tracking-tight md:text-5xl lg:text-[3.5rem]">
                  <T>Estamos aquí para</T>{" "}
                  <span className="relative inline-block text-amber-300">
                    <T>ayudarte</T>
                    <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-cyan-300/35" />
                  </span>
                  .
                </h2>

                <p className="mt-7 max-w-md text-base font-medium leading-relaxed text-emerald-100/65">
                  <T>
                    Cuéntanos qué experiencia tienes en mente y nuestro equipo
                    te ayudará a convertirla en una ruta hecha a tu medida.
                  </T>
                </p>

                <div className="mt-12 space-y-4">
                  {contactItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="group flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.1]"
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconClass}`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2.5} />
                        </div>

                        <div className="min-w-0 flex-1 pt-1">
                          <p className="mb-1 font-bricolage text-base font-black leading-tight text-white">
                            <T>{item.title}</T>
                          </p>

                          <p className="break-words text-sm font-medium leading-relaxed text-emerald-100/60">
                            {item.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          className="mt-1 h-4 w-4 shrink-0 text-white/25 transition-all group-hover:rotate-45 group-hover:text-amber-300"
                          strokeWidth={2.5}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="relative px-7 py-12 animate-bounce-up delay-150 md:px-12 md:py-16 lg:col-span-7 lg:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />

              <div className="relative z-10 mx-auto max-w-xl">
                {isSuccess ? (
                  <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 scale-125 rounded-full bg-emerald-300/25 blur-2xl" />

                      <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-emerald-950 text-emerald-100 shadow-xl shadow-emerald-950/20">
                        <CheckCircle
                          className="h-12 w-12"
                          strokeWidth={2.5}
                        />
                      </div>
                    </div>

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-800">
                      <Send className="h-3.5 w-3.5" />
                      <T>Mensaje recibido</T>
                    </div>

                    <h3 className="mb-4 font-bricolage text-3xl font-black tracking-tight text-emerald-950 md:text-4xl">
                      <T>¡Mensaje Volando!</T>
                    </h3>

                    <p className="max-w-md text-lg font-medium leading-relaxed text-slate-500">
                      <T>
                        Gracias por contactarnos. Nuestro equipo revisará tu
                        mensaje y te responderá muy pronto.
                      </T>
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="mb-10">
                      <span className="mb-3 block text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
                        Contacto Oasix
                      </span>

                      <h3 className="font-bricolage text-3xl font-black tracking-tight text-emerald-950 md:text-4xl">
                        <T>Cuéntanos sobre tu próxima experiencia</T>
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
                        <T>
                          Completa el formulario y nos pondremos en contacto
                          contigo para conocer todos los detalles.
                        </T>
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-emerald-950/50">
                          <T>Nombre</T>
                        </label>

                        <input
                          type="text"
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          required
                          className={inputClass}
                          placeholder={phNombre}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-emerald-950/50">
                          <T>Correo electrónico</T>
                        </label>

                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className={inputClass}
                          placeholder={phEmail}
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.16em] text-emerald-950/50">
                          <T>Mensaje</T>
                        </label>

                        <textarea
                          rows={6}
                          value={mensaje}
                          onChange={(e) => setMensaje(e.target.value)}
                          required
                          className={`${inputClass} resize-none`}
                          placeholder={phMensaje}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-3d group mt-4 flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-amber-300 px-6 text-lg font-black text-emerald-950 shadow-xl shadow-amber-300/20 transition-colors hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <Loader2
                            className="h-6 w-6 animate-spin"
                            strokeWidth={3}
                          />
                        ) : (
                          <Send
                            className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                            strokeWidth={2.5}
                          />
                        )}

                        {isSubmitting ? (
                          <T>Enviando...</T>
                        ) : (
                          <T>Enviar Mensaje</T>
                        )}
                      </button>

                      <p className="pt-2 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-slate-400">
                        <T>
                          Tu información será utilizada únicamente para
                          responder tu solicitud
                        </T>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}