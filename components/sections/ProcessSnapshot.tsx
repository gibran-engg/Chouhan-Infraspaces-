import Link from "next/link";
import { ArrowRight, MessageSquare, PenTool, Hammer, Key } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { LucideIcon } from "lucide-react";

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Understand your space, needs, and budget",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Concept, 3D visualization, material selection",
  },
  {
    icon: Hammer,
    title: "Execution",
    description: "On-site work with quality checks at every stage",
  },
  {
    icon: Key,
    title: "Handover",
    description: "Final walkthrough and project handover",
  },
];

export function ProcessSnapshot() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
            How We Work
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.1}>
              <div className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-gold/30 lg:block" />
                )}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-white">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>
                <span className="text-xs font-medium uppercase tracking-wider text-gold">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/process"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold transition-all duration-500 hover:gap-3"
          >
            See Full Process
            <ArrowRight
              size={16}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
