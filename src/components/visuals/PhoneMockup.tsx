"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  className?: string;
  variant?: "hero-left" | "hero-right" | "card";
  children?: React.ReactNode;
  delay?: number;
};

export function PhoneMockup({
  className,
  variant = "hero-left",
  children,
  delay = 0,
}: PhoneMockupProps) {
  const sizes = {
    "hero-left": "w-[200px] sm:w-[220px] md:w-[260px]",
    "hero-right": "w-[180px] sm:w-[200px] md:w-[240px]",
    card: "w-full max-w-[140px] mx-auto",
  };

  return (
    <motion.div
      className={cn("relative", sizes[variant], className)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="animate-float"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative rounded-[2.5rem] p-[3px] bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl shadow-black/50">
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent blur-2xl rounded-[3rem] -z-10" />
          <div className="rounded-[2.35rem] overflow-hidden bg-[#0a0a12] border border-white/10 aspect-[9/19.5]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20" />
            <div className="h-full w-full relative">
              {children ?? <DefaultPhoneUI variant={variant} />}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function DefaultPhoneUI({ variant }: { variant: string }) {
  const isRight = variant === "hero-right";

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-[#0d0d1a] to-[#050508] p-4 pt-10">
      <div className="flex items-center justify-between mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-600" />
        <div className="flex gap-1">
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="h-2 w-3/4 rounded-full bg-white/20" />
        <div className="h-2 w-1/2 rounded-full bg-white/10" />
      </div>
      {isRight ? (
        <div className="flex-1 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/20 border border-white/10 p-3 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/40" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-full rounded bg-white/20" />
              <div className="h-1.5 w-2/3 rounded bg-white/10" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-black/30 border border-white/5 p-2">
            <div className="h-1 w-8 rounded bg-blue-400/60 mb-2" />
            <div className="space-y-1">
              <div className="h-1 w-full rounded bg-white/15" />
              <div className="h-1 w-4/5 rounded bg-white/10" />
              <div className="h-1 w-full rounded bg-white/15" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 space-y-2">
          <div className="h-20 rounded-2xl bg-gradient-to-r from-blue-600/40 to-violet-600/30 border border-white/10 p-2">
            <div className="h-1.5 w-12 rounded bg-white/30 mb-2" />
            <div className="h-8 rounded-lg bg-black/20" />
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="rounded-xl bg-white/5 border border-white/10" />
            <div className="rounded-xl bg-white/5 border border-white/10" />
          </div>
        </div>
      )}
      <div className="mt-3 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 opacity-80" />
    </div>
  );
}
