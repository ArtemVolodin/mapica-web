"use client";

import { useEffect, useMemo, useState } from "react";
import type { DemoSceneConfig } from "@/lib/demo-playback";

export function useDemoPlayback(
  scenes: DemoSceneConfig[],
  playing: boolean
) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [globalProgress, setGlobalProgress] = useState(0);

  const totalDuration = useMemo(
    () => scenes.reduce((sum, s) => sum + s.duration, 0),
    [scenes]
  );

  const currentScene = scenes[sceneIndex] ?? scenes[0];

  useEffect(() => {
    if (!playing || scenes.length === 0) return;

    let raf = 0;
    const loopStart = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - loopStart) / 1000;
      const loopT = elapsed % totalDuration;

      setGlobalProgress(loopT / totalDuration);

      let acc = 0;
      for (let i = 0; i < scenes.length; i++) {
        const scene = scenes[i];
        if (loopT < acc + scene.duration) {
          setSceneIndex(i);
          setSceneProgress((loopT - acc) / scene.duration);
          break;
        }
        acc += scene.duration;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, scenes, totalDuration]);

  useEffect(() => {
    if (!playing) {
      setSceneIndex(0);
      setSceneProgress(0);
      setGlobalProgress(0);
    }
  }, [playing]);

  return {
    sceneIndex,
    sceneProgress,
    globalProgress,
    currentScene,
    totalDuration,
  };
}
