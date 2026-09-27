import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Consulting } from "@/components/Consulting";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { consultingServiceSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Consultoría en Gestión de Salud Ecuador — Diagnóstico y Optimización | Gustavo Struve",
  description:
    "Consultoría en gestión clínica y hospitalaria en Ecuador: diagnóstico 360, optimización operativa, sistemas de gestión de calidad y planeación estratégica. Resultados medibles desde el primer mes.",
  alternates: {
    canonical: "/consultoria",
  },
};

export default function ConsultoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingServiceSchema()) }}
      />
      <Nav />
      <main className="flex-1 pt-24">
        <Consulting />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
