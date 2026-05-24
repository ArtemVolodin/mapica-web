"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProductUIPreview } from "@/components/visuals/ProductUIPreview";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { products } from "@/lib/data";
import { productDetails, type ProductDetail } from "@/lib/content";
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
  const [selected, setSelected] = useState<ProductDetail | null>(null);

  return (
    <section id="products" className="relative py-24 md:py-32 scroll-mt-section">
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
              role="button"
              tabIndex={0}
              onClick={() => setSelected(productDetails[product.title] ?? null)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(productDetails[product.title] ?? null);
                }
              }}
              className={cn(
                "group relative glass rounded-2xl p-6 overflow-hidden cursor-pointer text-left",
                "hover:border-white/15 transition-all duration-500",
                "shadow-lg shadow-black/20",
                accentGlow[product.accent]
              )}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ProductUIPreview accent={product.accent} ui={product.ui} />
              </motion.div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-gradient-accent transition-all">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-400/80">
                    {product.valueProposition}
                  </p>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                    Explore concept
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProductDetailModal
        product={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
