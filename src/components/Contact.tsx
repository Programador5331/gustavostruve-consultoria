"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { contact, site, whatsappLink } from "@/lib/content";
import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contacto" className="py-28 lg:py-36 border-t border-border scroll-mt-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-[130px]"
          style={{ background: "radial-gradient(circle, rgba(25,211,181,0.16), transparent 70%)" }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-balance">
                {contact.headline}
              </h2>
              <p className="mt-6 text-lg text-text-secondary max-w-sm">{contact.text}</p>
            </Reveal>

            <Reveal delay={0.15} className="mt-10 space-y-4">
              <a
                href={whatsappLink("Hola Gustavo, quisiera conversar sobre mi institución.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="h-11 w-11 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-[#04140f] transition-colors">
                  <MessageCircle size={18} />
                </span>
                <span className="font-semibold text-lg">{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 group">
                <span className="h-11 w-11 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-[#04140f] transition-colors">
                  <Mail size={18} />
                </span>
                <span className="font-semibold">{site.email}</span>
              </a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                <span className="h-11 w-11 rounded-full bg-teal/10 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-[#04140f] transition-colors">
                  <Phone size={18} />
                </span>
                <span className="font-semibold">{site.location}</span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <RevealGroup className="grid sm:grid-cols-2 gap-4">
              {contact.steps.map((s) => (
                <motion.div
                  key={s.num}
                  variants={revealItem}
                  className="rounded-2xl border border-border bg-surface/40 p-6"
                >
                  <span className="text-sm font-mono text-teal">{s.num}</span>
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{s.text}</p>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
