"use client";

import Image from "next/image";
import { about } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="sobre-mi" className="py-28 lg:py-36 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(25,211,181,0.25), transparent 55%), linear-gradient(180deg, #0d1424, #070b14)",
                }}
              />
              <Image
                src="/images/gustavo-struve.png"
                alt="Gustavo Struve, Consultor Principal"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority={false}
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-sm font-semibold tracking-[0.14em] uppercase text-teal mb-4">
                Sobre mí
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
                {about.name}
              </h2>
              <p className="mt-3 text-text-secondary">{about.title}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-8 space-y-4">
              {about.bio.map((p) => (
                <p key={p} className="text-text-secondary leading-relaxed">
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.2} className="mt-9 flex flex-wrap gap-3">
              {about.credentials.map((c) => (
                <span
                  key={c}
                  className="text-xs font-medium border border-border rounded-full px-3.5 py-2 text-text-secondary"
                >
                  {c}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
