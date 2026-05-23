"use client";

import type { DemoId } from "@/lib/content";
import { DemoAnimatedPreview } from "./DemoAnimatedPreview";
import { cn } from "@/lib/utils";

/** Auto-playing realistic app demo preview for Demo Lab cards */
export function DemoMiniPreview({ id, className }: { id: DemoId; className?: string }) {
  return (
    <DemoAnimatedPreview
      id={id}
      className={cn("pb-4", className)}
      size="card"
      playWhenVisible
      showSceneBadge
    />
  );
}
