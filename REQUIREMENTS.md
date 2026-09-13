# Chouhan Infraspaces — Website Requirements

## Purpose

The website is the central digital presence for Chouhan Infraspaces. It must present real construction and interior work, build trust, support qualified enquiries, and provide a strong foundation for organic and local search visibility.

## Product Requirements

- Present the company as a premium, established construction and interiors practice.
- Make the portfolio a primary site experience, with crawlable project detail pages.
- Clearly present the available service areas: interior design, construction, interior finishing, and turnkey solutions.
- Give visitors a clear path to submit an enquiry.
- Preserve a consistent visual identity across home, services, projects, process, why-us, and contact pages.

## Content Requirements

- Use original Chouhan Infraspaces images and videos wherever suitable.
- Group related original media into coherent projects rather than treating every asset as a separate project.
- Use only facts supported by repository or company-provided information.
- Do not publish fabricated project locations, client names, costs, area measurements, dates, awards, testimonials, reviews, contact information, or performance statistics.
- Keep project information data-driven in `data/projects.ts`.

## Design Requirements

- The experience must feel premium, mature, architectural, and intentional.
- Preserve the established warm, editorial design direction while improving visual hierarchy, spacing, typography, and responsiveness.
- Use a restrained palette, strong imagery, purposeful whitespace, and subtle motion.
- Avoid generic templates, excessive gradients, glassmorphism, or decorative animation without a functional purpose.
- Use original media in cards, galleries, hero areas, and calls to action where appropriate.

## Portfolio Requirements

- Each meaningful project must have a dedicated route at `/projects/<slug>`.
- Project pages must support a hero image, summary, factual highlights, editorial image gallery, optional original video, related projects, and an enquiry CTA.
- Galleries must be responsive, accessible, and optimized for the supplied media orientations.
- Project cards must link to detail pages and surface a project category and concise summary.

## Technical Requirements

- Use the existing Next.js, TypeScript, Tailwind CSS, and Framer Motion stack.
- Keep shared UI patterns componentized and maintainable.
- Use `next/image` for local raster assets and appropriate `sizes` values.
- Do not add dependencies unless they provide clear value.
- Keep analytics identifiers configurable; do not hardcode secrets.
- Forms must submit through the existing contact API route and handle success and failure states.

## SEO Requirements

- Every page must have an accurate title and meta description.
- Project pages must expose project-specific metadata and Open Graph images.
- Use semantic landmarks and a sensible heading hierarchy.
- Use structured data only for factual organization information.
- Avoid unsupported local-business claims until contact and location information is confirmed.

## Accessibility & Performance Requirements

- Support keyboard navigation and visible focus states.
- Provide meaningful alt text for all informative imagery.
- Respect reduced-motion preferences.
- Keep mobile layouts fully usable at narrow breakpoints.
- Avoid loading all project media on the home page.
- Video must use metadata preloading and accessible controls.

## Acceptance Criteria

- `npx tsc --noEmit` completes without errors.
- `npm run lint` completes without warnings or errors.
- Primary pages and project detail pages render correctly at desktop and mobile widths.
- No placeholder contact links, stock imagery, or unsupported business claims remain in the published experience.
