"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductUIPreview } from "@/components/visuals/ProductUIPreview";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentGlow: Record<string, string> = {
  blue: "group-hover:shadow-blue-500/25",
  violet: "group-hover:shadow-violet-500/25",
  cyan: "group-hover:shadow-cyan-500/25",
  indigo: "group-hover:shadow-indigo-500/25",
  purple: "group-hover:shadow-purple-500/25",
  sky: "group-hover:shadow-sky-500/25",
};

export function Products() {
  return (
    <section id="products" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Products"
          title="AI products we've built"
          description="Premium mobile experiences across travel, health, commerce and productivity—each powered by intelligent workflows."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((product, i) => (
            <motion.article
              key={product.title}
              className={cn(
                "group relative glass rounded-2xl p-6 overflow-hidden cursor-default",
                "hover:border-white/15 transition-all duration-500",
                "shadow-lg shadow-black/20",
                accentGlow[product.accent]
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mb-6">
                <ProductUIPreview accent={product.accent} ui={product.ui} />
              </div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gradient-accent transition-all">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
