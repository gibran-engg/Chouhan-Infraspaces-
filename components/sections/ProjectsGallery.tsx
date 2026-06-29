"use client";

import { useState } from "react";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export function ProjectsGallery() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300",
              active === cat
                ? "bg-gold text-ink"
                : "border border-ink/15 bg-white text-muted hover:border-gold/40 hover:text-ink"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Card
            key={project.slug}
            title={project.title}
            image={project.coverImage}
            href={`/projects/${project.slug}`}
            tag={project.category}
            meta={`${project.location} · ${project.sqft}`}
            index={i}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted">
          No projects found in this category.
        </p>
      )}
    </>
  );
}
