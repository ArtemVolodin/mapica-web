"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scroll";
import type { ProductDetail } from "@/lib/content";

type ProductDetailModalProps = {
  product: ProductDetail | null;
  open: boolean;
  onClose: () => void;
};

export function ProductDetailModal({
  product,
  open,
  onClose,
}: ProductDetailModalProps) {
  if (!product) return null;

  return (
    <Modal open={open} onClose={onClose} title={product.title} size="lg">
      <div className="p-5 sm:p-6 space-y-5 text-sm">
        <p className="text-base text-gradient-accent font-medium">
          {product.valueProposition}
        </p>
        <Block title="What it does" text={product.whatItDoes} />
        <ListBlock title="Core features" items={product.coreFeatures} />
        <ListBlock title="Possible MVP" items={product.possibleMvp} />
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
            Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {product.stack.map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-full text-xs glass border border-white/10"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Button
            onClick={() => {
              onClose();
              scrollToSection("demo-lab");
            }}
            variant="secondary"
            size="sm"
          >
            View Demo Lab
          </Button>
          <Button
            onClick={() => {
              onClose();
              scrollToSection("contact");
            }}
            size="sm"
          >
            Book intro call
          </Button>
        </div>
      </div>
    </Modal>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
        {title}
      </h3>
      <p className="text-zinc-300 leading-relaxed">{text}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2">
        {title}
      </h3>
      <ul className="space-y-1 text-zinc-300">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-violet-400">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
