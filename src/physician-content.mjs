// Copy for /physician-practices/: business help for physician-owners of concierge, direct primary care, and hybrid
// practices. Published 2026-11-18; rebuilt the same day as a visual-first page (Matt's direction): about half the
// words, a journey diagram, the three-lane diagram, icon cards, a staircase for the path, a timeline, and folded FAQs.
// The substance search engines and AI assistants read stays in the HTML: the answer, the FAQs (also in FAQ data),
// and every diagram's labels are real text, not images.
// Positioning: complements physician networks and alliances; never clinical care, billing, coding, or compliance.
// House style: no prices, no promised results, no statistics, no client names, no em dashes.

export default function physicianContent(site) {
  const name = site.siteName;

  return {
    physicianPractices: {
      title: `Business Coaching for Physician Practice Owners | ${name}`,
      description: 'Business coaching, fractional CFO support, and leadership development for physician-owners of concierge, direct primary care, and hybrid practices.',
      serviceType: 'Business coaching and fractional CFO services for physician practice owners',
      eyebrow: 'Concierge · Direct primary care · Hybrid',
      headline: 'Build the practice of your dreams, and the life that goes with it.',
      lead: 'For physician-owners of membership practices. Get unstuck, find more freedom, and take your practice where you want it to go.',
      answer: `${name} helps physician-owners of concierge, direct primary care, and hybrid practices get unstuck, find more freedom, and build the practice they want. A CPA and fractional CFO, an EOS Implementer, and a Certified Working Genius Facilitator work on the owner, the people, and the numbers together, never on clinical care, billing, or compliance.`,
      dated: true,
      hideDate: true,
      button: 'Talk about your practice',

      journeyHeading: 'Where we take you',
      journey: [
        { label: 'Stuck', line: 'Every decision runs through you.' },
        { label: 'Unstuck', line: 'Clear numbers. Clear roles.' },
        { label: 'Free', line: 'Your time, back in your hands.' },
        { label: 'Your destination', line: 'The practice and life you want.' },
      ],

      whyHeading: 'Why us',
      why: [
        { icon: 'lanes', name: 'One crew, three disciplines', line: 'The owner, the people, and the numbers, handled together.' },
        { icon: 'stage', name: 'We know your world', line: 'Presenters at the Private Physicians Alliance 2026 Annual Meeting.' },
        { icon: 'compass', name: 'Leaders, not just systems', line: 'We grow you as an owner, not only the practice.' },
      ],

      helpHeading: 'What we work on',
      help: [
        { icon: 'owner', name: 'The owner', items: ['Fewer decisions on your desk', 'The hours you want', 'Growth as a leader'] },
        { icon: 'people', name: 'The people', items: ['A clear owner for every role', 'A manager with real authority', 'People on the right work'] },
        { icon: 'numbers', name: 'The numbers', items: ['Panel fill and capacity', 'Renewals and margin per member', 'Cash you can plan around'] },
      ],

      howHeading: 'The path',
      howIntro: 'Start anywhere. Each step builds on the last.',
      how: [
        { title: 'Owner Freedom Assessment', line: 'Free, 10 minutes.', key: 'assessment', linkText: 'Take it' },
        { title: 'Practice Plan', line: 'Your next 12 months on one page.' },
        { title: 'Owner Freedom Program', line: 'A year of coaching and monthly numbers.' },
        { title: 'BUILD Physician Owners', line: 'A forum of eight peers.', anchor: 'pp-forum', linkText: 'See the forum' },
        { title: 'Practice manager forum', line: 'Peers for your operator, from 2027.' },
        { title: 'Intensives and retreats', line: 'Time away to plan big.', key: 'speaking', linkText: 'Sessions' },
      ],
      guideLink: { key: 'guide-membership-practice-numbers', text: 'Guide: the five numbers that decide a membership practice’s health' },

      forumTag: 'Founding forum now forming',
      forumHeading: 'BUILD Physician Owners',
      forumLine: 'Eight physician-owners from non-competing markets, growing as leaders together.',
      forumFacts: ['8 owners', 'Monthly, 90 minutes', 'Annual retreat', 'Confidential'],
      forumButton: 'Ask about a founding seat',
      forumSubject: 'BUILD Physician Owners founding forum',

      towardHeading: 'What we work toward',
      towardNote: 'Goals, not promises.',
      toward: [
        { when: '90 days', line: 'A clear read on your numbers and your week.' },
        { when: 'Year one', line: 'Decisions made on data, and time back.' },
        { when: 'Years two to five', line: 'Room to add a partner, take a sabbatical, or plan succession.' },
      ],

      proof: 'Matt LaFleur and Greg Snyder presented Working Genius to physician-owners at the Private Physicians Alliance 2026 Annual Meeting.',
      proofLink: { key: 'speaking', text: 'Our speaking' },

      teamHeading: 'Who you work with',
      team: [
        { id: 'matt', line: 'CPA and fractional CFO' },
        { id: 'josh', line: 'EOS Implementer who built and sold his own company' },
        { id: 'greg', line: 'Certified Working Genius Facilitator' },
      ],

      faqHeading: 'Questions',
      faq: [
        { q: 'Who do you work with?', a: 'Physician-owners and practice managers of concierge, direct primary care, and hybrid membership practices, from solo physicians to small groups.' },
        { q: 'Do you help with billing, coding, or compliance?', a: 'No. Those belong with healthcare attorneys and the billing and compliance specialists you already use. We focus on the business: the numbers, the team, and the owner’s leadership.' },
        { q: 'We are part of a physician network or alliance. Does this overlap?', a: 'It is meant to complement it. Networks and alliances provide brand, purchasing power, benchmarking, and peer connection. We work inside your practice on your numbers, your team, and you as its leader.' },
        { q: 'Do you work with practices outside Ohio?', a: 'Yes. We are based in Northeast Ohio and work with practices anywhere, mostly by video, with in-person sessions and retreats when they help.' },
        { q: 'What does it cost?', a: 'Every engagement is scoped to the practice, from a single Practice Plan to a full year of work and a forum seat. We share clear fees after a first conversation, before anything begins.' },
        { q: 'How do we get started?', a: 'Take the free Owner Freedom Assessment, or start with a 20-minute conversation with Matt or Josh about where the business side costs you the most time.' },
      ],
      closingHeading: 'Practice medicine the way you meant to.',
      closingBody: 'Start with a 20-minute conversation. No pitch, and a practical next step either way.',
      credit: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group; Working Genius is a trademark of The Table Group. EOS® is a registered trademark of EOS Worldwide.',
    },
  };
}
