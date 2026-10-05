// Copy for the standalone church page at /church/. It is not linked from the menu, footer, or Home.
// Written for an explicitly Christian audience. Same house rules as the rest of the site: no prices,
// no guaranteed outcomes, no client names, and no tax preparation or attest services.
// Scripture quotations are from the New International Version (NIV).

export default function churchContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    title: `Church Consulting and Fractional CFO in ${region} | ${name}`,
    description: `Pastor coaching, fractional CFO support, and financial stewardship for churches and ministries in Akron, Cleveland, Cuyahoga Falls, Elyria, and ${region}.`,
    serviceType: 'Church leadership and financial consulting',
    eyebrow: `For churches and ministries in ${region}`,
    headline: 'Keep the mission at the center, and the church behind it healthy.',
    lead:
      'Pastors are called to shepherd people, not to carry the budget, the staff structure, and the board report alone. Josh Muller and Matt LaFleur are committed Christians with hands-on leadership experience in ministry. We help church leaders lead well, steward resources faithfully, and make the decisions in front of them with clarity.',
    verse: {
      text: 'Plans fail for lack of counsel, but with many advisers they succeed.',
      ref: 'Proverbs 15:22',
    },

    situationsHeading: 'Where church leaders bring us in',
    situationsIntro: 'If any of these sound familiar, a conversation is a good place to start.',
    situations: [
      'The pastor is carrying the vision, the staff, and the finances with too little support.',
      'Giving is changing, and you are not sure what it means for next year’s budget.',
      'Your board, elders, or finance team want reports they can understand and trust.',
      'You are weighing a building project, a new staff hire, a new campus, or a capital campaign.',
      'A pastoral transition or succession is on the horizon.',
      'The books are behind, or only one faithful volunteer understands how they work.',
    ],

    servicesHeading: 'How we serve churches',
    servicesIntro:
      'Some churches need a coach for their pastor and leadership team. Some need financial clarity. Many need both, working together.',
    services: [
      {
        lane: 'Led by Josh',
        title: 'Pastor and leadership team coaching',
        body: 'Support for senior pastors, executive pastors, and staff and elder teams carrying real responsibility.',
        items: [
          'One-to-one coaching for pastors and ministry leaders',
          'Leadership team and elder board facilitation',
          'Vision, planning, and strategic retreats',
          'Staff structure, roles, and accountability',
          'Healthy rhythms that protect the people doing the work',
        ],
      },
      {
        lane: 'Led by Matt',
        title: 'Fractional CFO and financial stewardship',
        body: 'Experienced financial leadership for churches that need more than bookkeeping but not a full-time executive.',
        items: [
          'Budgets, forecasts, and cash planning built around the ministry calendar',
          'Giving trends explained in plain language',
          'Designated and restricted funds tracked and reported correctly',
          'Board and congregational reports people can actually read',
          'Internal controls sized to your church, from offering counts to approvals',
          'Financial planning for building projects and capital campaigns',
        ],
      },
      {
        lane: 'Led by Matt',
        title: 'Bookkeeping and financial operations',
        body: 'Clean, reliable books and routines that do not depend on one person.',
        items: [
          'Catching up and cleaning up the books',
          'Setting up fund accounting the right way',
          'Month-end close and review routines',
          'Connecting church management software, giving platforms, and accounting',
          'Supporting the volunteers and staff who keep the books',
        ],
        note: 'Tax preparation and attest services (audits, reviews, and compilations) are not part of this service. When a church needs an independent audit, we help it get ready and work alongside the audit firm.',
      },
      {
        lane: 'Josh and Matt together',
        title: 'Integrated church advisory',
        body: 'For the decisions where the people side and the numbers side of ministry meet.',
        items: [
          'Planning a building project, expansion, or new campus',
          'Deciding when and how to add staff',
          'Preparing for a pastoral transition or succession',
          'Aligning staff, elders, and finance team around one plan',
          'Planning for a season of change in giving or attendance',
        ],
      },
    ],

    valuesHeading: 'What you can expect from us',
    values: [
      { title: 'Ministry first', body: 'The numbers serve the mission, never the other way around.' },
      { title: 'Faithful stewardship', body: 'Every dollar given to your church is an act of worship. We help you handle it with care and transparency.' },
      { title: 'Honest counsel', body: 'We tell you what we see, with grace, and help you decide what to do about it.' },
      { title: 'Shared faith', body: 'We are believers ourselves. We respect your theology, your polity, and the way your church makes decisions.' },
    ],
    stewardshipVerse: {
      text: 'Now it is required that those who have been given a trust must prove faithful.',
      ref: '1 Corinthians 4:2',
    },

    stepsHeading: 'How we work with your church',
    steps: [
      { title: 'Listen first', body: 'Hear from the pastor and key leaders about the mission, the people, and what is weighing on you.' },
      { title: 'Find the useful facts', body: 'Look at the people, structures, and finances that bear on the decision in front of you.' },
      { title: 'Choose the next steps', body: 'Agree on priorities and owners in a way your staff, elders, or board can affirm.' },
      { title: 'Walk alongside', body: 'If we work together, we stay with you, revisit the plan, and adjust as the ministry grows and changes.' },
    ],

    peopleHeading: 'Who you would work with',

    faq: [
      {
        q: 'Do you work with churches of every denomination?',
        a: 'We are glad to serve Christian churches and ministries across traditions. We respect your theology, your polity, and your governance structure, and we work within them.',
      },
      {
        q: 'What size of church is a good fit?',
        a: 'Church plants, small and midsize congregations, and larger churches with growing staff can all be a good fit. Christian schools and ministries can be a good fit too.',
      },
      {
        q: 'Can you work with our volunteer treasurer or part-time bookkeeper?',
        a: 'Yes. Our goal is to strengthen the people already serving your church, not replace them. We can work alongside volunteers and staff and help them succeed.',
      },
      {
        q: 'Do you prepare taxes or perform audits?',
        a: `No. ${name} is not a registered CPA firm and does not provide tax preparation or attest services such as audits, reviews, or compilations. We can help you prepare for an audit and work alongside your audit firm.`,
      },
      {
        q: 'Will you keep our church’s matters confidential?',
        a: 'Yes. Conversations about your staff, your people, and your finances stay confidential.',
      },
      {
        q: 'Where do you serve?',
        a: `We have offices in Cuyahoga Falls and Elyria and serve churches across ${region}, in person and remotely.`,
      },
    ],

    closingHeading: 'You do not have to carry it alone.',
    closingBody:
      'Tell us about your church and what is weighing on you. We will start with a conversation, with no obligation.',
    closingVerse: {
      text: 'Carry each other’s burdens, and in this way you will fulfill the law of Christ.',
      ref: 'Galatians 6:2',
    },
  };
}
