export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string[];
  included: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription:
      "Refined spaces planned around living, working, and lasting value.",
    description: [
      "Our interior design practice begins with understanding how you live, work, and move through your space. We translate that into layouts, material palettes, and lighting plans that feel intentional — not templated.",
      "From concept sketches to detailed 3D visualizations, every decision is documented and aligned with your budget before execution begins. We source premium finishes and coordinate with our construction team for seamless delivery.",
      "Whether it's a luxury residence, a corporate office, or a retail environment, we design spaces that reflect your identity and stand the test of time.",
    ],
    included: [
      "Space planning and layout optimization",
      "3D visualization and mood boards",
      "Material and finish selection",
      "Lighting design and fixture specification",
      "Furniture and decor coordination",
    ],
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    slug: "construction",
    title: "Construction",
    shortDescription:
      "Disciplined site execution with premium materials and clean controls.",
    description: [
      "Construction at Chouhan Infraspaces is managed with the precision of a design studio and the discipline of a commercial contractor. We handle structural work, MEP coordination, and finishing with in-house supervisors at every stage.",
      "Our project management framework includes weekly progress reports, quality checkpoints, and transparent cost tracking. No surprises, no scope creep without your approval.",
      "We work across residential towers, commercial fit-outs, and standalone villas — always with a focus on structural integrity, code compliance, and finish quality that matches the design intent.",
    ],
    included: [
      "Structural and civil work",
      "MEP coordination and execution",
      "Premium material procurement",
      "Weekly progress reporting",
      "Quality assurance at every milestone",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "renovation",
    title: "Renovation",
    shortDescription:
      "Transforming existing spaces with minimal disruption and maximum impact.",
    description: [
      "Renovation requires a different mindset — working within existing structures, managing occupied spaces, and delivering transformation without unnecessary downtime. We've refined our process for exactly this.",
      "We assess structural feasibility, plan phased execution, and protect adjacent areas throughout the build. Our team coordinates with building societies, local authorities, and your schedule.",
      "From kitchen and bathroom overhauls to full apartment or office renovations, we bring the same design-led approach to every project — with clear timelines and minimal disruption to your daily life.",
    ],
    included: [
      "Structural assessment and feasibility study",
      "Phased execution planning",
      "Demolition and debris management",
      "Electrical and plumbing upgrades",
      "Final finishing and snagging",
    ],
    image:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80",
  },
  {
    slug: "turnkey-solutions",
    title: "Turnkey Solutions",
    shortDescription:
      "From blueprint to handover — one team, one timeline, zero coordination headaches.",
    description: [
      "Turnkey is our flagship offering: one contract, one team, one accountable partner from the first site visit to the final handover. Design, procurement, construction, and finishing — all under one roof.",
      "You get a single point of contact, a consolidated timeline, and a fixed scope that eliminates the coordination burden of managing multiple vendors. We handle permissions, vendor management, and quality control.",
      "Ideal for HNI homeowners, corporate offices, and developers who want premium results without the complexity of fragmented vendor management.",
    ],
    included: [
      "End-to-end design and build",
      "Single contract and accountability",
      "Consolidated project timeline",
      "Vendor and permission management",
      "Complete handover with documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    shortDescription:
      "Ongoing care to protect your investment and keep spaces performing beautifully.",
    description: [
      "A well-built space deserves ongoing care. Our maintenance services cover periodic inspections, preventive repairs, and responsive support for issues that arise after handover.",
      "We maintain detailed records of your project's materials, finishes, and systems — so when something needs attention, we know exactly what was installed and how to service it correctly.",
      "Available as annual retainers or on-demand support, our maintenance team ensures your space continues to look and perform as intended for years to come.",
    ],
    included: [
      "Annual maintenance inspections",
      "Preventive repairs and touch-ups",
      "Emergency response support",
      "Material and system documentation",
      "Dedicated account manager",
    ],
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
];

export const homeServices = services.slice(0, 4);
