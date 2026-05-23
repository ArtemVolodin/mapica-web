"use client";

import { MapPin, Navigation, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

/** Travel demo — live route / navigation screen */
export function TravelRouteScreen({ progress = 0 }: { progress?: number }) {
  const routeProgress = Math.min(progress * 1.4, 1);

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5 pb-2">
        <p className="text-[8px] text-zinc-500">Rome · Day 2</p>
        <p className="text-[11px] font-semibold">Colosseum route</p>
      </div>
      <div className="mx-3.5 flex-1 min-h-0 rounded-2xl relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#10102a] to-[#080810]" />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <motion.path
            d="M25 150 Q70 90 110 110 T175 55"
            stroke="#3b82f6"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: routeProgress }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          <motion.circle
            cx={25 + 150 * routeProgress}
            cy={150 - 95 * routeProgress}
            r="7"
            fill="#22d3ee"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </svg>
        <div className="absolute top-2 right-2 glass rounded-lg px-2 py-1 border border-white/10 bg-black/50 text-[7px]">
          <span className="text-emerald-400 font-medium">On route</span>
        </div>
        <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-black/60 backdrop-blur border border-white/10 p-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/40 flex items-center justify-center">
              <Navigation size={14} className="text-blue-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[8px] font-medium">14 min · 1.2 km</p>
              <p className="text-[7px] text-zinc-500">Via Via dei Fori Imperiali</p>
            </div>
            <Sparkles size={12} className="text-violet-400" />
          </div>
        </div>
      </div>
      <div className="px-3.5 py-2 space-y-1">
        {["Colosseum", "Roman Forum", "Palatine Hill"].map((stop, i) => (
          <div
            key={stop}
            className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/8 px-2 py-1"
          >
            <MapPin size={10} className={i === 0 ? "text-cyan-400" : "text-zinc-600"} />
            <span className="text-[8px] text-zinc-300">{stop}</span>
          </div>
        ))}
      </div>
      <TabBar active="Trips" />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-9 pb-1 text-[9px] text-white/70 font-medium">
      <span>9:41</span>
      <div className="flex gap-1 items-center">
        <span className="w-3 h-1.5 rounded-sm border border-white/50" />
        <span className="w-2 h-2 rounded-full bg-white/80" />
      </div>
    </div>
  );
}

function TabBar({ active }: { active: string }) {
  return (
    <div className="mt-auto flex justify-around py-2 border-t border-white/10 bg-[#050508]/90">
      {["Explore", "Trips", "AI", "Profile"].map((tab) => (
        <span
          key={tab}
          className={`text-[7px] ${tab === active ? "text-blue-400 font-medium" : "text-zinc-600"}`}
        >
          {tab}
        </span>
      ))}
    </div>
  );
}
