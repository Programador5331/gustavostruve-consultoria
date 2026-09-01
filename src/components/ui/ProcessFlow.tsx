"use client";

import { motion, useReducedMotion } from "framer-motion";

type Step = { num: string; title: string; text: string };

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProcessFlow({ steps }: { steps: Step[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-10">
      {/* Desktop: horizontal flow */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative hidden lg:flex items-start justify-between"
      >
        <div className="absolute left-6 right-6 top-6 h-px bg-border" />
        <motion.div
          variants={{
            hidden: { scaleX: reduceMotion ? 1 : 0 },
            show: { scaleX: 1, transition: { duration: reduceMotion ? 0 : 1.3, ease: EASE } },
          }}
          style={{ transformOrigin: "left", width: "calc(100% - 3rem)" }}
          className="absolute left-6 top-6 h-px bg-teal"
        />
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            variants={{
              hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.4 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 18, delay: reduceMotion ? 0 : i * 0.15 },
              },
            }}
            className="relative flex w-40 flex-col items-center text-center"
          >
            <motion.span
              variants={{
                hidden: { boxShadow: "0 0 0 0 rgba(25,211,181,0.55)" },
                show: {
                  boxShadow: "0 0 0 14px rgba(25,211,181,0)",
                  transition: { duration: 0.9, delay: reduceMotion ? 0 : i * 0.15 + 0.15, ease: "easeOut" },
                },
              }}
              className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal bg-bg font-mono text-sm font-bold text-teal"
            >
              {step.num}
            </motion.span>
            <h4 className="mt-4 font-semibold text-sm">{step.title}</h4>
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{step.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile/tablet: vertical flow */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative lg:hidden pl-[38px]"
      >
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-border" />
        <motion.div
          variants={{
            hidden: { scaleY: reduceMotion ? 1 : 0 },
            show: { scaleY: 1, transition: { duration: reduceMotion ? 0 : 1.3, ease: EASE } },
          }}
          style={{ transformOrigin: "top", height: "calc(100% - 16px)" }}
          className="absolute left-[23px] top-2 w-px bg-teal"
        />
        <div className="space-y-9">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={{
                hidden: { opacity: 0, x: reduceMotion ? 0 : -12 },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 260, damping: 18, delay: reduceMotion ? 0 : i * 0.12 },
                },
              }}
              className="relative"
            >
              <span className="absolute -left-[38px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-teal bg-bg font-mono text-xs font-bold text-teal">
                {step.num}
              </span>
              <h4 className="font-semibold text-sm">{step.title}</h4>
              <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
