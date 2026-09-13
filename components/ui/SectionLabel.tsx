import { cn } from "@/lib/utils";

type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "muted" | "white";
};

export function SectionLabel({
  children,
  className,
  variant = "gold",
}: SectionLabelProps) {
  const colors = {
    gold: "text-gold",
    muted: "text-muted",
    white: "text-white/80",
  };

  return (
    <p
      className={cn(
        "eyebrow-line mb-4 text-[10px] font-semibold uppercase tracking-[0.22em]",
        colors[variant],
        className
      )}
    >
      {children}
    </p>
  );
}
