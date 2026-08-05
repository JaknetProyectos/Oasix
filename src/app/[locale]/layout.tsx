import "../globals.css";
import { ClientBody } from "@/app/ClientBody";
import { ReactNode } from "react";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Oasix | Rutas Culinarias y Experiencias de Sabor",
  description:
    "Descubre México por medio de su riqueza gastronómica. Desde rincones de comida callejera hasta cenas únicas, en Oasix creamos viajes y degustaciones a medida que cautivarán cada uno de tus sentidos.",
};

export default async function RootLayout({
  children,
  params,
}: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <html lang={locale}>
      <ClientBody locale={locale}>{children}</ClientBody>
    </html>
  );
}