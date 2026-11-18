// Copy for /physician-practices/: business help for physician-owners of concierge, direct primary care, and hybrid
// practices. Drafted 2026-11-18 at Matt's direction from the Practice Owner Edition planning documents.
// DRAFT: unlisted and noindex until Matt approves the offer (Roadmap scope and fee, cohort details).
// Positioning: complements physician networks and alliances; never clinical care, billing, coding, or compliance.
// House style: no prices, no promised results, no statistics, no client names, no em dashes.

export default function physicianContent(site) {
  const name = site.siteName;

  return {
    physicianPractices: {
      title: `Business Coaching for Physician Practice Owners | ${name}`,
      description: 'Business coaching, fractional CFO support, and leadership development for physician-owners of concierge, direct primary care, and hybrid practices.',
      serviceType: 'Business coaching and fractional CFO services for physician practice owners',
      eyebrow: 'For concierge, direct primary care, and hybrid practices',
      headline: 'You went private to practice medicine the right way. We help with the business that came with it.',
      lead: 'Medical school trained you to be a doctor, not to run a business. We help physician-owners and their practice managers run the business side well, so you can enjoy the calling that brought you here.',
      answer: `${name} helps physician-owners of concierge, direct primary care, and hybrid practices with the business side of private medicine: the numbers, the team, and the owner’s own leadership and life. Matt LaFleur, a CPA and fractional CFO, Josh Muller, a Certified EOS Implementer who built and sold his own company, and Greg Snyder, a Certified Working Genius Facilitator, work alongside a practice’s existing advisors, never on clinical care, billing, or compliance.`,
      dated: true,
      hideDate: true,
      button: 'Talk about your practice',

      areasHeading: 'What we help with',
      areas: [
        { name: 'The numbers', items: ['Panel fill and real capacity', 'Renewals, and why members leave', 'Margin per member and cash on hand', 'A monthly numbers review you trust'] },
        { name: 'The people', items: ['Clear owners for every role', 'A practice manager with real authority', 'The right people on the right work, using The 6 Types of Working Genius', 'A weekly meeting that solves problems'] },
        { name: 'The owner', items: ['Fewer decisions that only you can make', 'Working the hours you want', 'Growth as a leader and an entrepreneur', 'A practice that fits the life you want'] },
      ],

      towardHeading: 'What we work toward',
      towardIntro: 'Every practice is different, so these are goals, not promises. They describe the direction of the work.',
      toward: [
        { when: 'First 90 days', owner: 'A clear read on your numbers and your week, and one or two decisions taken off your plate.', operator: 'Clear roles, a short list of numbers to watch, and fewer “ask the doctor” moments.' },
        { when: 'Year one', owner: 'A monthly review you trust, and growth decisions made on data, not guesswork.', operator: 'A team in the right seats and the authority to run operations.' },
        { when: 'Years two to five', owner: 'A practice that could add a partner, handle a sabbatical, or pass to a successor on your terms.', operator: 'A real career as an operator in a practice that runs well as it grows.' },
      ],

      howHeading: 'How it works',
      how: [
        { title: 'Owner Freedom Assessment', body: 'A free, 10-minute self-check on six areas, from your numbers to your own week.', key: 'assessment' },
        { title: 'A practice Roadmap', body: 'Your goals, your team, and your numbers, turned into a one-page plan for the next 12 months.' },
        { title: 'Ongoing work', body: 'Monthly coaching and numbers reviews, team sessions, and support for your practice manager.' },
        { title: 'A physician-owner peer group', body: 'A small group of practice owners from non-competing markets, meeting monthly to grow as leaders, with a retreat each year.' },
      ],

      proofHeading: 'Recent work with physicians',
      proof: 'Matt LaFleur and Greg Snyder presented “Unlocking Team Performance Through the Six Types of Working Genius” to physician-owners and practice leaders at the Private Physicians Alliance 2026 Annual Meeting in St. Petersburg, Florida.',
      proofLink: { key: 'speaking', text: 'More about our speaking' },

      othersHeading: 'What we leave to others',
      others: 'Clinical care, billing and coding, and regulatory compliance belong with the specialists your practice already trusts. We work alongside your existing advisors, networks, and alliances, and we are glad to coordinate with them.',

      leadsHeading: 'Who leads this work',
      leads: ['matt', 'josh', 'greg'],

      guideLink: { key: 'guide-membership-practice-numbers', text: 'Read the guide: the five numbers that decide a membership practice’s health' },

      faq: [
        { q: 'Who do you work with?', a: 'Physician-owners and practice managers of concierge, direct primary care, and hybrid membership practices, from solo physicians to small groups.' },
        { q: 'Do you help with billing, coding, or compliance?', a: 'No. Those belong with healthcare attorneys and the billing and compliance specialists you already use. We focus on the business: the numbers, the team, and the owner’s leadership.' },
        { q: 'We are part of a physician network or alliance. Does this overlap?', a: 'It is meant to complement it. Networks and alliances provide brand, purchasing power, benchmarking, and peer connection. We work inside your practice on your numbers, your team, and you as its leader.' },
        { q: 'Do you work with practices outside Ohio?', a: 'Yes. We are based in Northeast Ohio and work with practices anywhere, mostly by video, with in-person sessions and retreats when they help.' },
        { q: 'How do we get started?', a: 'Take the free Owner Freedom Assessment, or start with a 20-minute conversation with Matt or Josh about where the business side costs you the most time.' },
      ],
      closingHeading: 'Practice medicine the way you meant to.',
      closingBody: 'Start with a 20-minute conversation about where the business side of your practice costs you the most time. No pitch, and a practical next step either way.',
      credit: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group; Working Genius is a trademark of The Table Group. EOS® is a registered trademark of EOS Worldwide.',
    },
  };
}
