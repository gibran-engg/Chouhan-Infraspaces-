"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative isolate min-h-[760px] overflow-hidden bg-forest pt-20 text-white sm:min-h-[800px]">
      <Image src="/media/hero/hero-bg.jpg" alt="Completed Chouhan Infraspaces residential interior" fill priority quality={92} sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#3a281f]/95 via-[#3a281f]/63 to-[#3a281f]/10" />
      <div className="grain pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light" />
      <div className="hero-sheen pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex min-h-[680px] max-w-content items-end px-5 pb-12 sm:min-h-[720px] sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
        <div className="grid w-full items-end gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <FadeIn className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70"><span className="h-px w-9 bg-gold" /> Chouhan Infraspaces</p>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.93] tracking-[-0.045em] text-balance sm:text-6xl md:text-7xl lg:text-[5.75rem]">Spaces built with <em className="font-normal text-[#e4cda9]">intent.</em></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/78 sm:text-lg">A considered practice for interiors, construction and finish work—where the detail, the site and the final experience belong to one story.</p>
            <div className="mt-9 flex flex-wrap gap-3"><Button href="/projects">Explore our work</Button><Button href="/contact" variant="outline-light">Start a conversation</Button></div>
          </FadeIn>
          <FadeIn delay={0.2} className="hidden border-l border-white/25 pl-6 lg:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e4cda9]">From the archive</p><p className="mt-4 font-display text-2xl leading-tight">Material, light and lived-in detail.</p>
            <a href="#featured-work" className="mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-gold">View selected work <ArrowDownRight size={16} /></a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
