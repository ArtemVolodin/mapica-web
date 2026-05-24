"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MOTION_EASE, viewportReveal } from "@/lib/motion";
import { useMounted } from "@/hooks/useMounted";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  y?: number;
};

/** Scroll reveal — visible on SSR; animates when scrolled into view after hydration */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
  y = 24,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once, margin: viewportReveal.margin, amount: 0.15 });

  const visible = reduceMotion || !mounted || inView;

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={false}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: MOTION_EASE }}
    >
      {children}
    </motion.div>
  );
}
