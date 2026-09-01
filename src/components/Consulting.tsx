"use client";

import { motion } from "framer-motion";
import { ArrowRight, Gauge } from "lucide-react";
import {
  consultingServices,
  consultingResults,
  consultingProcess,
  smartHospitalIndex,
  site,
} from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ProcessFlow } from "@/components/ui/ProcessFlow";

const colorMap: Record<string, string> = {
  teal: "text-teal border-teal/30 bg-teal/10",
  blue: "text-blue border-blue/30 bg-blue/10",
  violet: "text-violet border-violet/30 bg-violet/10",
  amber: "text-amber border-amber/30 bg-amber/10",
};

export function Consulting() {
  return (
    <section id="consultoria" className="py-28 lg:py-36 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-teal mb-4">
            01 — Consultoría Personalizada
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl text-balance">
            Implementación real, no recomendaciones desde un escritorio.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            Gustavo Struve Consultoría combina experiencia real en operaciones de salud con
            metodologías modernas e inteligencia artificial para transformar tu institución
            desde adentro.
          </p>
        </Reveal>

        {/* Services */}
        <RevealGroup className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {consultingServices.map((s) => (
            <motion.a
              key={s.num}
              href={site.meetingUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={revealItem}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="group flex flex-col rounded-2xl border border-border bg-surface/40 p-6 hover:border-border-strong active:scale-[0.98] transition-colors duration-300"
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`self-start text-[11px] font-semibold px-2.5 py-1 rounded-full border ${colorMap[s.color]}`}>
                  {s.category}
                </span>
                <ArrowRight
                  size={16}
                  className="mt-1 shrink-0 text-text-tertiary opacity-0 -translate-x-1 duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-text-primary"
                />
              </div>
              <h3 className="mt-5 font-bold text-lg leading-snug">{s.name}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">{s.text}</p>
              <div className="mt-6 pt-5 border-t border-border">
                {s.price ? (
                  <div className="text-2xl font-extrabold tracking-tight">{s.price}</div>
                ) : null}
                <div className="text-xs text-text-tertiary mt-1">{s.unit}</div>
              </div>
            </motion.a>
          ))}
        </RevealGroup>

        {/* Smart Hospital Index — free lead magnet */}
        <Reveal delay={0.1}>
          <div className="mt-6 relative overflow-hidden rounded-2xl border border-amber/25 bg-gradient-to-r from-amber/[0.08] via-surface/40 to-surface/40 p-8 sm:p-10">
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="h-12 w-12 shrink-0 rounded-xl bg-amber/15 flex items-center justify-center text-amber">
                <Gauge size={22} />
              </div>
              <div className="flex-1">
                <span className="text-[11px] font-semibold tracking-wide uppercase text-amber">
                  Gratis · {smartHospitalIndex.tagline}
                </span>
                <h3 className="mt-2 text-xl font-bold tracking-tight">{smartHospitalIndex.name}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {smartHospitalIndex.text}
                </p>
              </div>
              <a
                href={smartHospitalIndex.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-[#1a1206] hover:bg-white active:scale-[0.97] transition-[background-color,transform] duration-150"
              >
                {smartHospitalIndex.cta}
                <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Results */}
        <Reveal className="mt-24 rounded-3xl border border-border bg-surface/40 p-10 lg:p-14">
          <h3 className="text-2xl font-bold tracking-tight mb-10">
            ¿Qué puedes esperar de tu institución?
          </h3>
          <div className="grid sm:grid-cols-3 gap-10">
            {consultingResults.map((r) => (
              <div key={r.label}>
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-teal">
                  {r.value}
                </div>
                <div className="mt-3 font-semibold">{r.label}</div>
                <div className="mt-1 text-sm text-text-tertiary">{r.note}</div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-xs text-text-tertiary">
            * Resultados basados en intervenciones previas. Cada institución tiene su propio
            punto de partida y velocidad de implementación.
          </p>
        </Reveal>

        {/* Process */}
        <div className="mt-24">
          <Reveal>
            <h3 className="text-2xl font-bold tracking-tight">Cómo trabajamos juntos</h3>
            <p className="mt-3 text-text-secondary">
              Simple, transparente y orientado 100% a resultados desde el primer día de trabajo.
            </p>
          </Reveal>

          <ProcessFlow steps={consultingProcess} />
        </div>

        <Reveal className="mt-20 flex justify-center">
          <a
            href={site.meetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-teal px-8 py-4 text-sm font-semibold text-[#04140f] hover:bg-white active:scale-[0.97] transition-[background-color,transform] duration-150"
          >
            Agendar reunión exploratoria gratuita
            <ArrowRight
              size={16}
              className="duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
