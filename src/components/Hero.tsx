"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { hero, whatsappLink } from "@/lib/content";
import { Counter } from "@/components/ui/Counter";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* background photo */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "95% 48%" }}
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #070b14 0%, rgba(7,11,20,0.88) 28%, rgba(7,11,20,0.55) 50%, rgba(7,11,20,0.2) 75%, rgba(7,11,20,0.1) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(7,11,20,0.4) 0%, transparent 18%, transparent 82%, rgba(7,11,20,0.3) 100%)",
          }}
        />
        <motion.div
          className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, rgba(25,211,181,0.22), transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-[0.14em] uppercase text-teal mb-6"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance text-[11vw] leading-[1.05] tracking-[-0.03em] font-extrabold sm:text-6xl lg:text-[5.2rem]"
            >
              Transformamos la{" "}
              <span className="gradient-text">gestión</span> de tu
              institución de salud.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg text-text-secondary italic"
            >
              {hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappLink("Hola Gustavo, quisiera agendar una llamada de 20 minutos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-teal px-7 py-4 text-sm font-semibold text-[#04140f] hover:bg-white transition-colors"
              >
                {hero.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#pilares"
                className="inline-flex items-center gap-2 rounded-full border border-border-strong px-7 py-4 text-sm font-semibold text-text-primary hover:bg-surface transition-colors"
              >
                {hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <div className="flex lg:flex-col gap-8 lg:gap-10 lg:border-l lg:border-border lg:pl-10">
              {hero.stats.map((s) => (
                <div key={s.label} style={{ textShadow: "0 2px 10px rgba(0,0,0,0.85)" }}>
                  <div className="text-3xl sm:text-4xl font-extrabold tabular-nums">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-white/75 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#pilares"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-tertiary hidden sm:flex flex-col items-center gap-2"
        aria-label="Bajar"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Descubre más</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
