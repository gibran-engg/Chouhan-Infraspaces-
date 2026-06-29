import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of residential, commercial, corporate, and renovation projects across Mumbai and India.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <Container>
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              A selection of recent work across residential, commercial, and
              renovation — each delivered with the same design-led, accountable
              approach.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 md:pb-32">
        <Container>
          <ProjectsGallery />
        </Container>
      </section>

      <CTA />
    </>
  );
}
