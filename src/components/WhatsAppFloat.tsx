"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/content";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink("Hola Gustavo, tengo una consulta.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-teal text-[#04140f] flex items-center justify-center shadow-[0_8px_30px_rgba(25,211,181,0.35)]"
          aria-label="Escribir por WhatsApp"
        >
          <MessageCircle size={24} fill="currentColor" strokeWidth={0} />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
