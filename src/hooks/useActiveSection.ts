"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "products",
  "demo-lab",
  "solutions",
  "process",
  "stack",
  "journal",
  "contact",
] as const;

export function useActiveSection() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      Boolean
    ) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 120) {
          setActive("");
          return;
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] }
    );

    const onScroll = () => {
      if (window.scrollY < 120) setActive("");
    };

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return active;
}
