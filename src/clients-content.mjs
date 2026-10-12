// Copy for the current-client updates page at /client-updates/.
// Unlisted: not in the menu, footer, sitemap, or llms.txt, and marked noindex. Share the link directly.
// Every section below renders only when it has content, so empty sections simply do not appear.
// While nothing is filled in, the page shows `pendingNote`.

export default function clientsContent(site) {
  const name = site.siteName;

  return {
    seed: 33,
    title: `2027 Client Updates | ${name}`,
    description: `Announcements, changes, and new benefits for current ${name} clients in 2027.`,
    eyebrow: 'For current clients',
    headline: 'What is changing in 2027, and what it means for you.',
    lead: 'This page collects the announcements, changes, and new client benefits we are making for 2027, so you have one place to read them and come back to them.',
    // Shown under the hero, e.g. 'October 12, 2026'. Leave empty to hide.
    updated: 'October 12, 2026',
    pendingNote: 'We are finalizing the details and will post them here. If you have a question in the meantime, schedule a time to talk or email us.',

    // Main announcements. Each: { title, date (optional), body: ['paragraph', ...], items (optional list) }
    announcementsHeading: 'Announcements',
    announcements: [],

    // New benefits. Each: { name, body }
    benefitsHeading: 'New for clients in 2027',
    benefitsIntro: 'What our clients get, starting in 2027.',
    benefits: [
      { name: 'Notes and reminders after every session', body: 'After every coaching session, you receive the meeting notes, the actions we agreed on, and follow-up reminders.' },
      { name: 'Financial analysis of your business', body: 'An analysis of your business or organization by an experienced CPA and CFO.' },
      { name: 'Coaching and progress dashboard', body: 'A dashboard that keeps your coaching and your progress in one place.' },
      { name: 'Free BUILD event tickets', body: 'Tickets to BUILD events at no cost, to learn alongside other owners.', link: { key: 'build', label: 'About BUILD' } },
    ],

    // What stays the same. Plain list of strings.
    unchangedHeading: 'What is not changing',
    unchanged: [],

    // Key dates. Each: { date, body }
    datesHeading: 'Key dates',
    dates: [],

    // What clients need to do. Each: { title, body, button (optional): { href, label } }
    actionsHeading: 'What you need to do',
    actions: [
      {
        title: 'Complete the sign-up form',
        body: 'Make your 2027 coaching commitment and get scheduling priority.',
        // Add the form link here, e.g. { href: 'https://...', label: 'Open the sign-up form' }
        button: null,
      },
    ],

    // Each: { q, a }
    faq: [],

    closingHeading: 'Questions about any of this?',
    closingBody: 'We would rather talk it through than have you guess. Schedule a time, or email us and we will get back to you.',
  };
}
