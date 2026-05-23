"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { DemoId } from "@/lib/content";
import { DEMO_SCENES, type DemoSceneConfig } from "@/lib/demo-playback";
import { useDemoPlayback } from "@/hooks/useDemoPlayback";
import { DemoPhoneFrame } from "./DemoPhoneFrame";
import { DemoSceneRenderer } from "./DemoSceneRenderer";
import { cn } from "@/lib/utils";

type DemoAnimatedPreviewProps = {
  id: DemoId;
  className?: string;
  size?: "card" | "modal";
  playing?: boolean;
  playWhenVisible?: boolean;
  showSceneBadge?: boolean;
  /** When set, syncs with parent player (e.g. modal progress bar) */
  playback?: {
    sceneIndex: number;
    sceneProgress: number;
    currentScene: DemoSceneConfig;
  };
};

export function DemoAnimatedPreview({
  id,
  className,
  size = "card",
  playing: playingProp,
  playWhenVisible = true,
  showSceneBadge = size === "card",
  playback: externalPlayback,
}: DemoAnimatedPreviewProps) {
  const scenes = DEMO_SCENES[id];
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const playing = playingProp ?? (playWhenVisible ? inView : true);

  const internal = useDemoPlayback(scenes, playing && !externalPlayback);

  const sceneIndex = externalPlayback?.sceneIndex ?? internal.sceneIndex;
  const sceneProgress = externalPlayback?.sceneProgress ?? internal.sceneProgress;
  const currentScene = externalPlayback?.currentScene ?? internal.currentScene;

  useEffect(() => {
    if (!playWhenVisible || playingProp !== undefined) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35, rootMargin: "40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [playWhenVisible, playingProp]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <DemoPhoneFrame size={size}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`${id}-${currentScene.key}`}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <DemoSceneRenderer
              demoId={id}
              sceneKey={currentScene.key}
              sceneProgress={sceneProgress}
            />
          </motion.div>
        </AnimatePresence>

        {playing && (
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-1 z-10 pointer-events-none">
            {scenes.map((s, i) => (
              <div
                key={s.key}
                className={cn(
                  "h-0.5 rounded-full transition-all duration-300",
                  i === sceneIndex ? "w-4 bg-white/90" : "w-1.5 bg-white/25"
                )}
              />
            ))}
          </div>
        )}
      </DemoPhoneFrame>

      {showSceneBadge && playing && (
        <motion.div
          key={currentScene.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/80 border border-white/10 px-2 py-0.5 text-[9px] text-zinc-400 z-10"
        >
          {currentScene.label}
        </motion.div>
      )}
    </div>
  );
}
