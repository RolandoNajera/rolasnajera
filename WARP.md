# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Repository: Personal website built with Astro 4 and Tailwind CSS, deployed as a static site to Vercel.

Commands
- Prerequisites
  - Node >= 22 (enforced via package.json "engines")
- Install dependencies
  - npm install
- Develop (start local server with HMR)
  - npm run dev
- Build (static output to dist/)
  - npm run build
- Preview local production build
  - npm run preview
- Lint (Astro + JS/TS)
  - Lint entire repo: npm run lint
  - Lint a specific file: npx eslint path/to/file.astro
- Format (Prettier)
  - Format entire repo: npm run format

Notes on tests
- There is no test framework configured. No test commands are available at this time.

High-level architecture and structure
- Framework and output
  - Astro 4 project configured for static output (astro.config.mjs: output: "static").
  - Tailwind integration via @astrojs/tailwind with base styles applied.
- Routing and pages
  - src/pages defines routes using Astro’s file-based routing (e.g., src/pages/index.astro -> "/").
  - Build emits a fully static site into dist/.
- Layouts and components
  - src/layouts contains shared layouts (BaseLayout.astro) that wrap pages and apply global styles and meta.
  - src/components contains presentational site sections (e.g., Hero, About, Contact, Newsletter) composed within pages.
- Styling
  - Tailwind configured in tailwind.config.js; custom brand color palette under theme.extend.colors.brand.
  - PostCSS configured (postcss.config.cjs) with tailwindcss and autoprefixer.
  - Global CSS lives in src/styles/global.css and is applied via the layout.
- Site metadata and config
  - src/site.config.json centralizes site metadata (title, description, tags, social links, SEO defaults). Pages/layouts/components should read from this where appropriate.
- Public assets
  - public/ holds static assets (e.g., favicon.ico, images/) that are served at the site root.
- TypeScript and linting
  - tsconfig.json extends Astro’s strict TS config; project is ESM (package.json "type": "module").
  - ESLint configured with plugin:astro (see .eslintrc.json). Linting is currently wired for .js, .ts, and .astro files.
  - Stylelint config exists (.stylelintrc.json) but is not wired into npm scripts.
- Deployment
  - vercel.json uses @vercel/static-build with dist as output directory. Routes pass through to built assets.
  - README notes: connect the repo to Vercel and import as an Astro project.

Operational tips
- When adding new pages or components, ensure Tailwind content globs in tailwind.config.js include the file types/paths (they already include src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}).
- If introducing tests in the future, add scripts to package.json (e.g., "test", "test:watch") and document how to run a single test.

Branding rules
- Use the following brand colors across the site where appropriate:
  - Primary (dark): #264653
  - Primary (teal): #2a9d8f
  - Accent: #f4a261
  - Ink (text): #333333
  - Paper (background): #f6f5f3
- Tailwind palette is configured under theme.extend.colors.brand with named keys (dark, teal, accent, ink, paper) and numeric aliases for compatibility (400, 500, 600, 700). Use these utilities (e.g., bg-brand-600, hover:bg-brand-700, text-brand-ink, bg-brand-paper) to keep styling consistent.

