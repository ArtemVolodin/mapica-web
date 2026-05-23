"use client";

import { motion } from "framer-motion";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? 32 : 36;

  return (
    <a href="#" className="flex items-center gap-2.5 group">
      <motion.div
        className="relative flex items-center justify-center rounded-xl overflow-hidden"
        style={{ width: dim, height: dim }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-violet-600 to-cyan-400 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="relative z-10 text-white font-bold text-lg leading-none tracking-tighter">
          M
        </span>
        <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
      </motion.div>
      <span
        className={`font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors ${
          size === "sm" ? "text-base" : "text-lg"
        }`}
      >
        Mapica
      </span>
    </a>
  );
}
