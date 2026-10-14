// Shared page shell, header, footer, and small components.

export const esc = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Route table. `path` is the clean production URL; `file` is the flat file used for the artifact preview.
export function routes(site) {
  const list = [
    { key: 'home', label: 'Home', path: '/', file: 'index.html', out: 'index.html' },
    { key: 'services', label: 'Services', path: '/services/', file: 'services.html', out: 'services/index.html' },
    // Dedicated service pages: linked from Services, Home, and the footer, not the top menu.
    { key: 'coaching', label: 'Business coaching', path: '/business-coaching/', file: 'business-coaching.html', out: 'business-coaching/index.html', service: true },
    { key: 'fractionalCfo', label: 'Fractional CFO', path: '/fractional-cfo/', file: 'fractional-cfo.html', out: 'fractional-cfo/index.html', service: true },
    { key: 'advisory', label: 'Business advisory', path: '/business-advisory/', file: 'business-advisory.html', out: 'business-advisory/index.html', service: true },
    { key: 'sell', label: 'Selling your business', path: '/sell-your-business/', file: 'sell-your-business.html', out: 'sell-your-business/index.html', service: true },
    { key: 'howWeWork', label: 'How We Work', path: '/how-we-work/', file: 'how-we-work.html', out: 'how-we-work/index.html' },
    { key: 'about', label: 'About', path: '/about/', file: 'about.html', out: 'about/index.html' },
    { key: 'build', label: 'BUILD', path: '/build/', file: 'build.html', out: 'build/index.html' },
    { key: 'contact', label: 'Contact', path: '/contact/', file: 'contact.html', out: 'contact/index.html' },
    // Standalone page for churches: published and indexed, but not linked from the menu, footer, or Home.
    { key: 'church', label: 'Churches', path: '/church/', file: 'church.html', out: 'church/index.html', standalone: true },
    { key: 'carts', label: 'Golf cart businesses', path: '/carts/', file: 'carts.html', out: 'carts/index.html', standalone: true },
    { key: 'announcement', label: 'Announcement', path: '/announcement/', file: 'announcement.html', out: 'announcement/index.html', standalone: true },
    { key: 'onboarding', label: 'Onboarding', path: '/onboarding/', file: 'onboarding.html', out: 'onboarding/index.html', hidden: true, noindex: true },
    { key: 'clients', label: 'Client updates', path: '/client-updates/', file: 'client-updates.html', out: 'client-updates/index.html', hidden: true, noindex: true },
    // Private hero previews for the Home page. Delete once a hero is chosen.
    { key: 'previewHero1', renderAs: 'home', label: 'Hero preview 1', path: '/preview-hero/1/', file: 'preview-hero-1.html', out: 'preview-hero/1/index.html', hidden: true, noindex: true, bodyClass: 'hv1', livePath: '/', previewNote: 'Hero option 1 of 3: the tree and stripes.' },
    { key: 'previewHero2', renderAs: 'home', label: 'Hero preview 2', path: '/preview-hero/2/', file: 'preview-hero-2.html', out: 'preview-hero/2/index.html', hidden: true, noindex: true, bodyClass: 'hv2', livePath: '/', previewNote: 'Hero option 2 of 3: Cuyahoga Valley photo with the stripes.' },
    { key: 'previewHero3', renderAs: 'home', label: 'Hero preview 3', path: '/preview-hero/3/', file: 'preview-hero-3.html', out: 'preview-hero/3/index.html', hidden: true, noindex: true, bodyClass: 'hv3', livePath: '/', previewNote: 'Hero option 3 of 3: full-width Cuyahoga Valley photo with the stripes.' },
    { key: 'notFound', label: 'Page not found', path: '/404.html', file: '404.html', out: '404.html', hidden: true },
  ];
  return list.filter((r) => r.key !== 'build' || site.build.showPage);
}

