"use client";

import { Bell, MapPin, Search, Sparkles } from "lucide-react";

/** Realistic AI travel app — discover / home screen */
export function TravelDiscoverScreen() {
  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      {/* Status bar */}
      <div className="flex items-center justify-between px-4 pt-9 pb-1 text-[9px] text-white/70 font-medium">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <span className="w-3 h-1.5 rounded-sm border border-white/50" />
          <span className="w-2 h-2 rounded-full bg-white/80" />
        </div>
      </div>

      {/* Header */}
      <div className="px-3.5 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[8px] text-zinc-500 uppercase tracking-wider">Good morning</p>
            <p className="text-[11px] font-semibold">Explore with AI</p>
          </div>
          <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
            <Bell size={12} className="text-zinc-400" />
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-white/8 border border-white/10 px-2.5 py-2">
          <Search size={12} className="text-zinc-500 shrink-0" />
          <span className="text-[9px] text-zinc-500">Paris, Tokyo, Bali…</span>
          <div className="ml-auto w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
            <Sparkles size={10} />
          </div>
        </div>
      </div>

      {/* Map area */}
      <div className="mx-3.5 mb-2 flex-1 min-h-0 rounded-2xl relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c1428] via-[#12102a] to-[#0a0a14]" />
        <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 200 160" preserveAspectRatio="none">
          <path
            d="M20 120 Q60 80 100 95 T180 60"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M40 100 Q80 70 120 85"
            stroke="#8b5cf6"
            strokeWidth="1"
            fill="none"
            opacity="0.5"
          />
          <circle cx="100" cy="95" r="6" fill="#3b82f6" opacity="0.9" />
          <circle cx="100" cy="95" r="12" fill="#3b82f6" opacity="0.2" />
          <circle cx="40" cy="100" r="4" fill="#22d3ee" />
          <circle cx="160" cy="65" r="4" fill="#a78bfa" />
        </svg>
        <div className="absolute bottom-2 left-2 right-2 glass rounded-lg px-2 py-1.5 border border-white/10 bg-black/40 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <MapPin size={10} className="text-blue-400 shrink-0" />
            <div className="min-w-0">
              <p className="text-[8px] font-medium truncate">Eiffel Tower route</p>
              <p className="text-[7px] text-zinc-500">12 min · AI optimized</p>
            </div>
          </div>
        </div>
      </div>

      {/* Destination cards */}
      <div className="px-3.5 pb-3">
        <p className="text-[8px] text-zinc-500 mb-1.5 font-medium">Trending trips</p>
        <div className="flex gap-2 overflow-hidden">
          {[
            { city: "Paris", img: "from-blue-600/80 to-indigo-800/80" },
            { city: "Tokyo", img: "from-violet-600/70 to-fuchsia-900/80" },
          ].map((d) => (
            <div
              key={d.city}
              className="flex-1 rounded-xl overflow-hidden border border-white/10 min-w-0"
            >
              <div className={`h-14 bg-gradient-to-br ${d.img} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-1 left-1.5 text-[9px] font-semibold">
                  {d.city}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab bar */}
      <div className="mt-auto flex justify-around items-center py-2 border-t border-white/10 bg-[#050508]/90">
        {["Explore", "Trips", "AI", "Profile"].map((tab, i) => (
          <span
            key={tab}
            className={`text-[7px] ${i === 0 ? "text-blue-400 font-medium" : "text-zinc-600"}`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}
