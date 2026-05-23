"use client";

import type { MouseEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "navbar" | "footer" | "icon";
  className?: string;
};

/** Original asset: 1536×1024 */
const LOGO_ASPECT = 1.5;

const heights = {
  navbar: 44,
  footer: 72,
  icon: 36,
};

export function Logo({ variant = "navbar", className }: LogoProps) {
  const height = heights[variant];
  const width = Math.round(height * LOGO_ASPECT);

  const scrollToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="/" onClick={scrollToTop} className={cn("inline-flex group", className)}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Image
          src="/mapica-logo.png"
          alt="mapica — AI-powered products"
          width={width}
          height={height}
          className="object-contain object-left"
          style={{ height, width: "auto", maxHeight: height }}
          priority={variant === "navbar"}
          unoptimized
        />
      </motion.div>
    </a>
  );
}
