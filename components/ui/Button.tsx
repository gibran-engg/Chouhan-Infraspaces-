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
    "group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-500 ease-out";

  const variants = {
    primary:
      "bg-gold text-ink hover:bg-[#b8975f]",
    secondary:
      "border border-ink/20 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/5",
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
