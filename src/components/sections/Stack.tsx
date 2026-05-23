"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackItems } from "@/lib/data";

export function Stack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 scroll-mt-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Stack"
          title="The AI product ecosystem"
          description="Best-in-class tools wired together for design, development, intelligence and scale."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
          {stackItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                className="group relative glass rounded-2xl p-5 md:p-6 text-center hover:bg-white/[0.06] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)`,
                  }}
                />
                <div
                  className="relative mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/10 transition-shadow group-hover:shadow-lg"
                  style={{
                    background: `${item.color}18`,
                    boxShadow: `0 0 30px -8px ${item.color}40`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <h3 className="relative font-semibold text-white">{item.name}</h3>
                <p className="relative mt-1 text-xs text-zinc-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
