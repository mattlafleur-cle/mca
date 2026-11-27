// Public copy for every page. Edit words here; layout lives in src/pages.mjs.
// The business name comes from site.config.mjs, so never type it directly into this file.
// House style: plain English, no em dashes, no guaranteed outcomes, no claims that the
// practice has formally combined, no prices.

import servicePages from './service-pages.mjs';
import churchContent from './church-content.mjs';
import cartsContent from './carts-content.mjs';
import sellContent from './sell-content.mjs';
import clientsContent from './clients-content.mjs';
import announcementContent from './announcement-content.mjs';
import brandsContent from './brands-content.mjs';
import growContent from './grow-content.mjs';
import workingGeniusContent from './working-genius-content.mjs';
import workingGeniusGuides from './working-genius-guides-content.mjs';
import jtecContent from './jtec-content.mjs';
import timeBackContent from './time-back-content.mjs';
import speakingContent from './speaking-content.mjs';
import noAlumniContent from './no-alumni-content.mjs';
import profitContent from './profit-content.mjs';
import assessmentContent from './assessment-content.mjs';
import guidesContent from './guides-content.mjs';
import physicianContent from './physician-content.mjs';
import eventsContent from './events-content.mjs';

export default function content(site) {
  const name = site.siteName;

  return {
    ...servicePages(site),
    ...growContent(site),
    ...workingGeniusContent(site),
    ...workingGeniusGuides(site),
    ...timeBackContent(site),
    ...speakingContent(site),
    ...noAlumniContent(site),
    ...profitContent(site),
    ...assessmentContent(site),
    ...guidesContent(site),
    ...physicianContent(site),
    ...eventsContent(site),
    church: churchContent(site),
    carts: cartsContent(site),
    sell: sellContent(site),
    clients: clientsContent(site),
    announcement: announcementContent(site),
    brands: brandsContent(site),
    jtec: jtecContent(site),
    onboarding: {
      title: `Client Onboarding | ${name}`,
      description: `Onboarding questions for new ${name} clients. It takes about four minutes, and only Josh and Matt see the answers.`,
      eyebrow: 'Client onboarding',
      headline: 'Welcome. Let\u2019s get you set up.',
      fallback: 'Form not loading?',
      fallbackLink: 'Open it in a new tab',
      help: 'Questions about the form? Email',
    },
    home: {
      title: `Business Coaching and Financial Clarity in Northeast Ohio | ${name}`,
      description:
        'Business coaching, advisory, and fractional CFO services for owners and entrepreneurs in Akron, Cleveland, Cuyahoga Falls, Elyria, and Northeast Ohio.',
      eyebrow: 'Business coaching, advisory, and absolute financial clarity in Northeast Ohio',
      headline: 'Build a stronger business with better decisions and financial clarity.',
      lead:
        'Together, we help owners and entrepreneurs see where the business stands and build a plan to get where they want to go.',
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
        { text: 'Good people are in the wrong seats, or work keeps stalling between them.', page: 'workingGenius', start: 'The 6 Types of Working Genius' },
        { text: 'The business is growing, and so is the chaos.', page: 'growBusiness', start: 'EOS and an operating rhythm' },
      ],
      chooserStartLabel: 'Start with',
      chooserUnsure: 'Not sure which one fits? That is what the first conversation is for.',
      toolsEyebrow: 'Tools for owners',
      eventsHeading: 'Upcoming events',
      events: [
        { key: 'workshop', date: 'Tue, Dec 15', time: '9:00 AM to noon', name: 'Working Genius Workshop', line: 'A hands-on morning for small business owners and leaders. Includes your own assessment and report.', cta: 'Details and registration' },
        { key: 'holidayParty', date: 'Thu, Dec 17', time: '4:00 to 7:00 PM', name: 'Holiday Party with BUILD', line: 'Celebrate the year with business owners and leaders from across the region.', cta: 'Details and RSVP' },
      ],
      eventsPlace: 'Both at The Commons, Cuyahoga Falls',
      toolsHeading: 'Three quick ways to look at your business differently.',
      toolsIntro: 'Each takes a few minutes and runs entirely in your browser. We never see your answers.',
      tools: [
        { key: 'assessment', name: 'Owner Freedom Assessment', question: 'Does your business give you the life you want?', body: 'Rate 25 statements in about ten minutes and see where you stand on six areas, with a first step for the two that need it most.', cta: 'Take the Owner Freedom Assessment' },
        { key: 'timeBack', name: 'Owner Freedom Calculator', question: 'How much of your life is your business consuming?', body: 'Compare the hours you work with the hours you would choose, and see what the gap adds up to over a year.', cta: 'Try the Owner Freedom Calculator' },
        { key: 'profit', name: 'Profit Levers Calculator', question: 'What could a small improvement do for your bottom line?', body: 'Explore how changes in pricing, direct costs, or overhead could affect your estimated operating profit.', cta: 'Try the Profit Levers Calculator' },
      ],
      pillarsHeading: 'Multiple perspectives. One practical path forward.',
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
      integratedHeading: 'The owner, the people, and the numbers belong in the same conversation.',
      integratedBody: [
        'Most owners who feel stuck are carrying the business on their own shoulders. We start there: helping you step out of the middle of every decision, putting the right people on the right work, and making the numbers clear enough to guide what comes next.',
        'Josh, Greg, and Matt can work on all three together, or start where the business needs attention first.',
      ],
      integratedLink: 'See how an engagement comes together',
      peopleHeading: 'The people you would partner with',
      peopleLink: 'Read about Josh and Matt',
      closingHeading: 'You do not have to solve the next chapter alone.',
      closingBody: 'Tell us what you are building and where you are getting stuck. We will start with a conversation.',
    },

    services: {
      title: `Services: Coaching, EOS, Working Genius, Fractional CFO | ${name}`,
      description:
        'Business coaching, EOS, Working Genius, team and culture work, fractional CFO support, and help selling a business, for owner-led companies in Northeast Ohio.',
      eyebrow: 'Services',
      headline: 'Start with your most pressing question.',
      lead:
        'Some owners need a coach. Some need a clearer financial picture. Many need both, with a practical way to turn insight into action.',
      // Answer-first summary under the hero (what search snippets and AI answers quote).
      answer: `${name} helps the owners of owner-led businesses with both the people side and the numbers side of running a company: business coaching and EOS, team and culture work including The 6 Types of Working Genius, fractional CFO support and financial operations, custom retreats, and help selling a business. Josh Muller, Matt LaFleur, and Greg Snyder lead the work, on their own or together, for owners across Northeast Ohio.`,
      // Dated automatically from content changes (src/page-dates.json); shown in search data only, not on the page.
      dated: true,
      hideDate: true,

      // At a glance: every offer grouped by the owner's need. Each item links to its detail page (key) or,
      // where there is no detail page, to its section on this page (anchor).
      glanceHeading: 'Everything we offer, at a glance',
      glanceIntro: 'Find the need that sounds most like yours. Each one links to the details.',
      glance: [
        {
          need: 'Leadership and coaching',
          line: 'For the owner and the leadership team.',
          items: [
            { text: 'Business coaching', key: 'coaching' },
            { text: 'EOS with a Certified EOS Implementer', key: 'growBusiness' },
            { text: 'Retreat to Advance: custom retreats', anchor: 'retreats' },
            { text: 'Keynotes, workshops, and team sessions', key: 'speaking' },
          ],
        },
        {
          need: 'Your team',
          line: 'The right people, on the right work.',
          items: [
            { text: 'The 6 Types of Working Genius', key: 'workingGenius' },
            { text: 'Ideal Team Player hiring', key: 'growTeam' },
            { text: 'Culture and team building with Greg', anchor: 'team' },
          ],
        },
        {
          need: 'Your numbers',
          line: 'Numbers you trust, and know what to do with.',
          items: [
            { text: 'Fractional CFO support', key: 'fractionalCfo' },
            { text: 'Bookkeeping and financial operations', key: 'growFinance' },
          ],
        },
        {
          need: 'How the business runs',
          line: 'Growth without more chaos.',
          items: [
            { text: 'The Time-Rich Company framework', key: 'growBusiness' },
            { text: 'Systems and processes that work together', key: 'growBusiness' },
          ],
        },
        {
          need: 'What comes next',
          line: 'The decisions that shape the next chapter.',
          items: [
            { text: 'Selling your business', key: 'sell' },
            { text: 'Integrated advisory across all of these', key: 'advisory' },
          ],
        },
        {
          need: 'Physician practices',
          line: 'For owners of concierge, direct primary care, and hybrid practices.',
          items: [
            { text: 'Business help for physician practice owners', key: 'physicianPractices' },
            { text: 'Guide: five numbers every membership practice owner should know', key: 'guide-membership-practice-numbers' },
          ],
        },
      ],
      toolsLine: 'Not sure yet? Try a free tool first:',
      toolsLinks: [
        { key: 'assessment', text: 'Owner Freedom Assessment' },
        { key: 'timeBack', text: 'Owner Freedom Calculator' },
        { key: 'profit', text: 'Profit Levers Calculator' },
      ],
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
            'Working Genius team assessments and workshops',
          ],
          moreLinks: [{ page: 'workingGenius', text: 'The 6 Types of Working Genius for your team' }],
        },
        {
          id: 'operating-system',
          page: 'growBusiness',
          pageLinkText: 'EOS and the Time-Rich Company framework in detail',
          cta: 'Talk through how the business runs',
          emailSubject: 'EOS and operating rhythm',
          lane: 'Led by Josh',
          title: 'EOS and an operating rhythm',
          body: [
            'Josh Muller is a Certified EOS Implementer with deep experience running businesses on EOS. He teaches leadership teams the Entrepreneurial Operating System (EOS\u00ae) and helps them use it to grow without more chaos. Our Time-Rich Company framework helps teams cut wasted time and spend their best hours on the work that matters most.',
          ],
          listHeading: 'Work can include',
          items: [
            'One clear vision the leadership team agrees on and can share',
            'Quarterly Rocks, a weekly Scorecard, and a weekly meeting that solves issues',
            'Clear ownership of every seat',
            'Time-Rich Company sessions in a half-day, full-day, or five-week format',
          ],
          note: 'EOS\u00ae and Entrepreneurial Operating System\u00ae are registered trademarks of EOS Worldwide.',
        },
        {
          id: 'retreats',
          cta: 'Talk about a retreat',
          emailSubject: 'Retreat to Advance',
          title: 'Retreat to Advance',
          body: [
            'Custom retreat programming for owners and leadership teams, in any length, format, or style. Step away to go deeper: take stock, distill what matters, and set the path ahead.',
          ],
          listHeading: 'Retreats can include',
          items: [
            'A clear look at where the business and the team stand',
            'Time to decide what matters most for the season ahead',
            'Planning the leadership team leaves with and owns',
          ],
          externalLink: 'retreat',
          externalLinkText: 'Retreat to Advance details on the BUILD website',
        },
        {
          id: 'team',
          page: 'growTeam',
          pageLinkText: 'Growing your team in detail',
          cta: 'Talk through a team question',
          emailSubject: 'Team and culture',
          lane: 'Led by Greg',
          title: 'Team, culture, and Working Genius',
          body: [
            'Greg Snyder, a Certified Working Genius Facilitator, leads our team and culture work. We help owners put people on the work that gives them energy, hire people who are humble, hungry, and people smart, and build a culture that holds up as the business grows.',
          ],
          listHeading: 'Work can include',
          items: [
            'Working Genius assessments, team maps, and workshops',
            'Ideal Team Player assessments and interview questions',
            'Culture and team-building work with leaders and teams',
            'A coaching plan for the gaps the work uncovers',
          ],
          moreLinks: [{ page: 'workingGenius', text: 'The 6 Types of Working Genius' }],
          note: 'The 6 Types of Working Genius and The Ideal Team Player are models created by Patrick Lencioni and The Table Group.',
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
          page: 'growFinance',
          pageLinkText: 'Financial operations in detail',
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
        {
          id: 'selling',
          page: 'sell',
          pageLinkText: 'Selling your business in detail',
          cta: 'Talk confidentially about selling',
          emailSubject: 'Selling my business',
          lane: 'Josh and Matt together',
          title: 'Selling your business',
          body: [
            'Exit planning, advice through a sale, or full representation from the first buyer conversation to closing. Josh built and sold a company of his own; Matt prepares the financial side a buyer will examine.',
          ],
          listHeading: 'Work can include',
          items: [
            'Value and sale readiness review',
            'Reducing owner dependence before a sale',
            'Financial due diligence preparation',
            'Reviewing offers and negotiating terms',
            'Confidential marketing to qualified buyers',
            'Managing the sale through closing and transition',
          ],
        },
      ],
      emailPrompt: 'Prefer to write? Email us',
      scopeHeading: 'Scope comes first',
      scope:
        'The right starting point depends on your business. We will agree on the people, questions, and work involved before an engagement begins.',
      faqHeading: 'Common questions',
      faq: [
        {
          q: 'Which service is right for my business?',
          a: 'Start with the question in front of you: a leadership decision, a team problem, unclear numbers, or the next chapter of the business. A 20-minute conversation with Josh or Matt is usually enough to recommend a sensible starting point, and you do not need every service to get value from one.',
        },
        {
          q: 'How is the work scoped and priced?',
          a: 'We agree on the scope, cadence, and fees before work begins, so there are no surprises. Engagements are shaped around your business, not a fixed package.',
        },
        {
          q: 'Who will I work with?',
          a: `Josh Muller leads coaching, EOS, and leadership work. Matt LaFleur, a CPA licensed in Ohio and California, leads fractional CFO and financial operations work. Greg Snyder, a Certified Working Genius Facilitator, leads team and culture work. When a challenge touches more than one area, they work on it together.`,
        },
        {
          q: 'How do the services fit together?',
          a: 'Most hard decisions in an owner-led business have a people side and a numbers side. You can start with one service and add another when it helps, or have Josh, Matt, and Greg work on a defined challenge together, so the team plan and the financial plan move in the same direction.',
        },
        {
          q: 'Do you only work in Northeast Ohio?',
          a: 'Our offices are in Cuyahoga Falls and Elyria, and we work with owners across Northeast Ohio in person and remotely. Much of the work can also happen remotely for owners farther away.',
        },
        {
          q: 'Do you prepare taxes or perform audits?',
          a: `No. ${name} is not a registered CPA firm and does not provide tax preparation or attest services such as audits, reviews, or compilations.`,
        },
        {
          q: 'Is there a way to start before talking with you?',
          a: 'Yes. The Owner Freedom Calculator compares the hours you work with the hours you would choose, and the Profit Levers Calculator explores how pricing and cost changes could affect your estimated operating profit. Both are free and run in your browser; we never see your answers.',
        },
      ],
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
      title: `About Josh Muller, Matt LaFleur, and Greg Snyder | ${name}`,
      description:
        'Meet Josh Muller, business coach and former construction company owner; Matt LaFleur, CPA and fractional CFO; and Greg Snyder, Certified Working Genius Facilitator.',
      eyebrow: 'About',
      headline: 'Building a better business means working with the owner, the team, and the facts at the same time.',
      togetherHeading: 'Why work with us',
      noAlumniLine: 'Josh, Matt, and Greg also lead No Alumni.',
      noAlumniLink: 'How Maple Creek Advisors and No Alumni fit together',
      together: [
        'Josh helps owners get unstuck and lead the next move. Greg puts the right people on the right work. Matt brings the financial and operating view.',
        `${name} brings the owner, the people, and the numbers into one relationship, so a sound decision connects to the work required to carry it out.`,
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
        'Josh created BUILD (Business United in Leadership Development), and Matt facilitates it with him. BUILD combines a peer community of owners with a practical method. It is open to owners whether or not they work with us.',
      buildLink: 'About BUILD',
    },

    build: {
      title: `BUILD: a room, a method, and a guide | ${name}`,
      description:
        'BUILD combines a peer community of business owners with a practical method, led by Josh Muller and Matt LaFleur.',
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
        { title: 'A method', body: 'A practical method for turning what is happening in the business into action.' },
        { title: 'A guide', body: 'Josh and Matt facilitate the work: guides, not heroes, who hand you the map and point out the cliff.' },
      ],
      roomHeading: 'The room',
      roomIntro: 'BUILD meets around Northeast Ohio in a few formats, so owners can join the way that fits their week.',
      roomNote: 'Dates, places, and details change, so check the current schedule on the BUILD website.',
      guideHeading: 'The guides',
      guides: [
        { name: 'Josh Muller', role: 'Founder', body: 'Josh created BUILD after building and selling a construction business of his own. He helps owners ask better questions, tackle what is holding them back, and lead with purpose.' },
        { name: 'Matt LaFleur', role: 'Facilitator', body: 'Matt brings the financial and operating view to the room, helping owners turn big ideas into clear priorities and practical next steps.' },
      ],
      retreatHeading: 'Retreat to Advance',
      retreat: 'Custom retreat programming for owners and leadership teams, in any length, format, or style. Step away to go deeper: take stock, distill what matters, and set the path ahead.',
      retreatLink: 'Retreat to Advance details on the BUILD website',
      journeyHeading: 'How owners get involved',
      journey: [
        { title: 'Learn', body: 'Hear about BUILD from another owner, a referral, or online.' },
        { title: 'Attend', body: 'Come to a breakfast, lunch, happy hour, or workshop. There is no commitment.' },
        { title: 'Engage', body: 'Keep showing up, put a practical method to work, and build real relationships.' },
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
      linkIntro: 'The current schedule and more are on the BUILD website.',
    },
    contact: {
      title: `Contact ${name} | Cuyahoga Falls and Elyria, Ohio`,
      description:
        'Schedule an intro conversation or email Josh Muller and Matt LaFleur at Maple Creek Advisors about leadership, the numbers, or the way your business runs.',
      eyebrow: 'Contact',
      headline: 'Tell us what you are working through.',
      lead:
        'Whether the first question is about leadership, the numbers, or the way the business runs, we can start with a conversation.',
      bookHeading: 'Pick a time to talk',
      book: (length) =>
        `Choose a time for a ${length} intro conversation about your business and whether we are a good fit. You will get a calendar invitation right away.`,
      writeHeading: 'Prefer to write?',
      howHeading: 'Send us a note',
      how: 'A few sentences about your business and what prompted you to reach out are enough.',
      buttonText: 'Email us',
      copyText: 'Copy email address',
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
