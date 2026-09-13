import { Container } from "@/components/ui/Container";

const focusAreas = ["Interiors", "Construction", "Finish work", "Turnkey coordination"];

export function Stats() {
  return (
    <section className="border-y border-ink/10 bg-white py-7 md:py-8">
      <Container>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:justify-between">
          <p className="font-display text-lg font-medium text-ink">A connected design-to-delivery practice</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
          {focusAreas.map((area) => (
            <span key={area} className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted before:mr-2 before:text-gold before:content-['◆']">{area}</span>
          ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
