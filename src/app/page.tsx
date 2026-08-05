import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Pillars } from "@/components/Pillars";
import { Consulting } from "@/components/Consulting";
import { Kliniq } from "@/components/Kliniq";
import { DigitalProducts } from "@/components/DigitalProducts";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Pillars />
        <Consulting />
        <Kliniq />
        <DigitalProducts />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
