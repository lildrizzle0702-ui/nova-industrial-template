# Factory Export Website Template

A reusable bilingual factory / B2B export website template (Vite + React + TypeScript).

Demo brand: **NOVA INDUSTRIAL** — electrical components manufacturer.

## Quick start

```bash
npm install
npm run dev        # http://localhost:5180
npm run build      # typecheck + bundle + sitemap → dist/
npm run preview    # serve dist/ locally
```

## Rebrand for a new client

Almost everything lives in one file:

| What | File |
|---|---|
| Brand name, tagline, description | `src/config/factory.config.ts` → `brand` |
| Company facts, factory stats | `src/config/factory.config.ts` → `company`, `factoryStats`, `statsBand` |
| Contact info, WhatsApp, address | `src/config/factory.config.ts` → `contact` |
| SEO: siteUrl, title, description, keywords | `src/config/factory.config.ts` → `seo` |
| Colors / theme tokens | `src/config/factory.config.ts` → `theme` (keep in sync with `src/styles/tokens.css`) |
| Product families | `src/config/factory.config.ts` → `categories` |
| Certifications, capabilities, FAQ | `src/config/factory.config.ts` → `certifications`, `capabilities`, `faqs` |
| About story, process, milestones | `src/config/factory.config.ts` → `factSheet`, `manufacturingProcess`, `milestones` |
| Home copy, hero, CTAs | `src/config/factory.config.ts` → `hero`, `ctaBand`, `homeSections` |
| Navigation / footer links | `src/config/factory.config.ts` → `navigation` |
| Product catalogue | `src/config/factory.config.ts` → `products` |

The old `src/config/*.ts` and `src/data/products.ts` files now re-export from `factory.config.ts`, so pages and components do not need re-wiring.

See `src/config/factory.config.aunt.ts.example` for a fully filled example configuration.

## Bilingual content workflow

The site is bilingual (English + Chinese). All user-facing content in `src/config/factory.config.ts` is stored as `{ en: string; zh: string }` objects via the `LocalizedString` type in `src/data/types.ts`.

### Adding or editing copy

1. Open `src/config/factory.config.ts`.
2. Find the field you want to change (e.g. `brand.tagline`, `contact.businessHours`, `products[0].moq`).
3. Provide both languages:

   ```ts
   tagline: {
     en: 'Wiring devices built to specification.',
     zh: '按规格生产的电工产品。',
   },
   ```

### Displaying localized content in components

Use the `pick()` helper from `src/lib/i18n.tsx` together with `useLocale()`:

```tsx
import { useLocale, pick } from '../lib/i18n';

export function MyComponent() {
  const { locale } = useLocale();
  return <p>{pick(configField, locale)}</p>;
}
```

For catalogue entities (products, categories, specs), prefer the helpers in `src/lib/display.ts` (`productName`, `categoryName`, `specLabel`, etc.) — they wrap `pick()` for the current locale.

Static UI chrome (button labels, form errors, aria text) lives in the translation catalog at `src/lib/catalog.ts` and is rendered with `t('key')` from `useLocale()`.

### Language switch

A language toggle is always visible in the site header. Switching stores the preference in `localStorage` under `nova.locale`, updates `<html lang>`, and re-renders all localized content. SEO `hreflang` tags are updated per page by `src/lib/seo.ts`.

### New-client launch checklist

1. Replace `{{SITE_URL_PLACEHOLDER}}` in `src/config/factory.config.ts` (`seo.siteUrl`) with the real domain, e.g. `https://xxx.github.io/仓库名/`.
2. Replace the `{{..._PLACEHOLDER}}` contact values in the same file.
3. Update `src/config/thirdParty.ts` with real Formspree, WhatsApp, Clarity, and GA4 IDs.
4. Add real photos under `public/assets/client/` and set `mediaMode: 'client'` in `src/config/media.ts`.

## Service placeholders

Replace these before going live:

| Service | File | Placeholder |
|---|---|---|
| Formspree form endpoint | `src/config/thirdParty.ts` | `FORMSPREE_FORM_ID` |
| WhatsApp number (English pages) | `src/config/thirdParty.ts` | `8613800000000` |
| WeChat QR code (Chinese pages) | `src/config/thirdParty.ts` | `/assets/img/wechat-qr-placeholder.png` |
| Microsoft Clarity | `src/config/thirdParty.ts` | `CLARITY_PROJECT_ID` |
| Google Analytics 4 | `src/config/thirdParty.ts` | `GA_MEASUREMENT_ID` |

## Formspree setup

1. Create a free form at https://formspree.io/.
2. Copy the form ID (the part after `/f/` in the endpoint URL).
3. Replace `FORMSPREE_FORM_ID` in `src/config/thirdParty.ts` with your real ID.
4. The form accepts these fields: `name`, `company`, `email`, `country`, `certification`, `packaging`, `message`, `summary`, `_subject`.

## Media / photography

The template ships with a deterministic SVG demo visual system.
To switch to real photography:

1. Put files under `public/assets/client/` (see `public/assets/client/README.md`).
2. Register slots in `src/config/media.ts` and set `mediaMode: 'client'`.

Empty slots automatically fall back to the demo SVG.

## Image replacement map

The current `public/` directory contains only `favicon.svg`; all other visuals are SVG placeholders. Replace these filenames to add real photography:

| Recommended filename | Page / section |
|---|---|
| `public/assets/img/factory-workshop-01.jpg` | Factory Tour — injection molding floor |
| `public/assets/img/factory-workshop-02.jpg` | Factory Tour — QC laboratory |
| `public/assets/img/factory-workshop-03.jpg` | Factory Tour — tooling room |
| `public/assets/img/factory-workshop-04.jpg` | Factory Tour — raw-material warehouse |
| `public/assets/img/factory-workshop-05.jpg` | Factory Tour — export packing line |
| `public/assets/img/factory-workshop-06.jpg` | Factory Tour — container loading bay |
| `public/assets/img/cert-iso9001.jpg` | Quality / Certifications — ISO 9001 scan |
| `public/assets/img/cert-ce.jpg` | Quality / Certifications — CE scan |
| `public/assets/img/cert-rohs.jpg` | Quality / Certifications — RoHS scan |
| `public/assets/img/cert-ukca.jpg` | Quality / Certifications — UKCA scan |
| `public/assets/img/wechat-qr-placeholder.png` | Chinese floating button — WeChat QR |
| `public/assets/img/og-placeholder.png` | Social sharing / OG image |
| `public/favicon.svg` | Browser tab icon |

Product photos are registered per slug in `src/config/media.ts` → `clientMedia.products`.

## SEO

- Unique title/meta/OG/hreflang are injected per page by `src/lib/seo.ts`.
- `npm run build` auto-generates `dist/sitemap.xml` and `dist/robots.txt` from the routes in `factory.config.ts` and `src/data/insights.ts`.
- Set the real domain in `src/config/factory.config.ts` (`seo.siteUrl`).

## Deployment

### GitHub Pages

- Build: `npm run build`
- Publish folder: `dist/`
- `base` in `vite.config.ts` is set to `/nova-industrial-template/`; change it to `/` for a custom domain.
- `dist/404.html` is copied from `dist/index.html` after build so deep links work on refresh.

### Cloudflare Pages

- Build command: `npm run build`
- Build output: `dist/`
- Set `base` in `vite.config.ts` to `/` for root hosting.
- `_headers` and `_redirects` files in `dist/` are generated/ignored as needed.
