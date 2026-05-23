import type { ProductAccent } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap: Record<ProductAccent, string> = {
  blue: "from-blue-500/50 to-blue-600/20",
  violet: "from-violet-500/50 to-violet-600/20",
  cyan: "from-cyan-500/50 to-cyan-600/20",
  indigo: "from-indigo-500/50 to-indigo-600/20",
  purple: "from-purple-500/50 to-purple-600/20",
  sky: "from-sky-500/50 to-sky-600/20",
};

const glowMap: Record<ProductAccent, string> = {
  blue: "shadow-blue-500/20",
  violet: "shadow-violet-500/20",
  cyan: "shadow-cyan-500/20",
  indigo: "shadow-indigo-500/20",
  purple: "shadow-purple-500/20",
  sky: "shadow-sky-500/20",
};

type ProductUIPreviewProps = {
  accent: ProductAccent;
  ui: string;
};

export function ProductUIPreview({ accent, ui }: ProductUIPreviewProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[120px] aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 shadow-xl",
        glowMap[accent]
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          accentMap[accent]
        )}
      />
      <div className="absolute inset-0 bg-[#08080f]/80 backdrop-blur-[2px] p-2.5 flex flex-col">
        <div className="w-5 h-5 rounded-md bg-white/20 mb-2" />
        <div className="space-y-1 mb-2">
          <div className="h-1 w-full rounded bg-white/25" />
          <div className="h-1 w-2/3 rounded bg-white/15" />
        </div>
        <UIPattern type={ui} accent={accent} />
      </div>
      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-black/60" />
    </div>
  );
}

function UIPattern({ type, accent }: { type: string; accent: ProductAccent }) {
  const bar =
    accent === "blue"
      ? "bg-blue-400/60"
      : accent === "violet"
        ? "bg-violet-400/60"
        : "bg-cyan-400/60";

  switch (type) {
    case "travel":
      return (
        <div className="flex-1 rounded-lg bg-white/5 border border-white/10 p-1.5 relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100">
            <path
              d="M10 70 Q30 30 50 50 T90 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-blue-400"
            />
          </svg>
          <div className={cn("h-1 w-6 rounded", bar)} />
        </div>
      );
    case "health":
      return (
        <div className="flex-1 flex items-end gap-0.5 px-1 pb-1">
          {[40, 65, 45, 80, 55].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-violet-400/50"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      );
    case "home":
      return (
        <div className="flex-1 grid grid-cols-2 gap-1">
          <div className="rounded bg-white/10" />
          <div className="rounded bg-white/10" />
          <div className="col-span-2 rounded bg-cyan-400/30 h-6" />
        </div>
      );
    case "shop":
      return (
        <div className="flex-1 space-y-1">
          <div className="h-8 rounded bg-white/10" />
          <div className="flex gap-1">
            <div className="flex-1 h-4 rounded bg-white/5" />
            <div className="w-4 h-4 rounded bg-indigo-400/40" />
          </div>
        </div>
      );
    case "estate":
      return (
        <div className="flex-1 rounded-lg bg-white/5 border border-white/10 overflow-hidden">
          <div className="h-1/2 bg-gradient-to-br from-purple-500/30 to-transparent" />
          <div className="p-1 space-y-0.5">
            <div className="h-0.5 w-full bg-white/20 rounded" />
            <div className="h-0.5 w-2/3 bg-white/10 rounded" />
          </div>
        </div>
      );
    default:
      return (
        <div className="flex-1 space-y-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-1 items-center">
              <div className="w-2 h-2 rounded border border-sky-400/50" />
              <div className="flex-1 h-0.5 bg-white/15 rounded" />
            </div>
          ))}
        </div>
      );
  }
}
