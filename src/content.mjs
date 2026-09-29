// Public copy for every page. Edit words here; layout lives in src/pages.mjs.
// The business name comes from site.config.mjs, so never type it directly into this file.
// House style: plain English, no em dashes, no guaranteed outcomes, no claims that the
// practice has formally combined, no prices.

export default function content(site) {
  const name = site.siteName;

  return {
    home: {
      title: `${name} | Coaching and financial clarity for owners`,
      description:
        'Coaching, financial clarity, and practical operating guidance for owners of growing, owner-led businesses in Northeast Ohio. Start with a conversation.',
      eyebrow: 'For owners building the next stage',
      headline: 'Build a stronger business with clearer numbers and better decisions.',
      lead:
        'Running a business asks a lot of you. Josh Muller brings coaching and leadership experience from building a company himself. Matt LaFleur brings financial clarity and practical operating guidance. Together, they help owners turn what is happening in the business into a plan they can act on.',
      audience:
        'For owners and leadership teams of owner-led companies, especially trades, construction, and service businesses.',
      situationsHeading: 'When the business needs more than another report or another opinion.',
      situations: [
        'Your team is growing, but decisions still come back to you.',
        'You have financial reports, but not a clear view of what to do next.',
        'You are deciding what to change, what to protect, and who should own the next step.',
        'You want an experienced thinking partner who understands both the people and the numbers.',
      ],
      pillarsHeading: 'Two perspectives. One practical path forward.',
      pillarsIntro: 'Start with the part of the business that needs attention first. You do not need all three.',
      pillars: [
        {
          title: 'Coaching and leadership',
          body: 'Work through the decisions, habits, team dynamics, and accountability that shape how the business runs.',
          anchor: 'coaching',
          linkText: 'More about coaching and leadership',
        },
        {
          title: 'Financial clarity',
          body: 'See what the numbers mean, strengthen forecasting and reporting, and use them to make timely decisions.',
          anchor: 'financial-clarity',
          linkText: 'More about financial clarity',
        },
        {
          title: 'Operating support',
          body: 'Connect the plan to a manageable cadence, clear owners, and the financial processes that support it.',
          anchor: 'financial-operations',
          linkText: 'More about operating support',
        },
      ],
      integratedHeading: 'The people side and the numbers side belong in the same conversation.',
      integratedBody: [
        'Josh and Matt can work with an owner together when leadership, operations, and financial decisions intersect. They can also start in the part of the business that needs attention first.',
        'The engagement should fit the actual decision in front of you.',
      ],
      integratedLink: 'See how an engagement comes together',
      peopleHeading: 'The people you would work with',
      peopleLink: 'Read about Josh and Matt',
      closingHeading: 'You do not have to solve the next chapter alone.',
      closingBody: 'Tell us what you are building and where you are getting stuck. We will start with a conversation.',
    },

    services: {
      title: `Services | ${name}`,
      description:
        'Business coaching and leadership, fractional CFO support, bookkeeping and financial operations, and integrated advisory for owner-led businesses.',
      eyebrow: 'Services',
      headline: 'Start with your most pressing question.',
      lead:
        'Some owners need a coach. Some need a clearer financial picture. Many need both, with a practical way to turn insight into action.',
      sections: [
        {
          id: 'coaching',
          lane: 'Led by Josh',
          title: 'Business coaching and leadership',
          body: [
            'Coaching for owners and facilitation for leadership teams. Josh draws on his own experience building and selling a company, and on his work with owners and teams since.',
          ],
          listHeading: 'Work can include',
          items: [
            'One-to-one owner coaching',
            'Leadership team facilitation',
            'Planning conversations and planning sessions',
            'Decision support on hard calls',
            'Accountability for the commitments you make',
          ],
        },
        {
          id: 'financial-clarity',
          lane: 'Led by Matt',
          title: 'Financial clarity and fractional CFO support',
          body: [
            'Advisory and outsourced finance support for owners who want to understand financial performance and use it. Fractional CFO support describes the kind of work, not a fixed title or package; the scope is set for each business.',
          ],
          listHeading: 'Work can include',
          items: [
            'Reading and explaining financial performance',
            'Budgets and forecasts, where they are useful',
            'Assessing cash and capacity',
            'Connecting financial information to specific decisions',
          ],
        },
        {
          id: 'financial-operations',
          lane: 'Led by Matt',
          title: 'Bookkeeping and financial operations',
          body: [
            'Depending on scope, support can include improving the processes behind the numbers so the information you rely on is timely and trustworthy.',
          ],
          listHeading: 'Work can include',
          items: [
            'Improving bookkeeping processes',
            'Management reporting',
            'Month-end close and review routines',
            'The information flow behind decisions',
          ],
          note: 'Tax preparation and attest services (audits, reviews, and compilations) are not part of this service menu.',
        },
        {
          id: 'integrated',
          lane: 'Josh and Matt together',
          title: 'Integrated advisory',
          body: [
            'Josh and Matt can work together on a defined owner or leadership challenge, connecting team conversations, business priorities, and financial facts.',
          ],
          listHeading: 'Examples of where this helps',
          items: [
            'Planning a key hire',
            'Improving the management cadence',
            'Preparing for a new stage of growth',
            'Understanding whether a strategy fits your capacity',
          ],
        },
      ],
      scopeHeading: 'Scope comes first',
      scope:
        'The right starting point depends on your business. We will agree on the people, questions, and work involved before an engagement begins.',
    },

    howWeWork: {
      title: `How We Work | ${name}`,
      description:
        'How an engagement starts: a real conversation, a shared picture of the business, agreed priorities, and ongoing work that adapts as the business changes.',
      eyebrow: 'How we work',
      headline: 'Start with a real conversation.',
      lead:
        'We will ask what is happening in your business, what matters most, and what you need to decide.',
      stepsHeading: 'What to expect',
      steps: [
        {
          title: 'Listen and get oriented',
          body: 'Understand the owner, the team, the business, and the question at hand.',
        },
        {
          title: 'Find the useful facts',
          body: 'Look at the people, operating patterns, and financial information that bear on the decision.',
        },
        {
          title: 'Choose the next steps',
          body: 'Agree on priorities, who is responsible, and what kind of support would help.',
        },
        {
          title: 'Stay with the work',
          body: 'If we work together, revisit the plan and adapt as the business changes.',
        },
      ],
      stepsNote: 'These are the principles we work by, not a fixed program. Every engagement is shaped around the business.',
      faqHeading: 'Common questions',
      faq: [
        {
          q: 'Do I need both advisers?',
          a: 'No. The starting scope should fit the need. You can begin with coaching or with the financial side, and bring in the other only if it helps.',
        },
        {
          q: 'What size of company is a good fit?',
          a: 'We focus on owner-led businesses of roughly 5 to 50 people, where the owner is still close to the big decisions. That is a focus, not a rule. If you are outside that range, reach out anyway.',
        },
        {
          q: 'What happens on the first call?',
          a: 'It is a conversation about what you need and whether we are a good fit. We will ask questions and share how we might help. It is not a free assessment or a sales pitch.',
        },
        {
          q: 'Do you only work with construction businesses?',
          a: 'No. Trades, construction, and service companies are familiar territory, but other owner-led firms can be a good fit too.',
        },
        {
          q: 'Do you work with businesses outside Northeast Ohio?',
          a: 'Yes. We are based in Northeast Ohio, and much of the work can happen remotely.',
        },
      ],
    },

    about: {
      title: `About Josh Muller and Matt LaFleur | ${name}`,
      description:
        'Meet Josh Muller, business coach and former construction company owner, and Matt LaFleur, CPA and financial and operating adviser.',
      eyebrow: 'About',
      headline: 'Building a better business means working with the owner, the team, and the facts at the same time.',
      togetherHeading: 'Why the two of us',
      together: [
        'Josh helps owners and teams see the human and leadership side of the next move. Matt brings the financial and operating view.',
        `${name} brings those two perspectives into one relationship, so a sound decision connects to the work required to carry it out.`,
      ],
      whoHeading: 'Who we work with',
      who:
        'Owners and leadership teams of owner-led businesses, typically 5 to 50 people, especially in the trades, construction, and service industries. Our home base is Northeast Ohio, and much of the work can also happen remotely.',
      valuesHeading: 'What we care about',
      values: [
        { title: 'Honest conversations', body: 'We say what we see, respectfully, and expect the same from you.' },
        { title: 'Useful facts', body: 'Decisions are better when the people and the numbers are both on the table.' },
        { title: 'Work that fits', body: 'The engagement should fit your business, not a template.' },
        { title: 'Nobody builds alone', body: 'Nobody should have to build a business alone, or make its hardest decisions alone.' },
      ],
      buildHeading: 'BUILD',
      buildBody:
        'Josh also convenes BUILD, a peer community where business owners learn from one another. It is associated with Josh’s work and is open to owners whether or not they work with us.',
      buildLink: 'About BUILD',
    },

    build: {
      title: `BUILD owner community | ${name}`,
      description:
        'BUILD brings business owners together to learn from one another, ask better questions, and form useful relationships.',
      eyebrow: 'BUILD',
      headline: 'Never build alone.',
      lead:
        'BUILD brings owners together to learn from one another, ask better questions, and form useful relationships.',
      valuesHeading: 'What BUILD stands for',
      values: [
        'Building relationships',
        'Lifting each other up',
        'Building trust',
        'Building better businesses',
        'Building a better life',
      ],
      relationHeading: 'How BUILD relates to our advisory work',
      relation: [
        'BUILD is a peer community convened by Josh Muller. It is associated with Josh’s work, and it is separate from advisory engagements.',
        'You do not need to take part in BUILD before working with us, and you do not need to be a client to take part in BUILD.',
      ],
      linkIntro: 'Current gatherings and details are published on the Maple Creek Coaching site.',
    },

    contact: {
      title: `Contact | ${name}`,
      description:
        'Tell us what you are working through. Email Josh Muller and Matt LaFleur to start a conversation about leadership, the numbers, or the way the business runs.',
      eyebrow: 'Contact',
      headline: 'Tell us what you are working through.',
      lead:
        'Whether the first question is about leadership, the numbers, or the way the business runs, we can start with a conversation.',
      howHeading: 'Send us a note',
      how: 'A few sentences about your business and what prompted you to reach out are enough. Your email goes to both Josh and Matt.',
      buttonText: 'Email Josh and Matt',
      copyText: 'Copy email addresses',
      copiedText: 'Copied',
      includeHeading: 'Helpful to include',
      include: [
        'What your business does and roughly how many people work in it',
        'What prompted you to reach out now',
        'Whether the question feels more like leadership, the numbers, or both',
        'The best way and time to reach you',
      ],
      privacyNote:
        'Please do not send account numbers, tax documents, or other sensitive files by email. We will agree on a secure way to share anything like that if we work together.',
    },

    notFound: {
      title: `Page not found | ${name}`,
      description: 'The page you were looking for could not be found. Find services, how we work, and contact details here.',
      headline: 'We could not find that page.',
      lead: 'The link may be out of date, or the address may have a typo. These pages are a good place to pick things back up.',
    },
  };
}
