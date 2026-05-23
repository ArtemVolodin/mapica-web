"use client";

import { Activity, Heart, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
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

export function RunningHomeScreen() {
  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5">
        <p className="text-[8px] text-zinc-500">Good evening, Alex</p>
        <p className="text-[11px] font-semibold">5K training plan</p>
      </div>
      <div className="mx-3.5 mt-2 rounded-2xl bg-gradient-to-br from-violet-600/30 to-fuchsia-900/40 border border-violet-500/25 p-2.5">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[7px] text-violet-200 uppercase tracking-wider">Week 3</p>
            <p className="text-[10px] font-semibold">Recovery run</p>
          </div>
          <div className="text-right">
            <p className="text-[14px] font-bold">82%</p>
            <p className="text-[7px] text-zinc-400">Recovery score</p>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
        </div>
      </div>
      <div className="px-3.5 mt-2 grid grid-cols-2 gap-2">
        {[
          { label: "This week", value: "18.4 km", icon: Activity },
          { label: "Avg pace", value: "5:42", icon: TrendingUp },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-2">
            <Icon size={11} className="text-violet-400 mb-1" />
            <p className="text-[10px] font-semibold">{value}</p>
            <p className="text-[7px] text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 px-3.5 mt-2 min-h-0">
        <p className="text-[8px] text-zinc-500 mb-1">Upcoming</p>
        {["Tue · Easy 4 km", "Thu · Intervals", "Sat · Long 8 km"].map((d, i) => (
          <div
            key={d}
            className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/8 px-2 py-1.5 mb-1"
          >
            <div
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-fuchsia-400" : "bg-white/20"}`}
            />
            <span className="text-[8px]">{d}</span>
          </div>
        ))}
      </div>
      <div className="p-3.5">
        <div className="h-9 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-[9px] font-semibold">
          Start today&apos;s run
        </div>
      </div>
    </div>
  );
}

export function RunningWorkoutScreen({ progress = 0 }: { progress?: number }) {
  const bars = [30, 45, 55, 70, 50, 85, 65, 90, 75];
  const activeBars = Math.floor(progress * bars.length);

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5 text-center">
        <p className="text-[8px] text-fuchsia-300 uppercase tracking-wider">Live run</p>
        <p className="text-[22px] font-bold tabular-nums">5.24</p>
        <p className="text-[8px] text-zinc-500">kilometers</p>
      </div>
      <div className="mx-3.5 flex-1 min-h-0 flex items-end gap-0.5 px-1 pb-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-violet-700 to-fuchsia-400"
            initial={{ height: "20%" }}
            animate={{
              height: i <= activeBars ? `${h}%` : "15%",
              opacity: i <= activeBars ? 1 : 0.35,
            }}
            transition={{ duration: 0.25 }}
          />
        ))}
      </div>
      <div className="px-3.5 grid grid-cols-3 gap-1.5 pb-3">
        {[
          { label: "Pace", value: "5:38" },
          { label: "Time", value: "29:42" },
          { label: "BPM", value: "148", icon: Heart },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-1.5 text-center">
            {Icon && <Icon size={10} className="text-rose-400 mx-auto mb-0.5" />}
            <p className="text-[10px] font-semibold">{value}</p>
            <p className="text-[6px] text-zinc-500">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RunningCoachScreen({ progress = 0 }: { progress?: number }) {
  const messages = [
    { role: "coach", text: "Great pace today — you're 8 sec/km faster than target." },
    { role: "user", text: "Should I push harder on Saturday?" },
    { role: "coach", text: "Keep Saturday easy. I'll adjust your long run to 7.5 km." },
  ];
  const visible = Math.min(Math.ceil(progress * 4), messages.length);

  return (
    <div className="h-full flex flex-col bg-[#07070f] text-white overflow-hidden">
      <StatusBar />
      <div className="px-3.5 flex items-center gap-2 border-b border-white/10 pb-2">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
          <Sparkles size={14} />
        </div>
        <div>
          <p className="text-[10px] font-semibold">AI Running Coach</p>
          <p className="text-[7px] text-emerald-400">● Online</p>
        </div>
      </div>
      <div className="flex-1 px-3 py-2 space-y-2 overflow-hidden">
        {messages.slice(0, visible).map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-[90%] rounded-xl px-2 py-1.5 text-[8px] leading-snug ${
              m.role === "coach"
                ? "bg-violet-600/25 border border-violet-500/30 text-violet-100"
                : "ml-auto bg-white/10 border border-white/10 text-zinc-200"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
      </div>
      <div className="p-3 flex gap-2 items-center border-t border-white/10">
        <div className="flex-1 h-8 rounded-full bg-white/8 border border-white/10 px-3 flex items-center text-[8px] text-zinc-500">
          Ask your coach…
        </div>
        <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
          <MessageCircle size={14} />
        </div>
      </div>
    </div>
  );
}
