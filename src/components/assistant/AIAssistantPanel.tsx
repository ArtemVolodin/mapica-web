"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { RotateCcw, Send, X } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";
import { useAIAssistant } from "./AIAssistantProvider";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import {
  ASSISTANT_NAME,
  GREETING,
  QUICK_SUGGESTIONS,
  getFallbackResponse,
  type ChatMessage,
} from "@/lib/assistant-knowledge";
import { cn } from "@/lib/utils";

const BOOKING_KEYWORDS =
  /book|call|pricing|price|timeline|project|intro|schedule|meeting|cost|budget/i;

function shouldShowBookingCta(content: string) {
  return BOOKING_KEYWORDS.test(content);
}

export function AIAssistantPanel() {
  const { isOpen, close } = useAIAssistant();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
  }, []);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setMessages([{ role: "assistant", content: GREETING }]);
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 400);
      scrollToBottom();
      return () => clearTimeout(t);
    }
  }, [isOpen, scrollToBottom]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isLoading) return;

      setError(null);
      setInput("");

      const userMessage: ChatMessage = { role: "user", content: trimmed };
      const nextMessages = [...messages, userMessage];
      setMessages(nextMessages);
      setIsLoading(true);

      const lower = trimmed.toLowerCase();
      if (lower.includes("book a call") || lower === "book a call") {
        handleBookCall();
      }
      if (lower.includes("demo lab") || lower.includes("show me the demo")) {
        close();
        setTimeout(() => scrollToSection("demo-lab"), 350);
      }

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: nextMessages }),
        });

        const data = (await res.json()) as {
          message?: string;
          error?: string;
        };

        if (!res.ok || !data.message) {
          throw new Error(data.error ?? "Failed to get response");
        }

        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message! },
        ]);
      } catch {
        setError("Connection issue — using offline mode.");
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: getFallbackResponse(trimmed) },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleBookCall = () => {
    close();
    setTimeout(() => scrollToSection("contact"), 350);
  };

  const clearChat = () => {
    setMessages([{ role: "assistant", content: GREETING }]);
    setError(null);
    setInput("");
    setHasGreeted(true);
  };

  const showSuggestions =
    messages.filter((m) => m.role === "user").length === 0 && !isLoading;

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm md:bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />

          <motion.aside
            className={cn(
              "fixed z-[101] flex flex-col",
              "inset-0 md:inset-y-0 md:right-0 md:left-auto",
              "md:w-[420px] lg:w-[440px]",
              "glass-strong border-l border-white/10",
              "shadow-2xl shadow-black/50"
            )}
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            role="dialog"
            aria-label="Mapica AI assistant"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-violet-950/10 pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Header */}
            <header className="relative flex items-center justify-between px-5 py-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="h-10 w-[60px] shrink-0 overflow-hidden rounded-xl shadow-lg shadow-blue-500/30">
                  <Image
                    src="/mapica-logo.png"
                    alt=""
                    width={60}
                    height={40}
                    className="h-full w-auto max-w-none object-contain object-left"
                    unoptimized
                  />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">{ASSISTANT_NAME}</h2>
                  <p className="text-xs text-zinc-500">AI product concierge</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearChat}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Clear chat"
                  title="Clear chat"
                >
                  <RotateCcw size={18} />
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close assistant"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="relative flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth"
            >
              {messages.map((msg, i) => (
                <MessageBubble
                  key={`${msg.role}-${i}-${msg.content.slice(0, 20)}`}
                  message={msg}
                  showBookingCta={
                    msg.role === "assistant" && shouldShowBookingCta(msg.content)
                  }
                  onBookCall={handleBookCall}
                />
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/80 to-violet-600/80 shrink-0" />
                  <div className="glass rounded-2xl rounded-bl-md border border-white/10">
                    <TypingIndicator />
                  </div>
                </div>
              )}

              {/* Quick suggestions — only after greeting, before user sends */}
              {showSuggestions && (
                <motion.div
                  className="flex flex-wrap gap-2 pt-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {QUICK_SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/10 text-zinc-300 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all"
                    >
                      {suggestion}
                    </button>
                  ))}
                </motion.div>
              )}

              {error && (
                <p className="text-xs text-amber-400/90 text-center">{error}</p>
              )}
            </div>

            {/* Input */}
            <div className="relative shrink-0 p-4 border-t border-white/10 bg-[#030308]/80 backdrop-blur-xl">
              <div className="relative flex gap-2 items-end rounded-2xl glass border border-white/10 focus-within:border-blue-500/40 focus-within:shadow-lg focus-within:shadow-blue-500/10 transition-all duration-300">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about MVPs, apps, AI agents..."
                  rows={1}
                  disabled={isLoading}
                  className="flex-1 resize-none bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none max-h-32 min-h-[48px]"
                  style={{
                    height: "auto",
                    minHeight: "48px",
                  }}
                  onInput={(e) => {
                    const t = e.currentTarget;
                    t.style.height = "auto";
                    t.style.height = `${Math.min(t.scrollHeight, 128)}px`;
                  }}
                />
                <motion.button
                  type="button"
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "m-2 p-2.5 rounded-xl shrink-0 transition-all",
                    input.trim() && !isLoading
                      ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/5 text-zinc-600 cursor-not-allowed"
                  )}
                  whileHover={input.trim() && !isLoading ? { scale: 1.05 } : {}}
                  whileTap={input.trim() && !isLoading ? { scale: 0.95 } : {}}
                  aria-label="Send message"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <p className="mt-2 text-[10px] text-zinc-600 text-center">
                Enter to send · Powered by Mapica AI
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
