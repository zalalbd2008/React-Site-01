# Business facts register — Alpha Dental Media

Only facts in the **Verified / supplied** column may appear on the site. Last reviewed: 2026-11-08.

| Fact | Verified / supplied value | Source | Notes |
|---|---|---|---|
| Brand name | Alpha Dental Media | Project brief (owner) | Typographic wordmark used until a logo is supplied. |
| Legal business name | **Not supplied** | — | Do not display a legal entity. Owner input #1. |
| Domain | alphadentalmedia.com | Project brief | Canonical host chosen: `https://alphadentalmedia.com` (apex, no www), trailing slash on every page. |
| Headquarters | Houston, Texas (city level only) | Project brief: "Houston-based" | No street address verified. Organization schema uses locality/region only. No LocalBusiness markup. |
| Public phone | **Not supplied** | — | No phone link rendered. `phone_link_clicked` event is implemented but unused. |
| Public email | **Not supplied** | — | The session account email belongs to Fix Website Issues and must not be reused. |
| Operating hours | **Not supplied** | — | No hours displayed. |
| Service coverage | Dental practices nationwide (remote delivery from Houston). Priority markets: Texas, Florida, Georgia, Greater Los Angeles (California). | Project brief | California focus is Greater Los Angeles only. City pages describe markets served, not offices. |
| Audience | Practice owners, dentists evaluating marketing, practice managers, dental groups, DSOs | Project brief | Not patients. |
| Services delivered | S1–S9 as listed in the brief (SEO, Google Ads, multi-location SEO, web design/conversion, local SEO/GBP, AI search, reputation, content, conversion tracking) | Project brief | Brief says "do not add unconfirmed services". Owner should confirm each is currently delivered (owner input #6). |
| Contractual commitments | **None supplied** | — | Pages make no turnaround, guarantee, contract-length or free-work promises. |
| Prices | **None approved** | — | Pages discuss budget drivers only; no Alpha Dental Media prices. |
| Team / leadership / authors | **None supplied** | — | Content is bylined to "Alpha Dental Media editorial team". `/leadership/` is Blocked. No `/authors/` pages. |
| Credentials / certifications / partner badges | **None supplied** | — | No Google Partner or other badges. |
| Clients, testimonials, logos, case studies | **None supplied** | — | Case-study system built; no case studies published. |
| Lead destination | **Not configured** | — | Form fails closed (HTTP 503, honest message) until a destination env var is set. Owner input #2. |
| Booking provider | **Not configured** | — | "Book a Strategy Call" opens the consultation request form; no calendar shown, no appointment claimed. |
| Analytics | **Not configured** | — | No analytics scripts load. Consent banner appears only once an analytics ID is configured. |
| Social / business profiles (sameAs) | **None supplied** | — | `sameAs` omitted from schema. |
| Founding year, project totals, results | **None** | — | Must not be transferred from any related agency. |

## Related entities found during inspection (not transferred)

Inspected read-only via the connected Fix Website Issues WordPress site on 2026-11-08 (`https://www.fixwebsiteissues.com/about-us/`):

- Fix Website Issues is described there as the service brand of **WevTEC**, the registered DBA of **Bizzsol LLC**, Houston, Texas, "operating since 2013", founder listed as Zalal Uddin Ahmed.
- A full-text search of that site for "Alpha Dental Media" and "alphadentalmedia" returned **no matching mention**.
- The person running this session uses an @fixwebsiteissues.com email address, which *suggests* a relationship but does not document one.

**Status: relationship unverified.** Nothing about WevTEC, Fix Website Issues or Bizzsol LLC (founding year, site counts, prices, team, phone, results) appears on the Alpha Dental Media site. If the owner confirms a relationship (e.g. "Alpha Dental Media is a brand of Bizzsol LLC"), record the documentary evidence here and describe it accurately on `/about/`.

## Environment facts (2026-11-08)

- No existing repository, CMS or live-site access for alphadentalmedia.com was available. The domain could not be fetched from this environment (network policy), so no existing URL inventory exists. **Before launch, the owner must supply the current site's URL list (or confirm there is no live site) so inbound-link destinations can be preserved with redirects.**
- Hosting target not specified. The app runs on any Node 20.9+ host and is Vercel-compatible.
