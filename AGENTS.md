# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Commands

```bash
# Development
pnpm dev          # Start development server (Next.js)
pnpm build        # Build for production
pnpm start        # Start production server

# Linting and Formatting
pnpm lint         # Run ESLint
pnpm lint:fix     # Run ESLint with auto-fix
pnpm format       # Format code with Prettier
pnpm format:check # Check code formatting
pnpm check        # Run lint + format check
pnpm fix          # Run lint:fix + format
```

## Architecture

This is a Next.js 14 portfolio website using the App Router. Built with React, TypeScript, and TailwindCSS.

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

Uses Prettier for formatting and ESLint for linting:

- **Formatting (Prettier)**:
  - Single quotes (including JSX)
  - No semicolons
  - Trailing commas
  - 120 character line width
  - 2-space indentation
  - LF line endings

- **Linting (ESLint 9 flat config)**:
  - TypeScript support via typescript-eslint
  - React and React Hooks rules
  - Next.js plugin for Next.js-specific rules
  - Automatic import sorting
  - Tailwind CSS classname ordering
