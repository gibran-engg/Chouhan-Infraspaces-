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
    "Our five-step design and build process — from consultation and design through approval, execution, and handover.",
};

const steps: {
  icon: LucideIcon;
  title: string;
  description: string;
  duration: string;
}[] = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "Site visit, requirement gathering, and budget alignment. We listen first — understanding how you use your space, your priorities, and your timeline before proposing anything.",
    duration: "1–2 weeks",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Concept design, 3D renders, and material/finish selection. Every decision is visualized and documented so you know exactly what you're approving before work begins.",
    duration: "3–6 weeks",
  },
  {
    icon: FileCheck,
    title: "Approval",
    description:
      "BOQ, timeline, and agreement sign-off. Transparent pricing with line-item breakdowns, milestone-based payment schedule, and a signed scope of work.",
    duration: "1–2 weeks",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "Phased construction or renovation with quality checkpoints at every stage. Weekly progress updates, on-site supervision, and immediate escalation of any issues.",
    duration: "Project dependent",
  },
  {
    icon: Key,
    title: "Handover",
    description:
      "Final walkthrough, snagging, and documentation handover. We don't consider a project complete until every item on the snag list is resolved and you have full documentation.",
    duration: "1 week",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <Container>
          <FadeIn>
            <SectionLabel>Our Approach</SectionLabel>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
              How We Work
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              A structured, transparent process that keeps you informed at every
              stage — from the first conversation to the final handover.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 md:pb-32">
        <Container>
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-7 top-0 hidden h-full w-px bg-gold/30 md:block" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <FadeIn key={step.title} delay={i * 0.1}>
                  <div className="relative flex gap-8">
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-white">
                      <step.icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="pb-4">
                      <span className="text-xs font-medium uppercase tracking-wider text-gold">
                        Step {i + 1} · {step.duration}
                      </span>
                      <h2 className="mt-1 font-display text-2xl font-bold text-ink">
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
