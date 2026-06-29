import type { Metadata } from "next";
import { Gem, Eye, Clock, Hammer } from "lucide-react";
import { Stats } from "@/components/sections/Stats";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/sections/CTA";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Quality, transparency, timeliness, and craftsmanship — why clients choose Chouhan Infraspaces as their design and build partner.",
};

const values: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Gem,
    title: "Quality",
    description:
      "Premium materials, skilled execution, and rigorous quality checks at every milestone.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear pricing, weekly progress reports, and no surprises on scope or timeline.",
  },
  {
    icon: Clock,
    title: "Timeliness",
    description:
      "Structured project management with milestone tracking and proactive communication.",
  },
  {
    icon: Hammer,
    title: "Craftsmanship",
    description:
      "In-house teams who take pride in the details — from millwork joints to paint finishes.",
  },
];

const testimonials = [
  {
    quote:
      "Chouhan Infraspaces transformed our office into a space our team is genuinely proud of. One team, one timeline — exactly as promised.",
    author: "Rajesh M.",
    role: "CEO, Vertex Technologies",
  },
  {
    quote:
      "We'd worked with three different vendors on previous projects. This was the first time design and construction felt like one seamless experience.",
    author: "Priya S.",
    role: "Homeowner, Skyline Residences",
  },
  {
    quote:
      "Transparent BOQ, weekly site updates, and a finish quality that exceeded our expectations. Highly recommended for corporate fit-outs.",
    author: "Amit K.",
    role: "Facilities Head, Metro Retail",
  },
];

export default function WhyUsPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <Container>
          <FadeIn>
            <SectionLabel>Our Promise</SectionLabel>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Why Chouhan Infraspaces
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              We built this company for clients who are tired of coordinating
              fragmented vendors. One partner, full accountability, premium
              results.
            </p>
          </FadeIn>
        </Container>
      </section>

      <Stats />

      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              What We Stand For
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.1}>
                <div className="rounded-lg border border-ink/10 bg-white p-8">
                  <value.icon className="mb-4 h-8 w-8 text-gold" />
                  <h3 className="font-display text-lg font-bold text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-32">
        <Container>
          <FadeIn>
            <SectionLabel>Client Voices</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              What Our Clients Say
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.1}>
                <blockquote className="flex h-full flex-col rounded-lg border border-ink/10 bg-cream p-8">
                  <p className="flex-1 text-sm italic leading-relaxed text-muted">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-ink/10 pt-4">
                    <p className="font-medium text-ink">{t.author}</p>
                    <p className="text-xs text-muted">{t.role}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <FadeIn className="mx-auto max-w-2xl text-center">
            <SectionLabel>Our Team</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Built by Practitioners
            </h2>
            <p className="mt-4 text-muted">
              Our leadership team combines decades of experience in interior
              design, civil construction, and project management. Every project
              is led by a dedicated project manager with direct access to
              design and site teams — no layers, no runaround.
            </p>
          </FadeIn>
        </Container>
      </section>

      <CTA />
    </>
  );
}
