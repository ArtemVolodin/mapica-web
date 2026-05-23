"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Process"
          title="Idea to App Store"
          description="A streamlined pipeline built for speed without sacrificing craft."
        />

        <div className="relative mt-8">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px">
            <div className="h-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
            <motion.div
              className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-blue-400 to-violet-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className="glass rounded-2xl p-6 md:p-8 h-full hover:border-blue-500/20 transition-colors group">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-3xl font-bold text-gradient-accent opacity-90">
                      {step.step}
                    </span>
                    <div className="hidden lg:block w-2 h-2 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50 group-hover:scale-125 transition-transform" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
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
