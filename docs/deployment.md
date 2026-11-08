# Deployment, configuration, backup and rollback

Nothing has been deployed. No DNS, hosting or paid service has been changed or purchased. The current live situation (no working site at alphadentalmedia.com as of 2026-11-08) is untouched.

## Build

```bash
npm ci
npm test                      # unit tests (calculator, inquiry validation)
npm run content:check         # route-by-route word counts, sources, links
SITE_ENV=production npx next build
```

Node 20.9 or later. The build fails on invalid frontmatter, unknown source ids or MDX errors.

## Environment variables

| Variable | Where | Purpose |
|---|---|---|
| `SITE_ENV` | server | `production` on the live site only. Anything else = protected preview (noindex, drafts visible). |
| `PREVIEW_PASSWORD` | server, preview only | Enables HTTP Basic auth on every preview request. |
| `INQUIRY_WEBHOOK_URL` / `INQUIRY_WEBHOOK_SECRET` | server | Deliver inquiries as JSON to a CRM/automation endpoint (Bearer secret, `idempotency-key` header = submission ID). |
| `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL` | server | Alternative: email delivery via Resend (sender must be on a verified domain). |
| `INQUIRY_DEV_SINK=file` | preview only | Queue test inquiries to `.data/inquiries.jsonl`. Ignored in production. |
| `NEXT_PUBLIC_GA_ID` | client | GA4 measurement ID. Enables the consent banner; nothing loads without consent. |
| `NEXT_PUBLIC_BOOKING_URL` | client | Reserved for a booking provider (not wired until one is chosen). |

Configure exactly one inquiry destination. Never commit `.env` files.

## Recommended hosting

Any Node host works (`next start`). Vercel is the lowest-effort fit for Next.js 16: create two environments —

1. **Preview** (staging branch): `SITE_ENV=preview`, `PREVIEW_PASSWORD=…`, `INQUIRY_DEV_SINK` unset or a test webhook. Also enable the host's own deployment protection if available (robots.txt is not access control).
2. **Production** (main branch): `SITE_ENV=production` + the verified inquiry destination + analytics ID.

Domain: point `alphadentalmedia.com` (apex) to the host and add `www.alphadentalmedia.com` as a redirect to the apex. HTTPS is automatic on Vercel. Confirm the host/CDN does not block Googlebot, Bingbot or OAI-SearchBot (check any bot-protection/firewall rules).

## Backup

- The git repository is the backup of code and content. Push to a private GitHub repository (owner input #13) with branch protection on `main`.
- Inquiries are not stored by the site; the CRM or mailbox is the system of record and must have its own retention/backup.

## Rollback

- Vercel: "Promote" the previous production deployment (instant), or `vercel rollback`.
- Any host: `git revert <commit>` on `main` and redeploy; or redeploy the previous tag. Tag each release: `git tag release-YYYYMMDD`.
- Content-only mistakes: set the entry's `status` back to `Drafted` and redeploy — the page, its links, sitemap entry and llms.txt line disappear together and the URL returns 404.

## Release checks (run against the production build before every launch)

```bash
SITE_ENV=production npx next build
SITE_ENV=production PORT=3200 npx next start -p 3200 &
BASE=http://localhost:3200 node scripts/release-check.mjs --json release-report.json
# Functional lead-flow tests (preview build with the test file sink):
INQUIRY_DEV_SINK=file PORT=3300 npx next start -p 3300 &
BASE=http://localhost:3300 EXPECT_DELIVERY=ok node scripts/e2e.mjs
```
