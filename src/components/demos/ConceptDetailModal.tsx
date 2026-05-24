"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scroll";
import type { DemoConcept } from "@/lib/content";

type ConceptDetailModalProps = {
  demo: DemoConcept | null;
  open: boolean;
  onClose: () => void;
};

export function ConceptDetailModal({ demo, open, onClose }: ConceptDetailModalProps) {
  if (!demo) return null;

  return (
    <Modal open={open} onClose={onClose} title={demo.title} size="lg">
      <div className="p-5 sm:p-6 space-y-6 text-sm max-h-[70vh] overflow-y-auto">
        <p className="text-zinc-400 leading-relaxed -mt-2">{demo.description}</p>

        <div className="grid sm:grid-cols-2 gap-4">
          <Section title="Problem" body={demo.problem} />
          <Section title="Solution" body={demo.solution} />
        </div>

        <ListSection title="Key features" items={demo.features} />
        <ListSection title="Target users" items={demo.targetUsers} />
        <ListSection title="Possible MVP scope" items={demo.mvpScope} />

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Tech stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {demo.stack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-xs glass border border-white/10 text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <ListSection title="Monetization paths" items={demo.monetization} />

        <div className="rounded-xl glass border border-white/10 p-4">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">MVP timeline</p>
          <p className="text-white font-medium">{demo.timeline}</p>
        </div>

        <Button
          onClick={() => {
            onClose();
            scrollToSection("contact");
          }}
          className="w-full sm:w-auto"
        >
          Book intro call
        </Button>
      </div>
    </Modal>
  );
}

function Section({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl glass border border-white/8 p-4">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
        {title}
      </h3>
      <p className="text-zinc-300 leading-relaxed text-sm">{body}</p>
    </div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
        {title}
      </h3>
      <ul className="space-y-1.5 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm">
            <span className="text-blue-400 shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
