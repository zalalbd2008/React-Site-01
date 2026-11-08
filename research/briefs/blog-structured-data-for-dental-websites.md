# Research brief — /blog/structured-data-for-dental-websites/

- **Canonical route:** /blog/structured-data-for-dental-websites/
- **Page type:** article (ai-search)
- **Primary query / intent:** dental website structured data that matches the real (client) practice
- **Audience and the decision being answered:** practice owners and their developers/agencies deciding what schema to publish and how to keep it accurate.
- **Secondary questions:** Dentist vs LocalBusiness; multi-location; practitioners; review stars; FAQ markup status 2026; schema and AI features.
- **Overlapping topics owned by other pages:** location page content (/blog/dental-group-location-pages/); URL structure (/blog/multi-location-dental-website-structure/); practitioner GBP profiles (/blog/dentist-practice-google-business-profiles/); call tracking (/blog/dental-call-tracking/).
- **Geographic scope:** national.
- **Researched outline:** KeyAnswer + client-vs-agency note → "true representation" standard → Dentist type → property/source-of-truth table → hours → multi-location DecisionTree → providers (Person vs IndividualPhysician) → reviews (self-serving) and FAQ deprecation → schema and AI expectations → JSON-LD sample (invented) → Checklist → mistakes → limits → next steps.
- **Intended internal links:** S1, S6, S3, siblings 16/17/6/15/21/24, website audit checklist, audit page.
- **Three original contributions:**
  1. Property → source of truth → common mismatch table.
  2. Multi-location markup decision tree.
  3. Maintenance checklist and a "what is absent" annotated JSON-LD pattern.
- **Factual claims and evidence:**

| Claim | Source id | What the source actually measures | Geography / period | Limitation |
|---|---|---|---|---|
| Structured data must be true representation; no invisible content; no misrepresenting; most specific type; manual action possible; correct markup doesn't ensure rich result; JSON-LD recommended | google-sd-general-guidelines | Google guideline | updated 2026-07-10 | Google rich results |
| Define each location as LocalBusiness; most specific subtype; required address/name; openingHoursSpecification format; geo 5 decimals; url of specific location; telephone; priceRange under 100 chars; aggregateRating/review only for sites reviewing other businesses; validation steps | google-local-business-structured-data | Google doc | updated 2026-09-08 | |
| Dentist type parents (LocalBusiness, MedicalBusiness, MedicalOrganization); isAcceptingNewPatients, medicalSpecialty, employee available | schema-org-dentist | vocabulary | retrieved 2026-11-08 | |
| Person has jobTitle, worksFor, hasCredential, alumniOf, memberOf | schema-org-person | vocabulary | | |
| IndividualPhysician = "an individual medical practitioner"; practicesAt | schema-org-individualphysician | vocabulary | | not dentist-specific |
| Self-serving reviews ineligible for stars, incl. widgets | google-review-snippet-sd | Google doc | updated 2026-09-08 | |
| FAQ rich result no longer shown from 2026-05-07; docs removed June 2026; old URL redirects to changelog | google-search-docs-updates | changelog | retrieved 2026-11-08 | |
| Structured data not required for gen AI search; no special schema | google-ai-optimization-guide | guidance | 2026-07-10 | |
| Structured data should match visible text (AI features fundamentals) | google-ai-features-search | guidance | 2025-12-10 | |
| GBP name reflects real-world name | google-gbp-guidelines | policy | | |

- Verified on schema.org: no Orthodontist type (https://schema.org/Orthodontist returned 404 on 2026-11-08); schema.org openingHours text format exists.
- **Keyword research:** research candidates only.
- **Author / reviewer:** editorial-team / none
- **Evidence status:** sourced; JSON-LD uses invented data.
- **Proposed visual:** property table, DecisionTree, Checklist, code sample.
- **CTA:** audit; S1/S6.
- **Gaps:** How non-Google systems (Bing, ChatGPT, Perplexity) consume schema.org markup is not documented in sources reviewed; the page makes no claim about it beyond "may read it". Whether dentists should use IndividualPhysician is a judgement call, presented as such.
