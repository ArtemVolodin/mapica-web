"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { DemoMiniPreview } from "./DemoMiniPreview";
import { DemoVideoModal } from "./DemoVideoModal";
import { ConceptDetailModal } from "./ConceptDetailModal";
import { demos, type DemoConcept } from "@/lib/content";
import { cn } from "@/lib/utils";

const accentGlow: Record<string, string> = {
  blue: "hover:shadow-blue-500/20",
  violet: "hover:shadow-violet-500/20",
  purple: "hover:shadow-purple-500/20",
  cyan: "hover:shadow-cyan-500/20",
};

export function DemoLab() {
  const [videoDemo, setVideoDemo] = useState<DemoConcept | null>(null);
  const [conceptDemo, setConceptDemo] = useState<DemoConcept | null>(null);

  return (
    <section id="demo-lab" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/15 via-transparent to-blue-950/10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Demo Lab"
          title="Demo Lab"
          description="Explore interactive product concepts built with AI-native workflows."
        />

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {demos.map((demo, i) => (
            <motion.article
              key={demo.id}
              className={cn(
                "group glass rounded-2xl p-6 border border-white/8",
                "hover:border-white/15 transition-all duration-500 shadow-lg shadow-black/20",
                accentGlow[demo.accent]
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
                <motion.div
                  className="shrink-0"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <DemoMiniPreview id={demo.id} />
                </motion.div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-blue-400/90 mb-2">
                    <Sparkles size={12} />
                    Live app preview
                  </div>
                  <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                    {demo.description}
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-2">
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => setVideoDemo(demo)}
                      className="gap-1.5"
                    >
                      <Play size={14} className="fill-current" />
                      Watch Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => setConceptDemo(demo)}
                    >
                      Open Concept
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <DemoVideoModal
        demo={videoDemo}
        open={!!videoDemo}
        onClose={() => setVideoDemo(null)}
      />
      <ConceptDetailModal
        demo={conceptDemo}
        open={!!conceptDemo}
        onClose={() => setConceptDemo(null)}
      />
    </section>
  );
}
