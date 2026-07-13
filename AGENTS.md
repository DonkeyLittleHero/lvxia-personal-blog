# Codex project guide

## Goal

Maintain a fast, static personal blog that deploys cleanly to GitHub Pages.

## Commands

- Install: `npm ci`
- Develop: `npm run dev`
- Validate: `npm run build`

## Content rules

- Site identity and links live in `src/config.ts`.
- Projects live in `src/data/projects.ts`.
- Posts live in `src/content/blog/*.md` and must follow the schema in `src/content.config.ts`.
- Do not invent business metrics, client names, testimonials, or personal contact details.

## Design rules

- Keep the aurora/particle background restrained so text stays readable.
- Preserve liquid-glass tilt, glare, keyboard focus, reduced-motion support, and mobile layout.
- Avoid adding large client frameworks for small interactions.

## Completion

Run `npm run build` and fix all errors before handing off. For layout changes, check desktop and mobile widths.
