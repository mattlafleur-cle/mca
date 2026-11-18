// Copy for /guides/ and the guide articles under it. Drafted 2026-11-18 at Matt's direction, following the
// competitor research (Vistage and EO win searches with practical, answer-first guides).
// DRAFT: unlisted and noindex until Matt approves; each article names the person who should review it.
// House style: answer first, our own experience, no statistics we cannot source, no promised results,
// no prices, no em dashes. EOS terms are referenced, not taught, per EOS Worldwide's public guidelines.

// Order sets the hub list and the sitemap order once published.
export const guideSlugs = ['coach-eos-implementer-or-fractional-cfo', 'stop-being-the-bottleneck', 'membership-practice-numbers'];

export default function guidesContent(site) {
  const name = site.siteName;

  const article = (a) => ({
    template: 'guideArticle',
    dated: true, // date set automatically from content changes (src/page-dates.json)
    eyebrow: 'Guides for owners',
    ...a,
  });

  return {
    guides: {
      title: `Guides for Business Owners: Coaching, Teams, and Numbers | ${name}`,
      description: 'Practical, plain-language guides for owners of growing businesses and practices: choosing help, getting out of the middle of everything, and the numbers that matter.',
      eyebrow: 'Guides',
      headline: 'Practical guides for owners.',
      lead: 'Plain answers to the questions owners ask us most, from people who have run businesses and kept the books for them.',
      dated: true,
      hideDate: true,
      cardCta: 'Read the guide',
      closingHeading: 'Rather talk it through?',
      closingBody: 'A 20-minute conversation with Josh or Matt is often faster than reading. Bring the question you came here with.',
    },

    'guide-coach-eos-implementer-or-fractional-cfo': article({
      slug: 'coach-eos-implementer-or-fractional-cfo',
      title: `Business Coach, EOS Implementer, or Fractional CFO? | ${name}`,
      description: 'What a business coach, an EOS Implementer, and a fractional CFO each do, what problems each one solves, and how to tell which your business needs first.',
      headline: 'Business coach, EOS Implementer, or fractional CFO: which do you need?',
      lead: 'Three kinds of outside help that owners often confuse. Each solves a different problem, and the right first step depends on where the business is stuck.',
      answer: 'A business coach works on the owner and the leadership team: decisions, habits, accountability, and growth. An EOS Implementer teaches a leadership team to run on the Entrepreneurial Operating System, a specific set of tools and rhythms. A fractional CFO works on the numbers: reporting, cash, pricing, and financial decisions. If the problem is direction or leadership, start with a coach. If it is alignment and follow-through across a team, consider EOS. If it is cash, margins, or unreliable numbers, start with a fractional CFO.',
      reviewedBy: ['matt', 'josh'],
      sections: [
        {
          heading: 'A quick comparison',
          table: {
            head: ['', 'Business coach', 'EOS Implementer', 'Fractional CFO'],
            rows: [
              ['Works mainly with', 'The owner and leaders', 'The whole leadership team', 'The owner and whoever keeps the books'],
              ['Focus', 'Decisions, leadership, accountability, growth', 'A shared vision, priorities, meetings, and accountability, using EOS tools', 'Reporting, cash, pricing, margins, and financial plans'],
              ['Best when', 'The owner is stuck, overloaded, or facing a big decision', 'The team is busy but not aligned, and follow-through slips', 'The numbers are late, unclear, or not driving decisions'],
              ['Typical rhythm', 'Regular sessions over months', 'A defined series of full-day sessions over about two years', 'A monthly close and review, plus projects'],
            ],
          },
        },
        {
          heading: 'Signs you need a business coach',
          list: [
            'Most decisions still come back to you, and you are the bottleneck',
            'You are not sure what the next stage of the business should look like',
            'You have a leadership team on paper, but they do not yet lead',
            'You want a sounding board who has owned and run a business',
          ],
        },
        {
          heading: 'Signs EOS may fit',
          list: [
            'Your leaders do not agree on where the business is going',
            'Priorities change every week, and big projects stall',
            'Meetings feel like updates rather than places where problems get solved',
            'You want a complete, proven operating system rather than building your own',
          ],
          note: 'EOS® and Entrepreneurial Operating System® are registered trademarks of EOS Worldwide. Only licensed EOS Implementers teach the full EOS process. Josh Muller is a Certified EOS Implementer.',
        },
        {
          heading: 'Signs you need a fractional CFO',
          list: [
            'You get financial statements late, or not at all',
            'You are profitable on paper but often short on cash',
            'You are not sure which customers, services, or jobs make money',
            'A bank, buyer, or partner is asking for numbers you cannot produce quickly',
          ],
        },
        {
          heading: 'When you need more than one',
          paras: [
            'Most growing businesses eventually need all three, but rarely at once. A useful rule: fix the thing that makes every other decision harder. Unreliable numbers make every decision harder, so they often come first. A team that is not aligned makes good numbers useless, so EOS or coaching often comes next.',
            `At ${name}, the three sit in one place: Josh coaches owners and implements EOS, and Matt, a CPA, serves as a fractional CFO. That means one conversation can point you to the right first step instead of three separate sales calls.`,
          ],
        },
      ],
      faq: [
        { q: 'Is a business coach the same as an EOS Implementer?', a: 'No. A business coach can use many approaches and focuses on the owner and leaders. An EOS Implementer teaches one specific system, the Entrepreneurial Operating System, to a leadership team. Some people, like Josh Muller, do both.' },
        { q: 'What does a fractional CFO do that a bookkeeper does not?', a: 'A bookkeeper records transactions and keeps the books current. A fractional CFO uses those books to answer business questions: where profit comes from, how much cash you will need, what to charge, and whether a hire or investment makes sense.' },
        { q: 'Which should I hire first?', a: 'Start with whatever makes every other decision harder. For many owners, that is unreliable numbers. For others, it is a leadership team that is not on the same page. A short conversation usually makes the answer clear.' },
      ],
      related: [
        { key: 'coaching', text: 'Business coaching' },
        { key: 'growBusiness', text: 'EOS and the Time-Rich Company framework' },
        { key: 'fractionalCfo', text: 'Fractional CFO services' },
      ],
    }),

    'guide-stop-being-the-bottleneck': article({
      slug: 'stop-being-the-bottleneck',
      title: `How to Stop Being the Bottleneck in Your Business | ${name}`,
      description: 'Why owners become the bottleneck, how to tell which decisions and tasks to hand off first, and a simple four-week plan to get out of the middle of everything.',
      headline: 'How to stop being the bottleneck in your business',
      lead: 'If the business slows down whenever you step away, you are the bottleneck. It is common, it is not a character flaw, and it can change.',
      answer: 'Owners become the bottleneck when decisions, relationships, and know-how live with them instead of with the team. To stop, find out where your time actually goes, hand off decisions and not just tasks, give each handoff a clear owner and clear limits, and write down the know-how that only lives in your head. Most owners can see real change within a few months if they work on it every week.',
      reviewedBy: ['josh'],
      sections: [
        {
          heading: 'Why owners become the bottleneck',
          paras: [
            'In the early years, being in the middle of everything is how the business survives. You know the customers, you make every call, and you fix every problem. The habits that built the business are the same ones that later hold it back.',
            'The usual causes are simple: decisions were never handed off, roles were never made clear, and the know-how needed to do the work well was never written down.',
          ],
        },
        {
          heading: 'Four signs you are the bottleneck',
          list: [
            'Work waits for your answer, your signature, or your review',
            'Your team brings you problems instead of recommendations',
            'You cannot take a real week off without the business pulling you back',
            'You spend most of your day on work someone else could do',
          ],
        },
        {
          heading: 'A four-week plan',
          ordered: true,
          list: [
            'Week 1: Track your time in 30-minute blocks for one normal week. Mark every block that only you could have done.',
            'Week 2: List every decision that came to you that someone else could make. Pick the two that come up most often.',
            'Week 3: Hand those two decisions to a clear owner. Agree on the limits they can decide within, and what they should bring back to you.',
            'Week 4: Ask the person who handles your most important process to write it down as a simple checklist. Review it together.',
          ],
        },
        {
          heading: 'Hand off decisions, not just tasks',
          paras: [
            'Handing off a task saves you the time it takes to do it. Handing off a decision saves you the time, the interruptions, and the waiting that came with it. When someone owns a decision within clear limits, the work stops coming back to your desk.',
            'Expect the first few handoffs to be uncomfortable. The work will be done differently, and sometimes not as well as you would do it. Good enough, done without you, is usually the better trade.',
          ],
        },
      ],
      faq: [
        { q: 'How do I know which tasks to delegate first?', a: 'Start with work that comes up often, follows a pattern, and that someone else could do at about 80 percent of your standard. Save the rare, high-stakes decisions for later.' },
        { q: 'What if my team is not ready to take on more?', a: 'Often the team is more ready than the owner thinks; they have simply never been given clear ownership. Where there are real gaps, the answer may be training, a better fit between people and roles, or a new hire.' },
        { q: 'How long does it take to stop being the bottleneck?', a: 'Most owners see a difference within a few months of steady work. Getting fully out of the middle of the business usually takes longer, because roles, systems, and habits all have to change.' },
      ],
      related: [
        { key: 'timeBack', text: 'Owner Freedom Calculator: how much of your week is beyond the schedule you want?' },
        { key: 'assessment', text: 'Owner Freedom Assessment' },
        { key: 'growTeam', text: 'Grow your team' },
        { key: 'coaching', text: 'Business coaching' },
      ],
    }),

    'guide-membership-practice-numbers': article({
      slug: 'membership-practice-numbers',
      title: `Five Numbers Every Membership Practice Owner Should Know | ${name}`,
      description: 'Five numbers every concierge, direct primary care, or hybrid practice owner should know: panel fill, renewals, margin per member, cash, and owner hours.',
      headline: 'The five numbers that decide a membership practice’s health',
      lead: 'For concierge, direct primary care, and hybrid practices. None of these needs new software, and most practices can pull all five from what they already have.',
      answer: 'A membership practice depends on five numbers: panel fill (members compared with the panel you can serve well), renewal rate (the share of members who renew each year), margin per member (revenue per member minus the cost to serve one), days of cash on hand (how long the practice could run on the cash in the bank), and owner hours on the business (the physician’s non-clinical time each week). Together they show whether the practice is healthy, and whether it gives the physician the freedom it was meant to.',
      reviewedBy: ['matt'],
      sections: [
        {
          heading: 'The five numbers',
          table: {
            head: ['Number', 'How to figure it', 'The question to ask'],
            rows: [
              ['Panel fill', 'Current members divided by the panel you can serve well', 'How full are we, compared with our real capacity, not our hoped-for one?'],
              ['Renewal rate', 'Members who renewed divided by members who were due to renew', 'Do we know why the ones who left, left?'],
              ['Margin per member', 'Revenue per member minus the cost to serve one (staff, space, systems)', 'Does each new member make us healthier, or just busier?'],
              ['Days of cash on hand', 'Cash in the bank divided by average daily operating costs', 'Could we absorb a slow renewal season without stress?'],
              ['Owner hours on the business', 'The physician’s non-clinical hours in a normal week', 'Which of these hours could someone else own?'],
            ],
          },
        },
        {
          heading: 'Why these five',
          paras: [
            'Membership medicine trades volume for relationship. That makes the practice more like a subscription business than a traditional clinic: growth depends on keeping members as much as winning them, and capacity is limited by design.',
            'Panel fill and renewal rate tell you where revenue is heading. Margin per member and cash tell you whether the model works financially. Owner hours tell you whether it works for you, which is usually why you went private in the first place.',
          ],
        },
        {
          heading: 'Common traps',
          list: [
            'Treating total revenue as the measure of health, while renewals quietly slip',
            'Adding members past the point where access and service hold up',
            'Hiring before the margin per member can support the cost',
            'Running so close on cash that a slow renewal month becomes a crisis',
            'Measuring everything except the physician’s own time',
          ],
        },
        {
          heading: 'What to do this month',
          ordered: true,
          list: [
            'Write down all five numbers as best you can. Circle the one you could not answer.',
            'For renewals, call or survey the last few members who left, and ask why.',
            'Set a review: the same five numbers, on the same day, every month.',
          ],
        },
      ],
      faq: [
        { q: 'What is a healthy renewal rate for a concierge practice?', a: 'It varies by model, market, and fee. More useful than a benchmark is your own trend: track it monthly, know why members leave, and act on the most common reason.' },
        { q: 'How do I calculate margin per member?', a: 'Divide membership and other practice revenue by the number of members, then subtract what it costs to serve one member: staff, space, systems, and supplies, divided by members. Your accountant or a fractional CFO can help you set it up once so it is easy to update.' },
        { q: 'Do these numbers apply to hybrid practices?', a: 'Yes, with one change: count insurance revenue separately so you can see what the membership side contributes on its own.' },
      ],
      related: [
        { key: 'physicianPractices', text: 'Business help for physician practice owners' },
        { key: 'growFinance', text: 'Grow your financial ops' },
        { key: 'profit', text: 'Profit Levers Calculator' },
      ],
    }),
  };
}
