import type { Metadata } from "next";
import Image from "next/image";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Chouhan Infraspaces interior design, construction, finish work and turnkey project capabilities.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest pb-16 pt-32 text-white md:pb-20 md:pt-40">
        <Container>
          <FadeIn>
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="max-w-3xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Services shaped around the complete space.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Interiors, construction, finish work and coordinated delivery—each presented through real project imagery.
            </p>
          </FadeIn>
        </Container>
      </section>

      {services.map((service, i) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`py-20 md:py-32 ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <FadeIn className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>

              <FadeIn
                delay={0.1}
                className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}
              >
                <SectionLabel>{service.title}</SectionLabel>
                  <h2 className="font-display text-4xl font-medium leading-tight tracking-[-0.03em] text-ink md:text-5xl">
                  {service.title}
                </h2>
                <div className="mt-6 space-y-4 text-muted">
                  {service.description.map((para) => (
                    <p key={para.slice(0, 40)} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <h3 className="mt-8 font-display text-xl font-medium text-ink">
                  Scope may include
                </h3>
                <ul className="mt-4 space-y-2">
                  {service.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="/contact">Discuss Your Project</Button>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      ))}

      <CTA />
    </>
  );
}
