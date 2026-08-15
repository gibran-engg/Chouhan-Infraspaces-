# Chouhan Infraspaces

A premium digital presence for **Chouhan Infraspaces**, a construction and interiors company.

This website is not intended to be just a portfolio. It should function as the company's **central digital presence**, helping the brand:

* showcase its actual work
* establish credibility
* attract relevant organic traffic
* improve local discoverability
* build a strong digital footprint
* generate qualified enquiries
* present projects professionally
* provide a foundation for long-term SEO and content growth

The final website should feel like the website of a **serious, established, premium construction and interiors company**.

---

# 1. Core Vision

The most important rule for this project is:

> **Preserve the existing Chouhan Infraspaces design language and elevate it. Do not replace it with a completely different design.**

The current website already has a visual identity and direction.

The goal is to make that design:

* more polished
* more premium
* more cohesive
* more visually impressive
* more responsive
* more usable
* more discoverable
* more conversion-focused
* more maintainable

The final result should feel like a **world-class agency upgraded the existing Chouhan Infraspaces website without destroying its identity**.

Do not turn the site into:

* a generic SaaS site
* a generic architecture template
* a generic agency site
* an Awwwards-style experiment
* a glassmorphism-heavy site
* an unnecessarily minimalist site
* a gradient-heavy site
* an animation showcase

The design should remain recognizably Chouhan Infraspaces.

---

# 2. Business Goals

The website has several goals that should work together.

## Brand

Build a strong and credible digital identity for Chouhan Infraspaces.

## Portfolio

Showcase genuine Chouhan Infraspaces construction and interior work.

## Organic Search

Create a technically strong and content-rich foundation for search engine visibility.

## Local Discovery

Help people searching for relevant construction and interior services discover the company in legitimate service areas.

## Lead Generation

Give visitors clear and easy ways to enquire.

## Digital Footprint

Make the website the central destination for people arriving through:

* Google
* Google Business Profile
* Instagram
* LinkedIn
* Facebook
* WhatsApp
* referrals
* project shares
* search results
* external websites

## Long-Term Growth

The architecture should make future SEO, content, projects, case studies and marketing expansion possible without rebuilding the website from scratch.

---

# 3. Design Direction

The existing website is the starting point and visual reference.

Preserve its:

* typography direction
* color palette
* spacing
* visual hierarchy
* navigation style
* hero treatment
* card treatment
* image treatment
* borders
* layout language
* animation language
* overall personality

Improve its:

* consistency
* spacing
* typography hierarchy
* imagery
* project presentation
* responsiveness
* motion
* accessibility
* performance
* polish

The website should feel:

* premium
* confident
* mature
* sophisticated
* architectural
* modern
* trustworthy
* intentional

Avoid visual clutter.

Every section should have a purpose.

---

# 4. Asset Library

The repository contains original Chouhan Infraspaces visual assets.

These assets are extremely important to the project.

The asset library may contain:

* images
* videos
* project photography
* interior photography
* exterior photography
* construction imagery
* detail photography
* walkthrough footage

The assets are **not necessarily organized logically**.

Do not assume:

* folder names represent projects
* filenames represent projects
* numbering represents project order
* timestamps represent project relationships
* all assets in a folder belong together

The repository must be explored and the assets must be understood.

---

# 5. Original Assets Are Preferred

Whenever a suitable original Chouhan Infraspaces image or video exists, use the original asset.

Prefer original company media over:

* stock photography
* generic construction imagery
* generic architecture imagery
* AI-generated imagery

The website should represent the company's **real work**.

Do not replace genuine company photography with generic "luxury construction" imagery simply because the generic image looks attractive.

If an original image is slightly imperfect but still represents genuine company work, first consider whether it can be improved through:

* cropping
* positioning
* responsive sizing
* overlays
* layout
* careful selection

before excluding it.

---

# 6. Asset Inspection

Before implementing the portfolio, inspect the repository recursively for relevant visual assets.

Inspect common formats including:

* JPG
* JPEG
* PNG
* WEBP
* AVIF
* SVG
* GIF
* MP4
* WEBM
* MOV

The `images/` directory also contains videos.

Videos must not be ignored simply because they are located inside an image-related directory.

Use efficient methods for understanding a large asset library, such as:

