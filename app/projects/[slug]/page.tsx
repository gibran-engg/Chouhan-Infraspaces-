import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/sections/CTA";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug, project.category);

  return (
    <>
      <section className="relative pt-20">
        <div className="relative aspect-[21/9] min-h-[300px] w-full">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-overlay/40" />
          <Container className="absolute inset-0 flex items-end pb-12">
            <FadeIn>
              <span className="mb-2 inline-block text-xs font-medium uppercase tracking-wider text-gold">
                {project.category}
              </span>
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-2 text-white/80">{project.location}</p>
            </FadeIn>
          </Container>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white py-8">
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { label: "Client Type", value: project.clientType },
              { label: "Location", value: project.location },
              { label: "Area", value: project.sqft },
              { label: "Duration", value: project.duration },
            ].map((fact) => (
              <div key={fact.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  {fact.label}
                </p>
                <p className="mt-1 font-medium text-ink">{fact.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-32">
        <Container>
          <FadeIn>
            <SectionLabel>Overview</SectionLabel>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">
              {project.description}
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {project.gallery.map((img, i) => (
              <FadeIn key={img} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={img}
                    alt={`${project.title} gallery ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-20 md:py-32">
          <Container>
            <FadeIn>
              <SectionLabel>More Work</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                Related Projects
              </h2>
            </FadeIn>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Card
                  key={p.slug}
                  title={p.title}
                  image={p.coverImage}
                  href={`/projects/${p.slug}`}
                  tag={p.category}
                  meta={p.location}
                  index={i}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
    </>
  );
}
