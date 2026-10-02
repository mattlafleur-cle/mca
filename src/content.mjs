// Public copy for every page. Edit words here; layout lives in src/pages.mjs.
// The business name comes from site.config.mjs, so never type it directly into this file.
// House style: plain English, no em dashes, no guaranteed outcomes, no claims that the
// practice has formally combined, no prices.

import servicePages from './service-pages.mjs';

export default function content(site) {
  const name = site.siteName;

  return {
    ...servicePages(site),
    home: {
      title: `Business Coaching and Fractional CFO in Northeast Ohio | ${name}`,
      description:
        'Business coaching, advisory, and fractional CFO services for owners and entrepreneurs in Akron, Cleveland, Cuyahoga Falls, Elyria, and Northeast Ohio.',
      eyebrow: 'Business coaching, advisory, and fractional CFO in Northeast Ohio',
      headline: 'Build a stronger business with clearer numbers and better decisions.',
      lead:
        'Josh Muller brings coaching and leadership from building a company himself. Matt LaFleur brings financial clarity and practical operating guidance. Together, they help owners and entrepreneurs see where the business stands and build a plan to get where they want to go.',
      audience:
        'For business owners and entrepreneurs who feel stuck and want a clear next step, whatever the industry.',
      situationsHeading: 'When the business needs more than another report or another opinion.',
      chooserEyebrow: 'Where are you stuck?',
      chooserIntro: 'Pick the one that sounds most like your week. Each one points to a sensible place to start.',
      // Each situation links to the Services section where that work usually starts.
      situations: [
        { text: 'Your team is growing, but decisions still come back to you.', page: 'coaching', start: 'Business coaching' },
        { text: 'You have financial reports, but not a clear view of what to do next.', page: 'fractionalCfo', start: 'Fractional CFO support' },
        { text: 'You are deciding what to change, what to protect, and who should own the next step.', anchor: 'financial-operations', start: 'Operating support' },
        { text: 'You want an experienced thinking partner who understands both the people and the numbers.', page: 'advisory', start: 'Business advisory' },
      ],
      chooserStartLabel: 'Start with',
      chooserUnsure: 'Not sure which one fits? That is what the first conversation is for.',
      pillarsHeading: 'Two perspectives. One practical path forward.',
      pillarsIntro: 'Start with the part of the business that needs attention first. You do not need all three.',
      pillars: [
        {
          title: 'Coaching and leadership',
          body: 'Work through the decisions, habits, team dynamics, and accountability that shape how the business runs.',
          page: 'coaching',
          linkText: 'More about business coaching',
        },
        {
          title: 'Financial clarity',
          body: 'See what the numbers mean, strengthen forecasting and reporting, and use them to make timely decisions.',
          page: 'fractionalCfo',
          linkText: 'More about fractional CFO support',
        },
        {
          title: 'Operating support',
          body: 'Connect the plan to a manageable cadence, clear owners, and the financial processes that support it.',
          anchor: 'financial-operations',
          linkText: 'More about operating support',
        },
      ],
      stagesEyebrow: 'Wherever the business is right now',
      stagesHeading: 'Every stage asks new questions of the owner.',
      stagesIntro:
        'Owner-led businesses tend to move through four stages. At each one, the hard questions show up on both the people side and the numbers side.',
      stagesPeopleLabel: 'People side',
      stagesNumbersLabel: 'Numbers side',
      // Stage names follow the business stages Josh uses in his BUILD work.
      stages: [
        {
          name: 'Startup',
          summary: 'Build the foundation and get traction.',
          people: 'Who do you need beside you, and what can only you do?',
          numbers: 'Are the books set up to tell you whether this is working?',
        },
        {
          name: 'Grow up',
          summary: 'Strengthen systems, team, and offers.',
          people: 'Which decisions should stop coming back to you?',
          numbers: 'Which work makes money, and which only keeps you busy?',
        },
        {
          name: 'Scale up',
          summary: 'Increase impact, revenue, and reach.',
          people: 'Can your leaders carry the next level without you in every room?',
          numbers: 'Can cash and capacity support the growth you are planning?',
        },
        {
          name: 'Hand off',
          summary: 'Build a business that runs without you.',
          people: 'Who leads when you step back, and are they ready?',
          numbers: 'Would the financials hold up for a buyer, a successor, or a lender?',
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
      title: `Business Coaching, Advisory, and Fractional CFO | ${name}`,
      description:
        'Business coaching, fractional CFO support, bookkeeping and financial operations, and integrated business advisory for owner-led businesses across Northeast Ohio.',
      eyebrow: 'Services',
      headline: 'Start with your most pressing question.',
      lead:
        'Some owners need a coach. Some need a clearer financial picture. Many need both, with a practical way to turn insight into action.',
      sections: [
        {
          id: 'coaching',
          page: 'coaching',
          pageLinkText: 'Business coaching in detail',
          cta: 'Talk through a leadership question',
          emailSubject: 'Coaching and leadership',
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
            'Strategic planning retreats for owners and leadership teams',
            'Decision support on hard calls',
            'Accountability for the commitments you make',
          ],
        },
        {
          id: 'financial-clarity',
          page: 'fractionalCfo',
          pageLinkText: 'Fractional CFO services in detail',
          cta: 'Talk through your numbers',
          emailSubject: 'Financial clarity',
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
          cta: 'Talk through your financial operations',
          emailSubject: 'Bookkeeping and financial operations',
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
          page: 'advisory',
          pageLinkText: 'Business advisory in detail',
          cta: 'Talk through a decision with both of us',
          emailSubject: 'Working with Josh and Matt together',
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
      emailPrompt: 'Prefer to write? Email Josh and Matt',
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
          q: 'Do you work with businesses in my industry?',
          a: 'Very likely. We work with owner-led businesses across many industries. What matters most is an owner who wants to make better decisions and is ready to act on them.',
        },
        {
          q: 'Where are you located, and do you work outside Northeast Ohio?',
          a: 'We have offices in Cuyahoga Falls and Elyria and work with owners across Northeast Ohio. Much of the work can also happen remotely, so owners elsewhere are welcome too.',
        },
      ],
    },

    about: {
      title: `About Josh Muller and Matt LaFleur | ${name}`,
      description:
        'Meet Josh Muller, business coach and former construction company owner, and Matt LaFleur, a CPA and financial and operating adviser.',
      eyebrow: 'About',
      headline: 'Building a better business means working with the owner, the team, and the facts at the same time.',
      togetherHeading: 'Why the two of us',
      together: [
        'Josh helps owners and teams see the human and leadership side of the next move. Matt brings the financial and operating view.',
        `${name} brings those two perspectives into one relationship, so a sound decision connects to the work required to carry it out.`,
      ],
      whoHeading: 'Who we work with',
      who:
        'Business owners, entrepreneurs, and leadership teams of owner-led companies, typically 5 to 50 people, in any industry. We have offices in Cuyahoga Falls and Elyria, work across Northeast Ohio, and much of the work can also happen remotely.',
      valuesHeading: 'What we care about',
      values: [
        { title: 'Honest conversations', body: 'We say what we see, respectfully, and expect the same from you.' },
        { title: 'Useful facts', body: 'Decisions are better when the people and the numbers are both on the table.' },
        { title: 'Work that fits', body: 'The engagement should fit your business, not a template.' },
        { title: 'Nobody builds alone', body: 'Nobody should have to build a business alone, or make its hardest decisions alone.' },
      ],
      buildHeading: 'BUILD',
      buildBody:
        'Josh created BUILD (Business United in Leadership Development), and Matt facilitates it with him. BUILD combines a peer community of owners with a practical method, the Five A’s. It is open to owners whether or not they work with us.',
      buildLink: 'About BUILD',
    },

    build: {
      title: `BUILD: a room, a method, and a guide | ${name}`,
      description:
        'BUILD combines a peer community of business owners with a practical method, the Five A’s, led by Josh Muller and Matt LaFleur.',
      eyebrow: 'BUILD',
      headline: 'Never build alone.',
      lead:
        'BUILD is a room, a method, and a guide. Owners meet peers who understand the work, use a practical method to decide what comes next, and get guidance from people who have done it.',
      promiseHeading: 'The promise',
      promise:
        'BUILD exists to help business owners grow stronger businesses and stronger leaders through community, accountability, education, and strategic relationships.',
      partsHeading: 'Three parts that work together',
      parts: [
        { title: 'A room', body: 'Regular gatherings where owners trade honest ideas with peers who carry the same weight.' },
        { title: 'A method', body: 'The Five A’s, a simple sequence for turning what is happening in the business into action.' },
        { title: 'A guide', body: 'Josh and Matt facilitate the work: guides, not heroes, who hand you the map and point out the cliff.' },
      ],
      roomHeading: 'The room',
      roomIntro: 'BUILD meets around Northeast Ohio in a few formats, so owners can join the way that fits their week.',
      roomNote: 'Dates, places, and details change, so check the current schedule on the BUILD website.',
      methodHeading: 'The method: the Five A’s',
      methodIntro: 'Every BUILD room, and much of the deeper work, follows the same five steps.',
      method: [
        { title: 'Awareness', body: 'Get the truth on the table.' },
        { title: 'Analysis', body: 'Sort what matters from what is noise.' },
        { title: 'Alignment', body: 'Put it on a timeline everyone can see.' },
        { title: 'Action', body: 'One owner, one date, one definition of done.' },
        { title: 'Accountability', body: 'Keep score in the open.' },
      ],
      toolboxHeading: 'The BUILD Toolbox',
      toolbox:
        'Sixty-five practical tools for the problems owners run into. Each one is written the same way: what it is, when to run it, how to run it, what you end up holding, what to watch out for, and where it came from.',
      guideHeading: 'The guides',
      guides: [
        { name: 'Josh Muller', role: 'Founder', body: 'Josh created BUILD after building and selling a construction business of his own. He helps owners ask better questions, tackle what is holding them back, and lead with purpose.' },
        { name: 'Matt LaFleur', role: 'Facilitator', body: 'Matt brings the financial and operating view to the room, helping owners turn big ideas into clear priorities and practical next steps.' },
      ],
      retreatHeading: 'Retreat to Advance',
      retreat: 'Once a year, BUILD steps away for two days to work through all Five A’s at full depth: take stock of the season, distill what matters, and reset the year ahead.',
      journeyHeading: 'How owners get involved',
      journey: [
        { title: 'Learn', body: 'Hear about BUILD from another owner, a referral, or online.' },
        { title: 'Attend', body: 'Come to a breakfast, lunch, happy hour, or workshop. There is no commitment.' },
        { title: 'Engage', body: 'Keep showing up, use the method and the tools, and build real relationships.' },
        { title: 'Lead and give', body: 'In time, help host a gathering, mentor another owner, or share what you have learned.' },
      ],
      valuesHeading: 'What BUILD stands for',
      values: [
        'Building relationships',
        'Lifting each other up',
        'Building trust',
        'Building better businesses',
        'Building a better life',
      ],
      relationHeading: 'How BUILD and Maple Creek Advisors fit together',
      relation: [
        'BUILD and Maple Creek Advisors share the same people and the same practical approach. In BUILD, owners work through it together, with peers in the room. In an advisory engagement, Josh and Matt work through it with one owner or one leadership team, on that business’s own decisions and numbers.',
        'Either can come first. You do not need to take part in BUILD before working with us, and you do not need to be a client to take part in BUILD.',
      ],
      linkIntro: 'The current schedule, the Toolbox, and more are on the BUILD website.',
    },
    contact: {
      title: `Contact ${name} | Cuyahoga Falls and Elyria, Ohio`,
      description:
        'Schedule an intro conversation or email Josh Muller and Matt LaFleur about leadership, the numbers, or the way your business runs.',
      eyebrow: 'Contact',
      headline: 'Tell us what you are working through.',
      lead:
        'Whether the first question is about leadership, the numbers, or the way the business runs, we can start with a conversation.',
      bookHeading: 'Pick a time to talk',
      book: (length) =>
        `Choose a time for a ${length} intro conversation about your business and whether we are a good fit. You will get a calendar invitation right away.`,
      writeHeading: 'Prefer to write?',
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
