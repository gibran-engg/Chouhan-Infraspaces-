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
        "mb-4 text-xs font-medium uppercase tracking-[0.2em]",
        colors[variant],
        className
      )}
    >
      {children}
    </p>
  );
}
