import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the Chouhan Infraspaces portfolio of interior, exterior and construction work.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <Container>
          <FadeIn>
            <SectionLabel>Portfolio</SectionLabel>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              A portfolio grounded in real work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Interiors, exteriors and site progress—assembled into focused project stories from the Chouhan Infraspaces archive.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="page-content-section">
        <Container>
          <ProjectsGallery />
        </Container>
      </section>

      <CTA />
    </>
  );
}
