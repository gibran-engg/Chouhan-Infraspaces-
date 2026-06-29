import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ProcessSnapshot } from "@/components/sections/ProcessSnapshot";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Consultation } from "@/components/sections/Consultation";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <FeaturedProjects />
      <ProcessSnapshot />
      <WhyChooseUs />
      <Consultation />
      <CTA />
    </>
  );
}
