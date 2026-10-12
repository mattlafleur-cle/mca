// Copy for the public announcement at /announcement/: Maple Creek Coaching and Forest City CPA
// have joined forces as Maple Creek Advisors. Public and indexed. This is the one page where
// Forest City CPA may be named freely (see the Forest City rule in scripts/check.mjs).
// No quotes: Josh and Matt each approve their own words before any quote is added.

export default function announcementContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    seed: 52,
    title: `Maple Creek Coaching and Forest City CPA Join Forces as ${name}`,
    description: `Maple Creek Coaching and Forest City CPA have joined forces as ${name}: coaching, fractional CFO, and advisory for owners in ${region}.`,
    datePublished: '2026-10-12',
    dateLabel: 'October 12, 2026',
    eyebrow: 'Announcement',
    headline: `Maple Creek Coaching and Forest City CPA have joined forces as ${name}.`,
    lead: `Josh Muller, founder of Maple Creek Coaching, and Matt LaFleur, founder of Forest City CPA, have come together to form ${name}: one firm for the people side and the numbers side of owning a business.`,

    // Home page banner. It does not name Forest City CPA. Hidden automatically after `until`
    // (checked at build time, so it disappears with the first site update after that date).
    banner: {
      until: '2026-11-30',
      text: `Josh Muller and Matt LaFleur have joined forces as ${name}.`,
      linkText: 'Read the announcement',
    },

    whyHeading: 'Why we came together',
    why: [
      'Owners rarely bring us only a people problem or only a numbers problem. A hiring decision is also a cash decision. A growth plan is also a leadership plan. A sale depends on the financials and on whether the team can run the business without the owner.',
      'Josh built and sold a company of his own and has spent the years since coaching owners and leadership teams. Matt is a CPA and entrepreneur who helps owners understand their numbers and act on them. We have already worked side by side through BUILD, which Josh founded and Matt helps facilitate. Joining forces lets us bring both perspectives to every client, in one relationship.',
      'Josh likes to point out that two draft horses pulling together can move far more than either one pulling alone. That is the idea behind Maple Creek Advisors.',
    ],

    offerHeading: `What ${name} offers`,
    offerIntro: 'The same work our clients already know, now under one name, with both of us available when the work calls for it.',
    offers: [
      { key: 'coaching', name: 'Business coaching', body: 'Coaching for owners and facilitation for leadership teams, led by Josh.' },
      { key: 'fractionalCfo', name: 'Fractional CFO', body: 'CFO-level financial guidance without a full-time CFO, led by Matt.' },
      { key: 'advisory', name: 'Business advisory', body: 'Strategic planning and major decisions, with the people and the numbers at the same table.' },
      { key: 'sell', name: 'Selling your business', body: 'Exit planning, advice through a sale, or full representation through closing.' },
    ],

    clientsHeading: 'If you already work with Josh or Matt',
    clients: [
      'You keep working with the same people.',
      'You can reach us the same way you do today.',
      'If anything about billing, contact details, or how we work together changes, we will tell you directly before it happens.',
    ],
    clientsLinkText: 'See what is new for clients in 2027',

    faq: [
      {
        q: `What is ${name}?`,
        a: `${name} is an advisory firm led by Josh Muller and Matt LaFleur, formed when Maple Creek Coaching and Forest City CPA joined forces. It offers business coaching, fractional CFO services, business advisory, and help selling a business to owners across ${region}.`,
      },
      {
        q: `Is ${name} a CPA firm?`,
        a: `No. ${name} is not a registered CPA firm and does not provide attest services such as audits, reviews, or compilations.`,
      },
      {
        q: 'What happens to BUILD?',
        a: 'BUILD continues as a peer community and practical method for business owners, founded by Josh and facilitated by Josh and Matt.',
      },
      {
        q: 'Where are you located?',
        a: `We have offices in Cuyahoga Falls and Elyria and work with owners across ${region}, in person and remotely.`,
      },
    ],

    closingHeading: 'Let’s talk about what is next for your business.',
    closingBody: 'Whether you have worked with one of us for years or are meeting us for the first time, we would be glad to hear where things stand.',
  };
}
