import { Shield, Receipt, Clock, Users } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { LucideIcon } from "lucide-react";

const pillars: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Shield,
    title: "Single Point of Accountability",
    description: "One team for design and execution",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description: "Detailed cost breakdowns, no hidden charges",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Structured project management and timelines",
  },
  {
    icon: Users,
    title: "In-House Execution Team",
    description: "Skilled supervisors and crews, not subcontracted out",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <FadeIn>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
            Why Chouhan Infraspaces
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="rounded-lg border border-ink/10 bg-cream p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40">
                  <pillar.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
