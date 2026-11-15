// Copy for /speaking/: keynotes, workshops, and team sessions by Josh Muller, Matt LaFleur, and Greg Snyder.
// Built 2026-11-15 at Matt's direction, loosely modeled on noalumni.com/speaking. No Alumni's statistics, client
// logos, reviews, and photos belong to No Alumni and are not used here. Proof on this page is limited to
// credentials and sessions given under the Maple Creek Advisors name; add more to `recent` as Matt supplies it.
// Talk titles other than "Building a Good Team" (Josh's J-TEC session) are working titles.
// House style: no prices, no guaranteed outcomes, no client names, no em dashes.

export default function speakingContent(site) {
  const name = site.siteName;

  return {
    speaking: {
      title: `Speaking: Keynotes and Workshops for Business Owners | ${name}`,
      description: 'Keynotes, workshops, and team sessions on Working Genius, owner freedom, profit, and EOS, from Josh Muller, Matt LaFleur, and Greg Snyder.',
      serviceType: 'Keynotes, workshops, and team sessions for business owners and leaders',
      eyebrow: 'Keynotes · Workshops · Team sessions',
      headline: 'Practical talks for the people who run businesses.',
      lead: 'Keynotes, workshops, and team sessions on the questions owners and leaders actually face: building a team that carries the work, getting time back, understanding what drives profit, and running the business on a clear operating system. Every session is built for your audience.',
      answer: `${name} delivers keynotes, workshops, and team sessions for associations, companies, leadership teams, peer groups, and schools. Josh Muller, Matt LaFleur, and Greg Snyder speak on The 6 Types of Working Genius and building a good team, owner freedom and time, profit and financial clarity, and EOS. Sessions are custom, practical, and available anywhere in the world, in person or virtually.`,
      dated: true,
      hideDate: true,
      planButton: 'Email us about your event',
      callButton: 'Schedule a call',

      topicsHeading: 'Talk topics',
      topicsIntro: 'Each topic can be a keynote, a workshop, or a working session for a leadership team. Titles are working titles; we shape each one around your audience.',
      topics: [
        {
          title: 'Building a Good Team',
          speakers: ['josh', 'greg'],
          topic: 'Working Genius and teams',
          body: 'The right people, in the right seats, trusted to finish the work. Built around The 6 Types of Working Genius, so every attendee learns which kinds of work give them energy and which drain it.',
          takeaways: [
            'What a good team actually looks like',
            'Matching people to the work they do best',
            'Handing off work so it does not come back',
          ],
          link: { key: 'workingGenius', text: 'About The 6 Types of Working Genius' },
        },
        {
          title: 'Getting Your Time Back',
          speakers: ['josh'],
          topic: 'Owner freedom and time',
          body: 'For owners whose business is taking more of their life than they want to give. How to step out of the middle of every decision and build a business that does not depend on you for everything.',
          takeaways: [
            'Where an owner’s time really goes',
            'Delegating decisions, not just tasks',
            'Small changes that hand time back every week',
          ],
          link: { key: 'timeBack', text: 'Attendees can try the Owner Freedom Calculator' },
        },
        {
          title: 'What Really Drives Your Profit',
          speakers: ['matt'],
          topic: 'Profit and financial clarity',
          body: 'A plain-language look at the numbers that matter most to an owner-led business, from a CPA and fractional CFO. How pricing, direct costs, and overhead work together, and why profit is not the same as cash.',
          takeaways: [
            'Reading your numbers without an accounting degree',
            'The small changes that move profit most',
            'Questions to ask before cutting costs or raising prices',
          ],
          link: { key: 'profit', text: 'Attendees can try the Profit Levers Calculator' },
        },
        {
          title: 'Running on a Clear Operating System',
          speakers: ['josh'],
          topic: 'EOS and operating rhythm',
          body: 'From a Certified EOS Implementer: how a shared vision, quarterly priorities, a weekly scorecard, and a weekly meeting help a leadership team grow without more chaos.',
          takeaways: [
            'Getting a leadership team on the same page',
            'Quarterly Rocks and a weekly Scorecard',
            'A weekly meeting that solves issues instead of circling them',
          ],
          link: { key: 'growBusiness', text: 'About EOS and the Time-Rich Company framework' },
          note: 'EOS® and Entrepreneurial Operating System® are registered trademarks of EOS Worldwide.',
        },
      ],

      audiencesHeading: 'Who we speak to',
      audiences: [
        { name: 'Associations and conferences', body: 'Member meetings, annual conferences, and breakout sessions for trade, professional, and business associations.' },
        { name: 'Companies and leadership teams', body: 'Whole-company sessions that bring the office and the field together, and working sessions for leadership teams.' },
        { name: 'Peer groups and chambers', body: 'Owner and executive groups that want a practical tool members can use the next day.' },
        { name: 'Schools and career-tech programs', body: 'Business training and career-tech programs, like the J-TEC Speaker Series business training for owners in the trades.' },
        { name: 'Churches and ministries', body: 'Staff and volunteer teams who want to serve where they thrive, without burning out.' },
        { name: 'Retreats and off-sites', body: 'Guided sessions as part of a leadership retreat, with a plan to carry home.' },
      ],

      formatsHeading: 'Formats',
      formats: ['Keynotes', 'Interactive workshops', 'Leadership team sessions', 'Multi-session series', 'Retreat sessions', 'In person or virtual'],

      getsHeading: 'More than a talk',
      gets: [
        'A session designed around your audience, your industry, and your goals',
        'For Working Genius sessions, the assessment set up for attendees before the event',
        'Practical tools attendees can use the next day, including our free calculators',
        'A follow-up page with notes, resources, and next steps',
        'Options for teams that want to go further after the event',
      ],

      stepsHeading: 'How it works',
      steps: [
        { title: 'A short call', body: 'Who is in the room, what you want to change, where, and when.' },
        { title: 'We design it', body: 'Format, length, and examples built for your audience.' },
        { title: 'Preparation', body: 'Assessments and logistics handled ahead of time, where the topic calls for them.' },
        { title: 'The session', body: 'Practical, engaging, and grounded in real work.' },
        { title: 'Follow-through', body: 'Notes, resources, and next steps for attendees and organizers.' },
      ],

      recentHeading: 'Recent sessions',
      // Each: { title, event, place, date, speaker, isoDate, venue, detail }. Facts from the J-TEC flyer
      // (Famous Supply, 2026) supplied by Matt on 2026-11-15. Add sessions as Matt supplies them.
      recent: [
        {
          title: 'Building a Good Team',
          event: 'J-TEC Speaker Series business training, presented by Famous Supply',
          place: 'Maple Heights, Ohio',
          date: 'November 11, 2026',
          isoDate: '2026-11-11T10:00:00-05:00',
          venue: 'J-TEC',
          speaker: 'Josh Muller',
          detail: 'A morning business training session for owners and leaders in the trades on handing off work: what a good team looks like, the right people in the right seats, and giving work away so it does not come back. The day\u2019s featured conversation, Built to Last, was with David Kohler, Chair and CEO of Kohler Co., and Marc and Brian Blaushild of Famous Supply.',
        },
      ],
      presentedHeading: 'Groups Josh has presented to in Northeast Ohio',
      // Supplied by Matt on 2026-11-15. Names only; no dates, titles, or results claimed.
      presented: ['Akron Executives Association', 'Northcoast Business Initiative (NCBI)', 'Greater Akron Chamber', 'J-TEC Speaker Series'],

      speakersHeading: 'Our speakers',
      speakerNotes: {
        josh: 'Josh built and sold a construction company before coaching owners. A Certified EOS Implementer, he speaks on building a good team, owner freedom, and running on a clear operating system, and has presented to the Akron Executives Association, NCBI, and the Greater Akron Chamber.',
        matt: 'Matt is a CPA licensed in Ohio and California and a fractional CFO. He speaks on profit, pricing, cash, and making the numbers useful to owners.',
        greg: 'Greg is a Certified Working Genius Facilitator and engaging speaker with more than 30 years in entrepreneurship, sales, marketing, and leadership. He speaks on Working Genius, culture, and teams.',
      },

      planHeading: 'Tell us about your group.',
      planBody: 'Send a few details and we will follow up with ideas and a clear proposal. The button below opens an email with the questions filled in, so you only have to answer them. Prefer to talk? Schedule a call.',
      planEmailSubject: 'Speaking inquiry',
      planEmailBody: [
        'Organization:',
        'Type of event (conference, company session, leadership team, peer group, school, retreat):',
        'Topic or topics of interest:',
        'Approximate group size:',
        'Date or timeframe:',
        'Location, or virtual:',
        'What would make this a win?',
      ],

      faq: [
        {
          q: 'How much does a keynote or workshop cost?',
          a: 'Every engagement is custom, so fees depend on the format, group size, location, and how much follow-up you want. We agree on scope and fees before anything is scheduled. Tell us about your event and we will send a clear proposal.',
        },
        {
          q: 'What topics do you speak on?',
          a: 'Building a good team with The 6 Types of Working Genius, owner freedom and getting time back, profit and financial clarity for owners, and running a business on EOS. We shape each session around your audience.',
        },
        {
          q: 'Who are your speakers?',
          a: 'Josh Muller, a Certified EOS Implementer who built and sold a construction company and has presented to groups including the Akron Executives Association, the Northcoast Business Initiative, and the Greater Akron Chamber; Matt LaFleur, a CPA and fractional CFO; and Greg Snyder, a Certified Working Genius Facilitator.',
        },
        {
          q: 'Do attendees take the Working Genius assessment?',
          a: 'For Working Genius sessions, yes, ideally before the event. We set it up for attendees so the session can use their results. Leadership teams can also get a team map.',
        },
        {
          q: 'Where are you based, and do you travel?',
          a: 'We are based in Northeast Ohio and speak to groups across the United States and around the world, in person or virtually.',
        },
      ],
      closingHeading: 'Bring a practical session to your group.',
      closingBody: 'Start with a short call or an email about your event. We will recommend a topic and format that fit.',
    },
  };
}
