# alphadentalmedia.com

Website for Alpha Dental Media, a Houston-based dental marketing agency serving dental practices, dental groups and DSOs nationwide (priority markets: Texas, Florida, Georgia, Greater Los Angeles).

Next.js 16 (App Router) · React 19 · TypeScript · MDX content in the repository · no CMS or database.

## Quick start

```bash
npm ci
npm run dev                      # preview mode: drafts visible, noindex
```

Production build:

```bash
npm test                         # unit tests
npm run content:check            # word counts, sources, links, statuses
SITE_ENV=production npx next build
SITE_ENV=production npx next start
```

## Where things are

| Path | What |
|---|---|
| `content/` | Every page as `.mdx` (frontmatter = route, status, metadata, evidence) and `content/sources/*.json` (the source register) |
| `docs/authoring-guide.md` | **How to edit or add content** — statuses, frontmatter, components, sourcing rules |
| `docs/business-facts.md` | The only facts about the business the site may state |
| `docs/owner-inputs.md` | What the owner still needs to supply or decide |
| `docs/query-ownership.md` | Which page owns which search intent |
| `docs/architecture.md` | Technical design decisions |
| `docs/deployment.md` | Environment variables, hosting, backup and rollback |
| `docs/launch-checklist.md` | Steps before and after go-live |
| `docs/measurement-plan.md`, `docs/ai-visibility-plan.md` | Analytics events, reporting, AI visibility testing |
| `docs/route-report.md` | Route-by-route status, word count, evidence and check results |
| `docs/progress.md` | What is done, what is blocked, next actions |
| `research/` | Briefs, competitor studies, local market research, review logs |
| `scripts/` | `content-report.ts`, `check-mdx.mjs`, `release-check.mjs`, `e2e.mjs`, `a11y-check.mjs`, `census.mjs`, `route-report.mjs`, `seed-manifest.mjs` |

## Publication rule

Only entries with `status: "Ready"` or `"Published"` appear in a production build. Everything else returns 404 in production and is excluded from navigation, hub listings, related links, the sitemap and `llms.txt`. The preview build (any `SITE_ENV` other than `production`) shows drafts with a status banner, sends `noindex`, and can be password-protected with `PREVIEW_PASSWORD`.
