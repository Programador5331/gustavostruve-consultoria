"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function TeamBand() {
  return (
    <section className="relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden border-t border-border">
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/team-meeting.jpg"
          alt="Equipo directivo y médico revisando resultados e indicadores de gestión clínica"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,11,20,0.55) 0%, rgba(7,11,20,0.25) 40%, rgba(7,11,20,0.85) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,11,20,0.75) 0%, transparent 45%, transparent 100%)",
        }}
      />

      <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex items-end pb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="max-w-md text-xl sm:text-2xl font-semibold tracking-tight text-balance"
        >
          Equipos directivos y médicos, trabajando con datos claros en vez de intuición.
        </motion.p>
      </div>
    </section>
  );
}
