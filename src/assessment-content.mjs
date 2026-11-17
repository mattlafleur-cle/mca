// Copy for the Owner Freedom Assessment at /owner-freedom-assessment/.
// Drafted 2026-11-17 at Matt's direction as step 1 of the Owner Freedom ladder (see the growth write-up).
// Listed in the Tools menu and indexed from 2026-11-17 at Matt's direction. The wording is still a first draft:
// Josh, Greg, and Matt are reviewing the statements and area notes (see the team review document).
// Rules: our own words only. No EOS terms (Rocks, Scorecard, Level 10, and so on) and no recreation of the
// Working Genius assessment; the team area points people to it instead. No promised outcomes, no statistics.
// Scoring (src/assets/owner-assessment.js): each answer is 0 to 3; an area's score is its average as a
// percent (0 to 100); the overall score is the average of the six areas. Nothing is stored, sent, or tracked.

export default function assessmentContent(site) {
  const name = site.siteName;

  return {
    assessment: {
      title: `Owner Freedom Assessment: A 10-Minute Check | ${name}`,
      description: 'Rate 25 statements about your business and your life, and see where you stand on six areas that decide how free you are as an owner.',
      serviceType: 'Owner Freedom Assessment for business owners',
      // Dated automatically from content changes (src/page-dates.json); shown in search data only.
      dated: true,
      hideDate: true,
      eyebrow: 'The Owner Freedom Assessment',
      headline: 'Does your business give you the life you want?',
      lead: 'Twenty-five statements, about ten minutes. Rate how true each one is today, and see where you stand on the six areas that decide how much freedom a business gives its owner: you, your team, your rhythm, your numbers, your value, and your life.',
      privacy: 'Your answers stay in this browser tab. We do not save, send, or track them.',

      howHeading: 'How it works',
      how: [
        'Rate each statement for how things are today, not how you hope they will be.',
        'Your results appear as soon as every statement has an answer.',
        'There are no right answers. A low score just shows where to start.',
      ],

      // Answer scale, lowest to highest. Each answer scores its index (0 to 3).
      scale: ['Not true', 'Somewhat true', 'Mostly true', 'Completely true'],

      progressLabel: 'answered',
      exampleButton: 'Fill in an example',
      exampleNote: 'Example answers are filled in so you can see how the results work. Clear them and answer for yourself.',
      resetButton: 'Clear all answers',

      // The six areas. `lead` is a person id from site.config.mjs (or 'all'). Messages are chosen by band:
      // low (below 40), mid (40 to 69), high (70 and up).
      areas: [
        {
          id: 'owner',
          name: 'Owner dependence',
          question: 'Could the business run for a month without you?',
          lead: ['josh'],
          statements: [
            'I could take two weeks fully off, phone included, and the business would run normally.',
            'Most day-to-day decisions get made without coming to me.',
            'Our most important customer relationships do not depend on me personally.',
            'Most of my week goes to work that only I can do.',
          ],
          low: 'Much of the business still runs through you. That limits your time, and it limits what the business is worth to anyone else.',
          mid: 'Some of the business runs without you, but key decisions and relationships still come back to your desk.',
          high: 'The business can run without you for stretches of time. That is rare, and worth protecting.',
          step: 'For one week, write down every decision that comes to you that someone else could make. Pick the two that come up most, and hand each one to a clear owner with limits they can decide within.',
          link: { key: 'timeBack', text: 'Try the Owner Freedom Calculator' },
        },
        {
          id: 'team',
          name: 'Team fit and energy',
          question: 'Are your people doing the work that gives them energy?',
          lead: ['greg'],
          statements: [
            'Most people on my team spend most of their day on work that gives them energy.',
            'Every important role has one person who clearly owns it.',
            'When I hand off work, it gets finished without coming back to me.',
            'We rarely lose good people to burnout or frustration.',
          ],
          low: 'Good people may be stuck in work that drains them, or roles may not have clear owners. Both show up as work that stalls and comes back to you.',
          mid: 'Your team carries real weight, but some roles are unclear or some people are working against their grain.',
          high: 'Your people own their roles and spend most of their time on work that suits them.',
          step: 'List every role on your team and the one person who owns it. Wherever you hesitate or write two names, have a short conversation this week about who owns what.',
          link: { key: 'workingGenius', text: 'See how Working Genius puts people on the right work' },
        },
        {
          id: 'rhythm',
          name: 'Leadership rhythm',
          question: 'Does your leadership team share a plan and a steady way of working?',
          lead: ['josh'],
          statements: [
            'My leadership team agrees on where the business is going over the next few years.',
            'We have a short list of top priorities for this quarter, and each one has a single owner.',
            'We meet on a regular schedule, and our meetings solve problems instead of circling them.',
            'Each leader watches a few numbers every week that show whether things are on track.',
          ],
          low: 'Without a shared plan and a steady meeting rhythm, decisions drift back to the owner and the same problems keep coming back.',
          mid: 'You have parts of a rhythm in place, but the plan, the priorities, or the meetings are not yet working together.',
          high: 'Your team shares a direction and a steady rhythm. That is what lets a business grow without more chaos.',
          step: 'Ask each leader to write down the three most important things for the business this quarter, without comparing notes. Then compare the lists together.',
          link: { key: 'growBusiness', text: 'Read about running on a clear operating system' },
        },
        {
          id: 'numbers',
          name: 'Numbers and cash',
          question: 'Do you trust your numbers and know what drives profit and cash?',
          lead: ['matt'],
          statements: [
            'I get accurate financial statements within a few weeks of each month’s end.',
            'I know which products, services, or customers make us the most profit.',
            'I can see what cash we will need at least three months ahead.',
            'I pay myself a fair salary, and the business still earns a healthy profit.',
          ],
          low: 'Without timely, trusted numbers, every decision is harder and cash surprises are more likely. This is often the quickest area to fix.',
          mid: 'You have the basics, but the numbers are late, incomplete, or not yet shaping decisions.',
          high: 'Your numbers are timely and useful, and you know what drives profit and cash.',
          step: 'Write down the date your last month’s financial statements were finished. If it was more than three weeks after month end, start there.',
          link: { key: 'profit', text: 'Try the Profit Levers Calculator' },
        },
        {
          id: 'value',
          name: 'Transferable value',
          question: 'Would a buyer pay full value for the business, and why or why not?',
          lead: ['matt', 'josh'],
          statements: [
            'Our key processes are written down or built into systems, not just in people’s heads.',
            'Revenue would hold steady if any one customer left.',
            'A buyer reviewing our books and contracts would find them clean and organized.',
            'I know roughly what the business is worth today and what drives that value.',
          ],
          low: 'Much of the value may live in your head, a few customers, or messy records. That lowers what a buyer would pay, whether or not you plan to sell.',
          mid: 'The business has real value, but a buyer would find gaps that lower the price or slow a sale.',
          high: 'The business looks well prepared for an outside look. Keep building on it.',
          step: 'Pick the one process that would hurt most if the person who runs it left tomorrow. Ask them to write it down as a simple checklist this month.',
          link: { key: 'sell', text: 'Read about preparing a business to sell' },
        },
        {
          id: 'life',
          name: 'Owner’s life',
          question: 'Is the business giving you the life you want?',
          lead: ['josh', 'greg', 'matt'],
          statements: [
            'I work the hours I want to work in most weeks.',
            'I take real time off without the business pulling me back.',
            'The business supports the life I want for myself and my family.',
            'I still enjoy most of the work I do in the business.',
            'I have a clear picture of what I want my life and the business to look like in five years.',
          ],
          low: 'The business may be taking more from your life than it gives back. That is common, and it can change.',
          mid: 'The business supports much of the life you want, but not all of it yet.',
          high: 'The business is serving your life well. Protect what is working as it grows.',
          step: 'Write one paragraph describing an ordinary week five years from now, the way you would want it. Share it with one person you trust.',
          link: { key: 'coaching', text: 'Read about business coaching for owners' },
        },
      ],

      // Example answers (0 to 3), in question order, used by "Fill in an example". 25 values.
      example: [1, 1, 2, 0, 2, 1, 1, 2, 2, 1, 1, 0, 1, 2, 0, 2, 0, 2, 1, 0, 1, 0, 2, 2, 1],

      resultsHeading: 'Your results',
      emptyResult: 'Answer every statement to see your results. Your progress is shown as you go.',
      overallLabel: 'Owner Freedom score',
      overallNote: 'The average of your six area scores, out of 100.',
      bands: { low: 'Needs attention', mid: 'Building', high: 'Strong' },
      overallMessages: {
        low: 'Your business is leaning hard on you. The good news: the areas below show exactly where to start, and small changes in one area often help the others.',
        mid: 'You have built real strengths, and a few areas are holding back the freedom you want. Start with the two below.',
        high: 'Your business gives you more freedom than most. The areas below show what to protect and what to sharpen.',
      },
      areasHeading: 'Your six areas',
      prioritiesHeading: 'Where to start',
      prioritiesIntro: 'Your two lowest-scoring areas, with one step you can take this week.',
      strengthLabel: 'Your strongest area',
      leadLabel: 'Who leads this work at Maple Creek',
      disclaimer: 'This is a self-assessment based only on your answers. It is not a valuation, a financial review, or a diagnosis, and it does not predict results.',

      ctaHeading: 'Want to talk through your results?',
      ctaBody: 'A 20-minute conversation with Josh or Matt is a good place to start. Bring your two lowest areas, and we will help you see what to do first, whether or not we ever work together.',
      ctaButton: 'Talk through my results',
      roadmapNote: 'For owners who want a full plan, our Owner Freedom Roadmap goes deeper: your goals, your team, and three years of your numbers, in a one-page plan for the next 12 months.',
      emailButton: 'Email us my results',
      emailNote: 'This opens a draft in your own email app with your scores filled in. Nothing is sent until you send it, and you can edit or delete anything first.',
      emailSubject: 'My Owner Freedom Assessment results',
      otherTools: 'Also try the Owner Freedom Calculator and the Profit Levers Calculator.',

      noscript: 'This assessment needs JavaScript to score your answers. You can still read the statements and rate each one for yourself: Not true, Somewhat true, Mostly true, or Completely true. Any area where most answers are Not true or Somewhat true is a good place to start.',
    },
  };
}
