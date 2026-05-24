"use client";

import { motion, useReducedMotion } from "framer-motion";
import { springSoft } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PremiumCardProps = {
  children: React.ReactNode;
  className?: string;
  glow?: "blue" | "violet" | "purple" | "cyan" | "none";
  hoverLift?: boolean;
};

const glowMap = {
  blue: "hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.35)]",
  violet: "hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.35)]",
  purple: "hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.35)]",
  cyan: "hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.3)]",
  none: "",
};

export function PremiumCard({
  children,
  className,
  glow = "none",
  hoverLift = true,
}: PremiumCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "premium-card glass rounded-2xl border border-white/8",
        glowMap[glow],
        className
      )}
      whileHover={reduceMotion || !hoverLift ? undefined : { y: -4, scale: 1.005 }}
      transition={springSoft}
    >
      <div className="premium-card-shine pointer-events-none" aria-hidden />
      {children}
    </motion.div>
  );
}
