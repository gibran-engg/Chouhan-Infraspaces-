"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Award, Building2, ShieldCheck } from "lucide-react";

const serviceTags = [
  "Interior Design",
  "Construction",
  "Renovation",
  "Turnkey Solutions",
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Construction site aerial view"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 via-55% to-cream/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div>
            <FadeIn>
              <SectionLabel>
                Designing Spaces. Executing Sites. Delivering Trust.
              </SectionLabel>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="font-display text-6xl font-bold leading-[0.95] text-ink sm:text-7xl lg:text-8xl">
                From Design
                <br />
                <span className="text-gold">to Delivery</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-3">
                {serviceTags.map((tag) => (
                  <span
                    key={tag}
                    className="border-r border-ink/25 pr-3 text-sm font-semibold text-ink last:border-r-0"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted lg:text-lg">
                We design it. We build it. We deliver it. A premium design and
                build partner for residences, workplaces, and commercial spaces.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/projects">View Projects</Button>
                <Button href="/#consultation" variant="secondary">
                  Book Consultation
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="relative hidden h-[560px] lg:block">
            <FadeIn delay={0.3} className="absolute right-0 top-6 h-72 w-60 overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
                alt="Modern interior living room"
                fill
                className="object-cover"
                sizes="224px"
              />
            </FadeIn>
            <FadeIn delay={0.5} className="absolute bottom-8 left-8 h-80 w-72 overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80"
                alt="Premium interior design"
                fill
                className="object-cover"
                sizes="256px"
              />
            </FadeIn>
            <FadeIn delay={0.6} className="absolute bottom-0 right-12 grid w-80 grid-cols-3 divide-x divide-ink/10 border border-ink/10 bg-white/85 shadow-xl backdrop-blur">
              {[
                { icon: Award, label: "12+ yrs" },
                { icon: Building2, label: "500+ jobs" },
                { icon: ShieldCheck, label: "98% CSAT" },
              ].map((item) => (
                <div key={item.label} className="px-4 py-5 text-center">
                  <item.icon className="mx-auto h-5 w-5 text-gold" />
                  <p className="mt-2 text-xs font-semibold text-ink">{item.label}</p>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
