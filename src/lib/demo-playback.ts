import type { DemoId } from "@/lib/content";

export type DemoSceneConfig = {
  key: string;
  label: string;
  caption: string;
  duration: number;
};

export const DEMO_SCENES: Record<DemoId, DemoSceneConfig[]> = {
  travel: [
    {
      key: "discover",
      label: "Discover",
      caption: "AI search & trending destinations",
      duration: 4.5,
    },
    {
      key: "itinerary",
      label: "Itinerary",
      caption: "Day-by-day plan with Mapica AI",
      duration: 5,
    },
    {
      key: "route",
      label: "Live route",
      caption: "Optimized paths on the map",
      duration: 4.5,
    },
  ],
  running: [
    {
      key: "home",
      label: "Training hub",
      caption: "Weekly plan & recovery score",
      duration: 4.5,
    },
    {
      key: "workout",
      label: "Live run",
      caption: "Pace, distance & heart rate",
      duration: 5,
    },
    {
      key: "coach",
      label: "AI coach",
      caption: "Adaptive coaching in chat",
      duration: 4.5,
    },
  ],
  realestate: [
    {
      key: "map",
      label: "Map search",
      caption: "Pins & neighborhood heatmap",
      duration: 4.5,
    },
    {
      key: "listing",
      label: "Listing detail",
      caption: "AI price insights & comparables",
      duration: 5,
    },
    {
      key: "saved",
      label: "Saved homes",
      caption: "Compare & get alerts",
      duration: 4.5,
    },
  ],
  homeservices: [
    {
      key: "book",
      label: "Book service",
      caption: "Categories & instant AI quote",
      duration: 4.5,
    },
    {
      key: "track",
      label: "Live tracking",
      caption: "Contractor ETA & job status",
      duration: 5,
    },
    {
      key: "support",
      label: "AI support",
      caption: "Estimate breakdown & chat",
      duration: 4.5,
    },
  ],
};

export function getDemoTotalDuration(id: DemoId): number {
  return DEMO_SCENES[id].reduce((sum, s) => sum + s.duration, 0);
}
