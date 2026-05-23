"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useAIAssistant } from "./AIAssistantProvider";

/** Floating button for mobile — opens assistant when hero card is hidden */
export function AIAssistantFAB() {
  const { isOpen, open } = useAIAssistant();

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.button
          type="button"
          onClick={open}
          className="fixed bottom-6 right-6 z-50 sm:hidden w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-xl shadow-blue-500/40 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open Mapica AI"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
