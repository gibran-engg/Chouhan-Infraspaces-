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
    "Interior design, construction, renovation, turnkey solutions, and maintenance — one premium partner from design to delivery.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <Container>
          <FadeIn>
            <SectionLabel>What We Do</SectionLabel>
            <h1 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              From concept to handover, we offer end-to-end design and build
              services for residential, commercial, and corporate spaces across
              Mumbai and beyond.
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
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
                <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
                  {service.title}
                </h2>
                <div className="mt-6 space-y-4 text-muted">
                  {service.description.map((para) => (
                    <p key={para.slice(0, 40)} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>

                <h3 className="mt-8 font-display text-lg font-bold text-ink">
                  What&apos;s Included
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
