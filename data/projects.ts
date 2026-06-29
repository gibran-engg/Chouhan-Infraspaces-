export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Corporate"
  | "Renovation";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  sqft: string;
  duration: string;
  clientType: string;
  coverImage: string;
  gallery: string[];
  description: string;
};

export const projects: Project[] = [
  {
    slug: "skyline-residences",
    title: "Skyline Residences",
    category: "Residential",
    location: "Mumbai",
    sqft: "3,200 sq ft",
    duration: "8 months",
    clientType: "Private Homeowner",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    ],
    description:
      "A full interior design and construction project for a luxury 3BHK in Lower Parel. Warm neutrals, custom millwork, and integrated smart home systems define this residence — delivered on schedule with zero compromise on finish quality.",
  },
  {
    slug: "vertex-corporate-office",
    title: "Vertex Corporate Office",
    category: "Commercial",
    location: "Navi Mumbai",
    sqft: "12,000 sq ft",
    duration: "5 months",
    clientType: "Corporate Client",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    ],
    description:
      "Turnkey fit-out for a growing fintech company — open-plan workstations, executive cabins, collaborative zones, and a premium reception area. Delivered in five months with phased handover to minimize business disruption.",
  },
  {
    slug: "riverside-penthouse-renovation",
    title: "Riverside Penthouse Renovation",
    category: "Renovation",
    location: "Thane",
    sqft: "2,800 sq ft",
    duration: "6 months",
    clientType: "Private Homeowner",
    coverImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1616137432499-4e60841a5098?w=800&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
    ],
    description:
      "Complete renovation of a 15-year-old penthouse — structural upgrades, new MEP, and a contemporary interior that maximizes river views. Phased execution allowed the family to remain in residence throughout.",
  },
  {
    slug: "greenfield-villa",
    title: "Greenfield Villa",
    category: "Residential",
    location: "Lonavala",
    sqft: "5,500 sq ft",
    duration: "14 months",
    clientType: "Private Homeowner",
    coverImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d96c28?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2d462?w=800&q=80",
    ],
    description:
      "Ground-up construction of a weekend villa with expansive terraces, natural stone finishes, and landscape integration. Full turnkey delivery from architectural coordination through final landscaping handover.",
  },
  {
    slug: "metro-retail-showroom",
    title: "Metro Retail Showroom",
    category: "Commercial",
    location: "Mumbai",
    sqft: "4,500 sq ft",
    duration: "4 months",
    clientType: "Retail Brand",
    coverImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555529902-526220556b98?w=800&q=80",
      "https://images.unsplash.com/photo-1472851298517-1710b1cc9a50?w=800&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7bdc1e932?w=800&q=80",
    ],
    description:
      "High-impact retail showroom design and build for a premium lifestyle brand. Custom display systems, accent lighting, and a cohesive brand environment delivered ahead of the launch deadline.",
  },
  {
    slug: "tech-park-corporate",
    title: "Tech Park Corporate HQ",
    category: "Corporate",
    location: "Pune",
    sqft: "18,000 sq ft",
    duration: "7 months",
    clientType: "Corporate Client",
    coverImage:
      "https://images.unsplash.com/photo-1497215842960-222b430dc094?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
      "https://images.unsplash.com/photo-1600880292089-90a7476f8e71?w=800&q=80",
      "https://images.unsplash.com/photo-1577412647305-991150c7d334?w=800&q=80",
    ],
    description:
      "Corporate headquarters for a technology company — agile workspaces, boardroom suites, cafeteria, and wellness zones. LEED-aligned material choices and acoustic engineering throughout.",
  },
];

export const featuredProjects = projects.slice(0, 3);

export const projectCategories: (ProjectCategory | "All")[] = [
  "All",
  "Residential",
  "Commercial",
  "Corporate",
  "Renovation",
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getRelatedProjects(
  currentSlug: string,
  category: ProjectCategory,
  limit = 3
): Project[] {
  return projects
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit);
}
