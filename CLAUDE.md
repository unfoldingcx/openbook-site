# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start development server (Vite)
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Project Overview

This is a corporate marketing website for Open-Book Accounting and Financial Advisory, a Brazilian accounting firm. The site is bilingual (Portuguese/English) and showcases services, technologies, and client information.

## Architecture

### Tech Stack
- React 18 + TypeScript + Vite
- React Router DOM v7 for routing
- Tailwind CSS for styling
- Framer Motion for animations
- i18next/react-i18next for internationalization
- Lucide React for icons

### Directory Structure
```
src/
├── components/
│   ├── layout/       # Header, Footer, Layout wrapper
│   └── ui/           # Reusable UI components (AnimatedCard, SectionTitle)
├── i18n/             # Translation files (en.json, pt.json) and config
├── pages/            # Route-based page components
├── App.tsx           # Router setup with AnimatePresence for page transitions
└── main.tsx          # Entry point
```

### Key Patterns

**Routing**: Routes defined in `App.tsx` with Framer Motion `AnimatePresence` for page transitions. A `ScrollToTop` component ensures navigation scrolls to top.

**i18n**: Configured in `src/i18n/index.ts`. Default language is Portuguese (`pt`). Translation keys are organized by feature (nav, hero, features, about, etc.). Language preference stored in localStorage.

**Styling**: Dark theme with gold accents (`#9f7423`). Custom utilities in `src/index.css` include `.text-gradient`, `.btn-primary`, `.card-glass`, and animation delay classes.

**Animations**: Framer Motion patterns use `initial={{ opacity: 0, y: 20/30 }}`, `whileInView={{ opacity: 1, y: 0 }}`, and `viewport={{ once: true }}` for scroll-triggered animations.

**State Management**: Local component state only (useState). No global state management library.

### Supabase Integration

The `@supabase/supabase-js` package is installed but **not currently integrated**. No environment variables or implementation exists. This appears to be planned for future features (contact form, CMS, etc.).

### Adding New Content

1. Add page component to `src/pages/`
2. Add route in `src/App.tsx`
3. Add translation keys to both `src/i18n/en.json` and `src/i18n/pt.json`
4. Update navigation in `src/components/layout/Header.tsx` if needed
