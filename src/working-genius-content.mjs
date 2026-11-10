// Copy for /working-genius/, a page promoting The 6 Types of Working Genius.
// Loosely modeled on noalumni.com/working-genius (2026-11-10). Descriptions of the six types are in our own words.
// Working Genius is a model and trademark of The Table Group; the credit line on the page says so.
// House style: no prices, no guaranteed outcomes, no client names, no em dashes.

export default function workingGeniusContent(site) {
  const name = site.siteName;
  const region = site.location.region;

  return {
    workingGenius: {
      title: `The 6 Types of Working Genius for Teams in ${region} | ${name}`,
      description: `Working Genius assessments, team maps, and workshops for owner-led businesses in ${region}: more productive, more profitable teams, in any industry.`,
      serviceType: 'Working Genius assessments and team workshops',
      eyebrow: 'The 6 Types of Working Genius',
      headline: 'Put your people on the work that gives them energy.',
      lead: 'Turnover and disengagement are expensive. Working Genius shows each person the kind of work they are wired for, so your team does more of it, with less friction and burnout. In any industry, that adds up to a more productive and more profitable team.',
      button: 'Bring Working Genius to your team',
      typesLink: 'See the six types',

      whatHeading: 'What is Working Genius?',
      what: [
        'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group. It shows that all work moves through six stages, and that each person is naturally energized by some of them and drained by others.',
        'A short assessment shows each person their two working geniuses (the work that gives them energy and joy), their two working competencies, and their two working frustrations. It is not a personality test. It is about how work gets done, and where each person fits.',
      ],

      typesHeading: 'The six types',
      typesIntro: 'Every project moves through three stages. Each stage needs two kinds of genius.',
      stages: [
        {
          name: 'Ideation',
          types: [
            { letter: 'W', name: 'Wonder', body: 'Asks the big questions and notices what could be better.' },
            { letter: 'I', name: 'Invention', body: 'Comes up with original ideas and solutions.' },
          ],
        },
        {
          name: 'Activation',
          types: [
            { letter: 'D', name: 'Discernment', body: 'Weighs ideas with instinct and good judgment.' },
            { letter: 'G', name: 'Galvanizing', body: 'Rallies people and gets them moving.' },
          ],
        },
        {
          name: 'Implementation',
          types: [
            { letter: 'E', name: 'Enablement', body: 'Answers the call and gives people the help they need.' },
            { letter: 'T', name: 'Tenacity', body: 'Pushes the work across the finish line.' },
          ],
        },
      ],

      roiHeading: 'Why it pays off',
      roiIntro: 'Payroll is one of the largest costs in most owner-led businesses. Working Genius helps you get more from it, whatever you build, sell, or serve.',
      roi: [
        { name: 'Less time lost in handoffs', body: 'Work that stalls between ideas, decisions, and follow-through costs hours every week. A team map shows where it stalls and who can move it.' },
        { name: 'More output from the same team', body: 'People are faster and do better work when more of their day goes to their geniuses, and less to their frustrations.' },
        { name: 'Fewer costly departures', body: 'Replacing a good employee means recruiting, training, and lost momentum. People who enjoy their work are more likely to stay.' },
        { name: 'Better hires and role design', body: 'Hiring for the geniuses a team is missing fills real gaps, instead of adding more of what you already have.' },
      ],
      roiNote: 'Every project, in every industry, moves through the same six stages. That is why the model fits a construction company, a dealership, a professional practice, or a nonprofit equally well.',

      whyHeading: 'Why it works',
      why: [
        { name: 'Built around your real work', body: 'We apply the model to your team, your roles, and the projects on your desk, not a generic workshop.' },
        { name: 'Ties to your numbers', body: 'With a CPA and fractional CFO on the team, we connect the changes to the measures you already track.' },
        { name: 'Training your team can use', body: 'Working sessions end with specific changes to who does what.' },
        { name: 'Culture first, at every level', body: 'From the front line to the leadership team, everyone gets a shared language for how work gets done.' },
      ],

      offerHeading: 'What we offer',
      offers: [
        { name: 'Assessments and debriefs', body: 'Working Genius assessments for each person, with a one-to-one walk through of their results.' },
        { name: 'Team maps', body: 'A map of your whole team that shows where work stalls, which geniuses you have plenty of, and which are missing.' },
        { name: 'Team workshops', body: 'A working session that turns the map into real changes in roles, meetings, and handoffs.' },
        { name: 'Leadership team sessions', body: 'Help for owners and leadership teams to lead with their own geniuses and staff around their frustrations.' },
        { name: 'Hiring and role design', body: 'Working Genius and the Ideal Team Player model, used together to design roles and hire the right people.', link: { key: 'growTeam', text: 'More on growing your team' } },
      ],

      leadsHeading: 'Who leads this work',
      leads: ['greg', 'matt'],
      // Page-specific lines for the leads, in place of their usual short bio.
      leadNotes: {
        matt: 'Matt, a CPA and fractional CFO, connects Working Genius to the numbers: where time and payroll go, and how a better-fit team shows up in productivity and profit.',
      },

      faq: [
        {
          q: 'What is the Working Genius assessment?',
          a: 'A short online assessment from The Table Group that identifies each person’s two working geniuses, two working competencies, and two working frustrations. We set it up for your team and walk everyone through the results.',
        },
        {
          q: 'Is Working Genius a personality test?',
          a: 'No. It is a productivity model about how work gets done. It shows which kinds of work give each person energy and which wear them down, so you can put people where they do their best work.',
        },
        {
          q: 'Who is it for?',
          a: 'Owners, leadership teams, and whole teams in owner-led businesses of any industry, typically 5 to 50 people. It works for a single leader, a leadership team, or the whole company.',
        },
        {
          q: 'Is Working Genius worth the investment?',
          a: 'For most teams, the larger cost is the one already being paid: time lost in stalled handoffs, good people burning out on the wrong work, and hires that do not fill the real gap. Working Genius makes those costs visible and gives you specific changes to address them. Because Matt is a CPA and fractional CFO, we can tie those changes to the numbers you already track.',
        },
        {
          q: 'How does it fit with the rest of your work?',
          a: 'Working Genius often starts the conversation. From there it connects naturally to coaching, to clear ownership of every seat, and to hiring with the Ideal Team Player model.',
        },
      ],

      closingHeading: 'Find the work your team was made for.',
      closingBody: 'Start with a short conversation about your team and your numbers. We will recommend where to begin.',
      credit: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group. Working Genius is a trademark of The Table Group.',
    },
  };
}
