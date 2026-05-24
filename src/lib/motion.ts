/** Mapica motion system — calm, cinematic, premium */

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOTION_EASE_OUT = [0.16, 1, 0.3, 1] as const;

export const MOTION_DURATION = {
  fast: 0.35,
  base: 0.55,
  slow: 0.75,
  cinematic: 1.1,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0.05) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const defaultTransition = (delay = 0) => ({
  duration: MOTION_DURATION.base,
  delay,
  ease: MOTION_EASE,
});

export const springSnappy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 28,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
};

export const viewportReveal = {
  once: true,
  margin: "-80px" as const,
  amount: 0.2 as const,
};
