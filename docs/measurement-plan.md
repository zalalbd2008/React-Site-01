# Measurement plan

## Event definitions (implemented in `src/lib/analytics.ts`)

| Event | Fires when | Source of truth | Status |
|---|---|---|---|
| `audit_request_accepted` | The server returned 200 after the destination accepted the audit request | `/api/inquiry/` response | Implemented; sends only with analytics consent and a configured GA ID |
| `consultation_requested` | The server accepted a strategy-call *request* (no booking provider exists) | `/api/inquiry/` response | Implemented |
| `consultation_booked` | A booking provider confirmed an appointment (e.g. provider's confirmation callback/webhook) | Booking provider | **Blocked** — no provider configured (owner input #3) |
| `phone_link_clicked` | A visitor clicked a `tel:` link | Browser | **Blocked** — no public phone number (owner input #4) |
| `qualified_lead` | Staff marked the inquiry as qualified in the CRM | CRM | **Blocked** — CRM not configured; never a browser event |

Not counted as leads: page views of the audit page, form starts, unsubmitted forms, validation failures, button clicks on "Book a Strategy Call".

Payload rules: no names, emails, phone numbers, free-text, practice names or patient information in analytics or URLs. Allowed params: `inquiry_type`, `challenge` (a fixed option list), UTM source/medium/campaign, landing page path. Deduplicated by submission ID per session.

## Reporting (once accounts exist)

| Report | Data | Notes |
|---|---|---|
| Qualified inquiries by service and market | CRM (`qualified_lead` with challenge + location + UTM) | The primary business metric. |
| Consultation bookings | Booking provider | After a provider is chosen. |
| Organic landing-page performance | Search Console (pages, queries) + GA4 landing pages | Organic sessions → accepted inquiries by landing page. |
| Indexing and query performance | Search Console Page indexing + Performance | Check monthly; inspect new routes after publication. |
| AI referral traffic | GA4 session source (e.g. chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com) | Referral visits only; many AI answers produce no click. |
| AI citations and brand mentions | Manual sample (`docs/ai-visibility-plan.md`) | Separate from referrals. |
| Content quality and maintenance | `npm run content:check`, source retrieval dates, broken-link checks | Re-verify platform guidance quarterly. |

## Known gaps

- Until GA4, Search Console and a CRM are connected, the site can confirm only server-accepted inquiries.
- Search Console groups AI features (AI Overviews / AI Mode) within Web search reporting; it does not isolate AI citations (re-check current documentation when the property exists).
- Visitors who decline consent are not measured in analytics; the CRM still records their inquiries.
