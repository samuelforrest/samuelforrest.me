# Copilot Instructions for samuelforrest.me

## Project Overview

This is a Next.js 16 + React 19 personal portfolio website using TypeScript, Tailwind CSS, and MDX for content. The site showcases projects, work experience, blog posts, and tech stack with heavy emphasis on animated UI components using the Motion library.

## Architecture

### Core Structure

- **`src/app/`** - Next.js App Router pages and layouts with metadata, theme provider, analytics integration
- **`src/components/ui/`** - Reusable motion-powered UI components (MorphingDialog, Spotlight, TextEffect, AnimatedBackground, etc.)
- **`src/lib/`** - Shared utilities (className composition with `cn()` utility using clsx + tailwind-merge)
- **`src/app/data.ts`** - Single source of truth for all content: Projects, WorkExperience, BlogPosts, SocialLinks, TechStack (exported and consumed by page.tsx)

### Key Patterns

- **Client Components**: Marked with `"use client"` at top for interactive sections (main page, dialog components)
- **Motion Animations**: Uses `motion/react` (v11.15.0) with `AnimatePresence`, `Variant` objects for consistent staggered/blur animations (see `VARIANTS_CONTAINER`, `VARIANTS_SECTION`, `TRANSITION_SECTION` in page.tsx)
- **Context + Custom Hooks**: Complex components like MorphingDialog use React Context + custom hooks (e.g., `useMorphingDialog()`, `useClickOutside()`)
- **Compound Components**: Dialog exports separate components (`MorphingDialogTrigger`, `MorphingDialogContent`, `MorphingDialogClose`) for flexibility

### Data Flow

All content lives in `src/app/data.ts` as typed objects (Project, WorkExperience, BlogPost, etc.). The main page imports and slices this data (e.g., `WORK_EXPERIENCE.slice(0, 3)`) with state to toggle "show more" views.

## Development Workflow

### Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Next.js build
npm run start    # Production server
npm run lint     # ESLint + Prettier check (with MDX support)
```

### TypeScript & Linting

- **Strict mode enabled** in tsconfig.json
- **ESLint config**: Extends `next/core-web-vitals`, `next/typescript`, and `prettier/recommended` with MDX plugin support
- **Path aliases**: `@/` resolves to `src/` (configured in tsconfig.json)

## Project-Specific Conventions

### Component Organization

1. **UI Components** should use Motion for animations - avoid setTimeout/useEffect for transitions
2. **Dialog/Modal patterns**: Use MorphingDialog compound component structure as template (context-based state management)
3. **Props typing**: Import types from data.ts when building components for Project, WorkExperience, etc.

### Styling

- **Tailwind CSS v4.1.0** with PostCSS
- **Utility function**: Use `cn()` from `@/lib/utils.ts` to merge Tailwind classes (handles conflicts with clsx + tailwind-merge)
- **Typography plugin**: `@tailwindcss/typography` available for MDX content styling

### Animation Specifics

- **Motion library**: Use variant objects and transition configs instead of inline duration props
- **Stagger pattern**: Use `staggerChildren` in parent container variants for sequential child animations
- **Blur + opacity**: Common blur animation pattern: `filter: "blur(8px)"` to `"blur(0px)"` for entrance effects
- **Ref usage**: MorphingDialog tracks trigger element position with refs for layout-aware animations

### Content Types (from data.ts)

```typescript
Project = { name, description, longDescription, link, image?, id, links? }
WorkExperience = { company, title, start, end, link, logo?, id }
BlogPost = { title, description, link, uid }
SocialLink = { label, link }
TechStack = { name, category, id }
```

## External Integration Points

- **Vercel Analytics & Speed Insights**: Pre-configured in layout.tsx
- **Next Themes**: Theme provider wraps app for dark/light mode
- **MDX Support**: Page extensions include `.md` and `.mdx` for blog content
- **External links**: Lucide React icons (XIcon, ChevronDown, etc.) for UI

## Critical Details

- **No build errors allowed**: Strict TypeScript + ESLint rules enforce quality
- **'use client' boundary**: Main page.tsx is client component; add 'use client' at top when creating interactive components
- **Theme awareness**: Layout uses ThemeProvider from next-themes; new components should support theme-aware styling
- **Metadata management**: All SEO metadata centralized in layout.tsx metadata export
