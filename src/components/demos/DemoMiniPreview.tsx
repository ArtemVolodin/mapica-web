"use client";

import type { DemoId } from "@/lib/content";
import { cn } from "@/lib/utils";

export function DemoMiniPreview({ id, className }: { id: DemoId; className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[130px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-[#07070f]",
        className
      )}
    >
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-black/80 z-10" />
      {id === "travel" && <TravelPreview />}
      {id === "running" && <RunningPreview />}
      {id === "realestate" && <RealEstatePreview />}
      {id === "homeservices" && <HomeServicesPreview />}
    </div>
  );
}

function TravelPreview() {
  return (
    <div className="h-full p-2 pt-4 flex flex-col text-white">
      <p className="text-[7px] text-zinc-500">Rome trip</p>
      <p className="text-[9px] font-semibold mb-1">AI itinerary</p>
      <div className="flex-1 rounded-lg bg-gradient-to-br from-blue-900/80 to-indigo-950 relative overflow-hidden border border-white/10">
        <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 100 80">
          <path d="M10 60 Q40 30 70 45 T95 25" stroke="#60a5fa" strokeWidth="2" fill="none" />
          <circle cx="70" cy="45" r="3" fill="#22d3ee" />
        </svg>
        <p className="absolute bottom-1 left-1 text-[6px] text-white/80">Colosseum · 14 min</p>
      </div>
      <div className="mt-1 space-y-0.5">
        <div className="h-1 w-full bg-white/15 rounded" />
        <div className="h-1 w-2/3 bg-white/10 rounded" />
      </div>
    </div>
  );
}

function RunningPreview() {
  return (
    <div className="h-full p-2 pt-4 flex flex-col text-white">
      <p className="text-[9px] font-semibold">5K Plan</p>
      <p className="text-[7px] text-violet-300 mb-1">Week 3 · Recovery</p>
      <div className="flex-1 flex items-end gap-0.5 px-0.5">
        {[35, 55, 40, 70, 50, 80, 45].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-violet-600 to-fuchsia-400"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-1 grid grid-cols-2 gap-1 text-[6px]">
        <div className="rounded bg-white/10 p-1">5.2 km</div>
        <div className="rounded bg-white/10 p-1">148 bpm</div>
      </div>
    </div>
  );
}

function RealEstatePreview() {
  return (
    <div className="h-full p-2 pt-4 flex flex-col text-white">
      <p className="text-[9px] font-semibold mb-1">Saved homes</p>
      <div className="flex-1 space-y-1">
        {["€420k", "€385k"].map((price, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-white/10">
            <div className="h-8 bg-gradient-to-r from-purple-700/60 to-indigo-800/60" />
            <div className="p-1 bg-white/5">
              <p className="text-[7px] font-medium">{price}</p>
              <p className="text-[6px] text-zinc-500">Le Marais</p>
            </div>
          </div>
        ))}
      </div>
      <div className="h-6 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-[6px]">
        12 pins on map
      </div>
    </div>
  );
}

function HomeServicesPreview() {
  return (
    <div className="h-full p-2 pt-4 flex flex-col text-white">
      <p className="text-[9px] font-semibold mb-1">Plumbing repair</p>
      <div className="rounded-lg bg-cyan-500/20 border border-cyan-500/30 p-1.5 mb-1">
        <p className="text-[7px] text-cyan-200">AI estimate</p>
        <p className="text-[9px] font-semibold">€120 – €180</p>
      </div>
      <div className="flex-1 space-y-1">
        {["Booked", "En route", "In progress"].map((s, i) => (
          <div key={s} className="flex items-center gap-1">
            <div
              className={cn(
                "w-1.5 h-1.5 rounded-full",
                i < 2 ? "bg-cyan-400" : "bg-white/20"
              )}
            />
            <span className="text-[7px] text-zinc-400">{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
