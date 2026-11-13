// Copy for the Owner Freedom Calculator at /owner-freedom-calculator/.
// Built 2026-11-13 at Matt's direction. All math runs in the visitor's browser (src/assets/time-back.js);
// nothing is stored, sent, or tracked. House style: no em dashes, no promised outcomes, no statistics.

export default function timeBackContent(site) {
  const name = site.siteName;

  return {
    timeBack: {
      title: `Owner Freedom Calculator for Business Owners | ${name}`,
      description: 'How much of your life is your business consuming? The Owner Freedom Calculator compares the hours you work with the hours you would choose, and shows what the gap adds up to over a year.',
      eyebrow: 'The Owner Freedom Calculator',
      headline: 'How much of your life is your business consuming?',
      lead: 'Owning a business can be one of the most rewarding things you do, and one of the most consuming. You can be proud of what you have built and tired at the same time. Take about a minute to compare the hours you work with the hours you would choose, and see what the difference adds up to.',
      privacy: 'Your answers stay in this browser tab. We do not save, send, or track them.',

      formHeading: 'Your week, as it is and as you would like it',
      formIntro: 'Use your best estimate of a normal week. Count all the time the business takes: on site, at home, and on your phone.',
      fields: {
        current: { label: 'Hours you work in an average week', hint: 'For example, 55. Up to 120.' },
        preferred: { label: 'Hours you would prefer to work', hint: 'The schedule you would choose if the business ran the way you want. Up to 120.' },
        weeks: { label: 'Weeks you work in a year', hint: 'Subtract vacation and time off. For example, 48. Up to 52.' },
      },
      exampleButton: 'Fill in an example',
      exampleNote: 'Example values are filled in: 50 hours worked, 35 preferred, 48 weeks. Replace them with your own.',
      resetButton: 'Clear',
      limitsNote: 'Hours are capped at 120 a week, which still leaves about seven hours a day for sleep and everything else.',

      whereHeading: 'Optional: where does most of the extra time go?',
      whereHint: 'Pick the one that fits best. It only changes the suggestions below.',
      where: [
        { id: 'decisions', label: 'Decisions others could make' },
        { id: 'problems', label: 'Solving the same problems again' },
        { id: 'people', label: 'Managing people' },
        { id: 'delegable', label: 'Work someone else could do' },
        { id: 'customers', label: 'Sales and customer demands' },
        { id: 'admin', label: 'Administrative work' },
        { id: 'other', label: 'Something else' },
      ],

      resultsHeading: 'What the gap adds up to',
      emptyResult: 'Enter your hours and working weeks to see your result.',
      barCurrent: 'Hours you work',
      barPreferred: 'Hours you would prefer',
      barGap: 'Beyond your preferred schedule',
      statWeek: 'hours a week beyond your preferred schedule',
      statYear: 'hours a year',
      statDays: 'eight-hour workdays',
      statWeeks: 'forty-hour workweeks',
      dotsCaption: 'Each square is one eight-hour workday of time beyond your preferred schedule, rounded to the nearest whole day.',
      equalMessage: 'Your current hours match the schedule you would choose. That is worth protecting. The questions below can still help you make sure those hours go to the work that matters most to you.',
      underMessage: 'You are working fewer hours than your preferred schedule, so there is no time beyond it to count. If you would like to give the business more, the useful question may be where those hours would do the most good.',
      assumption: 'This is an estimate based only on your answers. It assumes the same average gap in every working week. Workday and workweek figures are equivalents (your yearly gap divided by 8 and by 40), not extra days on the calendar.',

      goalHeading: 'Try a first goal',
      goalIntro: 'Move the slider to see what reclaiming part of that gap each week would add up to over your working year.',
      goalLabel: 'Hours a week to reclaim',
      goalNote: 'An illustration of a goal you might set, not a promised result.',

      reflectHeading: 'What would you do with some of that time back?',
      reflectIntro: 'Not every owner wants to work less. Some want the same hours, spent on better work. Check any that matter to you. This is just for you.',
      reflect: [
        'Spend more time with family and friends',
        'Focus on the work only I can do',
        'Develop leaders on my team',
        'Take a real vacation',
        'Think and plan, not just react',
        'Simply have more breathing room',
      ],

      stepsHeading: 'Two things you can try this week',
      stepsIntro: 'Useful whether or not you ever talk with us.',
      steps: {
        default: [
          'Track one normal week in 30-minute blocks. At the end, mark the time that only you could have spent, and the time someone else could have handled.',
          'Pick one recurring task or decision from that list. Decide who should own it, show them what done looks like, and let it go for a month.',
        ],
        decisions: [
          'For one week, write down every decision that comes to you that someone else could make. Note who asked and what they needed.',
          'Pick the two that came up most. Decide who should own each one, and agree on the limits they can decide within without checking with you.',
        ],
        problems: [
          'List the problems you solved more than once in the past month. Circle the one that comes back most often.',
          'Write the fix for that one as a short checklist or rule, and give it to the people who meet the problem first.',
        ],
        people: [
          'Look at next week and count the interruptions where someone needed you to move forward. Note who, and what they needed.',
          'Try a short, regular check-in with each direct report, and ask them to save non-urgent questions for it.',
        ],
        delegable: [
          'Track a normal week and mark anything someone else could do at about 80 percent of your standard.',
          'Hand off one of those tasks this week with a clear example of what done looks like, and agree on when you will check in.',
        ],
        customers: [
          'For one week, note which customer requests truly need you and which just need a fast, clear answer from anyone.',
          'Pick the most common request that does not need you and write the standard answer, so others can give it with confidence.',
        ],
        admin: [
          'Gather your administrative work into one or two set blocks a week instead of letting it spread across every day.',
          'List which of those tasks a bookkeeper, an assistant, or a simple system could take over, and start with the easiest one.',
        ],
      },
      // Related pages to suggest with each answer (keys from the route table).
      stepLinks: {
        default: { key: 'growBusiness', text: 'How a Time-Rich Team works' },
        decisions: { key: 'coaching', text: 'Business coaching for owners and leadership teams' },
        problems: { key: 'growBusiness', text: 'EOS and an operating rhythm' },
        people: { key: 'workingGenius', text: 'Put people on the right work with Working Genius' },
        delegable: { key: 'growTeam', text: 'Grow your team' },
        customers: { key: 'growBusiness', text: 'Systems that take work off your plate' },
        admin: { key: 'growFinance', text: 'Financial operations you can hand off' },
      },

      ctaHeading: 'You built your business for a reason.',
      ctaBody: 'If it is taking more of your time than you want to give, you do not have to work out the next step alone. A 20-minute conversation with Josh or Matt is a good place to start: what is pulling on your time, and where more freedom could start.',
      ctaButton: 'Talk about getting your time back',
      ctaFramework: 'Our Time-Rich Company framework is built around this question.',
      emailButton: 'Email us with my result',
      emailNote: 'This opens a draft in your own email app with your numbers filled in. Nothing is sent until you send it, and you can edit or delete anything first.',
      emailSubject: 'My Owner Freedom Calculator result',
      otherTool: 'Also try the Profit Levers Calculator: what could a small improvement do for your bottom line?',

      noscript: 'This calculator needs JavaScript. You can do the math by hand: subtract your preferred weekly hours from your current weekly hours, then multiply by the weeks you work in a year. Divide that by 8 for eight-hour workday equivalents, or by 40 for forty-hour workweek equivalents.',
    },
  };
}
