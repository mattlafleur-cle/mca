// Copy for the three "Grow" pages: /grow-your-team/, /grow-your-business/, /grow-financial-ops/.
// Adapted on 2026-11-10 from offer copy Matt shared (written for real estate teams) to owner-led businesses generally.
// Same house rules as the rest of the site: no prices, no guaranteed outcomes, no client names, no em dashes.
// Every offer button opens the booking link (bookingUrl in site.config.mjs).

export default function growContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    // Order and short labels for the switcher shown at the top of each Grow page.
    growOrder: [
      { key: 'growTeam', short: 'Team' },
      { key: 'growBusiness', short: 'Business' },
      { key: 'growFinance', short: 'Financial ops' },
    ],

    // Shared panel at the foot of every Grow page.
    discovery: {
      tag: 'Not sure where to start?',
      heading: 'Start with a Mapping and Discovery Session',
      intro: 'Every business has gaps. Where they show up depends on your company’s age and stage. In one working conversation with you and your leadership team, we will:',
      list: [
        'Look at where your business is today and where you want it to go',
        'Map your leadership team’s working geniuses and frustrations',
        'Find the gaps slowing decisions, delegation, and follow-through',
        'Sketch a team design that fits the business you want to build',
      ],
      button: site.bookingUrl && site.bookingLength ? `Book a ${site.bookingLength} call` : '',
      note: 'Help first, no pitch. You will leave with a practical next step, whether or not we ever work together.',
    },
    otherHeading: 'More ways to grow',

    growTeam: {
      step: 1,
      title: `Grow Your Team: Working Genius and Ideal Team Players | ${name}`,
      description: `The 6 Types of Working Genius and Ideal Team Player hiring for owner-led businesses in ${region}: the right people, on the right work.`,
      serviceType: 'Team development and recruiting',
      eyebrow: 'Grow your team',
      headline: 'The right people, on the right work.',
      lead: 'Most team problems are fit problems: good people stuck in work that drains them, or hires who were never the right fit. We help you see where energy and fit are missing, and fix both.',
      offers: [
        {
          tag: 'Team energy',
          heading: 'The 6 Types of Working Genius',
          body: 'Put your leaders, sales team, and operations staff on the work that gives them energy, and stop losing good people to the work that drains them.',
          list: [
            'Assessments for your whole team, from leadership to sales, service, and operations',
            'A team map that shows where work stalls between handoffs, and which geniuses are missing',
            'A working session that turns the map into real who-does-what changes',
          ],
          button: 'Bring Working Genius to your team',
        },
        {
          tag: 'Recruiting',
          heading: 'Recruit Ideal Team Players',
          body: 'Patrick Lencioni’s Ideal Team Player model looks for three virtues: humble, hungry, and people smart. We help you recruit people who bring all three, and grow them in the team you already have.',
          list: [
            'Ideal Team Player assessments that show where each person stands today',
            'Recruiting and interview questions built around humble, hungry, and smart',
            'A coaching plan for the gaps, so fewer hires go sideways',
          ],
          button: 'Recruit better with us',
        },
      ],
      credit: 'The 6 Types of Working Genius and The Ideal Team Player are models created by Patrick Lencioni and The Table Group.',
    },

    growBusiness: {
      step: 2,
      title: `Grow Your Business: EOS, Time-Rich Teams, and Systems | ${name}`,
      description: `EOS, the Time-Rich Company framework, and practical systems and AI for owner-led businesses in ${region}: growth without more chaos.`,
      serviceType: 'Business operating system, productivity, and systems consulting',
      eyebrow: 'Grow your business',
      headline: 'Growth that does not come with more chaos.',
      lead: 'Clear goals, a simple plan, and steady accountability, so the business can grow without running you into the ground.',
      offers: [
        {
          tag: 'Operating system',
          heading: 'Run your team on EOS®',
          body: 'We’re EOS certified, so we can teach your leadership team the Entrepreneurial Operating System (EOS®) and help you use it to scale your business.',
          list: [
            'One clear vision your leadership team agrees on and can share',
            'Quarterly Rocks, a weekly Scorecard on the numbers that drive the business, and a weekly meeting that solves issues instead of circling them',
            'Clear ownership of every seat, from the leadership team to the front line',
          ],
          button: 'Learn EOS with us',
        },
        {
          tag: 'Productivity',
          heading: 'Become a Time-Rich Team',
          body: 'Running a business can take every evening and weekend if you let it. Our Time-Rich Company framework helps your team cut wasted time and spend its best hours on customers and the work that matters most.',
          list: [
            'Goals built on outcomes, not hours',
            'Meeting, handoff, and follow-up resets that hand time back every week',
            'A half-day, full-day, or five-week format that fits your schedule',
          ],
          button: 'Get your time back',
        },
        {
          tag: 'Systems and technology',
          heading: 'Practical AI and systems for your team',
          body: 'The right systems make a business easier to run. We help you get your CRM, sales follow-up, job or project management, and marketing tools working together, and use AI where it actually saves time, without putting customer information at risk.',
          list: [
            'A review of the systems you run on, and where they leave gaps or double work',
            'Simpler workflows and automations that cut manual steps, with practical AI where it fits',
            'Clear rules for customer information and hands-on training, so your team uses what you have',
          ],
          button: 'Tighten up your systems',
        },
      ],
      credit: 'EOS® and Entrepreneurial Operating System® are registered trademarks of EOS Worldwide.',
    },

    growFinance: {
      step: 3,
      title: `Grow Your Financial Ops: Books, Cash, and Monthly Numbers | ${name}`,
      description: `Clean books, reliable cash planning, and monthly numbers you can act on, led by a CPA and fractional CFO, for owner-led businesses in ${region}.`,
      serviceType: 'Financial operations and fractional CFO services',
      eyebrow: 'Grow your financial ops',
      headline: 'Numbers you trust, and know what to do with.',
      lead: 'Growth puts weight on your books, your cash, and your reporting. We make sure the numbers keep up, and that they tell you what to do next.',
      offers: [
        {
          tag: 'Finance',
          heading: 'Financial ops you can trust',
          body: 'Clean books, reliable cash planning, and monthly numbers that tell you what to do next, led by a CPA and fractional CFO.',
          list: [
            'Books closed and reconciled on time, every month',
            'Cash planning that smooths out uneven sales and seasonal swings',
            'A monthly numbers review tied back to your sales and profit goals',
          ],
          button: 'Talk numbers with us',
          link: { key: 'fractionalCfo', text: 'More about fractional CFO services' },
        },
      ],
    },
  };
}
