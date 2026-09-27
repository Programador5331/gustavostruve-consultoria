import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Kliniq } from "@/components/Kliniq";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { softwareApplicationSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "KliniQ 24/7 — Software de gestión clínica | Gustavo Struve Consultoría",
  description:
    "KliniQ 24/7: agenda, historia clínica, facturación electrónica SRI y telemedicina en una sola plataforma en la nube. Tu consultorio, en control, las 24 horas.",
  alternates: {
    canonical: "/kliniq",
  },
};

export default function KliniqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema()) }}
      />
      <Nav />
      <main className="flex-1 pt-24">
        <Kliniq />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
