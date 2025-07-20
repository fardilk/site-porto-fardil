# Copilot Instructions for porto-fardil

## Project Overview
This is a React + TypeScript portfolio site using Vite, Tailwind CSS, and React Router. The codebase is organized for modularity and rapid UI iteration, with a focus on clean, responsive design and modern developer tooling.

## Architecture & Key Patterns
- **Entry Point**: `src/main.tsx` mounts the app, which is defined in `src/App.tsx`.
- **Routing**: Uses `react-router-dom` (`BrowserRouter`, `Routes`, `Route`) for page navigation. All main pages are in `src/pages/` and include the shared `Navbar`.
- **Navbar**: Implemented in `src/components/navbar/`. Navigation links are defined in `Navbar.tsx` and rendered via `NavbarLink.tsx`, which adapts styling based on scroll position and active route.
- **UI Components**: Major sections (Hero, Portfolio, ShortStorySlider) are in `src/components/`. Cards and sliders use props and map over arrays for dynamic rendering.
- **Styling**: Tailwind CSS is used throughout. Custom colors and sizing are defined in `tailwind.config.js`. Utility classes are preferred over custom CSS, but some global styles exist in `src/index.css` and `src/App.css`.
- **Animations**: Framer Motion is used for entrance animations in components like `Hero`.
- **Swiper Integration**: The `ShortStorySlider` uses Swiper for carousel functionality, with custom pagination and navigation styles in `index.css`.

## Developer Workflows
- **Start Dev Server**: `npm run dev` (uses Vite)
- **Build for Production**: `npm run build` (TypeScript build + Vite build)
- **Preview Production Build**: `npm run preview`
- **Linting**: `npm run lint` (ESLint config in `eslint.config.js`, type-aware rules recommended for production)

## Conventions & Practices
- **Component Structure**: Use functional components and TypeScript types for props. Prefer mapping over arrays for lists (see `PortfolioSec.tsx`, `Navbar.tsx`).
- **Routing**: All pages should import and use the shared `Navbar` for consistency.
- **Styling**: Use Tailwind utility classes. Extend theme in `tailwind.config.js` for custom colors/sizes. Avoid inline styles unless necessary.
- **State**: Use React hooks (`useState`, `useEffect`) for local state (e.g., scroll detection in Navbar).
- **File Naming**: PascalCase for components, camelCase for variables and props.
- **Imports**: Use relative imports within `src/`. Re-export components in `index.ts` files for cleaner imports.

## Integration Points
- **External Libraries**: Framer Motion (animations), Swiper (carousel), React Router (routing), Tailwind CSS (styling).
- **Custom Theme**: Colors like `darkblue`, `accent`, and `secondary` are defined in `tailwind.config.js` and used throughout components.

## Examples
- **Dynamic Navbar Styling**: See `Navbar.tsx` for scroll-based style changes and active link highlighting.
- **Portfolio Cards**: See `PortfolioSec.tsx` and `CardPortfolio.tsx` for mapping over portfolio data and rendering cards.
- **Slider**: See `ShortStorySlider.tsx` for Swiper integration and custom pagination.

## References
- `src/App.tsx` (routing)
- `src/components/navbar/` (navigation)
- `src/components/PortfolioSec.tsx`, `CardPortfolio.tsx` (portfolio cards)
- `src/components/Hero.tsx` (animated hero section)
- `tailwind.config.js` (theme customization)
- `eslint.config.js` (linting rules)
- `package.json` (scripts, dependencies)

---
If any conventions or workflows are unclear, or if you need more details on a specific integration, please provide feedback so this guide can be improved.
