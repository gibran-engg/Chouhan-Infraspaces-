import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { title: "Why Chouhan Infraspaces", description: "A detail-led approach to interiors, construction and finish work." };

export default function WhyUsPage() { return <>
  <section className="bg-forest pb-16 pt-32 text-white md:pb-20 md:pt-40"><Container><FadeIn><SectionLabel variant="white">The practice</SectionLabel><h1 className="max-w-4xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">Work that begins with the whole picture.</h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70">Chouhan Infraspaces brings an architectural eye to both finished environments and the work that makes them possible.</p></FadeIn></Container></section>
  <WhyChooseUs />
  <section className="bg-white py-20 md:py-32"><Container><div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"><FadeIn><div className="relative aspect-[5/4] overflow-hidden"><Image src="/media/projects/completed-bungalow-exterior/front-wide.webp" alt="Completed bungalow exterior from the Chouhan Infraspaces portfolio" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div></FadeIn><FadeIn delay={0.1}><SectionLabel>Proof in the portfolio</SectionLabel><h2 className="font-display text-4xl font-medium leading-[1.03] tracking-[-0.03em] md:text-5xl">A finished view is only part of the story.</h2><p className="mt-6 max-w-lg leading-8 text-muted">The portfolio pairs polished interiors and exteriors with construction-progress documentation. It offers a more complete picture of the material and site work behind each environment.</p><Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold hover:text-ink">Explore the work <ArrowUpRight size={15} /></Link></FadeIn></div></Container></section>
  <CTA />
</>; }
