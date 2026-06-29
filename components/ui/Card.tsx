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
          "group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-500 hover:shadow-md",
          className
        )}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-8">
          {tag && (
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-gold">
              {tag}
            </span>
          )}
          <h3 className="font-display text-xl font-bold text-ink">{title}</h3>
          {description && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {description}
            </p>
          )}
          {meta && (
            <p className="mt-2 text-sm text-muted">{meta}</p>
          )}
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-all duration-500 group-hover:gap-2">
            Learn More
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
