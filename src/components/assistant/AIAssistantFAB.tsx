"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { MOTION_EASE } from "@/lib/motion";
import { useAIAssistant } from "./AIAssistantProvider";

const fabEnter = {
  type: "tween" as const,
  duration: 0.5,
  ease: MOTION_EASE,
};

/** Always-visible chat launcher — fixed viewport, orbit glow */
export function AIAssistantFAB() {
  const { isOpen, open } = useAIAssistant();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          type="button"
          onClick={open}
          className="ai-fab fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[200]"
          style={{ position: "fixed" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={fabEnter}
          aria-label="Open Mapica AI chat"
        >
          <span className="ai-fab-glow" aria-hidden />
          <span className="ai-fab-orbit" aria-hidden>
            <span className="ai-fab-orbit-spin" />
          </span>
          <span className="ai-fab-core">
            <Sparkles size={17} strokeWidth={2} className="text-white drop-shadow-sm" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>,
    document.body
  );
}
