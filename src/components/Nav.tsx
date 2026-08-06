"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site, whatsappLink } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-18 flex items-center justify-between py-4">
        <Link href="/#top" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo-mark.png"
            alt="Gustavo Struve"
            width={22}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="font-semibold tracking-tight text-[15px] leading-tight hidden sm:block">
            Gustavo Struve
            <span className="block text-[10px] font-medium tracking-[0.18em] text-text-tertiary uppercase">
              Consultoría Integral
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={whatsappLink("Hola Gustavo, quisiera conversar sobre una consultoría.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-[#04140f] hover:bg-teal/90 transition-colors"
          >
            {site.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden p-2 -mr-2 text-text-primary"
          aria-label="Abrir menú"
        >
          <Menu size={24} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg lg:hidden"
          >
            <div className="flex items-center justify-between px-6 h-18 py-4 border-b border-border">
              <span className="font-semibold">Menú</span>
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-1">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-2xl font-semibold py-4 border-b border-border text-text-primary"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={whatsappLink("Hola Gustavo, quisiera conversar sobre una consultoría.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-teal px-5 py-3.5 text-sm font-semibold text-[#04140f]"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
