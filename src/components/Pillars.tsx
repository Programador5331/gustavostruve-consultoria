"use client";

import { ArrowUpRight } from "lucide-react";
import { pillars } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const colorMap: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  teal: { text: "text-teal", bg: "bg-teal/10", border: "hover:border-teal/40", glow: "rgba(25,211,181,0.18)" },
  blue: { text: "text-blue", bg: "bg-blue/10", border: "hover:border-blue/40", glow: "rgba(37,99,235,0.2)" },
  amber: { text: "text-amber", bg: "bg-amber/10", border: "hover:border-amber/40", glow: "rgba(245,166,35,0.18)" },
};

export function Pillars() {
  return (
    <section id="pilares" className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-teal mb-4">
            Cómo trabajamos
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl text-balance">
            Tres líneas de negocio. Un solo objetivo: instituciones de salud que funcionan bien.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const c = colorMap[p.color];
            return (
              <Reveal key={p.id} delay={i * 0.1}>
                <motion.a
                  href={p.href}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`group relative block h-full rounded-3xl border border-border bg-surface/40 p-8 lg:p-9 transition-colors duration-300 ${c.border} overflow-hidden`}
                >
                  <div
                    className="absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: c.glow }}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className={`text-sm font-mono ${c.text}`}>{p.tag}</span>
                    <ArrowUpRight
                      size={20}
                      className="text-text-tertiary duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:text-text-primary group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                  <h3 className="relative mt-16 text-2xl font-bold tracking-tight">{p.title}</h3>
                  <p className="relative mt-4 text-text-secondary leading-relaxed">{p.text}</p>
                </motion.a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
