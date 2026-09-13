import { Layers3, ScanSearch, Ruler, Images } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import type { LucideIcon } from "lucide-react";

const pillars: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Layers3,
    title: "Connected thinking",
    description: "A project can move from spatial direction through to finish-stage decisions without losing the bigger picture.",
  },
  {
    icon: ScanSearch,
    title: "Detail-led approach",
    description: "The portfolio focuses on the surfaces, junctions, lighting and built elements that make a space feel resolved.",
  },
  {
    icon: Ruler,
    title: "Site-aware execution",
    description: "Construction and progress imagery make the work behind the finished view part of the story.",
  },
  {
    icon: Images,
    title: "Work, not stock claims",
    description: "The website is anchored in original Chouhan Infraspaces imagery from interiors, exteriors and active sites.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-32">
      <Container>
        <FadeIn>
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.03] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
            Built around the work itself.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <div className="h-full border border-ink/10 bg-cream p-7 transition-colors duration-500 hover:border-gold/50 md:p-8">
                <div className="mb-5 flex h-11 w-11 items-center justify-center border border-gold/50 bg-white">
                  <pillar.icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium text-ink">
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
