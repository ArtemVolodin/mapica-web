"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { JournalArticleModal } from "@/components/journal/JournalArticleModal";
import { journalArticles, type JournalArticle } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Journal() {
  const [article, setArticle] = useState<JournalArticle | null>(null);

  return (
    <section id="journal" className="relative py-24 md:py-32 scroll-mt-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Journal"
          title="Build in public"
          description="Thoughts on AI product development, design systems and shipping faster."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journalArticles.map((post, i) => (
            <motion.article
              key={post.slug}
              className="group glass rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-400 flex flex-col"
              initial={false}
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
                <span className="absolute top-3 left-3 text-[10px] font-medium px-2 py-0.5 rounded-full glass border border-white/10 text-zinc-300">
                  {post.category}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] font-medium tracking-wider uppercase text-zinc-600">
                  {post.date}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 line-clamp-2 leading-relaxed flex-1">
                  {post.excerpt}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4 !px-0 !justify-start text-blue-400 hover:text-blue-300"
                  onClick={() => setArticle(post)}
                >
                  Read concept
                  <ArrowRight size={14} />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <JournalArticleModal
        article={article}
        open={!!article}
        onClose={() => setArticle(null)}
      />
    </section>
  );
}
