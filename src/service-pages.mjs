// Copy for the dedicated service pages. Each one targets a search phrase people actually use,
// names the region, answers buyer questions directly, and ends in a booking action.
// House style still applies: no prices, no guaranteed outcomes, no client names.

export default function servicePages(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    fractionalCfo: {
      title: `Fractional CFO Services in ${region} | ${name}`,
      description: `Fractional CFO services for owner-led businesses in Akron, Cleveland, Cuyahoga Falls, Elyria, and ${region}: forecasts, cash, pricing, and reporting.`,
      eyebrow: `Fractional CFO services in ${region}`,
      headline: 'CFO-level financial guidance, without a full-time CFO.',
      lead:
        'Many owner-led businesses outgrow their bookkeeping long before they can justify a full-time chief financial officer. A fractional CFO fills that gap: experienced financial leadership for the decisions in front of you, with a scope and schedule that fit the business.',
      serviceType: 'Fractional CFO services',
      sections: [
        {
          heading: 'Signs it may be time',
          list: [
            'You get financial reports, but you do not trust them or use them to decide anything.',
            'Cash feels tight even when sales are up.',
            'You are weighing a hire, an expansion, an equipment purchase, or a price change and want the numbers behind it.',
            'A lender, investor, or partner is asking questions you cannot answer quickly.',
            'You are thinking about a sale, a succession plan, or the next stage of growth.',
          ],
        },
        {
          heading: 'What fractional CFO support can include',
          list: [
            'Reviewing and explaining financial performance in plain language',
            'Budgets, forecasts, and cash flow projections',
            'Pricing, margins, and the profitability of jobs, services, or customers',
            'Cash and capacity planning',
            'Key numbers and a monthly management reporting rhythm',
            'Preparing for conversations with lenders, investors, or buyers',
            'Strengthening the financial processes and people behind the numbers',
          ],
          note: 'Scope is agreed before work begins. Tax preparation and attest services (audits, reviews, and compilations) are not part of this service.',
        },
        {
          heading: 'Who leads the work',
          paras: [
            'Fractional CFO work is led by Matt LaFleur, a CPA licensed in Ohio and California with more than 14 years of experience in accounting, financial reporting, and advisory work. Matt founded Forest City CPA and works with owners to understand their numbers and use them to make consequential decisions.',
          ],
        },
        {
          heading: 'When the numbers are also a people question',
          paras: [
            'Many financial decisions turn out to be leadership decisions too: who owns a budget, how a team will carry a new plan, whether the owner can step back. When that happens, Josh Muller can join the work, so the financial plan and the leadership plan move together.',
          ],
          link: { key: 'advisory', text: 'See how integrated business advisory works' },
        },
      ],
      faq: [
        {
          q: 'What is a fractional CFO?',
          a: 'A fractional CFO is an experienced financial leader who works with your business part time, on an agreed scope, instead of as a full-time employee. You get senior financial judgment for planning and decisions without the cost of a full-time executive.',
        },
        {
          q: 'How is a fractional CFO different from a bookkeeper or accountant?',
          a: 'A bookkeeper records what happened. A fractional CFO helps you understand what it means and decide what to do next: forecasting, cash planning, pricing, and the financial side of major decisions. The two work best together.',
        },
        {
          q: 'How much time does it take, and what does it cost?',
          a: 'It depends on the business and the questions in front of you. We agree on the scope, cadence, and fees before work begins, so there are no surprises.',
        },
        {
          q: 'Do you prepare taxes or perform audits?',
          a: `No. ${name} is not a registered CPA firm and does not provide tax preparation or attest services such as audits, reviews, or compilations.`,
        },
        {
          q: 'Do you only work in Akron and Cleveland?',
          a: `No. We have offices in Cuyahoga Falls and Elyria and work with owners across ${region}, in person and remotely.`,
        },
      ],
    },

    advisory: {
      title: `Business Advisory Services in ${region} | ${name}`,
      description: `Business advisory for owner-led companies across ${region}: strategic planning, growth decisions, operating rhythm, and succession readiness.`,
      eyebrow: `Business advisory in ${region}`,
      headline: 'Advice that connects the people, the plan, and the numbers.',
      lead:
        'Big business decisions rarely sit neatly in one lane. Business advisory with Josh Muller and Matt LaFleur brings leadership experience and financial clarity to the same table, so the plan you choose is one your team and your finances can carry.',
      serviceType: 'Business advisory services',
      sections: [
        {
          heading: 'Where owners bring us in',
          list: [
            'Setting direction for the next one to three years',
            'Deciding whether to hire, expand, add a location, or change what you sell',
            'Building a management rhythm so priorities do not stall between meetings',
            'Getting a leadership team aligned on the same goals and the same numbers',
            'Preparing the business, and yourself, for a sale or succession',
          ],
        },
        {
          heading: 'What advisory work can include',
          list: [
            'Strategic planning sessions and planning retreats',
            'Decision support on major moves, with the financial picture behind each option',
            'Priorities with clear owners, dates, and a definition of done',
            'A regular operating cadence with the right numbers in front of the team',
            'Succession and exit readiness planning',
          ],
        },
        {
          heading: 'Two advisers, one relationship',
          paras: [
            'Josh built and sold a construction company and now coaches owners and leadership teams. Matt is a CPA and financial and operating adviser. Together they cover the questions an owner usually has to take to two different people, and they make sure the answers fit together.',
            'You do not need both from day one. An engagement can start in one lane and bring in the other when the work calls for it.',
          ],
        },
      ],
      faq: [
        {
          q: 'What is business advisory?',
          a: 'Business advisory is ongoing, practical help with the decisions that shape a company: strategy, growth, operations, leadership, and the financial side of each. It sits between one-off consulting and a full-time executive hire.',
        },
        {
          q: 'How is this different from business coaching?',
          a: 'Coaching focuses on the owner and the leadership team: decisions, habits, and accountability. Advisory adds the financial and operating view, so plans are tested against cash, capacity, and margins before you commit.',
        },
        {
          q: 'What size of business is a good fit?',
          a: 'We focus on owner-led businesses of roughly 5 to 50 people, but that is a guide, not a rule. If you are outside that range, reach out anyway.',
        },
        {
          q: 'Where do you work?',
          a: `We have offices in Cuyahoga Falls and Elyria and work with owners across ${region}, in person and remotely.`,
        },
      ],
    },

    coaching: {
      title: `Business Coaching in ${region} | ${name}`,
      description: `Business coaching for owners and leadership teams in Akron, Cleveland, Cuyahoga Falls, Elyria, and ${region}, from a coach who built and sold a company.`,
      eyebrow: `Business coaching in ${region}`,
      headline: 'Business coaching from someone who has built and sold a company.',
      lead:
        'Josh Muller owned and sold a construction company before he started coaching owners. He knows the pressure, the risk, and the responsibility of leading an owner-led business, and he coaches from that experience.',
      serviceType: 'Business coaching',
      sections: [
        {
          heading: 'Who it is for',
          list: [
            'Owners whose teams are growing while decisions still come back to them',
            'Leadership teams that need to get aligned and stay accountable',
            'Owners who want an honest thinking partner for hard calls',
            'Entrepreneurs who feel stuck and want a clear next step',
          ],
        },
        {
          heading: 'What coaching can include',
          list: [
            'One-to-one owner coaching',
            'Leadership team coaching and meeting facilitation',
            'Planning conversations and planning sessions',
            'Strategic planning retreats for owners and leadership teams',
            'Decision support and accountability for the commitments you make',
          ],
        },
        {
          heading: 'Coaching with the numbers in view',
          paras: [
            'Most coaching stops at the people side. Here, when a decision depends on cash, margins, or capacity, Matt LaFleur can bring the financial view into the same conversation, so your plan holds up on both sides.',
          ],
          link: { key: 'fractionalCfo', text: 'Learn about fractional CFO support' },
        },
      ],
      faq: [
        {
          q: 'What does a business coach do?',
          a: 'A business coach helps an owner or leadership team think clearly, decide, and follow through. That means honest questions, practical frameworks, and accountability for the commitments you make.',
        },
        {
          q: 'How is coaching different from BUILD?',
          a: 'BUILD is a peer community where owners learn from one another in a group. Coaching is focused on you, your team, and your specific decisions. The two can work well together.',
        },
        {
          q: 'Do you coach leadership teams, or only owners?',
          a: 'Both. Josh coaches owners one to one and facilitates leadership team meetings, planning sessions, and retreats.',
        },
        {
          q: 'Is coaching in person or remote?',
          a: `Either. We have offices in Cuyahoga Falls and Elyria, work across ${region}, and coach by video when that fits better.`,
        },
      ],
    },
  };
}
