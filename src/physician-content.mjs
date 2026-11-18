// Copy for /physician-practices/: business help for physician-owners of concierge, direct primary care, and hybrid
// practices. Drafted 2026-11-18 at Matt's direction from the Practice Owner Edition planning documents.
// Published 2026-11-18 at Matt's direction; updated the same day to match the Premium Medicine strategy: the full offer
// ladder (Practice Plan, Owner Freedom Program, BUILD Physician Owners forum, practice manager track, intensives).
// Prices stay off the site; fees are shared after a first conversation.
// Positioning: complements physician networks and alliances; never clinical care, billing, coding, or compliance.
// House style: no prices, no promised results, no statistics, no client names, no em dashes.

export default function physicianContent(site) {
  const name = site.siteName;

  return {
    physicianPractices: {
      title: `Business Coaching for Physician Practice Owners | ${name}`,
      description: 'Business coaching, fractional CFO support, and leadership development for physician-owners of concierge, direct primary care, and hybrid practices.',
      serviceType: 'Business coaching and fractional CFO services for physician practice owners',
      eyebrow: 'For physician-owners of concierge, direct primary care, and hybrid practices',
      headline: 'Build the practice of your dreams, and the life that goes with it.',
      lead: 'You went private to practice medicine the right way. We help physician-owners get unstuck on the business side, find more freedom, and take their practice where they want it to go.',
      answer: `${name} helps physician-owners of concierge, direct primary care, and hybrid practices get unstuck, find more freedom, and build the practice they want, by working on the three things that decide it: the owner, the people, and the numbers. Matt LaFleur, a CPA and fractional CFO, Josh Muller, a Certified EOS Implementer who built and sold his own company, and Greg Snyder, a Certified Working Genius Facilitator, work alongside a practice’s existing advisors, never on clinical care, billing, or compliance.`,
      dated: true,
      hideDate: true,
      button: 'Talk about your practice',

      whyHeading: 'Why physician-owners work with us',
      why: [
        { name: 'One crew for the owner, the people, and the numbers', body: 'A CPA and fractional CFO, a Certified EOS Implementer who built and sold his own company, and a Certified Working Genius Facilitator, working as one team instead of three separate advisors.' },
        { name: 'We know your world', body: 'We work alongside the networks and alliances physicians already trust, and we presented to physician-owners at the Private Physicians Alliance 2026 Annual Meeting.' },
        { name: 'Built for leaders, not just operations', body: 'Better systems matter. So does who you are becoming as an owner. We develop both, so the practice serves your calling and your life.' },
      ],

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

      howHeading: 'The path',
      howIntro: 'Start wherever you are. Each step builds on the one before it.',
      how: [
        { title: 'Owner Freedom Assessment', body: 'A free, 10-minute self-check on six areas, from your numbers to your own week.', key: 'assessment', linkText: 'Take it now' },
        { title: 'Practice Plan', body: 'Your goals, your team, and three years of your numbers, turned into a one-page plan for the next 12 months.' },
        { title: 'Owner Freedom Program', body: 'Twelve months of owner coaching, a monthly numbers review, a Working Genius team map and workshop, and quarterly leadership sessions.' },
        { title: 'BUILD Physician Owners', body: 'A confidential forum of eight physician-owners from non-competing markets, meeting monthly, with an annual in-person retreat.', anchor: 'pp-forum', linkText: 'About the forum' },
        { title: 'Practice manager forum', body: 'A companion peer forum for the operators who run your practice day to day, planned for 2027.' },
        { title: 'Intensives and retreats', body: 'Owner intensives at physician meetings, and retreats for practice leadership teams.', key: 'speaking', linkText: 'Speaking and sessions' },
      ],

      forumHeading: 'BUILD Physician Owners',
      forumTag: 'Founding forum now forming',
      forumBody: 'Owning a practice can be lonely. BUILD Physician Owners puts you in a room with seven other physician-owners who understand the work, keep each other’s confidences, and hold each other to the commitments they make.',
      forumItems: [
        'Eight owners per forum, from markets that do not compete',
        'A 90-minute session each month: each practice’s numbers and life, a deep dive on one member’s real issue, a leadership topic, and commitments',
        'An annual in-person retreat to plan the year ahead',
        'Facilitated by Josh Muller or Greg Snyder, with Matt LaFleur on the numbers',
        'Signed confidentiality, and never any patient information',
      ],
      forumButton: 'Ask about a founding seat',
      forumSubject: 'BUILD Physician Owners founding forum',

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
        { q: 'What does it cost?', a: 'Every engagement is scoped to the practice, from a single Practice Plan to a full year of work and a forum seat. We share clear fees after a first conversation, before anything begins.' },
        { q: 'How do we get started?', a: 'Take the free Owner Freedom Assessment, or start with a 20-minute conversation with Matt or Josh about where the business side costs you the most time.' },
      ],
      closingHeading: 'Practice medicine the way you meant to, and own a practice that gives you the life you want.',
      closingBody: 'Start with a 20-minute conversation about where the business side of your practice costs you the most time. No pitch, and a practical next step either way.',
      credit: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group; Working Genius is a trademark of The Table Group. EOS® is a registered trademark of EOS Worldwide.',
    },
  };
}
