"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp, MOTION_EASE, viewportReveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
};

/** Staggered children reveal */
export function Reveal({ children, className, stagger = 0.08, delay = 0.05 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView="visible"
      viewport={viewportReveal}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
