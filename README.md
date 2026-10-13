# Cidea Leads

Cidea Leads is a B2B lead generation business, starting in Norway and expanding internationally.

## Positioning

Find the right customers. Not just more leads.

## Core journey

Find → Qualify → Connect → Measure

## Website

- Primary language Norwegian at `/`, English at `/en`.
- Visual direction: Linear-inspired precision instrument. See [docs/redesign-linear.md](docs/redesign-linear.md).

## Development

```bash
npm ci
npm run dev       # local dev server
npm run build     # client build + SSR build + prerender every route to dist/
npm test          # checks the prerendered build (run after build)
npm run preview   # serve dist/ locally
```

## Structure

- `src/content.js` — all copy in Norwegian and English, services, prices and example data for the product visuals.
- `src/routes.js` — URL ↔ page mapping and language handling.
- `src/seo.js` — titles, descriptions, canonical, hreflang, structured data, sitemap.
- `src/components/Product.jsx` — product-style UI (pipeline, board, record, criteria), always labelled as example data.
- `src/pages/`, `src/components/` — page templates and shared UI.
- `blog/*.md`, `blog/en/*.md` — articles.
- `scripts/prerender.mjs` — writes static HTML per route; `scripts/check-build.mjs` — build checks.

## Technical direction

GitHub-first development.  
Design and technical foundations should be reusable across Cidea Marketing and Cidea Consulting while keeping each brand distinct.

No DNS or MX changes are part of this repository.

## Internal process

This repository is also a live case study for the Cidea Website Build SOP.
