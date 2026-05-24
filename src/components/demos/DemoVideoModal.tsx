"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { DemoAnimatedPreview } from "./DemoAnimatedPreview";
import { DEMO_SCENES } from "@/lib/demo-playback";
import { useDemoPlayback } from "@/hooks/useDemoPlayback";
import type { DemoConcept } from "@/lib/content";

type DemoVideoModalProps = {
  demo: DemoConcept | null;
  open: boolean;
  onClose: () => void;
};

export function DemoVideoModal({ demo, open, onClose }: DemoVideoModalProps) {
  const [playing, setPlaying] = useState(true);

  const scenes = demo ? DEMO_SCENES[demo.id] : [];
  const playback = useDemoPlayback(scenes, playing && open);
  const { globalProgress, currentScene, totalDuration, sceneIndex, sceneProgress } =
    playback;

  useEffect(() => {
    if (open) setPlaying(true);
    else setPlaying(false);
  }, [open]);

  if (!demo) return null;

  const elapsed = Math.round(globalProgress * totalDuration);

  return (
    <Modal open={open} onClose={onClose} title={demo.title} size="xl" className="!max-w-4xl">
      <div className="p-5 sm:p-6 space-y-5">
        <p className="text-sm text-zinc-400">{demo.description}</p>

        <div className="relative rounded-2xl overflow-hidden bg-[#030308] border border-white/10 min-h-[420px] flex flex-col items-center justify-center py-8 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-violet-950/20 to-black pointer-events-none" />
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

          <motion.p
            key={currentScene.caption}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-sm text-blue-200/90 font-medium mb-6 text-center px-4"
          >
            {currentScene.caption}
          </motion.p>

          <div className="relative z-10">
            <DemoAnimatedPreview
              id={demo.id}
              size="modal"
              playing={playing && open}
              playWhenVisible={false}
              showSceneBadge={false}
              playback={{
                sceneIndex,
                sceneProgress,
                currentScene,
              }}
            />
          </div>

          <div className="relative z-10 mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label={playing ? "Pause demo" : "Play demo"}
            >
              {playing ? (
                <Pause size={22} className="text-white" />
              ) : (
                <Play size={22} className="text-white ml-0.5" fill="white" />
              )}
            </button>
            <div className="text-left">
              <p className="text-xs text-zinc-400">
                Scene {sceneIndex + 1} of {scenes.length} · {currentScene.label}
              </p>
              <p className="text-[10px] text-zinc-600">Product walkthrough loop</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl glass border border-white/10 p-4 space-y-3">
          <p className="text-[10px] uppercase tracking-wider text-zinc-500">
            Onboarding flow
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["Welcome", "Permissions", "AI setup", "First action", "Done"].map(
              (step, i) => {
                const stepProgress = (sceneIndex + sceneProgress) / scenes.length;
                const threshold = (i + 1) / 5;
                const active = stepProgress >= i / 5 && stepProgress < threshold + 0.2;
                const done = stepProgress >= threshold;
                return (
                  <motion.div
                    key={step}
                    className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg border text-[10px] ${
                      active
                        ? "border-blue-500/40 bg-blue-500/10 text-blue-200"
                        : done
                          ? "border-white/10 bg-white/5 text-zinc-400"
                          : "border-white/5 text-zinc-600"
                    }`}
                    animate={active ? { scale: [1, 1.02, 1] } : {}}
                    transition={{ duration: 1.2, repeat: active ? Infinity : 0 }}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                        done ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10"
                      }`}
                    >
                      {done ? "✓" : i + 1}
                    </span>
                    {step}
                  </motion.div>
                );
              }
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>{playing ? "Playing demo…" : "Paused"}</span>
            <span>
              {elapsed}s / {Math.round(totalDuration)}s
            </span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
              style={{ width: `${globalProgress * 100}%` }}
            />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {scenes.map((s, i) => (
              <span
                key={s.key}
                className={`text-[10px] px-2 py-0.5 rounded-full border ${
                  i === sceneIndex
                    ? "border-blue-500/40 bg-blue-500/15 text-blue-200"
                    : "border-white/10 text-zinc-600"
                }`}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}
