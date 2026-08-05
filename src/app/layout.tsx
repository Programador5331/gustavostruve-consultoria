import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gustavostruve.com"),
  title: "Gustavo Struve — Consultoría Integral en Gestión de Salud",
  description:
    "Consultoría estratégica en gestión de salud, KliniQ 24/7 (software de gestión clínica) y formación digital. Resultados medibles, sin grandes inversiones.",
  keywords: [
    "consultoría en salud",
    "gestión clínica",
    "KliniQ 24/7",
    "consultoría hospitalaria Ecuador",
    "Gustavo Struve",
  ],
  authors: [{ name: "Gustavo Struve" }],
  openGraph: {
    title: "Gustavo Struve — Consultoría Integral en Gestión de Salud",
    description:
      "Consultoría estratégica en gestión de salud, KliniQ 24/7 y formación digital. Resultados medibles, sin grandes inversiones.",
    url: "https://gustavostruve.com",
    siteName: "Gustavo Struve Consultoría Integral",
    locale: "es_EC",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
