# Kit Factory — Marketing Website

Production-ready marketing website for **Kit Factory**, a premier indoor & outdoor production house across the GCC.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **3D:** Three.js via react-three-fiber + drei
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    about/                # About page
    services/             # Services page
    projects/             # Projects listing
    projects/[slug]/      # Individual project (case study)
    coverage/             # Coverage / cities
    team/                 # Team page
    clients/              # Clients page
    contact/              # Contact page
    layout.tsx            # Root layout (fonts, metadata, header/footer)
    page.tsx              # Home page
    sitemap.ts            # Dynamic sitemap
    robots.ts             # Robots.txt
    not-found.tsx         # 404 page
  components/
    layout/               # Header, Footer, PageWrapper
    home/                 # Home page sections (HeroScene, StatsBar, etc.)
    ui/                   # Reusable primitives (Button, Card, Container, SectionHeading)
    shared/               # Shared components (ContactForm, SocialLinks, MapEmbed)
  data/                   # Structured data arrays (services, projects, team, clients, coverage)
  lib/                    # Constants, utilities
public/
  brand/                  # Logo (place logo.png here)
  placeholders/           # Placeholder images for projects, team, clients
```

## Customization

### Replacing Placeholder Content

- **Logo:** Place your logo at `public/brand/logo.png`
- **Project images:** Replace files in `public/placeholders/` or update paths in `src/data/projects.ts`
- **Team photos:** Add photos to `public/placeholders/` and update `src/data/team.ts`
- **Client logos:** Add logos to `public/placeholders/` and update `src/data/clients.ts`
- **OG Image:** Replace `public/og-image.jpg` with your own 1200x630 image

### Content

All copywriting and structured data is centralized in:

- `src/lib/constants.ts` — Company info, contact details, social links, nav items
- `src/data/services.ts` — Services list
- `src/data/projects.ts` — Projects / case studies
- `src/data/team.ts` — Team members
- `src/data/clients.ts` — Client logos
- `src/data/coverage.ts` — Region / city coverage

## Deployment

### Netlify

The project includes a `netlify.toml` configuration. Push to your Git repository and connect it to Netlify. The `@netlify/plugin-nextjs` plugin handles Next.js SSR automatically.

## SEO

- Per-page metadata (title, description, OpenGraph, Twitter cards)
- JSON-LD Organization schema in root layout
- Dynamic `sitemap.xml` and `robots.txt`
- Semantic HTML headings (one H1 per page)
- Accessible forms and keyboard navigation
