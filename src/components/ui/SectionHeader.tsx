import { FadeIn } from "./FadeIn";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      {label && (
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-blue-400/90 mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-zinc-400 leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
