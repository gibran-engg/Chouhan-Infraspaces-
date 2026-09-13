"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline-light";
  className?: string;
  showArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-500 ease-out";

  const variants = {
    primary:
      "bg-gold text-white shadow-[0_10px_24px_rgba(183,138,84,0.18)] hover:-translate-y-0.5 hover:bg-[#9a7042]",
    secondary:
      "border border-ink/25 bg-transparent text-ink hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white",
    "outline-light":
      "border border-white/40 bg-transparent text-white hover:border-white/70 hover:bg-white/10",
  };

  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-500 ease-out group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
