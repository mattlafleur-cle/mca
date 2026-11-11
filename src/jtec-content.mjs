// Copy for the unlisted J-TEC event page at /jtec/ (hidden from the menu, footer, Home, and search).
// Josh Muller's session "Building a Good Team" at the J-TEC Speaker Series business training,
// Wednesday, November 11, 2026, at J-TEC, Maple Heights, Ohio. Session description from the event flyer.
// Same house rules as the rest of the site: no prices, no guaranteed outcomes, no client names.

export default function jtecContent(site) {
  const name = site.siteName;
  return {
    seed: 33,
    title: `Building a Good Team: J-TEC with Josh Muller | ${name}`,
    description:
      'Notes and next steps from Josh Muller’s J-TEC session, Building a Good Team: the right people in the right seats and The 6 Types of Working Genius.',
    eyebrow: 'J-TEC Business Training · Wednesday, November 11, 2026',
    headline: 'Build a team that carries the work.',
    lead:
      'Thanks for joining Building a Good Team with Josh Muller at J-TEC. Most owners in the trades are still carrying work their team should be carrying. Here is what we covered, the tool behind it, and how to keep the momentum going after today.',
    emailLabel: 'Email Josh',

    recapHeading: 'From the session',
    recapIntro: 'One hour, four ideas to take back to the shop, the truck, and the office.',
    recap: [
      { name: 'What a good team actually looks like', body: 'Not more people. The right people, clear on what they own, trusted to finish it.' },
      { name: 'The right people in the right seats', body: 'Each role has a job to do, and each person does their best work in a few kinds of work. Match them.' },
      { name: 'Give work away for good', body: 'Hand off the whole job, with a clear owner and a clear finish line, so it does not come back to you.' },
      { name: 'Move one obstacle', body: 'Name what is standing between your team in the field and the work, then take one step to start moving it.' },
    ],
    stepHeading: 'Your one step this week',
    step: [
      'Write down one task you are still doing that someone on your team should own.',
      'Name who should own it, and what done looks like.',
      'Hand it off, all of it, and agree on when you will check in.',
    ],

    typesEyebrow: 'The tool behind the right seats',
    typesHeading: 'The 6 Types of Working Genius',
    typesIntro:
      'Every job, from the first call to the final walkthrough, moves through the same six kinds of work. Each person gets energy from two of them and is worn down by two others. A short assessment shows which are which.',
    typesLink: 'More about Working Genius',

    whyHeading: 'Why it matters for owners in the trades',
    why: [
      { name: 'Fewer stalled handoffs', body: 'Work that stalls between the office, the estimate, and the job site costs hours every week. A team map shows where it stalls and who can move it.' },
      { name: 'More from the crew you have', body: 'People work faster and better when more of their day goes to the work that gives them energy.' },
      { name: 'Keep your good people', body: 'Replacing a good tech or a good office lead means recruiting, training, and lost momentum. People who enjoy their work are more likely to stay.' },
      { name: 'Hire for the gap', body: 'Hire for the kinds of work your team is missing, instead of adding more of what you already have.' },
    ],

    nextHeading: 'Ways to keep going',
    nextIntro: 'Start where it makes sense for you. The first conversation is about your team and where the work gets stuck.',
    next: [
      { name: 'Working Genius for you', body: 'Take the assessment and walk through your results with us, so you know which work to keep and which to hand off.' },
      { name: 'A map of your whole team', body: 'Everyone takes the assessment. The team map shows where work stalls between the office and the field, and who can move it.' },
      { name: 'A team workshop', body: 'A working session that turns the map into real changes in roles, meetings, and handoffs.' },
      { name: 'Coaching with Josh', body: 'One-to-one coaching for owners on delegation, accountability, and running the business on EOS, from a Certified EOS Implementer who built and sold a construction company.' },
    ],
    buildNote: 'Prefer to learn alongside other owners first? BUILD is Josh’s peer community for business owners, open whether or not you work with us.',
    buildLink: 'Visit BUILD',

    // Calls to action. Josh is the primary contact for J-TEC attendees.
    talkLabel: 'Talk with Josh about your team',
    emailSubject: 'Following up from J-TEC',
    discountSubject: 'J-TEC: Working Genius assessment discount',
    banner: 'J-TEC attendees: take The 6 Types of Working Genius assessment at a discount.',
    bannerLink: 'Email Josh to claim it',
    offerEyebrow: 'J-TEC attendee offer',
    offerHeading: 'Take the assessment at a discount.',
    offerBody: 'Want to know your own two working geniuses, or your whole team\u2019s? Contact us directly and mention J-TEC to take The 6 Types of Working Genius assessment at a discounted fee. We will set it up and walk you through your results.',
    offerButton: 'Email Josh for the discount',
    stepHelp: 'Not sure which task to hand off first? Josh can help you pick it.',
    whyCta: 'See where your team stands',

    leadsHeading: 'Your presenter',
    teamHeading: 'Josh\u2019s teammates at Maple Creek Advisors',
    leadNotes: {
      josh: 'Today\u2019s presenter. Josh built and sold a construction company before he started coaching owners and facilitating leadership teams. He knows what it takes to hand off the work because he has had to do it himself.',
      matt: 'Josh\u2019s teammate and partner at Maple Creek Advisors. Matt is a CPA and fractional CFO who connects the people side to the numbers: where time and payroll go, and how a better-fit team shows up in productivity and profit.',
      greg: 'A Certified Working Genius Facilitator, culture builder, and engaging speaker with more than 30 years in entrepreneurship, sales, marketing, and leadership. Greg helps leaders put their people\u2019s strengths to work.',
    },

    closingHeading: 'Bring this back to your team.',
    closingEmail: 'Email Josh',
    closingBody: 'Book a short conversation about your team, your roles, and where the work gets stuck. You will leave with a practical next step.',
    trademark: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group. Working Genius is a trademark of The Table Group. EOS is a registered trademark of EOS Worldwide.',
  };
}
