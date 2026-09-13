import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { notFound } from "next/navigation";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/sections/CTA";

type Props = { params: { slug: string } };

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title, description: project.summary, openGraph: { images: [project.coverImage] } };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  const related = getRelatedProjects(project.slug, project.category, 3);
  const gallery = project.gallery.slice(0, 8);

  return <>
    <section className="relative isolate min-h-[560px] overflow-hidden bg-forest pt-20 text-white md:min-h-[650px]">
      <Image src={project.coverImage} alt={project.coverAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3a281f]/95 via-[#3a281f]/25 to-[#3a281f]/20" />
      <Container className="relative flex min-h-[480px] items-end pb-12 md:min-h-[570px] md:pb-16">
        <FadeIn className="max-w-3xl">
          <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-gold"><ArrowLeft size={15} /> All projects</Link>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e4cda9]">{project.category}</p>
          <h1 className="font-display text-5xl font-medium leading-[0.94] tracking-[-0.04em] md:text-7xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">{project.summary}</p>
        </FadeIn>
      </Container>
    </section>

    <section className="border-b border-ink/10 bg-white py-7">
      <Container><div className="grid gap-5 sm:grid-cols-[0.8fr_2fr] sm:items-center"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">Project notes</p><div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">{project.highlights.map((highlight) => <span key={highlight} className="before:mr-2 before:text-gold before:content-['•']">{highlight}</span>)}</div></div></Container>
    </section>

    <section className="py-20 md:py-32"><Container>
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <FadeIn><SectionLabel>In focus</SectionLabel><h2 className="font-display text-4xl font-medium leading-[1.03] tracking-[-0.03em] md:text-5xl">A closer look at the work.</h2></FadeIn>
        <FadeIn delay={0.08} className="space-y-5 pt-1">{project.description.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-muted">{paragraph}</p>)}</FadeIn>
      </div>
      <div className="mt-14 grid gap-3 md:grid-cols-12 md:grid-rows-[360px_300px]">
        {gallery.map((image, index) => <FadeIn key={image.src} delay={Math.min(index * 0.04, 0.2)} className={index === 0 ? "md:col-span-7 md:row-span-2" : index === 1 ? "md:col-span-5" : "md:col-span-5"}>
          <figure className="group relative h-full min-h-[260px] overflow-hidden bg-sand"><Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 42vw"} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-12 text-xs text-white transition-transform duration-500 group-hover:translate-y-0">{image.alt}</figcaption></figure>
        </FadeIn>)}
      </div>
    </Container></section>

    {project.videos?.length ? <section className="bg-forest py-20 text-white md:py-28"><Container><FadeIn><SectionLabel variant="white">Moving through the space</SectionLabel><h2 className="font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">Original walkthroughs.</h2></FadeIn><div className="mt-10 grid gap-5 md:grid-cols-2">{project.videos.map((video) => <FadeIn key={video.src} className="relative overflow-hidden border border-white/15"><video controls preload="metadata" poster={video.poster} className="aspect-video w-full bg-black"><source src={video.src} type="video/mp4" /></video><div className="flex items-center gap-3 px-5 py-4"><Play size={14} className="text-gold" /><p className="text-sm text-white/75">{video.title}</p></div></FadeIn>)}</div></Container></section> : null}

    {related.length ? <section className="bg-white py-20 md:py-32"><Container><FadeIn className="flex flex-wrap items-end justify-between gap-5"><div><SectionLabel>Continue exploring</SectionLabel><h2 className="font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">More from the portfolio.</h2></div><Link href="/projects" className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-ink">All projects <ArrowUpRight size={15} /></Link></FadeIn><div className="mt-11 grid gap-6 md:grid-cols-3">{related.map((item, index) => <Card key={item.slug} title={item.title} description={item.summary} image={item.coverImage} href={`/projects/${item.slug}`} tag={item.category} index={index} />)}</div></Container></section> : null}
    <CTA />
  </>;
}
