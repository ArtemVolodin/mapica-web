"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

type LivePhoneScreenProps = {
  children: React.ReactNode;
};

/** Subtle live motion inside hero phone screens */
export function LivePhoneScreen({ children }: LivePhoneScreenProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      className="h-full w-full"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="h-full w-full origin-top"
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
