"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { GradientOrb } from "@/components/visuals/GradientOrb";
import { HeroAtmosphere } from "@/components/visuals/HeroAtmosphere";
import { HeroConnections } from "@/components/visuals/HeroConnections";
import { Reveal, RevealItem } from "@/components/ui/Reveal";
import { scrollToSection } from "@/lib/scroll";
import { MOTION_EASE } from "@/lib/motion";
import { useMounted } from "@/hooks/useMounted";

export function Hero() {
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      <HeroAtmosphere />
      <GradientOrb className="top-0 left-1/4 -translate-x-1/2" color="blue" size="xl" />
      <GradientOrb className="top-1/3 right-0 translate-x-1/3" color="violet" size="lg" />
      <GradientOrb className="bottom-0 left-1/2 -translate-x-1/2" color="cyan" size="md" />

      <div className="absolute inset-0 bg-gradient-to-b from-[#030308]/80 via-transparent to-[#030308] pointer-events-none" />

      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
        </defs>
        {mounted && !reduceMotion && (
          <>
            <motion.path
              d="M0 400 Q400 200 800 350 T1600 280"
              fill="none"
              stroke="url(#route-grad)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: MOTION_EASE }}
            />
            <motion.path
              d="M200 600 Q600 400 1000 500 T1800 450"
              fill="none"
              stroke="url(#route-grad)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 2.5, delay: 0.8, ease: MOTION_EASE }}
            />
          </>
        )}
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <Reveal className="text-center lg:text-left z-10" stagger={0.1}>
            <RevealItem>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-zinc-400 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                AI-native mobile product studio
              </div>
            </RevealItem>
            <RevealItem>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-white">
                We build{" "}
                <span className="text-gradient-accent">AI-powered</span>
                <br />
                mobile products.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Mapica designs and launches iPhone, Android and web products using
                AI, Flutter, Figma and modern automation workflows.
              </p>
            </RevealItem>
            <RevealItem>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="#contact" size="lg" onClick={() => scrollToSection("contact")}>
                  Book Intro Call
                  <ArrowRight size={18} />
                </Button>
                <Button
                  href="#demo-lab"
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToSection("demo-lab")}
                >
                  <Play size={16} className="fill-current" />
                  View Demos
                </Button>
              </div>
            </RevealItem>
          </Reveal>

          <div className="relative h-[420px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
            <HeroConnections />
            <PhoneMockup
              variant="hero-left"
              className="absolute left-0 sm:left-4 top-8 z-10"
              delay={0.4}
              live
            />
            <PhoneMockup
              variant="hero-right"
              className="absolute right-0 sm:right-4 top-16 z-20"
              delay={0.6}
              live
            />
          </div>
        </div>
      </div>
    </section>
  );
}
