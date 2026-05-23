"use client";

import type { DemoId } from "@/lib/content";
import { TravelDiscoverScreen } from "@/components/visuals/app-screens/TravelDiscoverScreen";
import { TravelItineraryScreen } from "@/components/visuals/app-screens/TravelItineraryScreen";
import { TravelRouteScreen } from "@/components/visuals/app-screens/TravelRouteScreen";
import {
  RunningCoachScreen,
  RunningHomeScreen,
  RunningWorkoutScreen,
} from "@/components/visuals/app-screens/RunningScreens";
import {
  RealEstateListingScreen,
  RealEstateMapScreen,
  RealEstateSavedScreen,
} from "@/components/visuals/app-screens/RealEstateScreens";
import {
  HomeServicesBookScreen,
  HomeServicesSupportScreen,
  HomeServicesTrackScreen,
} from "@/components/visuals/app-screens/HomeServicesScreens";

type DemoSceneRendererProps = {
  demoId: DemoId;
  sceneKey: string;
  sceneProgress: number;
};

export function DemoSceneRenderer({
  demoId,
  sceneKey,
  sceneProgress,
}: DemoSceneRendererProps) {
  if (demoId === "travel") {
    if (sceneKey === "itinerary") return <TravelItineraryScreen />;
    if (sceneKey === "route") return <TravelRouteScreen progress={sceneProgress} />;
    return <TravelDiscoverScreen />;
  }

  if (demoId === "running") {
    if (sceneKey === "workout") return <RunningWorkoutScreen progress={sceneProgress} />;
    if (sceneKey === "coach") return <RunningCoachScreen progress={sceneProgress} />;
    return <RunningHomeScreen />;
  }

  if (demoId === "realestate") {
    if (sceneKey === "listing") return <RealEstateListingScreen />;
    if (sceneKey === "saved") return <RealEstateSavedScreen />;
    return <RealEstateMapScreen />;
  }

  if (sceneKey === "track") return <HomeServicesTrackScreen progress={sceneProgress} />;
  if (sceneKey === "support") return <HomeServicesSupportScreen progress={sceneProgress} />;
  return <HomeServicesBookScreen />;
}
