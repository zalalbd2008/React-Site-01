# Research brief — /privacy-policy/

- **Canonical route:** /privacy-policy/
- **Page type:** legal
- **Primary query / intent:** privacy policy
- **Audience and the decision being answered:** Site visitors and inquirers.
- **Secondary questions:** What is collected; where it goes; analytics; rights.
- **Overlapping topics owned by other pages (link, don't duplicate):** —
- **Geographic scope:** national (US)
- **Researched outline:** Draft banner; who we are; form fields; automatic data (submission ID, start time, honeypot, UTM in sessionStorage adm_attr, IP rate limit in memory); delivery (webhook CRM or Resend email, named once configured; fails closed); analytics (none; consent-gated GA with signals off; localStorage adm_consent_v1; allowed events); self-hosted fonts; hosting logs; retention (owner); rights via /contact/; no patient info; children; links; changes.
- **Intended internal links:** see `related` in the page frontmatter; audit CTA /dental-marketing-audit/ where cta is not none.
- **Three original contributions:**
n/a (legal)
- **Factual claims and evidence:**

| Claim | Source id | What the source actually measures | Geography / period | Limitation |
|---|---|---|---|---|
| All statements | code | src/lib/inquiry.ts, delivery.ts, analytics.ts, Consent.tsx, api/inquiry/route.ts, fonts.ts | 2026-11-08 | Code may change |

- **Keyword research:** research candidates only (no tool data available).
- **Author / reviewer:** editorial-team / none (no review claimed)
- **Evidence status:** see page frontmatter `evidence`. All cited pages retrieved 2026-11-08 via curl (WebFetch could not resolve Google/web.dev hosts in this session).
- **Proposed visual and its purpose / data:** n/a
- **CTA and next-step deliverables:** Dental Growth Audit where applicable.
- **Gaps / what needs client data:** Owner inputs: #1 legal name, #2 processor name, #9 analytics, #13 host, retention periods, #14 legal review incl. state privacy laws. Status Drafted with visible pending-review callout.
