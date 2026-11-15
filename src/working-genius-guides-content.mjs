// Copy for the Working Genius guide pages under /working-genius/: one page per type, and one page per industry.
// Written 2026-11-15 at Matt's direction. Angle: owner-led businesses and what fit is worth to the business,
// so these pages do not duplicate No Alumni's Working Genius pages. Descriptions are in our own words.
// The 6 Types of Working Genius is a model and trademark of Patrick Lencioni and The Table Group.
// House style: no statistics, no client names, no promised results, no em dashes.

// Order matters: it sets the sitemap, the hub links, and the previous/next links between type pages.
export const typeSlugs = ['wonder', 'invention', 'discernment', 'galvanizing', 'enablement', 'tenacity'];
export const industrySlugs = ['construction-and-trades', 'golf-cart-dealerships', 'churches-and-ministries'];

const credit = 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group. Working Genius is a trademark of The Table Group.';

export default function workingGeniusGuides(site) {
  const name = site.siteName;
  const region = site.location.region;
  const updated = '2026-11-15';

  const type = (t) => ({
    template: 'wgType',
    credit,
    dateModified: updated,
    reviewedBy: ['matt'],
    eyebrow: `The 6 Types of Working Genius · ${t.stage}`,
    title: `The ${t.name} Working Genius in an Owner-Led Business | ${name}`,
    headline: `The ${t.name} genius in an owner-led business`,
    ...t,
  });

  const industry = (i) => ({
    template: 'wgIndustry',
    credit,
    dateModified: updated,
    reviewedBy: ['matt'],
    eyebrow: 'Working Genius by industry',
    ...i,
  });

  return {
    // ---------------------------------------------------------------- Six type pages
    'wg-wonder': type({
      slug: 'wonder', letter: 'W', name: 'Wonder', stage: 'Ideation',
      description: 'What the Wonder Working Genius looks like in an owner-led business, what it costs when no one on the team has it, and how owners can put it to work.',
      lead: 'Wonder is the first stage of all work: noticing that something could be better and asking the questions no one has asked yet.',
      answer: 'Wonder is one of The 6 Types of Working Genius. People with the Wonder genius are energized by pondering, questioning, and sensing that something in the business could be better. It sits in the Ideation stage, before any idea or plan exists, and it is often the first step in finding a problem worth solving.',
      looksLike: [
        'Asking why the business does something the way it does',
        'Noticing a customer trend, a recurring complaint, or a missed opportunity before anyone else',
        'Wanting time to think before jumping to a solution',
        'Raising questions in meetings that open up a better conversation',
      ],
      missing: [
        'The business keeps doing what it has always done, even after it stops working',
        'Problems are discovered late, when they are already expensive',
        'The owner becomes the only person who steps back and questions the direction',
      ],
      frustration: 'For someone whose frustration is Wonder, open-ended speculation can feel like wasted time. They want to know the question and get moving. That is not a flaw; it simply means wondering time should be focused, with a clear end, when they are in the room.',
      owners: [
        'Protect a little unhurried time each month for you and your leaders to ask what could be better.',
        'If your team has no one with Wonder, make it a habit: open planning meetings with one question about what is changing for your customers.',
        'Value the person who asks the inconvenient question. They are often doing the work the business needs first.',
      ],
      faq: [
        { q: 'Is Wonder just daydreaming?', a: 'No. Wonder is the productive work of noticing and questioning. Without it, a team solves the problems in front of it but misses the ones that matter most.' },
        { q: 'What does it cost a business when no one has Wonder?', a: 'Usually time and money spent on the wrong things. A team without Wonder tends to stay busy while the market, customers, or the business itself quietly changes around it.' },
      ],
    }),
    'wg-invention': type({
      slug: 'invention', letter: 'I', name: 'Invention', stage: 'Ideation',
      description: 'What the Invention Working Genius looks like in an owner-led business, what it costs when no one has it, and how owners can put it to work.',
      lead: 'Invention turns a good question into an original answer: a new idea, a fresh approach, or a solution built from scratch.',
      answer: 'Invention is one of The 6 Types of Working Genius. People with the Invention genius are energized by creating original ideas and solutions, often from a blank page. It sits in the Ideation stage, right after Wonder, and turns questions about what could be better into concrete possibilities.',
      looksLike: [
        'Sketching a new service, process, or product when a problem is named',
        'Enjoying a blank whiteboard more than a finished plan',
        'Proposing several options instead of one',
        'Getting energy from brainstorming sessions others find draining',
      ],
      missing: [
        'Problems get named over and over, but no one proposes a new way to solve them',
        'Every new idea has to come from the owner, so growth depends on one person',
        'The team copies what competitors do instead of creating what customers need',
      ],
      frustration: 'For someone whose frustration is Invention, being asked for brand-new ideas on demand can be draining. They do better reacting to an idea than producing one, and that is valuable too, especially for refining what others create.',
      owners: [
        'Notice whether you are the only source of new ideas in the business. If you are, that is a dependency worth addressing.',
        'Give inventive people a clear problem and room to explore, then bring in judgment before anything moves forward.',
        'Separate idea time from decision time, so new ideas are not judged before they are fully formed.',
      ],
      faq: [
        { q: 'Is Invention the same as being creative?', a: 'Close, but more specific. Invention is the energy for producing original solutions to a defined problem. Plenty of creative people get their energy elsewhere, such as from refining or supporting ideas.' },
        { q: 'Should every team have someone with Invention?', a: 'A team does not need every genius in one person, but it needs access to each one. If no one has Invention, the team can borrow it through planning sessions, outside help, or deliberate brainstorming habits.' },
      ],
    }),
    'wg-discernment': type({
      slug: 'discernment', letter: 'D', name: 'Discernment', stage: 'Activation',
      description: 'What the Discernment Working Genius looks like in an owner-led business, what it costs when no one has it, and how owners can put it to work.',
      lead: 'Discernment is the instinct for whether an idea will work: spotting what is promising, what is missing, and what to adjust before committing.',
      answer: 'Discernment is one of The 6 Types of Working Genius. People with the Discernment genius are energized by using intuition and judgment to evaluate ideas and plans, often sensing what will work before they can fully explain why. It sits in the Activation stage, where ideas are tested before people are asked to act on them.',
      looksLike: [
        'Quickly seeing the weak spot in a plan, and how to fix it',
        'Being the person others run ideas past before a decision',
        'Connecting patterns across customers, jobs, or past decisions',
        'Giving useful feedback without needing a formal analysis first',
      ],
      missing: [
        'Weak ideas move forward because no one stops to evaluate them',
        'Good ideas stall because no one is confident enough to say yes',
        'Every judgment call routes back to the owner, who becomes the bottleneck',
      ],
      frustration: 'For someone whose frustration is Discernment, being asked to judge ideas without data or a clear standard can feel uncomfortable. They often prefer clear criteria, and they help a team most when those criteria exist.',
      owners: [
        'If every decision comes back to you, ask whether you are the only person with Discernment, or the only one trusted to use it.',
        'Name the people on your team with good judgment and bring them into decisions earlier.',
        'Pair Discernment with numbers: an instinct about a job, product, or customer is worth checking against margins and cash.',
      ],
      faq: [
        { q: 'Is Discernment just being critical?', a: 'No. Discernment improves ideas as often as it rejects them. Its value is in judgment that helps a team commit to the right things.' },
        { q: 'How does Discernment relate to an owner being a bottleneck?', a: 'Owners often carry Discernment, so decisions naturally flow back to them. Developing and trusting judgment in others is one of the most direct ways to reduce owner dependence.' },
      ],
    }),
    'wg-galvanizing': type({
      slug: 'galvanizing', letter: 'G', name: 'Galvanizing', stage: 'Activation',
      description: 'What the Galvanizing Working Genius looks like in an owner-led business, what it costs when no one has it, and how owners can put it to work.',
      lead: 'Galvanizing gets a good idea moving: rallying people, building energy, and getting the first steps taken.',
      answer: 'Galvanizing is one of The 6 Types of Working Genius. People with the Galvanizing genius are energized by rallying, inspiring, and organizing others to take action on an idea or plan. It sits in the Activation stage, where an approved idea needs people behind it before the real work can begin.',
      looksLike: [
        'Getting the team excited and moving on a new initiative',
        'Comfortably pushing people to start, even when it is uncomfortable',
        'Recruiting the right people to help',
        'Keeping energy up in the early days of a change',
      ],
      missing: [
        'Good ideas get approved, then sit, because no one rallies people behind them',
        'Changes start slowly or not at all',
        'The owner has to personally push every initiative to get anything moving',
      ],
      frustration: 'For someone whose frustration is Galvanizing, being expected to rally and persuade others can be exhausting. They often prefer to contribute once a direction is set, which is exactly when a team needs them.',
      owners: [
        'If you are the only one who can get people moving, identify who else has Galvanizing and give them the launch of the next initiative.',
        'Pair galvanizers with tenacious finishers, so energy at the start carries through to the end.',
        'Do not mistake Galvanizing for follow-through. A great start still needs people who finish.',
      ],
      faq: [
        { q: 'Is Galvanizing the same as being a good leader?', a: 'Not exactly. Many good leaders galvanize, but leaders also need judgment, support, and follow-through. Galvanizing is specifically the energy for getting people moving.' },
        { q: 'What happens when a team has too much Galvanizing?', a: 'Lots of starts and not enough finishes. Energy goes into launching new efforts while earlier ones are left unfinished.' },
      ],
    }),
    'wg-enablement': type({
      slug: 'enablement', letter: 'E', name: 'Enablement', stage: 'Implementation',
      description: 'What the Enablement Working Genius looks like in an owner-led business, what it costs when no one has it, and how owners can put it to work.',
      lead: 'Enablement is the energy for helping: responding to what people need and making it possible for the work to move forward.',
      answer: 'Enablement is one of The 6 Types of Working Genius. People with the Enablement genius are energized by responding to a request and giving others the support and help they need to move forward. It sits in the Implementation stage, where plans become real work and people need hands, tools, and help.',
      looksLike: [
        'Saying yes to helping, and meaning it',
        'Sensing what a teammate or customer needs and providing it',
        'Being the dependable person who keeps projects supplied and unblocked',
        'Finding satisfaction in making someone else successful',
      ],
      missing: [
        'Initiatives launch, then stall for lack of hands and support',
        'People feel they are carrying the work alone',
        'Customers and teammates wait longer than they should for help',
      ],
      frustration: 'For someone whose frustration is Enablement, being constantly on call to help others can wear them down. They usually do their best work with clear ownership of a defined piece, not open-ended support.',
      owners: [
        'Recognize your enablers. Their work is easy to overlook because it makes everyone else look good.',
        'Protect enablers from becoming everyone’s default help desk, which is a common path to burnout.',
        'When you hire for support roles, look for Enablement, not just availability.',
      ],
      faq: [
        { q: 'Is Enablement just being agreeable?', a: 'No. Enablement is the energy for responding to real needs and helping work move. Strong enablers also know when to say what is needed to make help effective.' },
        { q: 'Why do enablers burn out?', a: 'Because their willingness makes them the default for every request. Without boundaries and clear priorities, the people who help most can end up overloaded.' },
      ],
    }),
    'wg-tenacity': type({
      slug: 'tenacity', letter: 'T', name: 'Tenacity', stage: 'Implementation',
      description: 'What the Tenacity Working Genius looks like in an owner-led business, what it costs when no one has it, and how owners can put it to work.',
      lead: 'Tenacity finishes the job: pushing work to completion and making sure it meets the standard it should.',
      answer: 'Tenacity is one of The 6 Types of Working Genius. People with the Tenacity genius are energized by pushing projects and tasks through to completion and seeing the impact of finished work. It sits at the end of the Implementation stage, where the last details decide whether the work actually pays off.',
      looksLike: [
        'Tracking loose ends until they are closed',
        'Holding a high standard for finished work',
        'Getting satisfaction from checking things off',
        'Being the person who makes sure the plan actually happens',
      ],
      missing: [
        'Projects reach 80 or 90 percent and stall',
        'Loose ends pile up into rework, customer complaints, or late billing',
        'The owner ends up chasing every detail to get anything finished',
      ],
      frustration: 'For someone whose frustration is Tenacity, the final stretch of detailed follow-through can feel draining. They often contribute most earlier in a project and should hand off the finish to someone who enjoys it.',
      owners: [
        'Look at where work stalls near the end in your business, such as punch lists, closeouts, or invoicing. That is often where Tenacity is missing, and where profit leaks.',
        'Give tenacious people real ownership of finishing, not just reminders.',
        'Pair Tenacity with Galvanizing so the business both starts and finishes well.',
      ],
      faq: [
        { q: 'Is Tenacity the same as being stubborn?', a: 'No. Tenacity is the energy for finishing work well. It is about completion and standards, not refusing to change course.' },
        { q: 'How does missing Tenacity affect profit?', a: 'Unfinished work often means delayed billing, rework, and unhappy customers. In many businesses, the last ten percent of a job is where margins are kept or lost.' },
      ],
    }),

    // ---------------------------------------------------------------- Industry pages
    'wg-construction-and-trades': industry({
      slug: 'construction-and-trades',
      title: `Working Genius for Construction and Trades Businesses | ${name}`,
      description: `How The 6 Types of Working Genius helps construction and trades companies in ${region} put people on the right work, from estimating to closeout.`,
      headline: 'Working Genius for construction and the trades',
      lead: 'From the first estimate to the final punch list, every job moves through the same six kinds of work. The right people in each stage protect your schedule, your crews, and your margins.',
      answer: 'In a construction or trades business, The 6 Types of Working Genius maps to the life of a job: spotting opportunities and better methods (Wonder and Invention), deciding which jobs to pursue and how to run them (Discernment and Galvanizing), and supporting crews and closing out the work (Enablement and Tenacity). Putting people where they have energy reduces stalls, rework, and burnout.',
      background: 'Josh Muller built and sold a construction company of his own before he began coaching owners, so this work starts from the realities of jobs, crews, and cash.',
      stallsHeading: 'Where work tends to stall',
      stalls: [
        { stage: 'Ideation', body: 'Estimating and preconstruction can lack fresh thinking. The same assumptions and methods carry from bid to bid, even when there is a better way.' },
        { stage: 'Activation', body: 'Bid and no-bid decisions, job planning, and getting crews behind a new process often route back to the owner, who becomes the bottleneck.' },
        { stage: 'Implementation', body: 'Field support, change orders, punch lists, and closeout depend on steady help and real follow-through. When they stall, final billing and retainage stall with them.' },
      ],
      costHeading: 'What it costs',
      costs: [
        'Late closeout and billing that ties up cash',
        'Rework when details are missed near the finish',
        'Strong foremen and project managers burning out on work that drains them',
        'An owner pulled into every decision, unable to step back',
      ],
      howHeading: 'How we bring it to your team',
      how: [
        'Working Genius assessments for the office and field leadership',
        'A team map that shows where jobs stall between estimating, operations, and closeout',
        'A working session that turns the map into real changes in roles and handoffs',
        'Where it helps, a look at job margins and cash alongside the team map',
      ],
      related: [
        { key: 'about', anchor: 'josh', text: 'About Josh Muller' },
        { key: 'growTeam', text: 'Grow your team' },
      ],
      faq: [
        { q: 'Does Working Genius work for field crews, or only the office?', a: 'Both. The six types describe kinds of work, not job titles. Field leaders, project managers, estimators, and office staff all move work through the same stages.' },
        { q: 'Where should a construction company start?', a: 'Usually with the leadership team: the owner, project managers, and key office and field leaders. Their team map shows where jobs stall most, and that is the best place to begin.' },
      ],
    }),
    'wg-golf-cart-dealerships': industry({
      slug: 'golf-cart-dealerships',
      title: `Working Genius for Golf Cart Dealerships | ${name}`,
      description: 'How The 6 Types of Working Genius helps golf cart dealers and shops put the right people on sales, service, parts, and planning through a seasonal year.',
      headline: 'Working Genius for golf cart dealerships',
      lead: 'A golf cart business lives on a seasonal clock. The off-season rewards planning and fresh ideas; the spring rush rewards energy, support, and follow-through. Knowing who thrives where helps you staff both.',
      answer: 'In a golf cart dealership, The 6 Types of Working Genius maps to the selling year: planning inventory, offers, and improvements in the off-season (Wonder, Invention, and Discernment), and launching and delivering through the busy season (Galvanizing, Enablement, and Tenacity). Matching people to that rhythm keeps sales, service, and parts moving when it matters most.',
      background: `${name} also works with golf cart businesses on advisory and fractional CFO work, applying the Build My Dealership curriculum in sales, service, operations, and leadership.`,
      stallsHeading: 'Where work tends to stall',
      stalls: [
        { stage: 'Ideation', body: 'The off-season is the time to rethink offers, accessories, and processes. Without Wonder and Invention, next spring looks like last spring.' },
        { stage: 'Activation', body: 'Decisions about inventory, pricing, and staffing for the season need good judgment and someone to rally the team before the rush.' },
        { stage: 'Implementation', body: 'In peak season, deliveries, service tickets, and follow-ups pile up. Support and follow-through decide whether customers come back.' },
      ],
      costHeading: 'What it costs',
      costs: [
        'A service bay that is busy but not finishing tickets on time',
        'Missed accessory and follow-up sales after delivery',
        'Off-season time spent without a clear plan for spring',
        'An owner covering the sales floor, the service desk, and the books at once',
      ],
      howHeading: 'How we bring it to your team',
      how: [
        'Working Genius assessments for sales, service, parts, and leadership',
        'A team map built around your seasonal calendar',
        'A working session in the off-season that sets roles before the rush',
        'Where it helps, a look at department margins alongside the team map',
      ],
      related: [
        { key: 'carts', text: 'Advisory for golf cart businesses' },
        { key: 'growTeam', text: 'Grow your team' },
      ],
      faq: [
        { q: 'When is the best time for a dealership to do this work?', a: 'The off-season. That is when there is room to think, assess the team, and change roles before the spring rush.' },
        { q: 'Does this apply to small shops as well as larger dealers?', a: 'Yes. In a small shop, one person often covers several stages. Knowing which work drains them helps decide what to hand off first.' },
      ],
    }),
    'wg-churches-and-ministries': industry({
      slug: 'churches-and-ministries',
      title: `Working Genius for Churches and Ministries | ${name}`,
      description: `How The 6 Types of Working Genius helps church staff, leaders, and volunteer teams in ${region} serve with more energy and less burnout.`,
      headline: 'Working Genius for churches and ministries',
      lead: 'Church staff and volunteers often carry more than they can sustain. Working Genius helps leaders see who is energized by which work, so people can serve where they thrive.',
      answer: 'In a church or ministry, The 6 Types of Working Genius maps to how ministry work gets done: sensing needs and imagining new ministries (Wonder and Invention), discerning direction and rallying people (Discernment and Galvanizing), and serving and following through (Enablement and Tenacity). It gives staff and volunteer teams a shared language for serving well without burning out.',
      background: `${name} also offers leadership coaching, financial stewardship, and fractional CFO support for churches.`,
      stallsHeading: 'Where work tends to stall',
      stalls: [
        { stage: 'Ideation', body: 'New ministries and better ways to reach people need room to wonder and imagine, which busy weekly rhythms rarely allow.' },
        { stage: 'Activation', body: 'Discerning direction and rallying volunteers often falls to one pastor or leader, who becomes stretched thin.' },
        { stage: 'Implementation', body: 'Faithful helpers keep ministries running, but follow-through and administration can slip when the same few people do everything.' },
      ],
      costHeading: 'What it costs',
      costs: [
        'Staff and volunteer burnout among the most faithful people',
        'Good ideas that never become ministries',
        'Pastors and leaders spending energy on work that drains them',
        'Volunteers leaving because their role never fit',
      ],
      howHeading: 'How we bring it to your team',
      how: [
        'Working Genius assessments for staff, elders or leaders, and key volunteers',
        'A team map that shows where ministry work stalls',
        'A working session that matches people and roles to their geniuses',
        'Where it helps, a look at staffing and budget alongside the team map',
      ],
      related: [
        { key: 'church', text: 'Coaching and financial stewardship for churches' },
        { key: 'growTeam', text: 'Grow your team' },
      ],
      faq: [
        { q: 'Can volunteers take the Working Genius assessment?', a: 'Yes. It works for anyone who does work with others, paid or not, and it is especially useful for matching volunteers to roles they will keep.' },
        { q: 'Is Working Genius a spiritual gifts assessment?', a: 'No. It describes the kinds of work that give people energy, not spiritual gifts. Many churches find the two complement each other.' },
      ],
    }),
  };
}
