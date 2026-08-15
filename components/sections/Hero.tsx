"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const serviceTags = [
  "Interior Design",
  "Construction",
  "Renovation",
  "Turnkey Solutions",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* BACKGROUND IMAGE */}

      <div className="absolute inset-0">
        <Image
          src="/media/hero/hero-bg.jpg"
          alt="Chouhan Infraspaces completed residential project"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-black/[0.03]" />
      </div>

      {/* HERO CONTENT WRAPPER */}

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* FLOATING CONTENT CARD */}

        <FadeIn className="w-full max-w-[520px] rounded-[18px] border border-white/50 bg-cream/95 px-7 py-9 shadow-2xl backdrop-blur-sm sm:px-8 sm:py-10 lg:-translate-x-4">
          {/* SECTION LABEL */}

          <SectionLabel>
            Designing Spaces. Executing Sites. Delivering Trust.
          </SectionLabel>

          {/* MAIN HEADING */}

          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
            From Design
            <br />
            <span className="text-gold">to Delivery</span>
          </h1>

          {/* SERVICE TAGS */}

          <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2">
            {serviceTags.map((tag) => (
              <span
                key={tag}
                className="border-r border-ink/25 pr-3 text-sm font-semibold text-ink last:border-r-0"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted lg:text-lg">
            We design it. We build it. We deliver it. A premium design and build
            partner for residences, workplaces, and commercial spaces.
          </p>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/projects">View Projects</Button>

            <Button href="/#consultation" variant="secondary">
              Book Consultation
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}