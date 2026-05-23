"use client";

import { Calendar, ChevronRight, MessageCircle, Plane } from "lucide-react";

/** Realistic AI travel app — trip / itinerary screen */
export function TravelItineraryScreen() {
  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <div className="flex items-center justify-between px-4 pt-9 pb-1 text-[9px] text-white/70 font-medium">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <span className="w-3 h-1.5 rounded-sm border border-white/50" />
          <span className="w-2 h-2 rounded-full bg-white/80" />
        </div>
      </div>

      {/* Hero trip card */}
      <div className="mx-3.5 mt-1 mb-2 rounded-2xl overflow-hidden border border-white/10 relative h-[72px]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-700 to-blue-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.06\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
        <div className="relative p-2.5 h-full flex flex-col justify-end">
          <p className="text-[7px] text-white/70 uppercase tracking-wider">Your trip</p>
          <p className="text-[12px] font-semibold leading-tight">Paris · 5 days</p>
          <div className="flex items-center gap-1 mt-0.5">
            <Calendar size={8} className="text-blue-200" />
            <span className="text-[7px] text-white/80">Jun 12 – Jun 17</span>
          </div>
        </div>
      </div>

      {/* AI assistant strip */}
      <div className="mx-3.5 mb-2 flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600/25 to-violet-600/25 border border-blue-500/20 px-2 py-1.5">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shrink-0">
          <MessageCircle size={11} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[8px] font-medium text-blue-200">Mapica AI</p>
          <p className="text-[7px] text-zinc-400 truncate">Louvre tickets booked ✓</p>
        </div>
        <ChevronRight size={12} className="text-zinc-500" />
      </div>

      {/* Itinerary */}
      <div className="flex-1 min-h-0 overflow-hidden px-3.5">
        <p className="text-[8px] text-zinc-500 mb-1.5 font-medium">Today&apos;s plan</p>
        <div className="space-y-1.5">
          {[
            { time: "09:00", title: "Café de Flore", sub: "Breakfast · Marais", color: "bg-amber-500/30" },
            { time: "11:30", title: "Louvre Museum", sub: "Skip-the-line entry", color: "bg-blue-500/30" },
            { time: "15:00", title: "Seine river walk", sub: "AI route · 2.4 km", color: "bg-violet-500/30" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex gap-2 items-center rounded-xl bg-white/5 border border-white/8 p-1.5"
            >
              <div className={`w-8 h-8 rounded-lg ${item.color} shrink-0`} />
              <div className="flex-1 min-w-0">
                <p className="text-[8px] font-medium truncate">{item.title}</p>
                <p className="text-[7px] text-zinc-500 truncate">{item.sub}</p>
              </div>
              <span className="text-[7px] text-zinc-600 shrink-0">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-3.5 pt-1">
        <div className="flex items-center justify-center gap-1.5 h-9 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-[9px] font-semibold shadow-lg shadow-blue-500/30">
          <Plane size={11} />
          View full itinerary
        </div>
      </div>

      <div className="flex justify-around items-center py-2 border-t border-white/10 bg-[#050508]/90">
        {["Explore", "Trips", "AI", "Profile"].map((tab, i) => (
          <span
            key={tab}
            className={`text-[7px] ${i === 1 ? "text-violet-400 font-medium" : "text-zinc-600"}`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}
