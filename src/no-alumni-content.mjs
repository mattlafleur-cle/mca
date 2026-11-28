// Copy for /no-alumni/: the counterpart to noalumni.com/maple-creek/ ("two rooms, one crew").
// Built 2026-11-15 at Matt's direction. Facts about No Alumni (offers, titles, founders) come from
// noalumni.com/maple-creek/ as read that day. Indexed; not linked from Home. Linked from About.
// Speaking is split so the two sites agree: talks for owners and leaders here; Working Genius keynotes for
// associations, schools, and workforce programs at No Alumni.
// House style: no prices, no guaranteed outcomes, no em dashes, and never the word for a corporate combination.

const NA = 'https://www.noalumni.com';

export default function noAlumniContent(site) {
  const name = site.siteName;

  return {
    noAlumni: {
      title: `${name} and No Alumni: One Crew, Two Rooms | ${name}`,
      description: `${name} and No Alumni are two separate companies led by the same crew: Josh Muller, Matt LaFleur, and Greg Snyder. Here is which one to call.`,
      eyebrow: 'Partnership',
      headline: `${name} and No Alumni: one crew, two rooms.`,
      lead: `Two separate rooms, led by the same crew: Josh Muller, Matt LaFleur, and Greg Snyder. ${name} helps owners build the business around them. No Alumni helps people and teams find the work that fits them. Same people, same values, two ways to help.`,
      answer: `${name} and No Alumni are separate Northeast Ohio companies led by the same three people. ${name} is an advisory firm for owner-led businesses: business coaching, EOS, fractional CFO support, and help selling a business. No Alumni is a company and movement that celebrates every path to success and helps teams, schools, and organizations through Working Genius, culture work, and training.`,
      dated: true,
      hideDate: true,
      visitButton: 'Visit No Alumni',
      naUrl: `${NA}/`,

      whatHeading: 'What each one does',
      rooms: [
        {
          name,
          tag: 'Coaching, financial clarity, and operating guidance',
          body: 'An advisory firm for owner-led businesses, typically 5 to 50 people, with offices in Cuyahoga Falls, Elyria, and Lakewood.',
          items: [
            'Business coaching, EOS, and leadership team facilitation',
            'Fractional CFO support and financial operations',
            'Team and culture work, including The 6 Types of Working Genius',
            'Integrated advisory and help selling a business',
            'Talks for business owners and leaders, and the BUILD owner community',
          ],
          link: { key: 'services', text: `What ${name} offers` },
        },
        {
          name: 'No Alumni',
          tag: 'Careers, culture, and team energy',
          body: 'A Northeast Ohio company and movement that celebrates every path to success and helps teams, schools, and organizations build workplaces where people thrive.',
          items: [
            'Working Genius keynotes, workshops, and team sessions',
            'Workplace culture consulting and training',
            'Practical AI consulting and upskilling',
            'The New Game Old Game podcast and community',
          ],
          href: `${NA}/what-we-offer/`,
          linkText: 'What No Alumni offers',
        },
      ],

      peopleHeading: 'Same faces, multiple solutions',
      // Titles from noalumni.com/maple-creek/ (2026-11-15) and this site's config.
      people: [
        { id: 'josh', roles: [{ org: name, title: 'Co-founder · Coaching, leadership, and vision' }, { org: 'No Alumni', title: 'Chief Visionary and Business Coach' }] },
        { id: 'matt', roles: [{ org: name, title: 'Co-founder · Financial clarity, strategy, and operations' }, { org: 'No Alumni', title: 'Co-founder · Chief Integrator and Absolute Financial Clarity' }] },
        { id: 'greg', roles: [{ org: name, title: 'Chief Culture and Team-Building Engineer' }, { org: 'No Alumni', title: 'Co-founder · Chief Executive Officer and Facilitation Master' }] },
      ],

      whyHeading: 'Why it works better together',
      why: [
        { name: 'The owner, the people, and the numbers', body: 'Culture problems show up on the financial statements, and financial pressure shows up in the culture. Across the two rooms, one crew can see the owner, the team, and the numbers, and connect them.' },
        { name: 'Working Genius at every level', body: 'Greg Snyder, a Certified Working Genius Facilitator, leads the work for both: a keynote for a whole association through No Alumni, or a leadership team working session inside a Maple Creek Advisors engagement.' },
        { name: 'Built by people who have done the work', body: 'Josh built and sold a construction company. Matt is a CPA and fractional CFO. Greg has spent more than 30 years in entrepreneurship, sales, marketing, and leadership. Both rooms rest on that experience.' },
      ],

      guideHeading: 'Which one to call',
      guide: [
        { want: 'Ongoing business coaching for an owner or leadership team', start: name, key: 'coaching' },
        { want: 'EOS for your leadership team', start: name, key: 'growBusiness' },
        { want: 'Fractional CFO support or clearer financial reporting', start: name, key: 'fractionalCfo' },
        { want: 'Help preparing to sell a business', start: name, key: 'sell' },
        { want: 'A talk for business owners and leaders: teams, owner freedom, profit, or EOS', start: name, key: 'speaking' },
        { want: 'A Working Genius keynote for an association, conference, or school', start: 'No Alumni', href: `${NA}/speaking/` },
        { want: 'A school, career, or workforce program', start: 'No Alumni', href: `${NA}/what-we-offer/` },
        { want: 'Not sure yet', start: 'Either one. You will reach the same people.' },
      ],

      faq: [
        {
          q: `Are ${name} and No Alumni the same company?`,
          a: `No. They are two separate rooms, led by the same crew: Josh Muller, Matt LaFleur, and Greg Snyder. ${name} focuses on business coaching, EOS, fractional CFO services, and advisory work for owner-led businesses. No Alumni focuses on culture, careers, and The 6 Types of Working Genius for teams, schools, and events.`,
        },
        {
          q: `Should I contact ${name} or No Alumni?`,
          a: `Contact ${name} for ongoing business coaching, EOS, fractional CFO support, advisory work, help preparing to sell a business, or a talk for owners and leaders. Contact No Alumni for a Working Genius keynote for an association or school, a career or workforce program, or anything about careers and culture. If you are not sure, contact either one. You will reach the same people.`,
        },
        {
          q: `Who founded ${name} and No Alumni?`,
          a: `Josh Muller and Matt LaFleur co-founded ${name}. Greg Snyder and Matt LaFleur co-founded No Alumni. All three work across both.`,
        },
        {
          q: 'Do both offer The 6 Types of Working Genius?',
          a: `Yes. Greg Snyder, a Certified Working Genius Facilitator, leads Working Genius work for both. ${name} uses it inside coaching and advisory work with owner-led companies. No Alumni brings it to keynotes, workshops, and team sessions for associations, schools, and organizations.`,
        },
        {
          q: `Where are ${name} and No Alumni based?`,
          a: `Both are based in Northeast Ohio. ${name} has offices in Cuyahoga Falls, Elyria, and Lakewood, and both work with clients well beyond the region.`,
        },
      ],

      closingHeading: 'One conversation is enough to start.',
      closingBody: 'Tell us what is going on with you, your team, or your business. We will point you to the right place, whichever room it lives in.',
      naCallText: 'Schedule a call with No Alumni',
      naCallUrl: 'https://fantastical.app/mattlafleur/new-game-readiness-assessment',
    },
  };
}
