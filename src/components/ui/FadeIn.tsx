"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
};

/** Scroll reveal — SSR-safe (content visible without JS). */
export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
