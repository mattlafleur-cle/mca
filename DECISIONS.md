# Build decisions

Choices made in the first build, with the reason for each. Founders can reverse any of these.

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-09-29 | Working name "Maple Creek Advisory," set once in `site.config.mjs`. | Brief names it as the working display name. "Maple Creek Advisors" remains open. |
| 2026-09-29 | Static HTML from a dependency-free Node build. | Small brochure site; no CMS, database, or framework needed. Any static host works. |
| 2026-09-29 | Contact is an email link to both legacy addresses, not a form. | No shared inbox or tested form endpoint exists. Brief forbids a form that could silently drop messages. |
| 2026-09-29 | Standalone BUILD page kept, linking to maplecreekcoaching.com/build/. | That page was verified live on 2026-09-29. Josh still needs to approve it as the destination. |
| 2026-09-29 | No booking button, prices, phone, address, response-time promise, testimonials, or photos. | None are approved or verified for the new brand. |
| 2026-09-29 | Services includes a line that tax preparation and attest services are not on the menu. | Brief says not to imply these are offered. Flagged for approval because it is also a claim. |
| 2026-09-29 | Type-led design with generated contour lines and a two-lanes diagram instead of stock imagery. | No approved photos are available. The diagram shows the core idea: the people side and the numbers side meeting in one plan. |
| 2026-09-29 | Single light theme. | Brand site with a fixed palette; one well-tested theme is easier to keep accessible. |
| 2026-09-29 | Indexing off by default; canonical, sitemap, and absolute Open Graph URLs only after a domain is approved. | Keeps previews out of search results and avoids inventing a canonical host. |
| 2026-09-29 | Google Fonts for type. | Simple, and required by the private preview host. Self-hosting is documented as an option. |
