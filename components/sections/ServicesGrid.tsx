import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { homeServices } from "@/data/services";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesGrid() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <Container>
        <FadeIn>
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-ink md:text-5xl lg:text-6xl">
            One practice, from groundwork to atmosphere.
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Design direction, construction execution and finish-stage detailing—presented through the work itself.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {homeServices.map((service, i) => (
            <FadeIn key={service.slug} delay={i * 0.1}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex flex-col overflow-hidden border border-ink/10 bg-white transition-all duration-500 hover:border-gold/50 hover:shadow-[0_18px_45px_rgba(24,32,30,0.08)] sm:flex-row"
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
                <div className="flex flex-1 flex-col justify-center p-7 md:p-8">
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-gold transition-all duration-500 group-hover:gap-2">
                    View service
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
