"use client";

import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Bell } from "lucide-react";
import { digitalProducts, whatsappLink } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

export function DigitalProducts() {
  return (
    <section id="productos" className="py-28 lg:py-36 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-amber mb-4">
            03 — Productos Digitales
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-2xl text-balance">
            Formación práctica, a tu propio ritmo.
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            Ebooks y cursos on-demand para directivos y emprendedores que quieren aplicar
            gestión, transformación digital e inteligencia artificial sin esperar una consultoría.
          </p>
        </Reveal>

        <RevealGroup className="mt-16 grid sm:grid-cols-2 gap-5">
          {digitalProducts.map((p) => (
            <motion.div
              key={p.title}
              variants={revealItem}
              className="rounded-2xl border border-border bg-surface/40 p-7 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber">
                  {p.format === "Curso" ? <PlayCircle size={14} /> : <BookOpen size={14} />}
                  {p.format}
                </span>
                {p.status === "soon" && (
                  <span className="text-[11px] font-medium text-text-tertiary border border-border rounded-full px-2.5 py-1">
                    Próximamente
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed flex-1">
                {p.description}
              </p>
              {p.status === "live" && p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-amber px-5 py-3 text-sm font-semibold text-[#1a1206] hover:bg-white transition-colors"
                >
                  Ver en Hotmart
                </a>
              ) : (
                <a
                  href={whatsappLink(`Hola Gustavo, quiero que me avises cuando esté disponible "${p.title}".`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-semibold hover:bg-surface transition-colors"
                >
                  <Bell size={14} />
                  Notificarme
                </a>
              )}
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
