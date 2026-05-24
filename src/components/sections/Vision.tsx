"use client";

import { motion } from "framer-motion";
import { Particles } from "@/components/visuals/Particles";
import { GradientOrb } from "@/components/visuals/GradientOrb";

export function Vision() {
  return (
    <section id="vision" className="relative py-28 md:py-40 overflow-hidden scroll-mt-section">
      <GradientOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="violet" size="xl" />
      <Particles count={50} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-transparent to-[#030308]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.blockquote
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] tracking-tight text-white"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-zinc-500">&ldquo;</span>
          AI is changing how products are built.{" "}
          <span className="text-gradient">
            Mapica helps founders and businesses
          </span>{" "}
          move from idea to working app at the speed of modern AI.
          <span className="text-zinc-500">&rdquo;</span>
        </motion.blockquote>

        <motion.div
          className="mt-10 flex items-center justify-center gap-4"
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
          <p className="text-sm text-zinc-500 tracking-wide uppercase">
            Founder vision
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500/50" />
        </motion.div>
      </div>
    </section>
  );
}
