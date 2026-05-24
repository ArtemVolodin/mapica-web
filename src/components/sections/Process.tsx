"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Process() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden scroll-mt-section">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Process"
          title="Idea to App Store"
          description="A streamlined pipeline built for speed without sacrificing craft."
        />

        <div className="relative mt-8">
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px overflow-hidden">
            <div className="h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-violet-500 to-cyan-400"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            />
            {active !== null && (
              <motion.div
                className="absolute top-0 h-full w-1/4 bg-gradient-to-r from-blue-300 to-violet-400 blur-sm"
                layout
                initial={false}
                animate={{
                  left: `${(active / (processSteps.length - 1)) * 75}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                onHoverStart={() => setActive(i)}
                onHoverEnd={() => setActive(null)}
              >
                <motion.div
                  className={cn(
                    "glass rounded-2xl p-6 md:p-8 h-full process-step-glow border border-white/8",
                    active === i && "border-blue-500/30"
                  )}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <motion.span
                      className="text-3xl font-bold text-gradient-accent"
                      animate={
                        active === i
                          ? {
                              textShadow: "0 0 24px rgba(59,130,246,0.6)",
                            }
                          : { textShadow: "0 0 0px transparent" }
                      }
                    >
                      {step.step}
                    </motion.span>
                    <motion.div
                      className="hidden lg:block w-2.5 h-2.5 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
                      animate={active === i ? { scale: 1.4 } : { scale: 1 }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
                {i < processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-2">
                    <div className="w-px h-8 bg-gradient-to-b from-blue-500/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