export function createLinker(site, mode) {
  const table = Object.fromEntries(routes(site).map((r) => [r.key, r]));
  return {
    has: (key) => Boolean(table[key]),
    page(key, anchor) {
      const r = table[key];
      if (!r) throw new Error(`Unknown page: ${key}`);
      const base = mode === 'artifact' ? r.file : r.path;
      return anchor ? `${base}#${anchor}` : base;
    },
    // Primary call to action: the booking page when one is configured, otherwise the Contact page.
    cta() {
      return site.bookingUrl || this.page('contact');
    },
    ctaText() {
      return site.bookingUrl ? 'Schedule a conversation' : 'Start a conversation';
    },
    asset(file) {
      return mode === 'artifact' ? `assets/${file}` : `/assets/${file}`;
    },
  };
}

export function mailtoHref(site, topic) {
  const to = site.contact.recipients.join(',');
  const subject = encodeURIComponent(topic ? `${site.contact.emailSubject}: ${topic}` : site.contact.emailSubject);
  return `mailto:${to}?subject=${subject}`;
}

// Deterministic contour lines, drawn as smooth open paths. Used as a quiet creek or map motif.
export function contourSvg({ width = 640, height = 520, lines = 11, seed = 3, className = 'contours' } = {}) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const waves = Array.from({ length: 3 }, () => ({ a: 10 + rand() * 26, f: 0.6 + rand() * 1.6, p: rand() * Math.PI * 2 }));
  const paths = [];
  for (let i = 0; i < lines; i++) {
    const baseY = (height / (lines + 1)) * (i + 1);
    const drift = (i - lines / 2) * 0.12;
    const pts = [];
    for (let x = -20; x <= width + 20; x += 32) {
      const t = x / width;
      let y = baseY + drift * x * 0.35;
      for (const w of waves) y += w.a * Math.sin(t * Math.PI * 2 * w.f + w.p + i * 0.22);
      pts.push([x, y]);
    }
    let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
    for (let j = 1; j < pts.length; j++) {
      const [x0, y0] = pts[j - 1];
      const [x1, y1] = pts[j];
      const mx = (x0 + x1) / 2;
      d += ` Q${x0.toFixed(1)} ${y0.toFixed(1)} ${mx.toFixed(1)} ${((y0 + y1) / 2).toFixed(1)}`;
    }
    const last = pts[pts.length - 1];
    d += ` T${last[0].toFixed(1)} ${last[1].toFixed(1)}`;
    const accent = i === Math.floor(lines / 2);
    paths.push(`<path d="${d}"${accent ? ' class="contour-accent"' : ''}/>`);
  }
  return `<svg class="${className}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">${paths.join('')}</svg>`;
}

// Two lanes (people and numbers) that meet in one plan. Labels are real text so they scale.
export function lanesDiagram() {
  return `<figure class="lanes">
  <svg viewBox="0 0 560 240" role="img" aria-labelledby="lanes-title">
    <title id="lanes-title">Two lines, one labeled the people side and one labeled the numbers side, start apart and join into a single line labeled one plan.</title>
    <path class="lane lane-people" d="M24 48 C 190 48, 250 120, 360 120"/>
    <path class="lane lane-numbers" d="M24 192 C 190 192, 250 120, 360 120"/>
    <path class="lane lane-plan" d="M360 120 L 536 120"/>
    <circle class="lane-dot" cx="24" cy="48" r="6"/>
    <circle class="lane-dot" cx="24" cy="192" r="6"/>
    <circle class="lane-join" cx="360" cy="120" r="9"/>
    <text x="40" y="34" class="lane-label">The people side</text>
    <text x="40" y="224" class="lane-label">The numbers side</text>
    <text x="536" y="104" class="lane-label" text-anchor="end">One plan</text>
  </svg>
</figure>`;
}

// The Maple Creek Advisors badge. Decorative here (alt=""), because the name is always written out beside it.
// The header uses the "MAPLE CREEK" badge (logo-header.png, 4x for sharp screens); everywhere else uses the full badge.
function logoImg(link, size, file = 'logo.svg') {
  const h = size, w = Math.round((size * 108) / 116);
  return `<img class="logo-mark" src="${esc(link.asset(file))}" width="${w}" height="${h}" alt="">`;
}

export function ctaButton(link, { variant = 'primary', text } = {}) {
  const href = link.cta();
  const external = /^https?:/.test(href) ? ' rel="noopener"' : '';
  return `<a class="button button-${variant}" href="${esc(href)}"${external}>${esc(text || link.ctaText())}</a>`;
}

