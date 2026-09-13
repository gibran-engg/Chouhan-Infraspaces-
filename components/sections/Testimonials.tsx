import React from "react";
import { Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  project: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: 1,
    quote: "Chouhan Infraspaces transformed our vision into an architectural reality. Their dedication to premium structural execution is unmatched.",
    author: "Vivanta Resort",
    project: "Diveagar",
  },
  {
    id: 3,
    quote: "A rare mix of modern efficiency and rich aesthetic design. Transparent communication throughout the development process.",
    author: "Magar Farmhouse",
    project: "Diveagar",
  },
  {
    id: 4,
    quote: "From materials selected to project delivery timelines, they exhibit top-tier professionalism. A trusted team for elite spaces.",
    author: "Independent Villa",
    project: "Hashmat Nagar",
  },
];

export default function Testimonials() {
  const extendedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section className="py-16 md:py-24 bg-cream border-t border-zinc-200/60 overflow-hidden w-full">
      {/* Container holding the Header */}
      <div className="max-w-content mx-auto px-6 md:px-12 mb-12 md:mb-16 text-center">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink text-balance">
          Trusted by Visionary Clients
        </h2>
      </div>

      {/* FIXED CONTAINER: Added max-w-content and mx-auto to center-align the marquee boundary */}
      <div className="max-w-content mx-auto px-6 md:px-12">
        <div className="relative w-full overflow-hidden select-none rounded-xl">
          {/* Subtle edge fading masks updated inside the container margins */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* The Moving Track */}
          <div className="flex gap-4 md:gap-6 animate-marquee whitespace-nowrap min-w-full py-4 hover:[animation-play-state:paused]">
            {extendedTestimonials.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="inline-block w-[280px] sm:w-[320px] md:w-[360px] shrink-0 bg-white border border-zinc-100 p-6 md:p-8 rounded-lg shadow-sm whitespace-normal relative group"
              >
                <Quote className="absolute right-4 top-4 md:right-6 md:top-6 text-gold/10 w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-gold/20" />
                
                <p className="text-zinc-700 font-sans text-xs sm:text-sm leading-relaxed mb-4 md:mb-6 italic">
                  "{item.quote}"
                </p>
                
                <div>
                  <h4 className="font-display font-bold text-ink text-sm md:text-base">
                    {item.author}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-medium text-gold uppercase tracking-wider mt-0.5">
                    {item.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}