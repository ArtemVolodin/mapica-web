"use client";

import { motion } from "framer-motion";
import { TravelDiscoverScreen } from "@/components/visuals/app-screens/TravelDiscoverScreen";
import { TravelItineraryScreen } from "@/components/visuals/app-screens/TravelItineraryScreen";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  className?: string;
  variant?: "hero-left" | "hero-right" | "card";
  children?: React.ReactNode;
  delay?: number;
};

function ScreenForVariant({ variant }: { variant: string }) {
  if (variant === "hero-right") {
    return <TravelItineraryScreen />;
  }
  return <TravelDiscoverScreen />;
}

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
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="animate-float"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative rounded-[2.5rem] p-[3px] bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-2xl shadow-black/50">
          <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/20 via-violet-500/10 to-transparent blur-2xl rounded-[3rem] -z-10" />
          <div className="rounded-[2.35rem] overflow-hidden bg-[#0a0a12] border border-white/10 aspect-[9/19.5] shadow-inner">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-20 border border-white/5" />
            <div className="h-full w-full relative">
              {children ?? <ScreenForVariant variant={variant} />}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