* thumbnail/contact sheets
* visual grouping
* duplicate detection
* representative video frames

Do not waste context by describing every individual file.

The workflow should be:

**discover → inspect → classify → select → implement**

---

# 7. Asset Selection

Do not attempt to use every available asset.

Quality is more important than quantity.

Exclude assets when they are:

* corrupted
* clearly accidental
* irrelevant
* duplicates
* near-duplicates
* extremely low quality
* visually weak
* unsuitable for public presentation

Do not repeatedly use the same image throughout the website when better variety is available.

---

# 8. Project Grouping

The project's images are not reliably grouped.

Determine project relationships using:

1. visual inspection
2. existing project/content data
3. repository information
4. filenames where useful
5. metadata where useful

If several images clearly represent the same property, building, interior, exterior, or site, group them into the same project.

Prefer:

> fewer strong, coherent projects

over:

> many artificial projects

Do not create projects simply to use additional images.

---

# 9. Project Information

Only use information supported by the repository or existing company content.

Do not fabricate:

* client names
* exact locations
* project costs
* square footage
* completion dates
* awards
* certifications
* testimonials
* statistics
* project counts
* years of experience
* architects
* contractors

Visual inspection can help describe what an image appears to show, but it must not be used to invent factual business claims.

If information is unavailable, omit it.

---

# 10. Project Data Architecture

Projects should be data-driven.

Do not hardcode project information repeatedly inside page components.

A conceptual structure could be:

```ts
Project {
  id: string
  slug: string
  title: string
  category?: string
  description?: string
  coverImage: string
  images: string[]
  videos?: string[]
  metadata?: object
}
```

Use the architecture that best fits the existing project.

The important requirement is:

> **Adding a project should primarily require updating data, not rewriting UI.**

Possible reusable components include:

* `ProjectCard`
* `ProjectGrid`
* `ProjectHero`
* `ProjectGallery`
* `ProjectMedia`
* `ProjectDetails`
* `ProjectMetadata`
* `Lightbox`
* `RelatedProjects`

Only create components when they genuinely improve reuse and maintainability.

---

# 11. Project Pages

Meaningful projects should have their own crawlable pages where appropriate.

Example:

`/projects/project-name`

A project page should be capable of presenting:

1. Project hero
2. Project title
3. Short description
4. Available project information
5. Main imagery
6. Full gallery
7. Video where appropriate
8. Detail imagery
9. Related projects
10. Closing CTA

Project pages should feel like **individual premium case-study/portfolio experiences**.

Do not hide all project content behind a JavaScript-only modal.

Lightboxes can still be used for gallery interaction.

---

# 12. Project Galleries

Project galleries are a first-class feature.

Do not simply display a basic sequence of identical image cards.

Choose the most appropriate presentation based on the available images and the existing website design.

Possible approaches:

* editorial grids
* asymmetric grids
* masonry
* horizontal carousels
* fullscreen galleries
* lightboxes
* large/small image compositions
* image zoom
* subtle hover interactions

The exact implementation should be determined by the project's actual imagery.

Different projects may use different compositions when that creates a better result.

The gallery must remain visually consistent with the existing Chouhan design.

---

# 13. Video Usage

Original project videos should be used when they genuinely improve the experience.

Possible uses:

* project walkthroughs
* hero media
* project previews
* project detail sections
* subtle background media
* dedicated project media

Do not force video into the design just because a video exists.

Consider:

* poster images
* lazy loading
* compression
* responsive behavior
* mobile performance
* muted autoplay
* bandwidth
* accessibility
* reduced-motion preferences

The website should not become slow because videos are present.

---

# 14. Image Roles

Assets should be selected according to purpose.

Possible roles:

* hero
* project cover
* card thumbnail
* gallery image
* detail image
* background image
* video poster

The strongest project image should normally be selected as its cover.

Selection should consider:

* composition
* resolution
* subject
* visual impact
* cropping
* lighting
* text-overlay suitability
* representation of the project

Do not automatically use the first image available.

---

# 15. Website Structure

The final website should preserve useful existing sections while improving them.

The overall information architecture should support concepts such as:

## Home

Strong first impression, brand positioning and visual introduction.

## About

Company identity, story and genuine differentiators.

