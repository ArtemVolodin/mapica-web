"use client";

import { Particles } from "./Particles";

export function HeroAtmosphere() {
  return (
    <>
      <div className="absolute inset-0 grid-bg-animated pointer-events-none" />
      <div className="hero-light-ray" aria-hidden />
      <Particles count={36} />
    </>
  );
}
