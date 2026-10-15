# Project Changelog - C.D.Rao Ground Water Exploration Consultancy

## [2026-10-15] - Technical SEO & Google Search Console Certification Rollout

### Summary of Changes
- Aligned primary domain across all technical SEO surfaces from development/unregistered domain (`cdraogroundwater.com`) to approved live production domain: `https://www.cdraogroundwater.online`.
- Added `<link rel="canonical" href="https://www.cdraogroundwater.online/" />` to `index.html`.
- Updated OpenGraph URL, OpenGraph Image, and ProfessionalService JSON-LD structured data to use `www.cdraogroundwater.online`.
- Created dynamic `src/components/common/SeoHead.tsx` component to synchronize `<title>`, `<meta name="description">`, `<meta name="robots">`, and canonical links on client-side routing.
- Integrated `SeoHead` into `src/pages/Home.tsx` and `src/pages/ServiceDetail.tsx`.
- Integrated `SeoHead` with `noIndex={true}` into `src/pages/NotFound.tsx` to stop soft 404 indexing.
- Created `src/siteSeo.ts` centralized SEO manifest.
- Updated `public/robots.txt`: pointed sitemap to `https://www.cdraogroundwater.online/sitemap.xml`.
- Updated `public/sitemap.xml`: updated all 11 routes with certified HTTPS URLs.
- Updated `.gitignore` to strictly ignore large videos (`*.mp4`, `*.mov`) preventing large binary upload issues during deployment sync.

### Files Created / Modified
- `index.html` (modified - added canonical tag, updated OG and schema URLs)
- `.gitignore` (modified - added video exclusions)
- `src/siteSeo.ts` (created - centralized metadata manifest)
- `src/components/common/SeoHead.tsx` (created - dynamic head manager)
- `src/pages/Home.tsx` (modified - integrated SeoHead)
- `src/pages/ServiceDetail.tsx` (modified - integrated dynamic SeoHead)
- `src/pages/NotFound.tsx` (modified - integrated SeoHead with noIndex)
- `public/robots.txt` (modified - updated sitemap directive)
- `public/sitemap.xml` (modified - updated all 11 URLs to live production domain)
- `PROJECT_CHANGELOG.md` (created - persistent changelog)
