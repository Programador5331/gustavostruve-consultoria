"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, Bell } from "lucide-react";
import { digitalProducts, whatsappLink } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

export function DigitalProducts() {
  return (
    <section id="productos" className="py-28 lg:py-36 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
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
          {digitalProducts.map((p) => {
            const isLive = p.status === "live" && p.url;
            const href = isLive
              ? p.url!
              : whatsappLink(`Hola Gustavo, quiero que me avises cuando esté disponible "${p.title}".`);

            return (
              <motion.a
                key={p.title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={revealItem}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="group flex gap-5 rounded-2xl border border-border bg-surface/40 p-5 hover:border-border-strong hover:bg-surface transition-colors"
              >
                <div className="relative w-28 sm:w-32 shrink-0 aspect-[850/1100] rounded-lg overflow-hidden border border-border-strong">
                  {p.coverImage && (
                    <Image
                      src={p.coverImage}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  {!isLive && (
                    <div className="absolute top-1.5 right-1.5 rounded-full bg-bg/85 px-2 py-0.5 text-[9px] font-semibold text-text-secondary">
                      Pronto
                    </div>
                  )}
                </div>

                <div className="flex flex-col min-w-0 py-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber">
                    {p.format === "Curso" ? <PlayCircle size={14} /> : <BookOpen size={14} />}
                    {p.format}
                  </span>
                  <h3 className="mt-2 text-lg font-bold tracking-tight leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber group-hover:text-white transition-colors">
                    {isLive ? (
                      "Ver en Hotmart →"
                    ) : (
                      <>
                        <Bell size={13} />
                        Notificarme
                      </>
                    )}
                  </span>
                </div>
              </motion.a>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
