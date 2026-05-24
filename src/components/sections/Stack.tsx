"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { stackItems } from "@/lib/data";
import { PremiumCard } from "@/components/ui/PremiumCard";

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
              <PremiumCard key={item.name} className="text-center p-5 md:p-6">
                <motion.div
                  className="relative mx-auto w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-white/10 group-hover:shadow-lg transition-shadow"
                  style={{
                    background: `${item.color}18`,
                    boxShadow: `0 0 30px -8px ${item.color}40`,
                  }}
                  whileHover={{ rotate: [0, -4, 4, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </motion.div>
                <h3 className="relative font-semibold text-white">{item.name}</h3>
                <p className="relative mt-1 text-xs text-zinc-500">{item.description}</p>
                <p className="relative mt-2 text-[10px] text-blue-400/80 font-medium">
                  {item.useCase}
                </p>
              </PremiumCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
