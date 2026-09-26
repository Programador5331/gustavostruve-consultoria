"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sora } from "next/font/google";
import { Check, ArrowRight } from "lucide-react";
import { kliniq } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

const sora = Sora({ subsets: ["latin"], weight: ["700", "800"] });

function KliniqLogo() {
  return (
    <div className="flex items-center gap-[7px]">
      <svg width="36" height="36" viewBox="0 0 80 80" fill="none" aria-label="KLINIQ 24/7 ícono">
        <defs>
          <linearGradient id="kliniq-circle-grad" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="40" fill="url(#kliniq-circle-grad)" />
        <text x="14" y="58" fontFamily={sora.style.fontFamily} fontWeight={800} fontSize={44} fill="white">
          K
        </text>
        <polyline
          points="47,44 52,32 57,52 61,40 68,40"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={3.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`${sora.className} font-extrabold text-lg text-[#1E293B] tracking-tight`}>
        KLINIQ
      </span>
      <span
        className={`${sora.className} text-[11px] font-bold text-white bg-[#10B981] rounded px-[6px] py-[3px] tracking-wide leading-none shrink-0`}
      >
        24/7
      </span>
    </div>
  );
}

export function Kliniq() {
  const pathname = usePathname();
  const onKliniqPage = pathname === kliniq.url;

  return (
    <section id="kliniq" className="py-28 lg:py-36 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-blue mb-4">
            02 — KliniQ 24/7
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl text-balance">
            El software de gestión clínica de Gustavo Struve Consultoría.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            className="mt-14 rounded-[2rem] overflow-hidden border border-blue/20"
            style={{ background: "#F8FAFC", fontFamily: "var(--font-jakarta)" }}
          >
            <div className="relative px-8 py-14 sm:px-14 sm:py-16 overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 20%, rgba(37,99,235,0.08), transparent 45%), radial-gradient(circle at 85% 80%, rgba(16,185,129,0.08), transparent 45%)",
                }}
              />
              <div className="relative grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6">
                  <KliniqLogo />

                  <h3 className="mt-7 text-3xl sm:text-4xl font-bold text-[#1E293B] tracking-tight text-balance">
                    {kliniq.slogan}
                  </h3>
                  <p className="mt-5 text-[#475569] text-base leading-relaxed max-w-lg">
                    {kliniq.pitch}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {kliniq.differentiators.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-sm text-[#334155]">
                        <Check size={16} className="mt-0.5 text-[#10B981] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap gap-3">
                    {!onKliniqPage && (
                      <Link
                        href={kliniq.url}
                        className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                      >
                        Conocer KliniQ 24/7
                        <ArrowRight size={15} />
                      </Link>
                    )}
                    <a
                      href={kliniq.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        onKliniqPage
                          ? "inline-flex items-center gap-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                          : "inline-flex items-center gap-2 rounded-lg border border-[#CBD5E1] px-6 py-3.5 text-sm font-semibold text-[#1E293B] hover:bg-[#F1F5F9] transition-colors"
                      }
                    >
                      Solicitar una demo
                      {onKliniqPage && <ArrowRight size={15} />}
                    </a>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.18)] border border-[#E2E8F0]"
                >
                  <Image
                    src="/images/doctor-tablet.jpg"
                    alt="Médico revisando la agenda y los indicadores de tu consultorio en KliniQ 24/7 desde una tablet"
                    width={800}
                    height={640}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="w-full h-80 sm:h-[26rem] object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, transparent 60%, rgba(30,41,59,0.35))" }}
                  />
                </motion.div>
              </div>

              {/* Modules */}
              <div className="relative mt-16">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B] mb-5">
                  Módulos del sistema
                </p>
                <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {kliniq.modules.map((m) => (
                    <motion.div
                      key={m.name}
                      variants={revealItem}
                      className="flex gap-3 rounded-xl border border-[#E2E8F0] bg-white p-5"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2563EB] shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-[#1E293B]">{m.name}</div>
                        <div className="text-xs text-[#64748B] mt-1 leading-relaxed">{m.text}</div>
                      </div>
                    </motion.div>
                  ))}
                </RevealGroup>
              </div>

              {/* Plans */}
              <div className="relative mt-14">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B] mb-5">
                  Planes
                </p>
                <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                  {kliniq.plans.map((p) => (
                    <motion.div
                      key={p.name}
                      variants={revealItem}
                      className="rounded-xl border border-[#E2E8F0] bg-white p-5"
                    >
                      <div className="font-bold text-[#1E293B]">{p.name}</div>
                      <div className="text-xs text-[#64748B] mt-0.5">{p.desc}</div>
                      <ul className="mt-4 space-y-1.5">
                        {p.features.map((f) => (
                          <li key={f} className="text-xs text-[#334155] flex gap-1.5 items-start">
                            <span className="text-[#10B981] mt-0.5">·</span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </RevealGroup>
                <p className="mt-6 text-xs text-[#94A3B8]">
                  Todos los planes incluyen 15 días de prueba gratis, sin tarjeta de crédito. Precios con IVA incluido.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
