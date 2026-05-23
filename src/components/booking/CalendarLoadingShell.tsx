import { Calendar } from "lucide-react";

/** Placeholder while Calendly loads on scroll — keeps layout stable */
export function CalendarLoadingShell() {
  return (
    <div className="bg-[#030308] min-h-[620px]">
      <div className="flex items-center gap-2 px-5 sm:px-6 py-4 border-b border-white/10">
        <Calendar size={18} className="text-blue-400 shrink-0" />
        <span className="text-sm font-medium text-white">Pick a time</span>
        <span className="text-xs text-zinc-500 ml-auto animate-pulse">
          Loading calendar…
        </span>
      </div>
      <div className="flex items-center justify-center min-h-[560px]">
        <div className="w-8 h-8 rounded-full border-2 border-white/10 border-t-blue-500 animate-spin" />
      </div>
    </div>
  );
}
