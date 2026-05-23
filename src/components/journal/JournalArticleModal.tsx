"use client";

import { Modal } from "@/components/ui/Modal";
import type { JournalArticle } from "@/lib/content";
import { cn } from "@/lib/utils";

type JournalArticleModalProps = {
  article: JournalArticle | null;
  open: boolean;
  onClose: () => void;
};

export function JournalArticleModal({
  article,
  open,
  onClose,
}: JournalArticleModalProps) {
  if (!article) return null;

  return (
    <Modal open={open} onClose={onClose} title={article.title} size="lg">
      <div className="p-5 sm:p-6">
        <div
          className={cn(
            "h-24 rounded-xl bg-gradient-to-br mb-5 border border-white/10",
            article.gradient
          )}
        />
        <div className="flex gap-3 text-xs text-zinc-500 mb-4">
          <span>{article.date}</span>
          <span>·</span>
          <span className="text-blue-400/90">{article.category}</span>
        </div>
        <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
          {article.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
    </Modal>
  );
}
