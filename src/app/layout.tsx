import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { organizationSchema } from "@/lib/structuredData";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-KTM16PVD3P";

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
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/blog/rss.xml",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
