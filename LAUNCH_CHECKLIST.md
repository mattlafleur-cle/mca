# Launch checklist

Nothing on this list has been signed off. Since 2026-09-29 the review site is live at https://maplecreekadvisors.com (at Matt's direction), and it stays unindexed until the remaining items are checked. Each item notes where the setting lives.

## Name and relationship

- [x] **Displayed name.** "Maple Creek Advisors," matching the domain (Matt, 2026-09-29).
- [ ] **Legal name.** Check availability with the Ohio Secretary of State and for trademark conflicts. Setting: `siteName` in `site.config.mjs`, then run `npm run og-image`.
- [ ] **Combination status.** Confirm the combination is effective before the site goes public. The copy describes the practice as it would exist at launch, but it does not say a transaction has closed.
- [x] **Relationship wording.** Approve the About page "Why the two of us" section and the Home page integrated section. Copy: `about.together` and `home.integrated*` in `src/content.mjs`. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [ ] **Footer copyright line.** It shows the working name. Confirm it matches the legal or registered trade name.

## Services and claims

- [x] **Service menu and scope.** Approve all four services and their "Work can include" lists. Copy: `services.sections` in `src/content.mjs`. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [x] **Scope exclusion line.** Services says "Tax preparation and attest services (audits, reviews, and compilations) are not part of this service menu." Confirm this is accurate for the new practice, or remove or revise it. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [x] **CPA title in a non-CPA firm's marketing.** Resolved 2026-09-29: Matt's name appears without the CPA suffix, his bio keeps the license as an individual fact, and every page footer says "Maple Creek Advisors is not a registered CPA firm and does not provide attest services." The site never uses "accountant" or "auditor" to describe the practice (see Ohio R.C. 4701.14(C) and (G)). Setting: `footerNote` in `site.config.mjs`.
- [x] **"Fractional CFO."** Used as a service category only. Confirm the founders are comfortable with the term. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [ ] **No prices.** None are published. Decide whether that stays the case.

## People

- [x] **Josh's bio.** Verify titles, chronology (built and sold a construction company), current programs, and the BUILD description. Setting: `founders` in `site.config.mjs`. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [x] **Matt's bio.** Verify "CPA licensed in Ohio and California" and "more than 12 years of experience," and approve the wording. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [ ] **Photos.** None are used. Josh has speaking photographs in the project archive; confirm publication rights before adding any. See `src/assets/photos/README.md`.

## BUILD

- [x] **BUILD destination.** The BUILD page links to https://www.maplecreekcoaching.com/build/, which was live on 2026-09-29. Josh should confirm this is the right destination and that it will stay current. Setting: `build` in `site.config.mjs` (`showPage: false` removes the page). Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [x] **BUILD description.** Approve the wording. It says BUILD is associated with Josh's work, separate from advisory engagements, and not a required step. It does not describe BUILD's legal structure, fees, or event schedule. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).

## Contact

- [ ] **Shared inbox.** The contact path is a temporary email link to both legacy addresses (josh@maplecreekcoaching.com and matt@forestcity.pro). Create and test a shared address for the new brand, then replace `contact.recipients` in `site.config.mjs`.
- [ ] **Test the contact path end to end.** Send a message from a phone and a desktop email client and confirm both founders receive it.
- [ ] **Response time.** None is promised. Add `contact.responseTime` only if the founders commit to one.
- [ ] **Booking link.** None is shown. Add `bookingUrl` only after a scheduling page for the new brand exists and has been tested. Do not reuse either founder's existing booking link without agreement.
- [ ] **Address and phone.** None are shown. Decide whether either should appear.

## Domain, indexing, and hosting

- [x] **Domain.** maplecreekadvisors.com, chosen by Matt on 2026-09-29 and set as `canonicalDomain`.
- [ ] **Hosting.** Currently GitHub Pages from Matt's public `mca` repository. Confirm this is the long-term home, whether the repository should stay public, and whether review should sit behind a login (Cloudflare Pages with Access).
- [x] **DNS and HTTPS.** Hostinger records point to GitHub Pages, the site loads at https://maplecreekadvisors.com, and Enforce HTTPS is on (confirmed 2026-09-29).
- [x] **Josh has seen it.** The review site is reachable by anyone with the link. Confirm Josh is comfortable with that before it is shared beyond the two of you. Approved: Josh greenlit the full site on 2026-09-29 (reported by Matt).
- [x] **Link preview image.** `src/assets/og-image.png` exists. Regenerate after any name change.
- [ ] **Indexing.** Set `allowIndexing: true` only at launch. This removes `noindex` and builds `sitemap.xml`. Then submit the sitemap in Google Search Console.
- [ ] **Analytics and privacy.** None are included. If added, document the data flow, consent requirements, and a privacy page that describes the actual handling.
- [ ] **Fonts.** Decide whether to keep Google Fonts or self-host (see README).

## Final review

- [ ] Review every page on a phone and a desktop.
- [ ] Click every "Start a conversation" button and every link.
- [ ] Read all copy once more against the actual launch state.
- [ ] Run `npm run check` and `npm run screenshots` on the final build.
