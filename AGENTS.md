# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start the Vite dev server (runs the app in workerd)
pnpm build        # Build the Worker and client assets into dist/
pnpm preview      # Preview the production build locally
pnpm deploy       # Build and deploy with wrangler
pnpm typecheck    # Type-check with tsgo (TypeScript 7)

# Linting and Formatting (OXC)
pnpm lint         # Run oxlint
pnpm lint:fix     # Run oxlint with auto-fix
pnpm format       # Format code with oxfmt
pnpm format:check # Check code formatting
pnpm check        # Run lint + format check + typecheck
pnpm fix          # Run lint:fix + format
```

## Architecture

This is a portfolio website built with React 19, TypeScript 7 (tsgo), and TailwindCSS.

**Migration in progress:** moving from Next.js 16 (Railway) to TanStack Start on Cloudflare Workers. Work happens on step branches merged into `migrate/cloudflare`; `main` still deploys the Next.js site to Railway. The TanStack Start app lives in `src/routes/` (file-based routes, `src/routeTree.gen.ts` is generated), with `vite.config.ts` and `wrangler.jsonc` at the root. `src/app/` is the old Next.js app and is removed once its pages are ported.

### Project Structure

- `src/app/` - App Router pages (home, about, contact, portfolio, experience)
- `src/app/api/contact/` - Contact form API route using Nodemailer + Fastmail
- `src/components/` - React components (Header, Footer, Hero, Portfolio, etc.)
- `src/styles/` - CSS files (globals.css + page-specific styles)
- `src/types/allTypes.ts` - Shared TypeScript interfaces
- `src/utils/` - Data files (projects.ts, work.ts) and utilities

### Key Integrations

- **Images**: Cloudinary via `@cloudinary/react` and `@cloudinary/url-gen`
- **Contact Form**: Nodemailer with Fastmail SMTP + Cloudflare Turnstile captcha
- **Animations**: react-simple-typewriter for typing effects

### Environment Variables (`.env.local`)

Required for the contact form API:

- `FASTMAIL_EMAIL`
- `FASTMAIL_PASSWORD`
- `TURNSTILE_SECRET_KEY`

## Code Style

Uses oxfmt for formatting and oxlint for linting (OXC toolchain):

- **Formatting (oxfmt)** — config in `.oxfmtrc.json`:
  - Single quotes (including JSX)
  - No semicolons
  - Trailing commas
  - 120 character line width
  - 2-space indentation
  - LF line endings
  - Import sorting (`sortImports`) and Tailwind class sorting (`sortTailwindcss`) built in

- **Linting (oxlint)** — config in `.oxlintrc.json`:
  - Plugins: eslint core, typescript, react, unicorn, oxc, import
  - Categories: correctness (error), suspicious + perf (warn)
  - `typescript/no-unused-vars` warn (`^_` ignore patterns), `typescript/no-explicit-any` warn
