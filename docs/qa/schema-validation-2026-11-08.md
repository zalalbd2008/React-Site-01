# Structured data validation — 2026-11-08

Tool: validator.schema.org (POST of the production-build HTML; the validator could not reach the local server directly).

| Route | Errors | Warnings | Types found |
|---|---|---|---|
| / | 0 | 0 | Organization, PostalAddress (city/region only), WebSite, WebPage, Country/State/AdministrativeArea (areaServed) |
| /markets/texas/houston/ | 0 | 0 | + BreadcrumbList, Service (provider = Organization, areaServed = City) |
| /blog/dental-marketing-roi/ | 0 | 0 | + BlogPosting |
| /who-we-help/orthodontists/ | 0 | 0 | + BreadcrumbList |
| /about/ | 0 | 0 | AboutPage |
| /contact/ | 0 | 0 | ContactPage |
| /resources/dental-growth-calculator/ | 0 | 0 | Article |
| /services/ and service pages | — | — | Not yet published at validation time (in review); re-run after they are Ready. Service pages emit Service with provider = Organization. |

Not present by design: Dentist, MedicalClinic, LocalBusiness, ProfessionalService, ratings, reviews, prices, FAQPage.

Google Rich Results Test: only BreadcrumbList and Article/BlogPosting are relevant supported features; run it on the production hostname after launch (it cannot test a local build). Organization, Service and WebSite produce no rich result and are not errors.

## Addendum 2026-11-09 (service pages published)

| Route | Errors | Warnings | Types found |
|---|---|---|---|
| /services/ | 0 | 0 | CollectionPage, BreadcrumbList |
| /services/dental-seo-company/ | 0 | 0 | Service (provider = Organization, audience = BusinessAudience), BreadcrumbList |
| /services/dental-conversion-tracking/ | 0 | 0 | Service, BreadcrumbList |
