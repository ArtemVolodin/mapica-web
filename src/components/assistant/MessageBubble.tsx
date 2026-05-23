"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ChatMessage } from "@/lib/assistant-knowledge";
import { cn } from "@/lib/utils";

function formatContent(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part.split("\n").map((line, j, arr) => (
      <span key={`${i}-${j}`}>
        {line}
        {j < arr.length - 1 && <br />}
      </span>
    ));
  });
}

type MessageBubbleProps = {
  message: ChatMessage;
  showBookingCta?: boolean;
  onBookCall?: () => void;
};

export function MessageBubble({
  message,
  showBookingCta,
  onBookCall,
}: MessageBubbleProps) {
  const isUser = message.role === "user";

  return (
    <motion.div
      className={cn("flex gap-3", isUser ? "flex-row-reverse" : "flex-row")}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {!isUser && (
        <div className="shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Sparkles size={14} className="text-white" />
        </div>
      )}
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white rounded-br-md"
            : "glass border border-white/10 text-zinc-300 rounded-bl-md"
        )}
      >
        <div className="whitespace-pre-wrap">{formatContent(message.content)}</div>
        {showBookingCta && onBookCall && (
          <motion.button
            type="button"
            onClick={onBookCall}
            className="mt-3 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Intro Call
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
