import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedProjects() {
  return (
    <section id="featured-work" className="bg-white py-20 md:py-32">
      <Container>
        <FadeIn>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="max-w-xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl">
            Selected work, made visible.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Card
              key={project.slug}
              title={project.title}
              image={project.coverImage}
              href={`/projects/${project.slug}`}
              tag={project.category}
              description={project.summary}
              index={i}
            />
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold transition-all duration-500 hover:gap-3"
          >
            View All Projects
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
