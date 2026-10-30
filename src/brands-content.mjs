// Copy for the family of brands page at /brands/.
// Unlisted: not in the menu, footer, sitemap, or llms.txt, and marked noindex. Share the link directly.
// Brand descriptions follow each brand's own website as of 2026-10-30. Retreat to Advance follows the BUILD page.
// Forest City CPA's wording is Matt's (2026-10-30) and intentionally differs from forestcity.pro.
// After editing, run `npm run brands-image` to refresh the downloadable image.

export default function brandsContent(site) {
  const name = site.siteName;

  return {
    seed: 41,
    title: `Family of Brands | ${name}`,
    description: `The brands Josh Muller and Matt LaFleur lead together under ${name}.`,
    eyebrow: 'Family of brands',
    headline: `The ${name} family of brands.`,
    lead: 'Seven brands, two founders, one region. Each brand keeps its own name and focus.',
    updated: 'October 30, 2026',
    imageFile: 'brands/brand-family.png',
    imageLink: 'Download as an image',
    pendingSite: 'Website in development',

    // The parent brand, shown above the others.
    parent: {
      name,
      tag: 'Coaching, fractional CFO, and advisory',
      body: site.tagline,
      url: site.canonicalDomain,
    },

    // Logo kinds: 'mark' shows an SVG file from src/assets/ beside the name; 'word' sets the name as a wordmark.
    // Leave url empty when the brand has no website yet; the card then shows pendingSite.
    brands: [
      {
        id: 'build',
        name: 'BUILD',
        tag: 'Owner community',
        body: 'Business United in Leadership Development. Monthly rooms where Northeast Ohio business owners and leaders build each other up.',
        url: site.build.url,
        logo: { kind: 'word', text: 'BUILD', sub: 'Business United In Leadership Development' },
      },
      {
        id: 'retreat',
        name: 'Retreat to Advance',
        tag: 'Custom retreats',
        body: 'Custom retreat programming for owners and leadership teams, in any length, format, or style. Step away to take stock, distill what matters, and set the path ahead.',
        url: '',
        logo: { kind: 'word', text: 'Retreat to Advance' },
      },
      {
        id: 'carts',
        name: 'Maple Creek Carts',
        tag: 'Golf cart industry education',
        body: 'The education and business-building platform for the golf cart industry: sales, service, operations, and leadership.',
        note: 'Build My Dealership, a dealer training name, is in development.',
        url: 'https://maplecreekcarts.com/',
        logo: { kind: 'mark', src: 'brands/carts-mark.svg', text: 'Maple Creek Carts' },
      },
      {
        id: 'glai',
        name: 'Great Lakes AI Institute',
        tag: 'Practical AI',
        body: 'AI readiness advising, hands-on training, and workflow help for small businesses, nonprofits, schools, and community groups.',
        url: 'https://greatlakesai.institute/',
        logo: { kind: 'mark', src: 'brands/glai-mark.svg', text: 'Great Lakes AI Institute' },
      },
      {
        id: 'noalumni',
        name: 'No Alumni',
        tag: 'Careers and culture',
        body: 'Celebrating alternative career paths, skilled trades, and modern work, and increasing vocational joy. Certified Working Genius Facilitators.',
        note: 'Related nonprofit: No Alumni Foundation, a 501(c)(3).',
        url: 'https://www.noalumni.com/',
        logo: { kind: 'word', text: 'No Alumni' },
      },
      {
        id: 'forestcity',
        name: 'Forest City CPA',
        tag: 'Fractional CFO and CPA guidance',
        body: 'Fractional CFO services and expert CPA guidance. Rooted in Northeast Ohio, serving clients anywhere in the world.',
        url: 'https://forestcitycpa.com/',
        logo: { kind: 'word', text: 'Forest City', sub: 'CPA' },
      },
    ],
  };
}
