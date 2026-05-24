"use client";

import { motion } from "framer-motion";
import { MOTION_EASE } from "@/lib/motion";

/** Subtle animated lines connecting hero UI cluster */
export function HeroConnections() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-[5] opacity-40 hidden sm:block"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="hero-conn" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M120 320 Q280 280 400 300 T620 260"
        fill="none"
        stroke="url(#hero-conn)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.7 }}
        transition={{ duration: 2.2, delay: 0.6, ease: MOTION_EASE }}
      />
      <motion.path
        d="M420 300 Q560 280 700 300"
        fill="none"
        stroke="url(#hero-conn)"
        strokeWidth="0.75"
        strokeDasharray="4 6"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, delay: 1.2, ease: MOTION_EASE }}
      />
      <motion.circle
        cx="700"
        cy="300"
        r="4"
        fill="#22d3ee"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: [0.4, 1, 0.4], scale: 1 }}
        transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
      />
    </svg>
  );
}
