// Copy for the standalone golf cart industry page at /carts/. Not linked from the menu, footer, or Home.
// Same house rules as the rest of the site: no prices, no guaranteed outcomes, no client names,
// no claims of specific golf cart industry history that the founders have not provided.

export default function cartsContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    seed: 27,
    title: `Golf Cart Business Advisory and Fractional CFO | ${name}`,
    description: `Coaching, fractional CFO, and operating advisory for golf cart dealers, builders, service shops, and accessory businesses in ${region} and beyond.`,
    serviceType: 'Golf cart business advisory and fractional CFO services',
    eyebrow: 'For golf cart dealers, builders, and service businesses',
    headline: 'Run a stronger golf cart business, in season and out.',
    lead:
      'Golf cart businesses juggle inventory, a busy service bay, parts and accessories, customer financing, and a selling season that can arrive all at once. Josh Muller brings leadership and coaching experience from building and selling a company of his own. Matt LaFleur brings CFO-level financial clarity. Together, we help owners see which parts of the business make money, plan for the seasons, and build a team that does not need the owner in every decision.',

    situationsHeading: 'Where golf cart owners bring us in',
    situationsIntro: 'If any of these sound familiar, a conversation is a good place to start.',
    situations: [
      'Spring arrives and sales, service, and accessory orders all hit at once.',
      'Inventory and floor plan costs are tying up cash you need somewhere else.',
      'You are not sure which side of the business really makes money: new carts, used carts, service, parts, or accessories.',
      'The service department is busy, but it is hard to tell whether it is profitable.',
      'Every decision still runs through the owner.',
      'You are weighing a new location, a new brand, a rental fleet, or building your own carts.',
      'You are planning for growth, a partner change, or an eventual sale.',
    ],

    // Season timeline: qualitative intensity (1 to 4) by month. Illustrative, not data.
    season: {
      eyebrow: 'The golf cart year',
      heading: 'Twelve months, one selling season.',
      intro: 'A typical Northeast Ohio year. Every business is a little different, but the shape is familiar: most of the year is spent preparing for a few very busy months.',
      months: [
        ['Jan', 1], ['Feb', 1], ['Mar', 2], ['Apr', 3], ['May', 4], ['Jun', 4],
        ['Jul', 4], ['Aug', 3], ['Sep', 2], ['Oct', 2], ['Nov', 1], ['Dec', 1],
      ],
      phases: [
        { span: 2, name: 'Plan', body: 'Set targets, order inventory, and train the team.' },
        { span: 2, name: 'Ramp up', body: 'Preorders, prep, and staffing for spring.' },
        { span: 3, name: 'Peak season', body: 'Sales, deliveries, and a full service bay.' },
        { span: 2, name: 'Steady', body: 'Service, accessories, and used carts.' },
        { span: 3, name: 'Off-season', body: 'Storage, winter service, and the next plan.' },
      ],
      note: 'Illustrative. We help you plan cash, inventory, and staffing around your own calendar.',
    },

    departmentsHeading: 'Five businesses under one roof',
    departmentsIntro: 'Each part of a golf cart business has its own margins, inventory, and people needs. We help you see how each one performs.',
    departments: [
      { name: 'New carts', body: 'Inventory, floor plan cost, and gross profit per unit.' },
      { name: 'Used carts', body: 'Trade-ins, reconditioning, and how fast units turn.' },
      { name: 'Service', body: 'Technician time, scheduling, and the busy-season backlog.' },
      { name: 'Parts', body: 'Stock levels, turns, and what sits on the shelf.' },
      { name: 'Accessories', body: 'Pricing, attach rates, and custom builds.' },
    ],

    servicesHeading: 'How we serve golf cart businesses',
    servicesIntro:
      'Some owners need a coach and a stronger leadership team. Some need CFO-level guidance on inventory, cash, and margins. Many need both, working together.',
    services: [
      {
        lane: 'Led by Josh',
        title: 'Owner coaching and leadership',
        body: 'For owners who want a business that runs well when they step out of the showroom or the shop.',
        items: [
          'One-to-one owner coaching',
          'Building a leadership team across sales, service, and parts',
          'Clear roles, handoffs, and accountability',
          'Hiring, training, and staffing ahead of the busy season',
          'Planning sessions and strategic retreats',
        ],
      },
      {
        lane: 'Led by Matt',
        title: 'Fractional CFO for golf cart businesses',
        body: 'Experienced financial leadership for businesses that have outgrown basic bookkeeping but do not need a full-time CFO.',
        items: [
          'Profitability by department: new, used, service, parts, and accessories',
          'Inventory and floor plan planning',
          'Seasonal cash flow forecasting for the slow months and the spring rush',
          'Pricing and margins for carts, accessories, and custom builds',
          'Key numbers such as units sold, gross profit per unit, service hours, and parts turns',
          'Preparing for conversations with lenders, manufacturers, and partners',
        ],
      },
      {
        lane: 'Led by Matt, with Josh',
        title: 'Dealer and shop operations',
        body: 'Practical systems that keep sales, service, and parts moving together.',
        items: [
          'A sales process that carries cleanly from first visit to delivery',
          'Service department workflow and technician productivity',
          'Parts and accessory inventory that turns instead of sitting',
          'Warranty, follow-up, and repeat customer routines',
          'A weekly and monthly management rhythm with the right numbers in front of the team',
        ],
        note: 'Tax preparation and attest services (audits, reviews, and compilations) are not part of these services.',
      },
      {
        lane: 'Josh and Matt together',
        title: 'Growth, building, and expansion',
        body: 'For the bigger decisions where the people side and the numbers side meet.',
        items: [
          'Evaluating a new location, brand, or territory',
          'Adding rental, fleet, or commercial accounts such as courses, campgrounds, and communities',
          'Building or customizing your own carts: costing, capacity, and pricing',
          'Preparing for a sale, a partner change, or succession',
        ],
      },
    ],

    valuesHeading: 'Why golf cart owners work with us',
    valuesIntro:
      'Golf cart businesses are owner-led businesses with a few twists: seasonality, inventory, and a service side that can make or break the year. That is familiar ground for an owner-operator and a CFO.',
    values: [
      { title: 'Built for owner-led businesses', body: 'Josh built and sold a company. We know what it is like when the owner carries everything.' },
      { title: 'Both sides of the business', body: 'Leadership and the numbers in the same conversation, so plans hold up in the showroom and on the balance sheet.' },
      { title: 'Seasonal realism', body: 'Plans that account for the slow months and the spring rush, not just an average year.' },
      { title: 'Straight talk', body: 'We tell you what we see and help you decide what to do about it.' },
    ],

    stepsHeading: 'How we work with your business',
    steps: [
      { title: 'Listen and get oriented', body: 'Understand the owner, the team, the business, and the season you are in.' },
      { title: 'Find the useful facts', body: 'Look at sales, service, parts, inventory, cash, and the people behind them.' },
      { title: 'Choose the next steps', body: 'Agree on priorities with clear owners, dates, and a definition of done.' },
      { title: 'Stay with the work', body: 'If we work together, we revisit the plan through the year and adjust as the seasons change.' },
    ],

    peopleHeading: 'Who you would work with',

    faq: [
      {
        q: 'Do you only work with dealers?',
        a: 'No. Dealers, builders and customizers, service and repair shops, parts and accessory businesses, and rental and fleet operators can all be a good fit.',
      },
      {
        q: 'What does a fractional CFO do for a golf cart business?',
        a: 'A fractional CFO helps you understand which parts of the business make money, plan inventory and cash around the seasons, price carts, accessories, and service well, and prepare for conversations with lenders and partners, on a part-time basis.',
      },
      {
        q: 'Is the off-season a good time to start?',
        a: 'Often, yes. The slower months are a good time to plan, fix systems, and set up the team before spring. We can also help in the middle of a busy season.',
      },
      {
        q: 'Do you prepare taxes or perform audits?',
        a: `No. ${name} is not a registered CPA firm and does not provide tax preparation or attest services such as audits, reviews, or compilations.`,
      },
      {
        q: 'Do you work outside Northeast Ohio?',
        a: `Yes. We have offices in Cuyahoga Falls and Elyria and work with owners across ${region}. Much of the work can happen remotely, so golf cart businesses elsewhere are welcome too.`,
      },
    ],

    closingHeading: 'Get ready for your next season now.',
    closingBody:
      'Tell us about your business and what you want the next season to look like. We will start with a conversation.',
  };
}
