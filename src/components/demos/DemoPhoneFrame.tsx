"use client";

import { cn } from "@/lib/utils";

type DemoPhoneFrameProps = {
  children: React.ReactNode;
  className?: string;
  size?: "card" | "modal";
};

const sizeClasses = {
  card: "w-[148px] sm:w-[156px]",
  modal: "w-[200px] sm:w-[240px] md:w-[260px]",
};

export function DemoPhoneFrame({
  children,
  className,
  size = "card",
}: DemoPhoneFrameProps) {
  return (
    <div className={cn("relative mx-auto", sizeClasses[size], className)}>
      <div className="relative rounded-[1.75rem] p-[2px] bg-gradient-to-b from-white/25 via-white/8 to-white/12 shadow-2xl shadow-black/50">
        <div className="absolute -inset-3 bg-gradient-to-b from-blue-500/15 via-violet-500/10 to-transparent blur-xl rounded-[2rem] -z-10" />
        <div className="relative rounded-[1.65rem] overflow-hidden bg-[#07070f] border border-white/10 aspect-[9/19.2] shadow-inner">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[42%] h-[18px] bg-black rounded-full z-20 border border-white/5" />
          <div className="h-full w-full relative">{children}</div>
        </div>
      </div>
    </div>
  );
}
