"use client";

import { motion } from "framer-motion";

type GradientOrbProps = {
  className?: string;
  color?: "blue" | "violet" | "cyan";
  size?: "sm" | "md" | "lg" | "xl";
};

const colors = {
  blue: "bg-blue-600/25",
  violet: "bg-violet-600/25",
  cyan: "bg-cyan-500/20",
};

const sizes = {
  sm: "w-48 h-48",
  md: "w-72 h-72",
  lg: "w-[28rem] h-[28rem]",
  xl: "w-[40rem] h-[40rem]",
};

export function GradientOrb({
  className = "",
  color = "blue",
  size = "lg",
}: GradientOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[100px] ${colors[color]} ${sizes[size]} pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.5, 0.7, 0.5],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
