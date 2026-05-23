"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { DemoMiniPreview } from "./DemoMiniPreview";
import type { DemoConcept } from "@/lib/content";

type DemoVideoModalProps = {
  demo: DemoConcept | null;
  open: boolean;
  onClose: () => void;
};

const DURATION = 20;

export function DemoVideoModal({ demo, open, onClose }: DemoVideoModalProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) {
      setPlaying(false);
      setProgress(0);
    }
  }, [open]);

  useEffect(() => {
    if (!playing || !open) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
      else setPlaying(false);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [playing, open]);

  if (!demo) return null;

  return (
    <Modal open={open} onClose={onClose} title={demo.title} size="xl" className="!max-w-3xl">
      <div className="p-5 sm:p-6 space-y-5">
        <p className="text-sm text-zinc-400">{demo.description}</p>

        <div className="relative rounded-2xl overflow-hidden bg-black border border-white/10 aspect-video flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-violet-950/30 to-black" />

          <motion.div
            className="relative z-10"
            animate={
              playing
                ? { y: [0, -6, 0], scale: [1, 1.02, 1] }
                : { y: 0, scale: 1 }
            }
            transition={{ duration: 2, repeat: playing ? Infinity : 0 }}
          >
            <DemoMiniPreview id={demo.id} className="w-[160px] sm:w-[180px]" />
          </motion.div>

          {!playing && (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Play demo"
            >
              <Play size={28} className="text-white ml-1" fill="white" />
            </button>
          )}

          {playing && (
            <motion.div
              className="absolute inset-x-8 top-8 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {["Loading map…", "Generating route", "Adding local spots"].map((t, i) => (
                <motion.p
                  key={t}
                  className="text-[10px] text-blue-200/90 glass px-2 py-1 rounded-lg inline-block"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: progress > i * 0.25 ? 1 : 0.3, x: 0 }}
                >
                  {t}
                </motion.p>
              ))}
            </motion.div>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-zinc-500">
            <span>{playing ? "Playing concept demo…" : "20s product walkthrough"}</span>
            <span>{Math.round(progress * DURATION)}s / {DURATION}s</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-violet-500"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
