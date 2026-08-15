export type ProjectCategory =
  | "Residential Interiors"
  | "Construction"
  | "Exterior"
  | "Interior Finishing";

export type ProjectMedia = {
  src: string;
  alt: string;
  orientation?: "landscape" | "portrait" | "square";
};

export type ProjectVideo = {
  src: string;
  title: string;
  poster: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string[];
  coverImage: string;
  coverAlt: string;
  gallery: ProjectMedia[];
  videos?: ProjectVideo[];
  highlights: string[];
};

const mediaRoot = "/media/projects";

export const projects: Project[] = [
  {
    slug: "warm-residential-interiors",
    title: "Warm Residential Interiors",
    category: "Residential Interiors",
    summary:
      "A completed home interior with layered lighting, wood detailing, display walls, bedroom finishes, a mandir zone, and kitchen cabinetry.",
    description: [
      "This finished residential interior is the strongest visual set in the current Chouhan Infraspaces archive. The imagery shows a coordinated living and dining composition with warm wood, soft upholstery, integrated lighting, and detailed wall treatments.",
      "The gallery also includes bedroom, kitchen, corridor, mandir, mirror, and media-wall details, making it a useful case study for how finish choices carry through a complete home.",
    ],
    coverImage: `${mediaRoot}/warm-residential-interiors/living-cover.webp`,
    coverAlt:
      "Finished living room with warm wood fins, upholstered seating, and layered ceiling lighting",
    gallery: [
      {
        src: `${mediaRoot}/warm-residential-interiors/lounge-wide.webp`,
        alt: "Wide view of the finished lounge with framed wall panels and warm lighting",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/dining-feature.webp`,
        alt: "Dining area framed by wood verticals and a feature wall",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/dining-portal.webp`,
        alt: "Dining room seen through a warm wood portal detail",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/display-detail.webp`,
        alt: "Living room display shelving and stone-textured wall detail",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/lounge-dining.webp`,
        alt: "Living and dining area with chandelier, wall panels, and warm accents",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/media-wall.webp`,
        alt: "Media wall with marble-look paneling and low console",
        orientation: "square",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/tv-wall.webp`,
        alt: "Finished television wall with dark stone texture and console",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/primary-bedroom.webp`,
        alt: "Primary bedroom with upholstered headboard and warm feature wall",
        orientation: "square",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/mirror-detail.webp`,
        alt: "Decorative mirror and stone finish detail in the residence",
        orientation: "portrait",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/kitchen.webp`,
        alt: "Finished kitchen cabinetry with patterned backsplash and warm under-cabinet lighting",
        orientation: "portrait",
      },
      {
        src: `${mediaRoot}/warm-residential-interiors/mandir.webp`,
        alt: "Mandir wall with pendant lights and decorative panel",
        orientation: "portrait",
      },
    ],
    highlights: [
      "Complete residential interior set",
      "Living, dining, bedroom, kitchen, and mandir imagery",
      "Warm material palette with detailed wall treatments",
    ],
  },
  {
    slug: "contemporary-apartment-finishes",
    title: "Contemporary Apartment Finishes",
    category: "Interior Finishing",
    summary:
      "A compact apartment finishing set focused on wardrobe work, wall panels, bedroom detailing, and media-wall elements.",
    description: [
      "This group is assembled from visually related apartment finish photographs and short walkthrough clips in the archive. The images show a quieter, contemporary palette with grey paneling, clean cabinetry, and compact built-in details.",
      "Some frames show finishing work still in progress, so the page presents it as an interior finishing study rather than a fully styled completion shoot.",
    ],
    coverImage: `${mediaRoot}/contemporary-apartment-finishes/tv-wall.webp`,
    coverAlt:
      "Contemporary apartment television wall with wood panel and window-side light",
    gallery: [
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/bedroom-grey.webp`,
        alt: "Grey finished bedroom with integrated lighting and wall-mounted television",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/bedroom-panel.webp`,
        alt: "Bedroom with vertical burgundy feature panel and side table",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/window-tv.webp`,
        alt: "Apartment television panel beside a large window",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/workspace.webp`,
        alt: "Compact desk and storage wall in a finished apartment room",
        orientation: "portrait",
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/entry.webp`,
        alt: "Apartment entry passage with finished flooring and ceiling lights",
        orientation: "portrait",
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/wardrobe.webp`,
        alt: "Wardrobe and shelving installation inside an apartment",
        orientation: "portrait",
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/mirror.webp`,
        alt: "Round mirror detail on a textured wall panel",
        orientation: "portrait",
      },
    ],
    videos: [
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/bedroom-walkthrough.mp4`,
        title: "Bedroom walkthrough",
        poster: `${mediaRoot}/contemporary-apartment-finishes/bedroom-grey.webp`,
      },
      {
        src: `${mediaRoot}/contemporary-apartment-finishes/bedroom-storage-walkthrough.mp4`,
        title: "Bedroom storage walkthrough",
        poster: `${mediaRoot}/contemporary-apartment-finishes/bedroom-panel.webp`,
      },
    ],
    highlights: [
      "Compact apartment finish details",
      "Wardrobe, bedroom, media-wall, and passage imagery",
      "Includes short original walkthrough clips",
    ],
  },
  {
    slug: "completed-bungalow-exterior",
    title: "Completed Bungalow Exterior",
    category: "Exterior",
    summary:
      "A completed bungalow exterior supported by progress images from the same exterior form and boundary treatment.",
    description: [
      "The archive contains both finished exterior views and earlier site-progress views of a bungalow with a distinctive front gate, boundary wall, and clean grey-white elevation.",
      "The finished imagery is used first, with progress frames included later to show how the exterior evolved without overstating unsupported project facts.",
    ],
    coverImage: `${mediaRoot}/completed-bungalow-exterior/front-gate.webp`,
    coverAlt:
      "Completed bungalow exterior with grey-white elevation and wood-toned front gate",
    gallery: [
      {
        src: `${mediaRoot}/completed-bungalow-exterior/front-wide.webp`,
        alt: "Wide front view of the completed bungalow exterior",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/completed-bungalow-exterior/boundary-wall.webp`,
        alt: "Boundary wall and gate detail at the completed bungalow exterior",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/completed-bungalow-exterior/side-elevation.webp`,
        alt: "Side elevation of the bungalow exterior with boundary wall",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/completed-bungalow-exterior/progress-exterior-1.webp`,
        alt: "Exterior progress view of the bungalow during construction",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/completed-bungalow-exterior/progress-exterior-2.webp`,
        alt: "Progress view showing the rounded exterior and site boundary",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/completed-bungalow-exterior/progress-exterior-3.webp`,
        alt: "Exterior progress view with white plastered walls and palm tree",
        orientation: "landscape",
      },
    ],
    highlights: [
      "Completed exterior and boundary wall imagery",
      "Progress views included for context",
      "Useful exterior construction proof point",
    ],
  },
  {
    slug: "villa-construction-progress",
    title: "Villa Construction Progress",
    category: "Construction",
    summary:
      "A construction-progress sequence showing exterior shell work, brick detailing, plastering, and site approach views.",
    description: [
      "This project group is built from related site photographs showing a compact villa structure through multiple construction stages.",
      "The images are intentionally presented as progress documentation rather than polished completion photography, giving visitors evidence of real site execution work.",
    ],
    coverImage: `${mediaRoot}/villa-construction-progress/plastered-front.webp`,
    coverAlt: "Villa exterior under construction with plastered front elevation",
    gallery: [
      {
        src: `${mediaRoot}/villa-construction-progress/raw-elevation.webp`,
        alt: "Raw grey villa elevation during construction",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/villa-construction-progress/side-shell.webp`,
        alt: "Side shell of the villa structure during construction",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/villa-construction-progress/site-approach.webp`,
        alt: "Approach road and villa construction site",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/villa-construction-progress/front-work.webp`,
        alt: "Workers and material around the villa front during execution",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/villa-construction-progress/brick-entry.webp`,
        alt: "Brick and plaster work around the villa entry",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/villa-construction-progress/finalized-shell.webp`,
        alt: "Later-stage exterior shell with plastering and entry steps",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/villa-construction-progress/site-shell-wide.webp`,
        alt: "Wide view of the villa construction site and shell",
        orientation: "landscape",
      },
    ],
    highlights: [
      "Exterior shell and plastering sequence",
      "Visible site progress documentation",
      "Construction-focused case study",
    ],
  },
  {
    slug: "structural-site-work",
    title: "Structural Site Work",
    category: "Construction",
    summary:
      "A site-development group showing reinforcement, slab preparation, excavation, and foundation marking work.",
    description: [
      "This gallery uses raw construction documentation from the archive. It focuses on early-stage site execution, including reinforcement, excavation, foundation marking, and slab preparation.",
      "The images are not styled portfolio photography, but they add useful authenticity by showing the work that happens before a finished interior or exterior is visible.",
    ],
    coverImage: `${mediaRoot}/structural-site-work/reinforcement-site.webp`,
    coverAlt: "Workers preparing reinforcement across a structural slab",
    gallery: [
      {
        src: `${mediaRoot}/structural-site-work/landscape-slab.webp`,
        alt: "Prepared slab and reinforcement area in a landscape setting",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/structural-site-work/slab-grid.webp`,
        alt: "Reinforcement grid and slab preparation underway",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/structural-site-work/rebar-work.webp`,
        alt: "Workers placing reinforcement bars on site",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/structural-site-work/foundation-marking.webp`,
        alt: "Foundation marking visible across an open site",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/structural-site-work/excavation.webp`,
        alt: "Excavation work at an early-stage construction site",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/structural-site-work/site-marking-wide.webp`,
        alt: "Wide view of foundation marking across the site",
        orientation: "landscape",
      },
      {
        src: `${mediaRoot}/structural-site-work/site-marking.webp`,
        alt: "Site marking and preparation work before construction",
        orientation: "landscape",
      },
    ],
    highlights: [
      "Early-stage construction documentation",
      "Reinforcement and foundation preparation",
      "Raw evidence of site execution",
    ],
  },
];

export const featuredProjects = projects.slice(0, 3);

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Residential Interiors",
  "Interior Finishing",
  "Exterior",
  "Construction",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(
  currentSlug: string,
  category: ProjectCategory,
  limit = 3
): Project[] {
  const sameCategory = projects.filter(
    (project) => project.slug !== currentSlug && project.category === category
  );
  const fallback = projects.filter(
    (project) => project.slug !== currentSlug && project.category !== category
  );

  return [...sameCategory, ...fallback].slice(0, limit);
}
