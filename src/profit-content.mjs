// Copy for the Profit Levers Calculator at /profit-levers-calculator/.
// Built 2026-11-13 at Matt's direction. All math runs in the visitor's browser (src/assets/profit-levers.js);
// nothing is stored, sent, or tracked. House style: no em dashes, no promised results, no benchmarks.

export default function profitContent(site) {
  const name = site.siteName;

  return {
    profit: {
      title: `Profit Levers Calculator for Business Owners | ${name}`,
      description: 'What could a small improvement do for your bottom line? Explore how changes in pricing, direct costs, and overhead could affect your estimated annual operating profit.',
      eyebrow: 'The Profit Levers Calculator',
      headline: 'What could a small improvement do for your bottom line?',
      lead: 'Small changes can make a meaningful difference. Start with a rough snapshot of your year, then explore what a change in pricing, direct costs, or overhead might mean for your estimated operating profit. It takes about two minutes, and rough estimates are fine.',
      privacy: 'Your numbers stay in this browser tab. We do not save, send, or track them.',

      snapshotHeading: 'Start with a snapshot of your year',
      snapshotIntro: 'Use your most recent 12 months, or your best estimate. Whole dollars are fine.',
      fields: {
        revenue: { label: 'Annual revenue', hint: 'Sales earned over a 12-month period.' },
        direct: { label: 'Annual direct costs', hint: 'Costs directly tied to delivering what you sell.' },
        overhead: { label: 'Annual overhead', hint: 'Other operating expenses needed to run the business.' },
      },
      includeSummary: 'What should I include?',
      include: [
        'Direct costs: materials, subcontractors, and production or field labor directly tied to delivering the work.',
        'Overhead: administrative payroll, rent, insurance, software, utilities, marketing, and other operating expenses.',
        'Count each cost only once. The same person’s wages belong in direct costs or overhead, not both.',
        'Include any owner wages or compensation already recorded as an expense. Do not add owner draws or distributions as an expense.',
        'Leave out income taxes, loan principal, and large equipment or property purchases. They are not operating expenses.',
        'Every business and accountant classifies costs a little differently. A reasonable, consistent split is all you need here.',
      ],
      limitsNote: 'Each amount can be up to $1 billion. Cents are rounded to whole dollars.',
      zeroRevenue: 'Enter annual revenue above $0 to explore. A price change needs revenue to apply to, and a margin cannot be calculated without it.',

      startHeading: 'Where you are starting',
      startProfitLabel: 'Estimated operating profit',
      startLossLabel: 'Estimated operating loss',

      leversHeading: 'Explore a change',
      leversIntro: 'Move any slider. Each change is figured from your starting numbers, so you can combine them. Slide right for changes that would raise profit, left for changes that would lower it.',
      levers: {
        price: { label: 'Pricing', left: 'Lower prices', right: 'Raise prices' },
        direct: { label: 'Direct costs', left: 'Costs rise', right: 'Reduce costs' },
        overhead: { label: 'Overhead', left: 'Costs rise', right: 'Reduce costs' },
      },
      rangeNote: 'Each slider runs from 10% one way to 10% the other, in half-percent steps.',
      presetsLabel: 'Illustrative starting points',
      presets: [
        { lever: 'price', value: 1, label: 'Explore a 1% price increase' },
        { lever: 'direct', value: 2, label: 'Explore a 2% direct cost reduction' },
        { lever: 'overhead', value: 2, label: 'Explore a 2% overhead reduction' },
      ],
      presetsNote: 'These are examples to explore, not recommendations, targets, or benchmarks.',
      resetLevers: 'Reset all changes to zero',
      exampleButton: 'Fill in example numbers',
      exampleNote: 'Example numbers are filled in: $1,000,000 revenue, $600,000 direct costs, $300,000 overhead. Replace them with your own.',
      clearButton: 'Clear',

      resultsHeading: 'Starting point and scenario',
      emptyResult: 'Enter your annual revenue, direct costs, and overhead to see your starting point.',
      neutral: 'Move a slider, or try one of the illustrative starting points, to see how your estimated operating profit could respond.',
      colStart: 'Starting point',
      colScenario: 'Scenario',
      rowRevenue: 'Annual revenue',
      rowDirect: 'Direct costs',
      rowOverhead: 'Overhead',
      rowProfit: 'Estimated operating profit',
      rowMargin: 'Operating profit margin',
      bridgeHeading: 'How each change adds up',
      bridgeStart: 'Starting profit',
      bridgeEnd: 'Scenario profit',
      bridgePrice: 'Pricing',
      bridgeDirect: 'Direct costs',
      bridgeOverhead: 'Overhead',
      splitHeading: 'Where each dollar of revenue goes',
      splitDirect: 'Direct costs',
      splitOverhead: 'Overhead',
      splitProfit: 'Operating profit',
      splitLoss: 'Operating loss (costs above revenue)',
      assumptionsSummary: 'How this is calculated',
      assumptions: [
        'Estimated operating profit is revenue minus direct costs minus overhead. It is not net income, cash flow, take-home pay, or business value.',
        'It does not separately account for interest, income taxes, owner distributions, loan payments, or equipment purchases, unless you included them in your expenses. Whether depreciation is included depends on what you entered.',
        'A price change changes revenue by that percentage. Sales volume, sales mix, and direct costs stay the same.',
        'Cost changes apply to the dollar amounts you entered. Each change is figured from its own starting number, so the three contributions add up to the total change.',
        'Figures are rounded to whole dollars for display. Margins are rounded to one decimal place.',
      ],
      realityHeading: 'Worth keeping in mind',
      reality: [
        'A price change can affect how much customers buy, which customers stay, and your sales mix.',
        'Cost reductions can affect capacity, quality, service, your team, or growth. Not every cut is achievable or wise.',
        'Profit is not the same as cash in the bank. Timing of payments, debt, and investment all play a part.',
      ],

      reflectHeading: 'Questions worth asking',
      reflect: [
        'When did you last review your pricing against the value you deliver and the costs you carry?',
        'Do you know which products, services, jobs, or customers earn the strongest margins?',
        'Which costs support quality and growth, and which deserve a closer look?',
        'Could a change affect your team, your capacity, your customers, or your sales volume?',
        'Are your financial reports reliable enough to support these decisions?',
      ],
      stepsHeading: 'Practical next steps',
      stepsIntro: 'Useful whether or not you ever talk with us. They update with the changes you explore.',
      steps: {
        default: [
          'Pull your last 12 months of financial statements and check that direct costs and overhead are classified the same way each month.',
          'Pick the lever that seems most realistic for your business, and write down what would have to be true for it to work.',
        ],
        price: [
          'List your main products or services with their current prices and when each was last changed. Note which ones carry the most cost pressure.',
          'Before changing prices, think through which customers would notice, how they would hear about it, and what you would do if volume dipped.',
        ],
        direct: [
          'Compare margins across your recent jobs, products, or services. Look for the ones where direct costs ran highest, and ask why.',
          'Check the drivers behind direct costs, such as supplier pricing, waste, rework, and scheduling, before deciding where to act.',
        ],
        overhead: [
          'List your ten largest recurring overhead expenses with their annual cost and the business purpose each one serves.',
          'Mark anything that has grown without a clear decision behind it. Start your review there, not with cuts to people or service.',
        ],
      },

      ctaHeading: 'Your numbers can tell a more useful story.',
      ctaBody: 'We help owners understand what is driving profit, including pricing, margins, and the profitability of jobs, services, or customers, and decide what to do next. Bring your questions and, if you have them, a recent set of financial statements. A 20-minute conversation with Josh or Matt is a good place to see what the numbers suggest and whether a deeper look would be useful.',
      ctaButton: 'Talk about your numbers',
      ctaCfo: 'About fractional CFO services',
      emailButton: 'Email us about my scenario',
      emailNote: 'This opens a draft in your own email app with your numbers filled in. Nothing is sent until you send it, and you can edit or delete anything first, including any figures you would rather not share.',
      emailSubject: 'My Profit Levers Calculator scenario',
      otherTool: 'Also try the Owner Freedom Calculator: how much of your life is your business consuming?',

      noscript: 'This calculator needs JavaScript. You can do the math by hand: revenue minus direct costs minus overhead is your estimated operating profit. A price increase of P percent adds revenue times P. A direct cost reduction of D percent adds direct costs times D. An overhead reduction of O percent adds overhead times O.',
    },
  };
}
