// Copy for the standalone church page at /church/. It is not linked from the menu, footer, or Home.
// Written for an explicitly Christian audience. Same house rules as the rest of the site: no prices,
// no guaranteed outcomes, no client names, and no tax preparation or attest services.
// Scripture quotations are from the English Standard Version (ESV). Change `bibleVersion` to switch labels.

export default function churchContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    bibleVersion: 'ESV',
    title: `Church Leadership and Fractional CFO in ${region} | ${name}`,
    description: `Pastor coaching, church strategy and culture, fractional CFO, and fractional board support for churches and ministries across ${region}.`,
    serviceType: 'Church leadership, strategy, and fractional CFO consulting',
    eyebrow: `For churches and ministries in ${region}`,
    headline: 'Keep the mission at the center, and the church behind it healthy.',
    lead:
      'Pastors are called to shepherd people, not to carry the budget, the staff structure, and the board report alone. Josh Muller and Matt LaFleur are committed Christians who have served on church staff, as a pastor and as a church CFO, and in lay leadership. We help church leaders lead well, build healthy teams, steward resources faithfully, and make the decisions in front of them with clarity.',
    verse: {
      text: 'Without counsel plans fail, but with many advisers they succeed.',
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
      'Staff culture or team health needs attention before it affects the ministry.',
    ],

    servicesHeading: 'How we serve churches',
    servicesIntro:
      'Our focus is leadership, strategy, culture, and financial leadership. Some churches need a coach for their pastor and team. Some need CFO-level guidance or an experienced voice at the board table. Many need both, working together.',
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
          'Staff culture and team health',
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
          'Clear visibility into designated and restricted funds',
          'Board and congregational reports people can actually read',
          'Internal controls sized to your church, from offering counts to approvals',
          'Financial planning for building projects and capital campaigns',
        ],
      },
      {
        lane: 'Led by Matt, with Josh',
        title: 'Fractional board and governance support',
        body: 'An experienced outside voice at the board, elder, or finance committee table, on a schedule that fits your church.',
        items: [
          'Serving alongside your board or finance committee on a defined basis',
          'Clear financial oversight without getting lost in the weeds',
          'Board roles, policies, and decision-making that support the pastor',
          'Reserve, debt, and spending policies the whole board understands',
          'Preparing the board for major decisions and difficult seasons',
        ],
        note: 'Bookkeeping, payroll, and church accounting are handled by Forest City CPA, the firm Matt founded. Tax preparation and attest services (audits, reviews, and compilations) are not part of these services.',
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
      text: 'Moreover, it is required of stewards that they be found faithful.',
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
    people: {
      josh: 'Josh has served as a pastor and today serves in lay leadership at his church. He also built and sold a construction company, so he understands both the calling of ministry and the weight of leading an organization.',
      matt: 'Matt is a CPA and former church CFO. For more than 20 years he has been involved in professional and lay ministry, including work alongside church leaders. He helps churches see their finances clearly and steward them well.',
    },

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
        q: 'Do you handle church bookkeeping, payroll, or accounting?',
        a: 'Those services are provided by Forest City CPA, the accounting firm Matt founded, which serves churches and ministries. Maple Creek Advisors focuses on leadership, strategy, culture, and financial leadership, and works alongside your treasurer, bookkeeper, and staff.',
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
      text: 'Bear one another’s burdens, and so fulfill the law of Christ.',
      ref: 'Galatians 6:2',
    },
  };
}
