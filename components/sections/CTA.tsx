import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTA() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Premium interior with arched windows"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-overlay/50" />
      </div>

      <Container className="relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionLabel variant="white">Start Your Project</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to build something extraordinary?
          </h2>
          <p className="mt-4 text-white/80">
            Tell us about your space and goals — we&apos;ll get back to you with
            design clarity, construction timelines, and a clear next step.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href={siteConfig.consultationHref}>Book a Consultation</Button>
            <Link
              href={siteConfig.phoneLink}
              className="group inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-medium text-white transition-all duration-500 ease-out hover:border-white/70 hover:bg-white/10"
            >
              <Phone size={16} />
              Call Us
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
