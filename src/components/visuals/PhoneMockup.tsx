"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TravelDiscoverScreen } from "@/components/visuals/app-screens/TravelDiscoverScreen";
import { TravelItineraryScreen } from "@/components/visuals/app-screens/TravelItineraryScreen";
import { LivePhoneScreen } from "@/components/visuals/LivePhoneScreen";
import { MOTION_EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PhoneMockupProps = {
  className?: string;
  variant?: "hero-left" | "hero-right" | "card";
  children?: React.ReactNode;
  delay?: number;
  live?: boolean;
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
  live = false,
}: PhoneMockupProps) {
  const reduceMotion = useReducedMotion();
  const sizes = {
    "hero-left": "w-[200px] sm:w-[220px] md:w-[260px]",
    "hero-right": "w-[180px] sm:w-[200px] md:w-[240px]",
    card: "w-full max-w-[140px] mx-auto",
  };

  const screen = children ?? <ScreenForVariant variant={variant} />;
  const screenContent = live && !reduceMotion ? (
    <LivePhoneScreen>{screen}</LivePhoneScreen>
  ) : (
    screen
  );

  return (
    <motion.div
      className={cn("relative", sizes[variant], className)}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: MOTION_EASE }}
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
    >
      <div
        className={cn(
          "relative",
          !reduceMotion && (variant === "hero-left" ? "animate-float" : "animate-float-delayed")
        )}
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="relative rounded-[2.5rem] p-[3px] bg-gradient-to-b from-white/25 via-white/8 to-white/12 shadow-2xl shadow-black/60">
          <div className="absolute -inset-6 bg-gradient-to-b from-blue-500/25 via-violet-500/15 to-transparent blur-3xl rounded-[3rem] -z-10 opacity-80" />
          <div className="relative rounded-[2.35rem] overflow-hidden bg-[#0a0a12] border border-white/10 aspect-[9/19.5] shadow-inner">
            <div className="phone-reflection" />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[72px] h-[22px] bg-black rounded-full z-20 border border-white/5 shadow-inner" />
            <div className="h-full w-full relative z-10">{screenContent}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
