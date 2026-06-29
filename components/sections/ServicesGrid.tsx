import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { homeServices } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <FadeIn>
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl">
            End-to-end solutions for every space
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A design-led construction company for clients who want one premium
            partner, not fragmented vendors.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {homeServices.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow duration-500 hover:shadow-md sm:flex-row"
              >
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:w-2/5 sm:min-h-[240px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8">
                  <h3 className="font-display text-xl font-bold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold transition-all duration-500 group-hover:gap-2">
                    Learn More
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
