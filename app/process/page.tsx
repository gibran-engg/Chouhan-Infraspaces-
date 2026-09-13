import type { Metadata } from "next";
import {
  MessageSquare,
  PenTool,
  FileCheck,
  Hammer,
  Key,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/sections/CTA";
import type { LucideIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A simple view of how a Chouhan Infraspaces project can move from early conversation to finished space.",
};

const steps: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Start with the space, the ambitions for it, and the practical questions that will shape the brief.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Develop the direction through layouts, finishes, material references and the details that give the project its character.",
  },
  {
    icon: FileCheck,
    title: "Alignment",
    description:
      "Bring the scope, sequence and selected approach into a shared understanding before work moves forward.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "The site phase turns the agreed direction into a built environment, with material and detail decisions carried into execution.",
  },
  {
    icon: Key,
    title: "Handover",
    description:
      "The final space is reviewed as a whole—how it looks, works and feels in use.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <Container>
          <FadeIn>
            <SectionLabel>Our Approach</SectionLabel>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              A clear path from first thought to final space.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              A simple framework for bringing direction, site work and finishing decisions together.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="page-content-section">
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-7 top-0 hidden h-full w-px bg-gold/40 md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div className="relative flex gap-8">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center border border-gold/50 bg-white">
                      <step.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="pb-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                        Step {i + 1}
                      </span>
                      <h2 className="mt-2 font-display text-3xl font-medium text-ink">
                        {step.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
