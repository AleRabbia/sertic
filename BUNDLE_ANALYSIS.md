# Bundle Analysis & Optimization Insights

**Generated:** February 12, 2026  
**Build Tool:** Vite 7.1.5 with rollup-plugin-visualizer  
**Report:** `dist/stats.html`

## Bundle Summary

### JavaScript Chunks

| Chunk             | Size (uncompressed) | Size (gzip) | Type      | Recommendation            |
| ----------------- | ------------------- | ----------- | --------- | ------------------------- |
| index.js          | 223.37 KB           | 72.14 KB    | Main      | Keep (already code-split) |
| Home.js           | 122.28 KB           | 43.13 KB    | Route     | Lazy-loaded ✓             |
| Footer.js         | 36.07 KB            | 11.50 KB    | Component | included in Home          |
| TeamPage.js       | 24.01 KB            | 7.39 KB     | Route     | Lazy-loaded ✓             |
| casosExito.js     | 21.07 KB            | 6.48 KB     | Data      | Shared module             |
| ContactPage.js    | 10.56 KB            | 3.23 KB     | Route     | Lazy-loaded ✓             |
| CasosExitoPage.js | 12.95 KB            | 3.18 KB     | Route     | Lazy-loaded ✓             |
| ServiceDetail.js  | 8.80 KB             | 2.48 KB     | Route     | Lazy-loaded ✓             |
| Others            | ~11 KB              | ~4 KB       | Utils/UI  | Fine                      |

### CSS Bundles

- **Main CSS:** 61.07 KB (9.37 KB gzipped) — tailwind + app styles
- **Home CSS:** 4.14 KB (1.10 KB gzipped) — route-specific styles
- **Status:** ✅ Tailwind purge working; most styles are in main bundle

### Image Assets

**Critical Issue:** Large unoptimized hero images

- `chip.jpeg` — 8,919.75 KB (hero image)
- `escritorio.jpeg` — 6,024.17 KB (hero image)
- `infraestructura.png` — 2,642.86 KB (hero image)
- `ciberseguridad.png` — 2,554.51 KB (hero image)
- `devops.png` — 2,425.43 KB (hero image)
- `staffing.png` — 2,187.50 KB (hero image)
- `nube.jpeg` — 2,108.29 KB (hero image)
- `nodos.jpeg` — 2,040.57 KB (hero image)

**Total images:** ~30 MB  
**Status:** ❌ **BLOCKER** — These are originals; AVIF/WebP variants exist in `public/hero/` but browser still downloads PNG/JPEG as fallback.

---

## Key Findings

### 1. ✅ Code-Splitting Working

- Main bundle (~72 KB gzip) loads only Home route initially
- Other routes lazy-load automatically
- Good chunk separation detected

### 2. ❌ Image Optimization Gap

**Issue:** `<picture>` element in Hero.jsx references `/hero/*-480.avif` files, but browsers still request the original JPEG from `src/assets/hero/` as fallback.

**Root Cause:** Original image imports in `sliceHero.js` are bundled; `<picture>` sources use `/hero/` public URLs but browser falls back to bundled original on unsupported format.

**Solution:**

- Rewrite `sliceHero.js` to reference public URLs directly instead of importing images
- OR use a service-worker to intercept and serve AVIF/WebP

### 3. ⚠️ Dependency Bloat Potential

Check if these are truly needed:

- **@emotion/react** & **@mui/material** — ~50 KB (not visible in main chunk breakdown but likely in index.js)
- **swiper + react-slick** — carousel libraries (~40 KB combined)
- **react-router-dom** — routing (~20 KB)

**Action:** Use `npm ls` and check if all MUI components are used; consider removing if unused.

### 4. ✅ CSS Purging Working

- Only 61 KB main CSS (9.37 KB gzipped)
- Tailwind configured correctly; purging appears functional

---

## Optimization Recommendations (Priority Order)

### Priority 1: Fix Image Fallback Chain (High Impact)

**Estimated savings:** ~15 MB on first load (AVIF fallback vs JPEG)

1. Modify `src/data/sliceHero.js`:

   ```jsx
   // Instead of:
   import NodosImg from "../assets/hero/nodos.jpeg";

   // Use:
   export const heroSlides = [
     {
       id: 1,
       avif: "/hero/nodos.avif",
       webp: "/hero/nodos-1920.webp",
       jpeg: "/hero/nodos.jpeg", // fallback
       // ...
     },
   ];
   ```

2. Update `Hero.jsx` to use data URLs directly:
   ```jsx
   <source type="image/avif" srcSet={`${slide.avif} 1920w`} />
   <source type="image/webp" srcSet={slide.webp} />
   <img src={slide.jpeg} alt="" />
   ```

### Priority 2: Audit Unused Dependencies (Medium Impact)

**Estimated savings:** ~5-10 MB if removed

```bash
npm ls @emotion/react @mui/material swiper react-slick
```

Check if actually used in components. If not:

```bash
npm uninstall @emotion/react @mui/material  # if unused
```

### Priority 3: Set Immutable Cache Headers (Setup)

**Estimated impact:** 0 KB on repeat visits

For CDN/hosting, set:

```
Cache-Control: public, immutable, max-age=31536000
```

For index.html:

```
Cache-Control: public, max-age=3600, must-revalidate
```

---

## Metrics Before & After Optimization

### Current (with all optimizations to date)

- **Main JS (gzip):** 72.14 KB
- **Hero Images:** 30 MB (still using JPEG fallbacks)
- **Total Transfer (first load):** ~35-40 MB
- **FCP (estimated):** 1.5-2.5 sec (limited by hero image)

### After Image Fix

- **Main JS (gzip):** 72.14 KB (unchanged)
- **Hero Images:** ~9 MB (AVIF served to modern browsers)
- **Total Transfer:** ~12-15 MB (64% reduction)
- **FCP (estimated):** 1.0-1.5 sec (300-500ms faster)
- **LCP (estimated):** 2.0-2.5 sec (300-500ms faster on slow 4G)

---

## Files to Review

- `src/data/sliceHero.js` — hero image imports (needs refactor)
- `src/components/sections/Hero.jsx` — <picture> element (update to use slide data URLs)
- `vite.config.js` — bundle config
- `package.json` — dependency audit needed

---

## Visualization

Open `dist/stats.html` in a browser to see interactive treemap of bundle composition.

---

**Status:** ✅ Bundle analysis complete. Ready for Priority 1 (image URL refactor).
