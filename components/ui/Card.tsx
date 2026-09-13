"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";

type CardProps = {
  title: string;
  description?: string;
  image: string;
  href: string;
  tag?: string;
  meta?: string;
  className?: string;
  index?: number;
};

export function Card({
  title,
  description,
  image,
  href,
  tag,
  meta,
  className,
  index = 0,
}: CardProps) {
  return (
    <FadeIn delay={index * 0.1}>
      <Link
        href={href}
        className={cn(
          "group flex h-full flex-col overflow-hidden border border-ink/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_45px_rgba(24,32,30,0.10)]",
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-t after:from-ink/20 after:to-transparent after:opacity-0 after:transition-opacity after:duration-500 group-hover:after:opacity-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          {tag && (
            <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
              {tag}
            </span>
          )}
          <h3 className="font-display text-2xl font-semibold leading-tight text-ink">{title}</h3>
          {description && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {description}
            </p>
          )}
          {meta && (
            <p className="mt-2 text-sm text-muted">{meta}</p>
          )}
          <span className="mt-5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold transition-all duration-500 group-hover:gap-2">
            Explore project
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
