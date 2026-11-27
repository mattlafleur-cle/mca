// Copy for the December 2026 event pages: /working-genius-workshop/ and /holiday-party/.
// Drafted 2026-11-27 at Matt's direction. Facts supplied by Matt: dates, times, venue, fee, and what the fee includes.
// Open items (Matt to supply) are listed in DECISIONS.md and in the chat that created these pages; nothing here
// is invented to fill them. The workshop registration embed goes in `embedHtml` when Matt sends it.
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

export default function eventsContent(site) {
  const name = site.siteName;

  return {
    workshop: {
      title: `Working Genius Workshop in Cuyahoga Falls, December 15 | ${name}`,
      description: 'A morning Working Genius workshop for small business owners and leaders in the Akron and Canton area, with your own assessment and report. December 15.',
      eyebrow: 'Workshop · Tuesday, December 15',
      headline: 'Discover your Working Genius, and your team’s.',
      lead: 'A hands-on morning for small business owners and leaders in the Greater Akron and Canton area. Learn the six types of work, find your own two geniuses, and leave knowing how to put your people on the work that gives them energy.',
      dated: true,
      hideDate: true,
      when: 'Tuesday, December 15, 2026',
      time: '9:00 AM to noon',
      venue,
      price: '$99 per person',
      includes: ['Your own Working Genius assessment', 'A personal assessment report', 'Refreshments'],
      registerButton: 'Register now',
      learnHeading: 'What you will take away',
      learn: [
        { icon: 'compass', name: 'Your two geniuses', line: 'The kinds of work that give you energy, and the ones that drain you.' },
        { icon: 'people', name: 'A language for your team', line: 'Six simple words for how work moves from idea to done.' },
        { icon: 'lanes', name: 'Where work stalls', line: 'Why handoffs break down, and what to change first.' },
      ],
      forHeading: 'Who it is for',
      forLine: 'Owners, presidents, and leaders of small businesses in the Greater Akron and Canton area who want a more productive team and more of their own day spent on the work they do best.',
      registerHeading: 'Register',
      // Paste the registration embed HTML here when it arrives; until then the fallback below shows.
      embedHtml: '',
      registerFallback: 'Online registration is being set up. To hold your seat now, email us and we will confirm it.',
      registerSubject: 'Working Genius Workshop, December 15',
      calendar: { file: 'events/working-genius-workshop-2026-12-15.ics', text: 'Add to calendar' },
      event: {
        name: 'The 6 Types of Working Genius Workshop',
        start: '2026-12-15T09:00:00-05:00',
        end: '2026-12-15T12:00:00-05:00',
        price: '99',
      },
      credit: 'The 6 Types of Working Genius is a model created by Patrick Lencioni and The Table Group. Working Genius is a trademark of The Table Group.',
    },

    holidayParty: {
      title: `Holiday Party with BUILD, December 17 in Cuyahoga Falls | ${name}`,
      description: 'Join Maple Creek Advisors and BUILD for a holiday party at The Commons in Cuyahoga Falls on Thursday, December 17, from 4:00 to 7:00 PM.',
      eyebrow: 'Holiday party · Thursday, December 17',
      headline: 'Celebrate the season with us.',
      lead: `${name} and BUILD (Business United in Leadership Development) invite you to an evening to celebrate the year with business owners and leaders from across the region.`,
      dated: true,
      hideDate: true,
      when: 'Thursday, December 17, 2026',
      time: '4:00 to 7:00 PM',
      venue,
      hosts: `Co-hosted by ${name} and BUILD`,
      rsvpButton: 'RSVP by email',
      rsvpSubject: 'Holiday Party RSVP, December 17',
      rsvpNote: 'Please let us know you are coming so we can plan for you.',
      calendar: { file: 'events/holiday-party-2026-12-17.ics', text: 'Add to calendar' },
      event: {
        name: `${name} and BUILD Holiday Party`,
        start: '2026-12-17T16:00:00-05:00',
        end: '2026-12-17T19:00:00-05:00',
      },
    },
  };
}
