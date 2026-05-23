"use client";

import { Check, Clock, MessageCircle, Sparkles, Wrench } from "lucide-react";
import { motion } from "framer-motion";

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

export function HomeServicesBookScreen() {
  const categories = [
    { name: "Plumbing", icon: "🔧", active: true },
    { name: "Electrical", icon: "⚡" },
    { name: "HVAC", icon: "❄️" },
    { name: "Cleaning", icon: "✨" },
  ];

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5">
        <p className="text-[11px] font-semibold">Book a pro</p>
        <p className="text-[8px] text-zinc-500">Same-day availability</p>
      </div>
      <div className="px-3.5 mt-2 grid grid-cols-2 gap-1.5">
        {categories.map((c) => (
          <div
            key={c.name}
            className={`rounded-xl p-2 border text-center ${
              c.active
                ? "bg-cyan-600/25 border-cyan-500/40"
                : "bg-white/5 border-white/10"
            }`}
          >
            <span className="text-lg">{c.icon}</span>
            <p className="text-[8px] font-medium mt-0.5">{c.name}</p>
          </div>
        ))}
      </div>
      <div className="mx-3.5 mt-2 rounded-2xl bg-gradient-to-br from-cyan-600/25 to-blue-900/40 border border-cyan-500/30 p-2.5">
        <div className="flex items-center gap-1.5 mb-1">
          <Sparkles size={11} className="text-cyan-300" />
          <span className="text-[8px] font-medium text-cyan-200">AI instant quote</span>
        </div>
        <p className="text-[9px] text-zinc-300 mb-1">Leaking kitchen sink · Standard repair</p>
        <p className="text-[14px] font-bold">€120 – €180</p>
        <p className="text-[7px] text-zinc-500 mt-0.5">Includes parts estimate</p>
      </div>
      <div className="flex-1 px-3.5 mt-2">
        <p className="text-[8px] text-zinc-500 mb-1">Top rated nearby</p>
        {["Marco · 4.9 ★", "Elena · 4.8 ★"].map((p) => (
          <div
            key={p}
            className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-2 py-1.5 mb-1"
          >
            <div className="w-7 h-7 rounded-full bg-cyan-600/40 flex items-center justify-center text-[10px]">
              👤
            </div>
            <span className="text-[8px]">{p}</span>
            <span className="ml-auto text-[7px] text-cyan-400">Available</span>
          </div>
        ))}
      </div>
      <div className="p-3.5">
        <div className="h-9 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-[9px] font-semibold gap-1">
          <Wrench size={11} />
          Confirm booking
        </div>
      </div>
    </div>
  );
}

export function HomeServicesTrackScreen({ progress = 0 }: { progress?: number }) {
  const steps = [
    { label: "Booked", done: true },
    { label: "Pro assigned", done: progress > 0.15 },
    { label: "En route", done: progress > 0.4, active: progress > 0.4 && progress < 0.75 },
    { label: "In progress", done: progress > 0.75 },
  ];

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5">
        <p className="text-[8px] text-cyan-300">Plumbing repair</p>
        <p className="text-[11px] font-semibold">Job #2847</p>
      </div>
      <div className="mx-3.5 mt-2 rounded-2xl bg-white/5 border border-white/10 p-2 relative overflow-hidden h-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/80 to-[#0a1020]" />
        <div className="relative flex items-end justify-between h-full px-1 pb-1">
          <div className="text-[7px] text-zinc-500">Your home</div>
          <motion.div
            className="absolute top-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-500/50"
            style={{ left: `${20 + progress * 55}%` }}
          />
          <div className="text-[7px] text-zinc-500">Marco</div>
        </div>
        <p className="absolute bottom-2 left-2 text-[8px] text-cyan-200">
          ETA {progress > 0.4 ? "12 min" : "—"}
        </p>
      </div>
      <div className="flex-1 px-3.5 mt-3 space-y-2">
        {steps.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                s.done
                  ? "bg-cyan-500/30 border-cyan-400 text-cyan-300"
                  : "border-white/20 bg-white/5"
              } ${s.active ? "ring-2 ring-cyan-400/50" : ""}`}
            >
              {s.done && <Check size={10} />}
            </div>
            <span className={`text-[9px] ${s.done ? "text-white" : "text-zinc-600"}`}>
              {s.label}
            </span>
            {s.active && (
              <span className="ml-auto text-[7px] text-cyan-400 flex items-center gap-0.5">
                <Clock size={9} /> Live
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mx-3.5 mb-3 rounded-xl bg-cyan-600/15 border border-cyan-500/25 p-2 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-cyan-600/50 flex items-center justify-center text-sm">
          👨‍🔧
        </div>
        <div>
          <p className="text-[9px] font-medium">Marco is on the way</p>
          <p className="text-[7px] text-zinc-500">Licensed plumber · 4.9 ★</p>
        </div>
      </div>
    </div>
  );
}

export function HomeServicesSupportScreen({ progress = 0 }: { progress?: number }) {
  const lines = [
    "Quote includes labor + standard parts.",
    "Emergency fee not applied for this slot.",
    "You can reschedule free until 2h before.",
  ];
  const visible = Math.min(Math.ceil(progress * 4), lines.length);

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5 flex items-center gap-2 border-b border-white/10 pb-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
          <MessageCircle size={14} />
        </div>
        <div>
          <p className="text-[10px] font-semibold">Mapica Support AI</p>
          <p className="text-[7px] text-zinc-500">Plumbing · Job #2847</p>
        </div>
      </div>
      <div className="mx-3.5 mt-2 rounded-xl bg-cyan-600/20 border border-cyan-500/30 p-2">
        <p className="text-[7px] text-cyan-200">Estimate breakdown</p>
        <div className="flex justify-between text-[9px] mt-1">
          <span>Labor</span>
          <span>€85</span>
        </div>
        <div className="flex justify-between text-[9px] text-zinc-400">
          <span>Parts</span>
          <span>€35–€95</span>
        </div>
      </div>
      <div className="flex-1 px-3 py-2 space-y-1.5">
        {lines.slice(0, visible).map((text) => (
          <div
            key={text}
            className="rounded-xl bg-white/5 border border-white/10 px-2 py-1.5 text-[8px] text-zinc-300"
          >
            {text}
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-white/10">
        <div className="h-8 rounded-full bg-white/8 border border-white/10 px-3 flex items-center text-[8px] text-zinc-500">
          Ask about your repair…
        </div>
      </div>
    </div>
  );
}
