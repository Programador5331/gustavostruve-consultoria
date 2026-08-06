"use client";

import Image from "next/image";
import { Clock, LineChart, Banknote, Users, ShieldAlert, Rocket } from "lucide-react";
import { painPoints } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const icons = { Clock, LineChart, Banknote, Users, ShieldAlert, Rocket };

export function PainPoints() {
  return (
    <section className="py-28 lg:py-36 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight max-w-xl text-balance">
            ¿Te suena familiar?
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-6">
          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/exhausted-team.jpg"
                alt="Profesional de salud agotado tras una jornada sin procesos claros ni indicadores"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(7,11,20,0.75) 100%), linear-gradient(90deg, rgba(7,11,20,0.25), transparent 40%)",
                }}
              />
            </div>
          </Reveal>

          <RevealGroup className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {painPoints.map((p) => {
              const Icon = icons[p.icon as keyof typeof icons];
              return (
                <motion.div
                  key={p.title}
                  variants={revealItem}
                  className="group rounded-2xl border border-border bg-surface/50 p-7 hover:bg-surface hover:border-border-strong transition-colors"
                >
                  <div className="h-11 w-11 rounded-xl bg-teal/10 flex items-center justify-center text-teal mb-5 group-hover:bg-teal/15 transition-colors">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.text}</p>
                </motion.div>
              );
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
