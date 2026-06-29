"use client";

import { Award, Building2, Ruler, ThumbsUp } from "lucide-react";
import { StatBlock } from "@/components/ui/StatBlock";
import { Container } from "@/components/ui/Container";

const stats = [
  { icon: Award, value: 12, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 500, suffix: "+", label: "Projects Delivered" },
  { icon: Ruler, value: 5, suffix: "M+", label: "Sq. Ft. Built" },
  { icon: ThumbsUp, value: 98, suffix: "%", label: "Client Satisfaction" },
];

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-white py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
