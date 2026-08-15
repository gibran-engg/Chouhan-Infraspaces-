export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string[];
  included: string[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription:
      "Interior concepts and finish palettes shaped around real rooms, details, and daily use.",
    description: [
      "Chouhan Infraspaces works across residential and commercial interiors, with an emphasis on practical layouts, finish selection, lighting, storage, and built-in details.",
      "The current project archive shows completed living, dining, bedroom, kitchen, mandir, wardrobe, and media-wall work. The service content is therefore focused on the interior decisions that can be seen in the company's own media.",
    ],
    included: [
      "Space planning and room-by-room design direction",
      "Material, finish, color, and lighting coordination",
      "Built-in storage, media-wall, and feature-wall detailing",
      "Furniture and decor coordination where the project scope requires it",
    ],
    image: "/media/projects/warm-residential-interiors/living-cover.webp",
    imageAlt:
      "Completed living room interior with warm wood detailing and layered lighting",
  },
  {
    slug: "construction",
    title: "Construction",
    shortDescription:
      "Civil and site execution for spaces that need disciplined construction before they become finished work.",
    description: [
      "The construction archive includes exterior shell work, plastering, boundary treatment, reinforcement, excavation, and early-stage site preparation.",
      "This service page presents construction as a core capability without inventing locations, project counts, timelines, or technical certifications that are not present in the repository.",
    ],
    included: [
      "Site preparation and construction-stage coordination",
      "Exterior shell, plastering, and boundary work",
      "Reinforcement, slab preparation, and foundation-stage documentation",
      "Progress documentation that can support client communication",
    ],
    image: "/media/projects/villa-construction-progress/plastered-front.webp",
    imageAlt: "Villa exterior under construction with plastered front elevation",
  },
  {
    slug: "interior-finishing",
    title: "Interior Finishing",
    shortDescription:
      "Wardrobes, panels, lighting, storage, and room details that turn a site into a usable space.",
    description: [
      "A strong portion of the current media library shows finish-stage interior work: wardrobes, wall panels, compact workspaces, bedroom details, and media walls.",
      "Interior finishing sits between design intent and daily use. The goal is to make surfaces, storage, lights, and edges feel coordinated rather than patched together.",
    ],
    included: [
      "Wardrobe and storage detailing",
      "Feature panels and wall treatments",
      "Bedroom, media-wall, and compact workspace finishes",
      "Final finish coordination before handover",
    ],
    image: "/media/projects/contemporary-apartment-finishes/bedroom-grey.webp",
    imageAlt:
      "Contemporary bedroom with grey wall paneling and integrated lighting",
  },
  {
    slug: "turnkey-solutions",
    title: "Turnkey Solutions",
    shortDescription:
      "A single design-to-execution path for clients who want coordinated responsibility.",
    description: [
      "The existing brand line, 'From Design to Delivery', supports a turnkey positioning: design thinking, site execution, and finish coordination handled as one connected project journey.",
      "Where the scope allows, Chouhan Infraspaces can bring interior design, construction, finishing, and project communication into one accountable workflow.",
    ],
    included: [
      "Design-to-execution scope planning",
      "Interior and construction coordination",
      "Material and finish alignment across the project",
      "Handover-focused project closeout",
    ],
    image: "/media/projects/completed-bungalow-exterior/front-gate.webp",
    imageAlt: "Completed bungalow exterior with gate and boundary wall",
  },
];

export const homeServices = services;