## Services

Clear presentation of the services the company actually offers.

## Projects

Main portfolio experience.

## Individual Projects

Detailed project pages and galleries.

## Contact

Strong conversion path.

Additional sections may be added when they provide genuine value.

Do not add sections simply to make the website longer.

---

# 16. Services

Services must reflect what Chouhan Infraspaces actually provides.

Do not invent services.

Where there is enough genuine information to justify it, individual services may have dedicated pages.

Potential structure:

```text
/services
/services/<service>
```

A service page should help answer:

* What is the service?
* Who is it for?
* What does Chouhan provide?
* What is the process?
* Which projects demonstrate this capability?
* How can someone enquire?

Do not create thin service pages purely for SEO.

---

# 17. SEO

SEO is a core requirement.

The website should be built to attract relevant organic traffic.

Search engines should be able to understand:

* who Chouhan Infraspaces is
* what services it provides
* where it legitimately operates
* what projects it has completed
* how services and projects relate to one another

Implement appropriate:

* page titles
* meta descriptions
* canonical URLs
* semantic HTML
* heading hierarchy
* sitemap
* robots.txt
* Open Graph metadata
* clean URLs
* internal linking
* image alt text
* structured data

Do not keyword-stuff.

Do not sacrifice user experience for SEO.

---

# 18. Search Intent

Build around actual user intent.

Potential categories may include:

* construction services
* construction company
* interior design
* interior contracting
* residential construction
* commercial construction
* residential interiors
* commercial interiors
* turnkey projects
* renovation
* legitimate local searches

Do not assume locations or services that cannot be supported by company information.

---

# 19. Local SEO

Use legitimate service/operating locations found in the existing repository and company information.

Where applicable, incorporate genuine location information naturally into:

* page content
* metadata
* services
* projects
* contact information
* structured data

Do not generate large numbers of low-quality location pages.

The goal is real local relevance.

---

# 20. Structured Data

Use appropriate Schema.org structured data where useful.

Potential types include:

* Organization
* LocalBusiness
* WebSite
* Service
* BreadcrumbList
* ImageObject
* appropriate project/creative-work schema

Only use factual information that is actually known.

Never invent:

* ratings
* reviews
* prices
* awards
* addresses
* opening hours
* statistics

---

# 21. Internal Linking

Build meaningful internal links.

Useful relationships include:

```text
Home
 ↓
Services
 ↓
Relevant Projects
 ↓
Project Detail
 ↓
Related Projects
 ↓
Contact
```

Projects should link to relevant services where appropriate.

Services should link to relevant projects.

Important pages should not become isolated.

---

# 22. Social Sharing

Important pages should have attractive social previews.

Implement appropriate:

* Open Graph title
* Open Graph description
* Open Graph image
* canonical URL

Project pages should look professional when shared through:

* WhatsApp
* LinkedIn
* Facebook
* other platforms

---

# 23. Conversion & Lead Generation

This is a real business website.

Traffic must eventually lead to enquiries.

Visitors should have clear next actions.

Potential primary CTAs include:

* Request a consultation
* Discuss your project
* Get a quote
* Contact us
* WhatsApp
* Call

Use the actual company contact methods available in the repository.

Do not fabricate contact information.

Avoid multiple competing primary CTAs.

The conversion path should feel natural and premium.

---

# 24. Contact Experience

Make it easy for a potential customer to contact the business.

Where information exists, support appropriate:

* phone
* email
* WhatsApp
* enquiry form
* location information

Forms should be:

* simple
* mobile-friendly
* accessible
* validated
* clear about what happens next

Do not ask for unnecessary information.

---

# 25. Trust & Credibility

The site should establish credibility through genuine evidence.

Use real:

* projects
* company information
* services
* processes
* testimonials if they exist
* certifications if they exist
* client information if legitimate

Do not fabricate trust signals.

Real work should be the primary proof of capability.

---

# 26. Performance

Performance matters for both users and SEO.

Prioritize:

* optimized images
* responsive images
* lazy loading
* efficient video loading
* efficient JavaScript
* optimized fonts
* stable layouts
* fast initial rendering
* minimal unnecessary dependencies

Do not load every project image/video on the homepage.

Use framework-native optimization where appropriate.

---

