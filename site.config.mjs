// Site configuration: every fact that the founders still need to confirm lives here.
// Change a value once and rebuild; the pages read from this file.
// Items marked "LAUNCH GATE" are listed in LAUNCH_CHECKLIST.md and need founder signoff.

export default {
  // Displayed business name, chosen by Matt on 2026-09-29 to match the domain.
  // LAUNCH GATE: confirm the legal or registered trade name matches before launch.
  siteName: 'Maple Creek Advisors',

  // Short line used in the footer and default meta description.
  tagline: 'Coaching, financial clarity, and practical operating guidance for owner-led businesses.',

  // Disclosure shown in every page footer. Added 2026-09-29 at Matt's direction so the individual CPA
  // license in his bio is not read as the practice holding itself out as a CPA firm (Ohio R.C. 4701.14).
  footerNote: 'Maple Creek Advisors is not a registered CPA firm and does not provide attest services.',

  // Domain the site is served from (no trailing slash). Set 2026-09-29 at Matt's direction so the
  // founders can review the live site on the real domain. Hosting: GitHub Pages (see README).
  // Set to null to drop canonical tags and absolute Open Graph URLs.
  canonicalDomain: 'https://maplecreekadvisors.com',

  // LAUNCH GATE: search indexing. Keep false while the founders are still reviewing. Set true only
  // after launch signoff (it requires canonicalDomain). While false, every page carries noindex.
  // robots.txt still allows crawling so search engines can see that noindex and drop the pages;
  // blocking crawling would hide the noindex and can leave bare URLs in results.
  allowIndexing: false,

  // Link preview image in src/assets/. Regenerate with `npm run og-image` after a name change.
  ogImage: 'og-image.png',

  // LAUNCH GATE: third-party analytics. Keep null until approved. No tracking script is included
  // anywhere in this build, and this setting is not wired to any provider yet (see README).
  analytics: null,

  // Location language shown in the footer and About page. No street address or phone is published.
  location: {
    region: 'Northeast Ohio',
    serviceLine: 'Based in Northeast Ohio. Working with owners in person and remotely.',
  },

  // LAUNCH GATE: contact channel. No shared inbox or tested form exists yet, so the site uses a
  // plain email action addressed to both founders' existing (legacy) addresses as a temporary fallback.
  // Replace with the new shared address once it exists and has been tested.
  contact: {
    recipients: ['josh@maplecreekcoaching.com', 'matt@forestcity.pro'],
    emailSubject: 'Starting a conversation',
    // Leave null unless a response time is confirmed. Nothing is shown while null.
    responseTime: null,
  },

  // Scheduling page for intro conversations (Matt's Fantastical Openings link, set 2026-09-29).
  // While set, every primary button goes here. Set to null to send buttons to the Contact page instead.
  bookingUrl: 'https://fantastical.app/mattlafleur/maple-creek-advisors',
  // Must match the meeting length configured in Fantastical.
  bookingLength: '20-minute',

  // BUILD owner community. The page links out only to the destination below.
  // Verified live on 2026-09-29 (HTTP 200, current BUILD content on Josh's Maple Creek Coaching site).
  // LAUNCH GATE: Josh should confirm this is the destination he wants to use.
  // Set showPage to false to drop the standalone page; About keeps a short BUILD section either way.
  build: {
    showPage: true,
    url: 'https://www.maplecreekcoaching.com/build/',
    urlLabel: 'Visit BUILD on the Maple Creek Coaching site',
    // From the BUILD plan Matt shared on 2026-10-02. Update as gatherings change.
    fullName: 'Business United in Leadership Development',
    gatherings: [
      { format: 'Breakfast', places: 'Akron and Independence' },
      { format: 'Lunch', places: 'Akron' },
      { format: 'Happy hour', places: 'Akron and Norton / Cuyahoga Falls' },
    ],
  },

  // Founder details used on Home and About. LAUNCH GATE: each founder approves their own bio.
  // photo: set to { src: 'photos/josh-muller.jpg', width: 1200, height: 1500, alt: '...' }
  // once an approved portrait with publication rights is in src/assets/photos/.
  founders: [
    {
      id: 'josh',
      name: 'Josh Muller',
      role: 'Coaching and leadership',
      photo: null,
      short:
        'Josh built and sold a construction company before he started coaching owners and facilitating leadership teams. He knows the weight of owner decisions because he has carried it.',
      bio: [
        'Josh founded Maple Creek Coaching after building and selling a construction company of his own. That experience shapes how he works: he knows the pressure, risk, and responsibility of leading an owner-led business.',
        'Today he coaches owners, facilitates leadership team meetings and planning sessions, and convenes BUILD, a peer community for business owners. His work centers on honest conversations, strong relationships, and turning insight into action.',
      ],
    },
    {
      id: 'matt',
      name: 'Matt LaFleur',
      role: 'Financial clarity and operations',
      photo: null,
      short:
        'Matt is a CPA and financial and operating adviser with more than 12 years of experience. He helps owners understand their numbers and use them to make decisions.',
      bio: [
        'Matt founded Forest City CPA and works as a financial and operating adviser. He is a CPA licensed in Ohio and California, with more than 12 years of experience in accounting, financial reporting, and advisory work.',
        'He works with owners to understand their numbers, make financial information more useful, and bring structure to consequential decisions.',
      ],
    },
  ],
};
