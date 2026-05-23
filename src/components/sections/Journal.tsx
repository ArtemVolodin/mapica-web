"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { journalPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Journal() {
  return (
    <section id="journal" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Journal"
          title="Build in public"
          description="Thoughts on AI product development, design systems and shipping faster."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journalPosts.map((post, i) => (
            <motion.article
              key={post.title}
              className="group glass rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-400 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div
                className={cn(
                  "relative h-36 bg-gradient-to-br",
                  post.gradient
                )}
              >
                <div className="absolute inset-0 bg-[#030308]/40" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="h-1 w-8 rounded bg-white/30 mb-2" />
                  <div className="h-1 w-16 rounded bg-white/20" />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/10 backdrop-blur border border-white/10" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-medium tracking-wider uppercase text-zinc-600">
                  {post.date}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more
                  <ArrowRight size={12} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
