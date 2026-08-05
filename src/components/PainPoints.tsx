"use client";

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
            ¿Le suena familiar?
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </section>
  );
}
