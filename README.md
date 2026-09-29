# Maple Creek Advisory website (first build, private preview)

This is the first public-facing website for the proposed combined advisory practice of Josh Muller and Matt LaFleur. It is a **private preview for founder review**. It has not been deployed, no domain or DNS has been touched, and the site does not claim that the business combination is complete.

"Maple Creek Advisory" is a working name. It is set in one place (`site.config.mjs`) so it can change after the founders decide.

## Why this stack

The site is plain static HTML built by a small Node script that has **no dependencies**. A six-page brochure site does not need a CMS, database, or client-side framework, and leaving those out keeps it fast, cheap to host anywhere, and easy to maintain. Node 18 or newer is the only requirement.

## Commands

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the site into `dist/` with clean URLs (`/services/`). |
| `npm run preview` | Builds, then serves `dist/` at http://localhost:4173 (local only, sends `noindex`). |
| `npm run check` | Builds, then checks links, anchors, headings, titles, descriptions, alt text, indexing safety, the contact path, banned wording, and color contrast. Fails on any problem. |
| `npm run screenshots` | Optional. Renders every page at desktop and phone widths with Playwright, tests the mobile menu and skip link with the keyboard, and fails on console errors or horizontal scrolling. Screenshots go to `screenshots/` (not committed). Needs Playwright installed locally or globally. |
| `npm run build:artifact` | Builds a flat-file copy into `dist-artifact/` for sharing as a private hosted preview (see below). |

## Where to edit

| To change | Edit |
| --- | --- |
| Business name, contact email, booking link, domain, indexing, BUILD link, location wording | `site.config.mjs` |
| Founder bios, roles, and portraits | `founders` in `site.config.mjs` |
| Any other page wording | `src/content.mjs` |
| Page structure | `src/pages.mjs` |
| Header, footer, meta tags, route list | `src/layout.mjs` |
| Colors, type, spacing | `src/assets/site.css` (tokens at the top) |
| Mobile menu and copy button | `src/assets/site.js` |

After any edit, run `npm run check`.

House style for copy: plain English, no em dashes, no prices, no guaranteed outcomes, no testimonials or client names, and no statement that the practice has merged or combined. `npm run check` flags several of these automatically.

### Adding founder photos

See `src/assets/photos/README.md`. Portraits appear on Home and About as soon as a `photo` entry is set, with no layout changes. Only use photos the founder has approved and has the rights to publish.

### Removing the BUILD page

Set `build.showPage` to `false`. The page, its navigation item, and footer link disappear, and About keeps a short BUILD paragraph that links to `build.url`.

## Structure

```
site.config.mjs        facts and launch settings (one place to change the name)
src/content.mjs        page copy
src/pages.mjs          page layouts
src/layout.mjs         shell, header, footer, meta tags, routes, SVG motifs
src/assets/            CSS, JS, favicon, photo slots
scripts/build.mjs      static build (site or artifact mode)
scripts/check.mjs      post-build checks
scripts/serve.mjs      local preview server
scripts/screenshots.mjs optional rendered checks
LAUNCH_CHECKLIST.md    founder signoffs required before anything goes public
DECISIONS.md           choices made in this build and why
```

Pages: Home, Services, How We Work, About, BUILD, Contact, and a 404 page.

## Search, analytics, and privacy

- **Indexing is off.** While `allowIndexing` is `false` (the default), every page carries `noindex, nofollow`, `robots.txt` blocks all crawling, and no sitemap is built. The local server also sends `X-Robots-Tag: noindex`.
- **Canonical tags, `og:url`, `og:image`, and `sitemap.xml`** are emitted only after `canonicalDomain` is set. Indexing requires both `canonicalDomain` and `allowIndexing: true`; the build refuses the second without the first.
- **No structured data** (for example `LocalBusiness`) is emitted, because the address, phone, and legal entity are not confirmed.
- **No analytics, cookies, or trackers.** The contact path is a plain email link, so the site collects no data itself. That is why there is no privacy page yet. If analytics or a form is added later, document what it collects and add a privacy page that describes the actual data handling.
- **Web fonts** load from Google Fonts, which means visitors' browsers request font files from Google. If the founders prefer no third-party requests at all, download the two families (Bricolage Grotesque, Source Serif 4) and self-host them in `src/assets/fonts/`.
- **Open Graph image:** `og:image` points at `/assets/og-image.png`, which does not exist yet. Add a 1200 x 630 image there before launch, or remove that line in `src/layout.mjs`.

## Preview and deployment

- **Local:** `npm run preview`.
- **Shared private preview:** `npm run build:artifact` produces a flat-file version that works on hosts without clean-URL support. It has been published as a private claude.ai artifact for founder review (link shared separately). It is not public and not indexed.
- **Production (not done, requires approval):** any static host works (Cloudflare Pages, Netlify, GitHub Pages, S3). Build command `npm run build`, output directory `dist`. Use the host's password protection or preview-deploy feature for any further review builds. Before a production deploy, complete every item in `LAUNCH_CHECKLIST.md`, then set `canonicalDomain` and `allowIndexing` deliberately.

There are no environment variables. All settings are in `site.config.mjs`.

## Remaining launch decisions

See `LAUNCH_CHECKLIST.md`. In short: the name, the relationship wording, the final services and bios, a shared contact inbox, photos, the domain, and indexing.
