# Technical architecture and design decisions

## Stack (verified 2026-11-08 against the npm registry and bundled Next.js docs)

| Piece | Version (pinned exactly in package.json + lockfile) | Why |
|---|---|---|
| Next.js (App Router) | 16.4.5 (released 2026-11-03, latest stable) | Static generation for all editorial routes; server route for inquiries; `proxy.ts` (renamed from middleware in v16) for preview auth and host normalisation. |
| React / React DOM | 19.3.1 | Server Components by default; client components only for the drawer, scrollspy, form, calculator and consent. |
| TypeScript | 5.9.3 | TS 7 (native compiler) is out but newer; 5.9 is the conservative choice for Next's type-check. |
| next-mdx-remote (RSC) | 6.0.0 | Compiles MDX at build time on the server. `blockJS:false` + `blockDangerousJS:true` so component props work while eval/process/require stay blocked. Content is repository-authored. |
| zod | 4.6.7 | Frontmatter, source-register and inquiry validation. Invalid content fails the build. |
| Fonts | @fontsource-variable Inter + Source Serif 4, via `next/font/local` | Self-hosted, no third-party font requests, `display: swap`, size-adjusted fallbacks. |

No CMS existed, so content is **validated MDX in the repository** (`content/`), with a documented editing workflow (`docs/authoring-guide.md`). This keeps copy, sources and metadata out of layout code and gives a full review history in git.

## Directory map

```
content/            MDX pages (frontmatter = route, status, metadata, evidence) and sources/*.json
docs/               business facts, owner inputs, ownership, authoring guide, briefs, this file, launch docs
research/           briefs, competitor studies, local observations, AI-visibility logs
scripts/            seed-manifest, content-report, check-mdx, release-check, e2e
src/app/            routes (static pages + [slug] templates), API route, sitemap, robots, llms.txt, OG image
src/components/     SiteChrome (header/drawer/bottom bar), ContentPage template, MDX components, form, calculator
src/lib/            content loader, schema, JSON-LD, metadata, analytics, inquiry validation/delivery
src/proxy.ts        preview Basic auth, www→apex redirect, noindex on non-canonical production hosts
```

## Publication control (one rule, every surface)

`src/lib/content.ts → isVisible()` is the single gate:

- `SITE_ENV=production`: only `Ready`/`Published` entries render. Every other route returns a real 404 (`dynamicParams = false` + `notFound()`).
- Preview (any other SITE_ENV): drafts with a body render with a status banner; `noindex` everywhere (meta + `X-Robots-Tag`), `robots.txt` disallows all, sitemap empty, and Basic auth when `PREVIEW_PASSWORD` is set.

The same gate feeds: static params, navigation drawer children, footer, hub card listings, `<ChildCards>`, `<LinkCards>`, related-reading modules, in-body links (unpublished targets render as plain text), sitemap and llms.txt. Removing a page from navigation is never relied upon.

## URL policy

- Canonical host `https://alphadentalmedia.com` (apex). `www` → apex with a single 308 in `proxy.ts` (production only); configure the same at the host/CDN if it terminates first.
- `trailingSlash: true`: `/services` → 308 → `/services/` (single hop). Canonicals are self-referencing, absolute, and never include query strings.
- `/markets/{state}/{city}/` only. No `/locations/`, `/cities/`, `/areas-we-serve/`.

## Structured data

One `@graph` per page with stable `@id`s: `Organization` (#organization), `WebSite` (#website), `WebPage`/`CollectionPage`/`AboutPage`/`ContactPage`, `BreadcrumbList`, `Service` (service and market pages, provider = organization, `areaServed` = coverage), `BlogPosting`/`Article`. No `LocalBusiness`, `Dentist`, `MedicalClinic` or deprecated `ProfessionalService`. No ratings, reviews, prices or awards. Person markup only once verified authors exist. FAQPage markup is deliberately omitted: Google no longer shows FAQ rich results for this kind of site, and the visible FAQs serve readers without it.

## Inquiry flow

Browser form (client component, `noValidate`, accessible errors) → `POST /api/inquiry/` → same-origin check → content-type and size limits → per-IP rate limit (5 per 10 min) → zod validation → honeypot + minimum fill time → duplicate `submissionId` replay → `deliver()` to exactly one configured destination (webhook, Resend email, or preview-only file queue). Success (and the `audit_request_accepted` event) happens only after the destination confirms. Unconfigured delivery returns 503 with an honest message; nothing is stored. Secrets are server-only env vars.

Limitations: the rate limiter and duplicate cache are in-memory per instance. On multi-instance or serverless hosting, back them with a shared store (e.g. Upstash Redis or the host's KV) — the interface is two small functions in `route.ts`.

## Analytics and consent

No analytics code loads unless `NEXT_PUBLIC_GA_ID` is set **and** the visitor allows it in the consent banner. `track()` refuses to send without consent, strips keys that look like personal data, and de-duplicates by submission ID. Events: `audit_request_accepted`, `consultation_requested`, `consultation_booked` (provider confirmation only — not implemented until a provider is chosen), `phone_link_clicked` (no public phone yet). `qualified_lead` is a CRM-side status, never a browser event. Only UTM source/medium/campaign and landing path are kept for attribution (session storage), and they travel with the inquiry to the CRM.

## Design system

Tokens in `src/app/globals.css :root`: deep navy (#0b1f3a), warm white (#faf7f2) background, restrained teal accent (#0f6b64 for text-safe use, 6.0:1 on white; #7fd1c7 only on navy). Body ink #18212e. Serif display (Source Serif 4) + Inter UI. Diagrams are semantic HTML (lists/tables) styled with CSS — readable by screen readers, printable, zero client JS. Motion is limited to drawer entry and transitions, all disabled under `prefers-reduced-motion`.

Mobile: compact sticky header (wordmark, Audit button, Menu), off-canvas drawer (dialog, focus trap, Escape, focus return, background `inert`), horizontally scrollable section nav with scrollspy (never moves focus; only scrolls its own strip), bottom bar Home / Services / Audit (teal) / Consult / Menu with safe-area padding. The bottom bar and consent banner hide while a form field is focused so they never cover inputs or the keyboard; `scroll-padding` keeps anchor targets clear of sticky bars.

## Internationalisation

All entries carry `lang` (default `en`). The structure supports a parallel `/es/` tree later; no language switch is rendered until complete, reviewed Spanish translations exist (owner input #17).
