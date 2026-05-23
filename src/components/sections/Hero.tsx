"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AIAssistantCard } from "@/components/assistant/AIAssistantCard";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { GradientOrb } from "@/components/visuals/GradientOrb";
import { scrollToSection } from "@/lib/scroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 grid-bg" />
      <GradientOrb className="top-0 left-1/4 -translate-x-1/2" color="blue" size="xl" />
      <GradientOrb className="top-1/3 right-0 translate-x-1/3" color="violet" size="lg" />
      <GradientOrb className="bottom-0 left-1/2 -translate-x-1/2" color="cyan" size="md" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#030308] via-transparent to-[#030308] pointer-events-none" />

      {/* Route lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0 400 Q400 200 800 350 T1600 280"
          fill="none"
          stroke="url(#route-grad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.path
          d="M200 600 Q600 400 1000 500 T1800 450"
          fill="none"
          stroke="url(#route-grad)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 2.5, delay: 0.8 }}
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-zinc-400 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              AI-native mobile product studio
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We build{" "}
              <span className="text-gradient-accent">AI-powered</span>
              <br />
              mobile products.
            </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Mapica designs and launches iPhone, Android and web products using
              AI, Flutter, Figma and modern automation workflows.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button href="#contact" size="lg" onClick={() => scrollToSection("contact")}>
                Book Intro Call
                <ArrowRight size={18} />
              </Button>
              <Button href="#demo-lab" variant="secondary" size="lg" onClick={() => scrollToSection("demo-lab")}>
                <Play size={16} className="fill-current" />
                View Demos
              </Button>
            </motion.div>
          </div>

          <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
            <PhoneMockup
              variant="hero-left"
              className="absolute left-0 sm:left-4 top-8 z-10"
              delay={0.4}
            />
            <PhoneMockup
              variant="hero-right"
              className="absolute right-0 sm:right-4 top-16 z-20"
              delay={0.6}
            />
            <AIAssistantCard />
          </div>
        </div>
      </div>
    </section>
  );
}
