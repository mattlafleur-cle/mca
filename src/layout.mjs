// Shared page shell, header, footer, and small components.

export const esc = (value) =>
  String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

// Route table. `path` is the clean production URL; `file` is the flat file used for the artifact preview.
export function routes(site) {
  const list = [
    { key: 'home', label: 'Home', path: '/', file: 'index.html', out: 'index.html' },
    { key: 'services', label: 'Services', path: '/services/', file: 'services.html', out: 'services/index.html' },
    { key: 'howWeWork', label: 'How We Work', path: '/how-we-work/', file: 'how-we-work.html', out: 'how-we-work/index.html' },
    { key: 'about', label: 'About', path: '/about/', file: 'about.html', out: 'about/index.html' },
    { key: 'build', label: 'BUILD', path: '/build/', file: 'build.html', out: 'build/index.html' },
    { key: 'contact', label: 'Contact', path: '/contact/', file: 'contact.html', out: 'contact/index.html' },
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

function markSvg() {
  // Two strokes meeting, echoing the lanes diagram. Decorative next to the wordmark text.
  return `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M4 8 C 14 8, 16 16, 22 16 M4 24 C 14 24, 16 16, 22 16 M22 16 L 29 16"/><circle cx="22" cy="16" r="2.6"/></svg>`;
}

export function ctaButton(link, { variant = 'primary', text } = {}) {
  const href = link.cta();
  const external = /^https?:/.test(href) ? ' rel="noopener"' : '';
  return `<a class="button button-${variant}" href="${esc(href)}"${external}>${esc(text || link.ctaText())}</a>`;
}

function header(site, link, current) {
  const items = routes(site).filter((r) => !r.hidden && r.key !== 'home' && r.key !== 'contact');
  const navItems = items
    .map((r) => `<li><a href="${esc(link.page(r.key))}"${r.key === current ? ' aria-current="page"' : ''}>${esc(r.label)}</a></li>`)
    .join('');
  return `<header class="site-header">
  <div class="wrap header-inner">
    <a class="wordmark" href="${esc(link.page('home'))}"${current === 'home' ? ' aria-current="page"' : ''}>${markSvg()}<span>${esc(site.siteName)}</span></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
    <nav id="site-nav" class="site-nav" aria-label="Main">
      <ul>${navItems}</ul>
      ${ctaButton(link).replace('class="button button-primary"', 'class="button button-primary nav-cta"')}
    </nav>
  </div>
</header>`;
}

function footer(site, link) {
  const items = routes(site).filter((r) => !r.hidden);
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
  <div class="wrap footer-inner">
    <div class="footer-brand">
      <p class="footer-name">${markSvg()}<span>${esc(site.siteName)}</span></p>
      <p>${esc(site.tagline)}</p>
      <p>${esc(site.location.serviceLine)}</p>
    </div>
    <nav class="footer-nav" aria-label="Footer">
      <ul>${items.map((r) => `<li><a href="${esc(link.page(r.key))}">${esc(r.label)}</a></li>`).join('')}</ul>
    </nav>
    <div class="footer-contact">
      <p class="footer-label">Email</p>
      <ul>${site.contact.recipients.map((e) => `<li><a href="mailto:${esc(e)}">${esc(e)}</a></li>`).join('')}</ul>
    </div>
  </div>
  <div class="wrap footer-base"><p>&copy; ${year} ${esc(site.siteName)}</p>${site.footerNote ? `<p>${esc(site.footerNote)}</p>` : ''}</div>
</footer>`;
}

export function pageShell({ site, link, mode, route, meta, body }) {
  const robots = site.allowIndexing && site.canonicalDomain ? 'index, follow' : 'noindex, nofollow';
  const canonical = site.canonicalDomain && route.key !== 'notFound' ? `${site.canonicalDomain}${route.path}` : null;
  const fonts =
    'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,650&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap';
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
    `<meta name="theme-color" content="#1d3a2f">`,
    `<link rel="icon" href="${esc(link.asset('favicon.svg'))}" type="image/svg+xml">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link rel="stylesheet" href="${fonts}">`,
    `<link rel="stylesheet" href="${esc(link.asset('site.css'))}">`,
    `<script>document.documentElement.classList.add('js')</script>`,
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
<body>
${content}
</body>
</html>
`;
}
