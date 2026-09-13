import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTA() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="/media/projects/warm-residential-interiors/lounge-wide.webp"
          alt="Warm residential interior by Chouhan Infraspaces"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/80" />
      </div>

      <Container className="relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel variant="white">Start Your Project</SectionLabel>
          <h2 className="font-display text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
            Begin with a better brief.
          </h2>
          <p className="mt-4 text-white/80">
            Tell us about your space, priorities and the kind of work you&apos;re considering.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Book a Consultation</Button>
            <Button href="/projects" variant="outline-light">View the portfolio</Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
