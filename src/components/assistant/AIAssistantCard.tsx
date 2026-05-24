"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useAIAssistant } from "./AIAssistantProvider";

export function AIAssistantCard() {
  const { open } = useAIAssistant();

  return (
    <motion.button
      type="button"
      onClick={open}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 glass-strong rounded-2xl p-4 w-[200px] glow-blue hidden sm:block text-left cursor-pointer group"
      initial={false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Open Mapica AI assistant"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative flex items-center gap-2 mb-3">
        <div className="h-8 w-[52px] shrink-0 overflow-hidden rounded-lg shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
          <Image
            src="/mapica-logo.png"
            alt=""
            width={52}
            height={32}
            className="h-full w-auto max-w-none object-contain object-left -translate-x-0.5"
            unoptimized
          />
        </div>
        <div>
          <p className="text-xs font-medium text-white">Mapica AI</p>
          <p className="text-[10px] text-blue-400/90 group-hover:text-blue-300 transition-colors">
            Ask me anything →
          </p>
        </div>
      </div>
      <div className="relative space-y-1.5">
        <div className="h-1.5 w-full rounded bg-white/15 group-hover:bg-white/20 transition-colors" />
        <div className="h-1.5 w-4/5 rounded bg-white/10" />
        <div className="h-1.5 w-full rounded bg-blue-400/30 animate-pulse" />
      </div>
    </motion.button>
  );
}