# 27. Accessibility

The website should support:

* semantic HTML
* keyboard navigation
* visible focus states
* accessible buttons
* accessible navigation
* descriptive alt text
* accessible galleries
* sufficient contrast
* reduced-motion support

Accessibility should be built into the implementation rather than added as an afterthought.

---

# 28. Engineering

Follow professional development principles.

Prioritize:

* SOLID
* DRY
* separation of concerns
* single responsibility
* reusable components
* maintainable data structures
* clear naming
* simplicity

Avoid:

* duplicated code
* giant components
* unnecessary state management
* unnecessary dependencies
* magic values
* premature abstraction
* overengineering

ACID is relevant primarily to database transactions. For this application, the important software principles are SOLID, DRY, separation of concerns, maintainability and simplicity.

---

# 29. Technology

This is a Next.js project and currently contains:

```text
app/
components/
config/
data/
images/
lib/
public/
```

The exact stack and dependencies must be inspected from the repository.

Do not assume the existing implementation without checking:

* `package.json`
* `app/`
* `components/`
* `config/`
* `data/`
* `lib/`
* `next.config.mjs`
* `tailwind.config.ts`
* `tsconfig.json`

Preserve the existing stack unless there is a compelling technical reason to change it.

Do not perform unnecessary migrations.

---

# 30. Repository Principles

The repository should remain understandable and maintainable.

Do not reorganize folders purely for aesthetic reasons.

Do not rename or move large numbers of original assets unless there is a compelling reason.

Prefer application-level project/asset mappings over physically reorganizing the original media library.

Preserve original source assets whenever practical.

---

# 31. Analytics

The application should be ready for analytics and conversion measurement.

Useful events may include:

* contact form submission
* WhatsApp click
* phone click
* email click
* project view
* service view
* CTA interaction

Analytics identifiers should be configurable through environment variables/configuration.

Do not hardcode secrets.

The website should be ready for:

* Google Search Console
* Google Analytics
* Google Business Profile

Do not claim these external services are configured when credentials or external setup are unavailable.

---

# 32. Future Content

The architecture should support future growth.

Potential future content includes:

* project case studies
* construction insights
* interior design articles
* material guides
* FAQs
* before/after showcases
* project walkthroughs
* design guides

Do not build a CMS unnecessarily.

The current architecture should simply avoid blocking future expansion.

---

# 33. Development

Install dependencies using the package manager and scripts defined by the repository.

Typical development command:

```bash
npm run dev
```

The development application should normally be available at:

`http://localhost:3000`

Before assuming available commands, inspect `package.json`.

Useful commands may include:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Only use scripts that actually exist.

---

# 34. Quality Standard

The finished website should feel like:

> **Chouhan Infraspaces hired a world-class design and engineering agency.**

It should be:

* beautiful
* premium
* authentic
* discoverable
* credible
* fast
* accessible
* maintainable
* conversion-focused

It should be impressive to a potential high-value client.

It should also be useful to search engines and scalable for the future.

---

# 35. Final Principles

The most important principles for this project are:

### 1. Preserve the existing identity

Improve the design without replacing it.

### 2. Use real work

Prefer original Chouhan Infraspaces photography and video.

### 3. Let the assets tell the story

Intelligently group related media into coherent projects.

### 4. Make projects first-class

Give meaningful projects strong pages and beautiful galleries.

### 5. Build for search

SEO, local discoverability and crawlability are core requirements.

### 6. Build for conversion

Make it easy for visitors to enquire.

### 7. Build for the long term

Use reusable, maintainable architecture.

### 8. Never fabricate

Only make factual claims supported by the repository/company information.

### 9. Quality over quantity

Do not use every asset or add unnecessary sections.

### 10. Keep it authentic

The final website should feel like **Chouhan Infraspaces**, not a generic AI-generated construction website.

---

# Final Vision

The website should ultimately become:

> **A beautiful, discoverable, credible and high-converting digital home for Chouhan Infraspaces — built around the company's real work, grounded in its existing visual identity, and capable of growing alongside the brand.**

```

That's the README I'd use. **Nothing else needs to be added right now.** Your `AGENTS.md` handles Codex's behavior; this README gives it the complete picture of what Chouhan Infraspaces is supposed to become.
```
