// Copy for the standalone golf cart industry page at /carts/. Not linked from the menu, footer, or Home.
// Same house rules as the rest of the site: no prices, no guaranteed outcomes, no client names,
// no claims of specific golf cart industry history that the founders have not provided.

const CARTS_URL = 'https://maplecreekcarts.com/';

export default function cartsContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    seed: 27,
    title: `Golf Cart Business Advisory and Fractional CFO | ${name}`,
    description: `Coaching, fractional CFO, and operating advisory for golf cart dealers, facilities, builders, shops, and fleets, from the team behind Maple Creek Carts.`,
    serviceType: 'Golf cart business advisory and fractional CFO services',
    eyebrow: 'Advisory and fractional CFO for the golf cart industry',
    headline: 'Grow the golf cart business you have already built.',
    lead:
      'Maple Creek Carts is where golf cart businesses learn the business: a curriculum in sales, service, business operations, and leadership. This is where we apply it to yours. Josh Muller coaches owners and their managers. Matt LaFleur brings fractional CFO work that puts every department on real numbers. Same curriculum, same two people, working directly with you and your team.',
    heroLink: { href: CARTS_URL, label: 'Visit Maple Creek Carts' },

    situationsHeading: 'Eight questions every dealer principal should be able to answer',
    situationsIntro: 'A well-run golf cart business can answer each of these quickly. The ones that take longer show where to start.',
    situationsOrdered: true,
    situations: [
      'What is your gross profit per unit on new carts, and on used?',
      'Which department paid for the others last year?',
      'How long has your oldest unit been on floor plan, and what has it cost you so far?',
      'What share of your technicians\u2019 paid hours did you actually bill?',
      'How much cash do you need on hand in January to carry you through the spring rush?',
      'How much accessory revenue comes with the average new cart you deliver?',
      'Who makes the call when you are away for two weeks in July?',
      'If you sold the business in five years, what would make it worth more than it is today?',
    ],
    situationsNote: 'The full dealer scorecard on Maple Creek Carts takes about five minutes, needs no signup, and keeps your answers in your browser.',
    situationsLinks: [{ href: `${CARTS_URL}scorecard/`, label: 'Take the dealer scorecard' }],

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

    departmentsHeading: 'Four tracks, one curriculum',
    departmentsIntro: 'Our advisory work draws on the same four tracks Maple Creek Carts teaches, applied to your numbers, your people, and your season.',
    departments: [
      { name: 'Sales', body: 'Turn showroom traffic into deliveries, and deliveries into repeat customers.', link: { href: `${CARTS_URL}curriculum/#sales`, label: 'Explore the sales track' } },
      { name: 'Service', body: 'Make the service bay a profit center, not just a busy one.', link: { href: `${CARTS_URL}curriculum/#service`, label: 'Explore the service track' } },
      { name: 'Business operations', body: 'See every department clearly, and run the business on real numbers.', link: { href: `${CARTS_URL}curriculum/#operations`, label: 'Explore the operations track' } },
      { name: 'Leadership', body: 'Build a team that runs the business when you are not in the building.', link: { href: `${CARTS_URL}curriculum/#leadership`, label: 'Explore the leadership track' } },
    ],

    servicesHeading: 'Hands-on help for golf cart businesses',
    servicesIntro:
      'Maple Creek Carts offers team training, courses, field guides, and peer groups. When you want someone working directly on your business, that happens here: coaching for the people running it, fractional CFO work on the numbers, or both together.',
    services: [
      {
        lane: 'Led by Josh',
        title: 'Leadership coaching for owners and managers',
        body: 'One-to-one coaching for dealer principals, owners, and general managers, and facilitated work with leadership teams.',
        items: [
          'From owner to leader: getting decisions off the owner\u2019s desk',
          'Developing department managers in sales, service, and parts',
          'Roles and accountability',
          'A weekly meeting rhythm built around the right numbers',
          'Hiring, culture, and staffing ahead of the busy season',
          'Planning sessions and strategic retreats',
        ],
      },
      {
        lane: 'Led by Matt',
        title: 'Fractional CFO for golf cart businesses',
        body: 'Experienced financial leadership for businesses that have outgrown basic bookkeeping but do not need a full-time CFO.',
        items: [
          'Department financial statements: new, used, service, parts, and accessories',
          'Floor plan cost and inventory aging',
          'Seasonal cash planning for the slow months and the spring rush',
          'Pricing and margin targets for carts, accessories, and custom builds',
          'The weekly numbers: gross profit per unit, billed and paid hours, parts turns',
          'Preparing for conversations with lenders, manufacturers, and partners',
        ],
      },
      {
        lane: 'Led by Matt, with Josh',
        title: 'Dealer and shop operations',
        body: 'Practical systems that keep sales, service, and parts moving together.',
        items: [
          'A sales process everyone on the floor follows',
          'Accessories, service plans, and financing at the point of sale',
          'Trades and used inventory that turn instead of sitting',
          'Service labor rates, scheduling, and workflow',
          'Quality, comebacks, warranty, and parts availability',
        ],
        note: 'Tax preparation and attest services (audits, reviews, and compilations) are not part of these services.',
      },
      {
        lane: 'Josh and Matt together',
        title: 'Growth, building, and exit planning',
        body: 'For the bigger decisions where the people side and the numbers side meet.',
        items: [
          'Evaluating a new location, brand, or territory',
          'Adding rental, fleet, or commercial accounts such as courses, campgrounds, and communities',
          'Building or customizing your own carts: costing, capacity, and pricing',
          'Growth and exit planning, succession, and continuity',
        ],
      },
    ],

    audiencesHeading: 'Built for the whole industry',
    audiencesIntro: 'Leaders across the business, from the dealership showroom to the course cart barn.',
    audiences: [
      { name: 'Dealers and dealer groups', body: 'New and used sales, service, parts, and accessories, at one store or several.' },
      { name: 'Golf facility owners and operators', body: 'Courses, clubs, resorts, communities, and management companies that run cart fleets.' },
      { name: 'Manufacturers, builders, and upfitters', body: 'Production, custom builds, conversions, and dealer networks.' },
      { name: 'Service and repair shops', body: 'Independent shops and mobile service operations.' },
      { name: 'Parts and accessory businesses', body: 'Retail counters, online stores, and installers.' },
      { name: 'Rental, resort, and event fleets', body: 'Rental operators, campgrounds, resorts, and event services.' },
    ],

    // Hidden automatically after `until`.
    events: {
      until: '2027-01-30',
      eyebrow: 'Orlando, January 2027',
      heading: 'Meet us at the shows',
      intro: 'Josh and Matt will be in Orlando for both. If you are going too, set a time to sit down with us during the week.',
      items: [
        { name: 'Golf Business Conference', meta: 'January 25 to 27, 2027', body: 'Rosen Centre, Orlando, Florida', link: { href: 'https://golfbusinessconference.com/', label: 'Golf Business Conference website' } },
        { name: 'PGA Show', meta: 'January 26 to 29, 2027', body: 'Orange County Convention Center, Orlando, Florida', link: { href: 'https://www.pgashow.com/', label: 'PGA Show website' } },
      ],
    },

    stepsHeading: 'How we work with your business',
    steps: [
      { title: 'Assess', body: 'Start with a conversation, or the dealer scorecard, to see where the business is strong and where it is leaking.' },
      { title: 'Find the useful facts', body: 'Look at sales, service, parts, inventory, cash, and the people behind them.' },
      { title: 'Choose the next steps', body: 'Agree on priorities with clear owners, dates, and a definition of done.' },
      { title: 'Stay with the work', body: 'If we work together, we revisit the plan through the year and adjust as the seasons change.' },
    ],

    peopleHeading: 'Who you would work with',

    faq: [
      {
        q: 'How does this relate to Maple Creek Carts?',
        a: 'Maple Creek Carts is the education platform: the curriculum, field guides, scorecard, team training, courses, and peer groups. ${name} is where the hands-on advisory and fractional CFO work happens. Josh and Matt lead both, and many owners use the two together.',
      },
      {
        q: 'Do you only work with dealers?',
        a: 'No. Dealers, golf facilities with cart fleets, manufacturers and upfitters, service and repair shops, parts and accessory businesses, and rental and event fleets can all be a good fit.',
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

    closingHeading: 'Let\u2019s talk about where your business is headed.',
    closingBody:
      'Tell us where the business is today and where you want it to be. We will recommend where to start, here or on Maple Creek Carts.',
  };
}
