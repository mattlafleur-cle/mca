// Copy for the December 2026 event pages: /working-genius-workshop/ and /holiday-party/.
// Drafted 2026-11-27 and finished 2026-11-28 with Matt's answers. Every fact here comes from Matt.
// Private, not for the pages: the room holds about 50 registrants, and full refunds are allowed up to seven days
// before the workshop. Matt does not want the refund policy advertised, so it is deliberately left off.
// Registration and RSVP embeds go in `embedHtml` when Matt sends them; until then the email fallback shows.
// `upcomingUntil` (YYYY-MM-DD, Eastern) hides the home cards and cross-page callouts after each event.
// House style: no em dashes, no promised outcomes. The workshop fee is shown because it is an event ticket, so
// scripts/check.mjs allows a price on that one page.

const venue = {
  name: 'The Commons',
  note: 'A co-working space owned and operated by the Greater Akron Chamber',
  street: '111 Stow Avenue',
  town: 'Cuyahoga Falls',
  region: 'OH',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=111+Stow+Avenue+Cuyahoga+Falls+OH',
};

// Google Calendar "add event" link (times in Eastern).
const gcal = ({ text, start, end, details }) =>
  `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(text)}&dates=${start}/${end}&ctz=America/New_York&location=${encodeURIComponent('The Commons, 111 Stow Avenue, Cuyahoga Falls, OH')}&details=${encodeURIComponent(details)}`;

