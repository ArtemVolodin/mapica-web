"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientOrb } from "@/components/visuals/GradientOrb";

export function CTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <GradientOrb className="top-0 left-1/2 -translate-x-1/2" color="blue" size="xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-blue-950/20 to-[#030308]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
            Ready to build your{" "}
            <span className="text-gradient-accent">AI-powered app?</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s turn your idea into a real mobile product for iPhone,
            Android or web.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#contact" size="lg">
              Book Intro Call
              <ArrowRight size={18} />
            </Button>
            <Button href="#products" variant="secondary" size="lg">
              <Play size={16} className="fill-current" />
              View Demos
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