function header(site, link, current) {
  const items = routes(site).filter((r) => !r.hidden && !r.service && !r.standalone && r.key !== 'home' && r.key !== 'contact');
  const navItems = items
    .map((r) => `<li><a href="${esc(link.page(r.key))}"${r.key === current ? ' aria-current="page"' : ''}>${esc(r.label)}</a></li>`)
    .join('');
  return `<header class="site-header">
  <div class="wrap header-inner">
    <a class="wordmark" href="${esc(link.page('home'))}"${current === 'home' ? ' aria-current="page"' : ''}>${logoImg(link, 48, 'logo-header.png')}<span>${esc(site.siteName)}</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${navItems}</ul>
      ${ctaButton(link).replace('class="button button-primary"', 'class="button button-primary nav-cta"')}
    </nav>
  </div>
</header>`;
}

function footer(site, link) {
  const items = routes(site).filter((r) => !r.hidden && !r.service && !r.standalone);
  const services = routes(site).filter((r) => r.service);
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="wrap footer-inner">
    <div class="footer-brand">
      <p class="footer-name">${logoImg(link, 72)}<span>${esc(site.siteName)}</span></p>
      <p>${esc(site.tagline)}</p>
      <p>${esc(site.location.serviceLine)}</p>
    </div>
    <nav class="footer-nav" aria-label="Footer">
      <ul>${items.map((r) => `<li><a href="${esc(link.page(r.key))}">${esc(r.label)}</a></li>`).join('')}</ul>
      <ul>${services.map((r) => `<li><a href="${esc(link.page(r.key))}">${esc(r.label)}</a></li>`).join('')}</ul>
    </nav>
    <div class="footer-contact">
      <p class="footer-label">Email</p>
      <ul>${site.contact.recipients.map((e) => `<li><a href="mailto:${esc(e)}">${esc(e)}</a></li>`).join('')}</ul>
    </div>
  </div>
  ${site.location.areasServed?.length ? `<div class="wrap footer-areas"><p><span class="footer-label">Areas we serve</span> ${esc(site.location.areasServed.join(', '))}, and communities across ${esc(site.location.region)}.</p></div>` : ''}
  <div class="wrap footer-base"><p>&copy; ${year} ${esc(site.siteName)}</p>${site.footerNote ? `<p>${esc(site.footerNote)}</p>` : ''}</div>
</footer>`;
}

// Structured data (schema.org JSON-LD) so search engines and AI tools can identify the business,
// its founders, its services, and where it works. No street address or phone until they are confirmed.
export function structuredData(site, route, meta) {
  if (!site.canonicalDomain) return [];
  const base = site.canonicalDomain;
  const orgId = `${base}/#organization`;
  const person = (f) => ({
    '@type': 'Person',
    '@id': `${base}/about/#${f.id}`,
    name: f.name,
    jobTitle: f.role,
    worksFor: { '@id': orgId },
    ...(site.profiles?.[f.id] ? { sameAs: [site.profiles[f.id]] } : {}),
  });
  const areaList = (towns) => [
    { '@type': 'AdministrativeArea', name: `${site.location.region}` },
    ...(towns || []).map((town) => ({ '@type': 'City', name: `${town}, Ohio` })),
  ];
  const areas = areaList(site.location.areasServed);
  const org = {
    '@type': 'ProfessionalService',
    '@id': orgId,
    name: site.siteName,
    url: `${base}/`,
    description: site.tagline,
    image: site.ogImage ? `${base}/assets/${site.ogImage}` : undefined,
    logo: `${base}/assets/logo-512.png`,
    areaServed: areas,
    location: (site.location.offices || []).map((town) => ({
      '@type': 'Place',
      name: `${site.siteName}, ${town}`,
      address: { '@type': 'PostalAddress', addressLocality: town, addressRegion: 'OH', addressCountry: 'US' },
    })),
    founder: site.founders.map(person),
    knowsAbout: ['Business coaching', 'Fractional CFO services', 'Business advisory', 'Strategic planning', 'Leadership team facilitation', 'Financial reporting', 'Cash flow forecasting'],
    ...(site.bookingUrl ? { potentialAction: { '@type': 'ScheduleAction', target: site.bookingUrl, name: 'Schedule a conversation' } } : {}),
  };
  const graph = [org, { '@type': 'WebSite', '@id': `${base}/#website`, url: `${base}/`, name: site.siteName, publisher: { '@id': orgId } }];
  if ((route.service || route.standalone) && meta.serviceType) {
    graph.push({
      '@type': 'Service',
      '@id': `${base}${route.path}#service`,
      name: meta.serviceType,
      serviceType: meta.serviceType,
      description: meta.description,
      provider: { '@id': orgId },
      areaServed: meta.areaServed ? areaList(meta.areaServed) : areas,
      url: `${base}${route.path}`,
    });
  }
  if (meta.datePublished) {
    graph.push({
      '@type': 'NewsArticle',
      '@id': `${base}${route.path}#article`,
      headline: meta.headline,
      description: meta.description,
      datePublished: meta.datePublished,
      url: `${base}${route.path}`,
      image: site.ogImage ? `${base}/assets/${site.ogImage}` : undefined,
      author: site.founders.map((f) => ({ '@id': `${base}/about/#${f.id}` })),
      publisher: { '@id': orgId },
      about: { '@id': orgId },
    });
  }
  if (meta.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${base}${route.path}#faq`,
      mainEntity: meta.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return [{ '@context': 'https://schema.org', '@graph': graph }];
}

export function pageShell({ site, link, mode, route, meta, body }) {
  const robots = site.allowIndexing && site.canonicalDomain && !route.noindex ? 'index, follow' : 'noindex, nofollow';
  const canonical = site.canonicalDomain && route.key !== 'notFound' ? `${site.canonicalDomain}${route.path}` : null;
  const head = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}">`,
    `<meta name="robots" content="${robots}">`,
    canonical ? `<link rel="canonical" href="${esc(canonical)}">` : '',
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(site.siteName)}">`,
    `<meta property="og:title" content="${esc(meta.title)}">`,
    `<meta property="og:description" content="${esc(meta.description)}">`,
    `<meta property="og:locale" content="en_US">`,
    canonical ? `<meta property="og:url" content="${esc(canonical)}">` : '',
    site.canonicalDomain && site.ogImage ? `<meta property="og:image" content="${esc(site.canonicalDomain)}/assets/${esc(site.ogImage)}">` : '',
    site.canonicalDomain && site.ogImage ? `<meta property="og:image:alt" content="${esc(site.siteName)}">` : '',
    site.canonicalDomain && site.ogImage ? `<meta name="twitter:card" content="summary_large_image">` : '',
    `<meta name="theme-color" content="#231f20">`,
    `<link rel="icon" href="${esc(link.asset('favicon.svg'))}" type="image/svg+xml">`,
    `<link rel="apple-touch-icon" href="${esc(link.asset('apple-touch-icon.png'))}">`,
    // Fonts are self-hosted (src/assets/fonts), so no requests go to third-party font services.
    `<link rel="preload" href="${esc(link.asset('fonts/libre-franklin-normal-f2d133.woff2'))}" as="font" type="font/woff2" crossorigin>`,
    `<link rel="stylesheet" href="${esc(link.asset('fonts/fonts.css'))}">`,
    `<link rel="stylesheet" href="${esc(link.asset('site.css'))}">`,
    `<script>document.documentElement.classList.add('js')</script>`,
    ...(mode === 'site' && route.key !== 'notFound'
      ? structuredData(site, route, meta).map((d) => `<script type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`)
      : []),
  ]
    .filter(Boolean)
    .join('\n');

  const content = `<a class="skip-link" href="#main">Skip to main content</a>
${header(site, link, route.key)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(site, link)}
<script src="${esc(link.asset('site.js'))}" defer></script>`;

  // The artifact preview host supplies its own document skeleton for the entry page.
  if (mode === 'artifact' && route.key === 'home') return `${head}\n${content}\n`;

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body${route.bodyClass ? ` class="${esc(route.bodyClass)}"` : ''}>
${content}
</body>
</html>
`;
}