export default function eventsContent(site) {
  const name = site.siteName;

  return {
    // Which pages show a callout for which event (route keys), while the event is upcoming.
    eventCallouts: {
      workingGenius: ['workshop'],
      speaking: ['workshop'],
      growTeam: ['workshop'],
      build: ['holidayParty'],
    },

    workshop: {
      title: `Working Genius Workshop in Cuyahoga Falls, December 15 | ${name}`,
      description: 'A morning Working Genius workshop for small business owners and leaders in the Akron and Canton area, with your own assessment and report. December 15.',
      ogImage: 'events/og-working-genius-workshop.jpg',
      ogAlt: 'Working Genius Workshop, Tuesday, December 15, at The Commons in Cuyahoga Falls',
      eyebrow: 'Workshop · Tuesday, December 15',
      headline: 'Discover your Working Genius, and your team’s.',
      lead: 'A hands-on morning for small business owners and leaders in the Greater Akron and Canton area. Find your two geniuses, learn the six types of work, and leave knowing how to put your people on the work that gives them energy.',
      badge: 'Limited seats · Register by December 11',
      dated: true,
      hideDate: true,
      upcomingUntil: '2026-12-15',
      when: 'Tuesday, December 15, 2026',
      time: '9:00 AM to noon',
      deadline: 'Registration closes December 11',
      venue,
      dayOf: 'Parking and day-of details are sent after you register.',
      price: '$99 per person',
      includesLine: 'Includes your own Working Genius assessment and personal report, plus light breakfast, coffee, snacks, and refreshments.',
      registerButton: 'Register now',
      dock: 'Dec 15 · $99',
      photo: { src: 'photos/events/commons-session.jpg', webp: 'photos/events/commons-session.webp', small: 'photos/events/commons-session-small.webp', width: 1600, height: 1200, alt: 'Josh Muller presenting to a room of business owners and leaders at The Commons in Cuyahoga Falls', caption: 'Josh Muller presenting at The Commons, where the workshop will be held.' },

      learnHeading: 'What you will take away',
      learn: [
        { icon: 'compass', name: 'Your two geniuses', line: 'The kinds of work that give you energy, and the ones that drain you.' },
        { icon: 'people', name: 'A language for your team', line: 'Six simple words for how work moves from idea to done.' },
        { icon: 'lanes', name: 'Where work stalls', line: 'Why handoffs break down, and what to change first.' },
      ],
      forHeading: 'Who it is for',
      forLine: 'Owners, presidents, and leaders of small businesses in the Greater Akron and Canton area who want a more productive team and more of their own day spent on the work they do best.',

      agendaHeading: 'The morning',
      agenda: [
        { title: 'Arrive and coffee', line: 'Light breakfast and time to meet other owners and leaders.' },
        { title: 'Workshop keynote', line: 'Why fit matters, and what it costs a business when it is missing.' },
        { title: 'Interactive learning', line: 'The 6 Types of Working Genius, hands on.' },
        { title: 'Your results and your team', line: 'What your results mean, and how to apply them with your people.' },
      ],
      assessmentNote: 'Your assessment is included. We encourage you to take it before the session and bring your results, though it is not required.',

      leadsHeading: 'Your facilitators',
      leads: [
        { id: 'greg', line: 'Certified Working Genius Facilitator' },
        { id: 'josh', line: 'Certified EOS Implementer who built and sold his own company' },
        { id: 'matt', line: 'Fractional CFO and leader, experienced in teaching Working Genius' },
      ],

      faqHeading: 'Questions',
      faq: [
        { q: 'What should I bring?', a: 'Your assessment results, if you have taken it, and a few real situations from your team you would like to think through. Taking the assessment beforehand is encouraged but not required.' },
        { q: 'Can I bring colleagues from my team?', a: 'Yes. Each person registers individually, and coming with other leaders from your business is a great way to put what you learn to work together.' },
        { q: 'Is this a fit for nonprofit, church, or ministry leaders?', a: 'Yes. The six types of work apply to every team, so leaders of nonprofits, churches, and ministries are welcome.' },
        { q: 'Where do I park?', a: 'Parking and day-of details are sent after you register.' },
        { q: 'When does registration close?', a: 'December 11, 2026, or sooner if seats fill.' },
      ],
      registerHeading: 'Register',
      // Paste the registration embed HTML here when it arrives; until then the fallback below shows.
      embedHtml: '',
      registerFallback: 'Online registration will appear here shortly. Seats are limited, so to hold yours now, email us and we will confirm it.',
      registerSubject: 'Working Genius Workshop, December 15',
      calendar: { file: 'events/working-genius-workshop-2026-12-15.ics', text: 'Apple or Outlook' },
      google: gcal({ text: 'Working Genius Workshop (Maple Creek Advisors)', start: '20261215T090000', end: '20261215T120000', details: 'The 6 Types of Working Genius workshop. Details: https://maplecreekadvisors.com/working-genius-workshop/' }),
      event: {
        name: 'The 6 Types of Working Genius Workshop',
        start: '2026-12-15T09:00:00-05:00',
        end: '2026-12-15T12:00:00-05:00',
        price: '99',
        validThrough: '2026-12-11T23:59:00-05:00',
        availability: 'https://schema.org/LimitedAvailability',
        performers: ['greg', 'josh', 'matt'],
      },
      home: { date: 'Tue, Dec 15', time: '9:00 AM to noon', name: 'Working Genius Workshop', line: 'Limited seats. Includes your own assessment and report. Register by December 11.', cta: 'Details and registration' },
      callout: 'Join us for a hands-on Working Genius workshop on Tuesday, December 15, in Cuyahoga Falls. Limited seats.',
      credit: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group. Working Genius is a trademark of The Table Group.',
    },

    holidayParty: {
      title: `Holiday Party with BUILD, December 17 in Cuyahoga Falls | ${name}`,
      description: 'Join Maple Creek Advisors and BUILD for a free holiday party at The Commons in Cuyahoga Falls on Thursday, December 17, from 4:00 to 7:00 PM.',
      ogImage: 'events/og-holiday-party.jpg',
      ogAlt: 'Maple Creek Advisors and BUILD Holiday Party, Thursday, December 17, at The Commons in Cuyahoga Falls',
      eyebrow: 'Holiday party · Thursday, December 17',
      headline: 'Celebrate the season with us.',
      lead: `${name} and BUILD (Business United in Leadership Development) invite our clients, partners, and the people and companies we work with to an evening celebrating the year together.`,
      badge: 'Free · Please RSVP by December 14',
      dated: true,
      hideDate: true,
      upcomingUntil: '2026-12-17',
      festiveLogo: true,
      // Invitation to BUILD under the event facts (Matt, 2026-11-28: use the party to invite new owners in).
      buildInvite: {
        lead: 'New to BUILD? You are invited.',
        body: 'BUILD is where business owners come so they never build alone, with breakfasts, lunches, happy hours, and workshops across Northeast Ohio. This party is the easiest way to meet the community, so bring a fellow owner with you.',
        linkText: 'Find a BUILD gathering near you',
      },
      when: 'Thursday, December 17, 2026',
      time: '4:00 to 7:00 PM',
      deadline: 'Please RSVP by December 14',
      venue,
      dayOf: 'Parking and arrival details are sent after you RSVP.',
      cost: 'Free',
      hosts: `Co-hosted by ${name} and BUILD`,
      rsvpButton: 'RSVP',
      dock: 'Dec 17 · Free',

      expectHeading: 'What to expect',
      expect: [
        { icon: 'people', name: 'Food and beverages', line: 'Plenty to eat and drink through the evening.' },
        { icon: 'stage', name: 'Short remarks', line: 'A few words to celebrate the year together.' },
        { icon: 'lanes', name: 'Holiday mingling', line: 'Relaxed, festive time with owners and leaders from across the region.' },
      ],
      dress: 'Dress: holiday business casual.',
      whoHeading: 'Who is invited',
      who: `Our clients, partners, and the people and companies we work with. Friends of ${name} and BUILD are welcome too.`,

      sponsorHeading: 'Featured sponsors',
      sponsorLine: 'We are inviting one or two businesses to be featured sponsors of the evening. Interested? Let us know.',
      sponsorButton: 'Ask about sponsoring',
      sponsorSubject: 'Holiday Party sponsorship',

      registerHeading: 'RSVP',
      embedHtml: '',
      registerFallback: 'Online RSVP will appear here shortly. For now, a quick email lets us plan for you.',
      rsvpSubject: 'Holiday Party RSVP, December 17',
      calendar: { file: 'events/holiday-party-2026-12-17.ics', text: 'Apple or Outlook' },
      google: gcal({ text: 'Maple Creek Advisors and BUILD Holiday Party', start: '20261217T160000', end: '20261217T190000', details: 'Holiday party co-hosted by Maple Creek Advisors and BUILD. Details: https://maplecreekadvisors.com/holiday-party/' }),
      event: {
        name: `${name} and BUILD Holiday Party`,
        start: '2026-12-17T16:00:00-05:00',
        end: '2026-12-17T19:00:00-05:00',
        free: true,
        validThrough: '2026-12-14T23:59:00-05:00',
      },
      home: { date: 'Thu, Dec 17', time: '4:00 to 7:00 PM', name: 'Holiday Party with BUILD', line: 'Free. Food, beverages, and festive mingling. Please RSVP by December 14.', cta: 'Details and RSVP' },
      callout: 'BUILD and Maple Creek Advisors are hosting a free holiday party on Thursday, December 17, in Cuyahoga Falls.',
    },
  };
}
