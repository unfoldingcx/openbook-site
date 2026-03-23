# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking (`tsc --noEmit -p tsconfig.app.json`)

## Project Overview

Corporate marketing website for Open-Book Accounting and Financial Advisory, a Brazilian accounting firm. Bilingual (Portuguese/English), deployed on Netlify as a SPA.

## Architecture

### Tech Stack
- React 18 + TypeScript + Vite 5
- React Router DOM v7 (BrowserRouter, SPA with Netlify redirect fallback)
- Tailwind CSS 3 for styling
- Motion (formerly Framer Motion) — imported from `motion/react`
- i18next + react-i18next for internationalization
- react-helmet-async for per-page SEO meta tags
- Lucide React for icons

### Routing & Code Splitting

Routes are defined in `src/App.tsx` using React Router's `<Routes>`. All page components are **lazy-loaded** via `React.lazy()` and wrapped in a `<Suspense>` with a spinner fallback. A `RouteErrorBoundary` class component catches lazy-load failures. `AnimatePresence` from Motion wraps routes for page transitions.

Available routes: `/`, `/about`, `/services`, `/services/accounting`, `/services/financial`, `/services/tax`, `/services/payroll`, `/training`, `/technologies`, `/clients`, `/contact`.

### i18n

Configured in `src/i18n/index.ts`. Default language is Portuguese (`pt`), fallback is `pt`. Translation files are `src/i18n/pt.json` and `src/i18n/en.json`. Language preference is persisted to `localStorage` under the key `language`. When adding any user-facing text, add keys to **both** translation files.

### Design System

- **Theme**: Dark background (`#010101`) with gold accent gradient (`#9f7423` to `#d4a84b`)
- **Font**: Inter (loaded via Google Fonts in `src/index.css`)
- **Custom CSS utilities** in `src/index.css`: `.text-gradient`, `.btn-primary`, `.btn-secondary`, `.card-glass`, `.section-padding`, `.content-auto`, `.animation-delay-*`
- Gold color is used as raw hex values throughout — there is no Tailwind theme token for it

### Animation Patterns

Shared animation presets live in `src/utils/motion.ts` (fadeInUp, scaleIn, pageTransition, hoverScale, buttonPress, etc.). Components use Motion's `whileInView` with `viewport={{ once: true }}` for scroll-triggered entrance animations. `AnimatedSection` and `AnimatedCard` are wrapper components that apply these patterns. `prefersReducedMotion()` utility is available for accessibility.

**Important**: Motion is imported from `motion/react` (not `framer-motion`). The package is `motion` in package.json.

### SEO

`src/components/seo/SEO.tsx` is a memoized component using react-helmet-async. Each page passes a `page` prop (typed as `PageType`) and optional `path`. SEO translation keys follow the pattern `seo.<page>.title` and `seo.<page>.description`. Base URL is `https://www.opbo.com.br`.

### UI Components

All reusable components in `src/components/ui/` are wrapped with `React.memo()` and hoist static animation configs outside the component body. This is an intentional pattern — maintain it when creating new components.

- `AnimatedCard` — glass-morphism card with entrance animation and optional hover
- `AnimatedSection` — section wrapper with fade-in-up, respects reduced motion
- `SectionTitle` — animated heading with optional subtitle, supports light/dark variants
- `ServiceCard` — card linking to a service detail page with hover effects
- `OnvioButton` — external link button to Onvio portal (header and standalone variants)

### Adding New Pages

1. Create page component in `src/pages/` (use `SEO` component at the top)
2. Add lazy import and route in `src/App.tsx`
3. Add translation keys to both `src/i18n/en.json` and `src/i18n/pt.json` (including `seo.<page>.title` and `seo.<page>.description`)
4. Update `navItems` in `src/components/layout/Header.tsx` if it should appear in navigation

### Supabase

`@supabase/supabase-js` is installed but not integrated — no env vars or client setup exists. Reserved for future use.
