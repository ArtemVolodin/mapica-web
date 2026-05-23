"use client";

import { Bell, Heart, MapPin, Search, Sparkles } from "lucide-react";

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

export function RealEstateMapScreen() {
  const pins = [
    { x: "28%", y: "35%", price: "€420k" },
    { x: "62%", y: "48%", price: "€385k" },
    { x: "45%", y: "68%", price: "€510k" },
  ];

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5 flex items-center gap-2 mb-2">
        <div className="flex-1 flex items-center gap-2 rounded-xl bg-white/8 border border-white/10 px-2.5 py-2">
          <Search size={11} className="text-zinc-500" />
          <span className="text-[9px] text-zinc-500">2-bed near Le Marais…</span>
        </div>
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
          <Bell size={12} className="text-zinc-400" />
        </div>
      </div>
      <div className="mx-3.5 flex-1 min-h-0 rounded-2xl relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#120a20] via-[#1a1030] to-[#0a0814]" />
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
          {[20, 40, 60, 80].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke="white" strokeWidth="0.3" />
          ))}
          {[20, 40, 60, 80].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="100" stroke="white" strokeWidth="0.3" />
          ))}
        </svg>
        {pins.map((pin) => (
          <div
            key={pin.price}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: pin.x, top: pin.y }}
          >
            <div className="px-1.5 py-0.5 rounded-lg bg-purple-600 text-[7px] font-semibold shadow-lg shadow-purple-500/40 border border-purple-400/50">
              {pin.price}
            </div>
            <MapPin size={12} className="text-purple-300 mx-auto -mt-0.5" fill="currentColor" />
          </div>
        ))}
        <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-black/60 backdrop-blur border border-white/10 px-2 py-1.5 flex items-center gap-2">
          <Sparkles size={11} className="text-purple-300" />
          <p className="text-[8px]">AI found 12 homes in your budget</p>
        </div>
      </div>
      <div className="px-3.5 py-2 flex gap-2">
        {["Map", "List", "Saved"].map((t, i) => (
          <span
            key={t}
            className={`text-[8px] px-2 py-1 rounded-full ${i === 0 ? "bg-purple-600/40 text-purple-200" : "text-zinc-600"}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export function RealEstateListingScreen() {
  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="mx-3.5 mt-1 rounded-2xl overflow-hidden border border-white/10 h-[88px] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/80 via-indigo-800/70 to-violet-950" />
        <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/40 flex items-center justify-center border border-white/20">
          <Heart size={12} className="text-white" />
        </div>
        <div className="absolute bottom-2 left-2">
          <p className="text-[12px] font-bold">€420,000</p>
          <p className="text-[8px] text-white/80">Le Marais · 68 m²</p>
        </div>
      </div>
      <div className="mx-3.5 mt-2 rounded-xl bg-purple-600/20 border border-purple-500/30 p-2">
        <div className="flex items-center gap-1.5 mb-1">
          <Sparkles size={11} className="text-purple-300" />
          <span className="text-[8px] font-medium text-purple-200">AI market insight</span>
        </div>
        <p className="text-[7px] text-zinc-300 leading-relaxed">
          4% below area average · High demand · Walk score 94
        </p>
      </div>
      <div className="flex-1 px-3.5 mt-2 space-y-1.5 min-h-0">
        {["2 bed · 1 bath", "Balcony · 3rd floor", "Metro 3 min"].map((f) => (
          <div key={f} className="flex items-center gap-2 text-[8px] text-zinc-400">
            <div className="w-1 h-1 rounded-full bg-purple-400" />
            {f}
          </div>
        ))}
        <div className="rounded-xl bg-white/5 border border-white/10 p-2 mt-2">
          <p className="text-[7px] text-zinc-500 mb-1">Similar sold nearby</p>
          <div className="flex justify-between text-[8px]">
            <span>€405k</span>
            <span className="text-emerald-400">-3.6%</span>
          </div>
        </div>
      </div>
      <div className="p-3.5">
        <div className="h-9 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-[9px] font-semibold">
          Schedule viewing
        </div>
      </div>
    </div>
  );
}

export function RealEstateSavedScreen() {
  const homes = [
    { price: "€420k", area: "Le Marais", beds: "2 bed" },
    { price: "€385k", area: "Bastille", beds: "2 bed" },
    { price: "€510k", area: "Saint-Germain", beds: "3 bed" },
  ];

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5">
        <p className="text-[11px] font-semibold">Saved homes</p>
        <p className="text-[8px] text-zinc-500">3 properties · Price alerts on</p>
      </div>
      <div className="flex-1 px-3.5 mt-2 space-y-2 min-h-0 overflow-hidden">
        {homes.map((h) => (
          <div key={h.area} className="rounded-xl overflow-hidden border border-white/10 flex gap-0">
            <div className="w-16 shrink-0 bg-gradient-to-br from-purple-600/60 to-indigo-900/80" />
            <div className="flex-1 p-2 bg-white/5">
              <p className="text-[10px] font-semibold">{h.price}</p>
              <p className="text-[8px] text-zinc-400">{h.area}</p>
              <p className="text-[7px] text-purple-300 mt-0.5">{h.beds}</p>
            </div>
            <Heart size={12} className="text-purple-400 m-2 shrink-0" fill="currentColor" />
          </div>
        ))}
      </div>
      <div className="mx-3.5 mb-3 rounded-xl bg-purple-500/15 border border-purple-500/25 px-2 py-1.5 text-[8px] text-center text-purple-200">
        Compare all · AI summary ready
      </div>
    </div>
  );
}
