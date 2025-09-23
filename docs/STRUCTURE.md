# Project Structure (Adjusted)

```
/ (repo root)
  package.json, vite.config.ts, tsconfig.json, tailwind.config.js
  public/
    assets/ (static assets served at `${BASE_URL}assets/...`)
  src/
    pages/ (route-level pages)
    components/
      atoms/ (Button, Paragraph, typography/Title)
      molecules/ (image-view/ImageView, maps/MapIndonesia, MapSpot)
      organisms/ (BannerV1, CaseStudies)
      layout/ (Header)
    hooks/ (useReveal)
```

- Atoms → Molecules → Organisms hierarchy for composition.
- Static assets under `public/assets` and referenced with absolute paths (Vite serves from base URL).
- Tests recommended alongside components (e.g., `Component.test.tsx`) using Vitest.
