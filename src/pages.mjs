// Page bodies. Copy comes from src/content.mjs; facts come from site.config.mjs.
import { esc, ctaButton, contourSvg, lanesDiagram, mailtoHref } from './layout.mjs';

const paras = (list) => list.map((p) => `<p>${esc(p)}</p>`).join('');

function pageHero({ eyebrow, headline, lead, extra = '', seed = 5 }) {
  return `<section class="page-hero">
  <div class="wrap page-hero-inner">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h1>${esc(headline)}</h1>
    ${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
    ${extra}
  </div>
  ${contourSvg({ width: 900, height: 320, lines: 7, seed, className: 'contours contours-hero' })}
</section>`;
}

function closing(link, heading, body) {
  return `<section class="closing" aria-labelledby="closing-heading">
  <div class="wrap closing-inner">
    <h2 id="closing-heading">${esc(heading)}</h2>
    <p>${esc(body)}</p>
    <div class="actions">${ctaButton(link, { variant: 'light' })}</div>
  </div>
  ${contourSvg({ width: 1200, height: 360, lines: 9, seed: 11, className: 'contours contours-closing' })}
</section>`;
}

function founderName(f) {
  return f.credential ? `${f.name}, ${f.credential}` : f.name;
}

function portrait(f, link, { eager = false } = {}) {
  if (!f.photo) return '';
  const p = f.photo;
  return `<img class="portrait" src="${esc(link.asset(p.src))}" width="${esc(p.width)}" height="${esc(p.height)}" alt="${esc(p.alt)}"${eager ? '' : ' loading="lazy"'} decoding="async">`;
}

// ---------------------------------------------------------------------------

export function home({ site, link, copy }) {
  const c = copy.home;
  const founders = site.founders
    .map(
      (f) => `<article class="person">
      <div class="person-text">
        <p class="person-role">${esc(f.role)}</p>
        <h3>${esc(founderName(f))}</h3>
        <p>${esc(f.short)}</p>
      </div>
    </article>`,
    )
    .join('');

  return `<section class="hero">
  <div class="wrap hero-inner">
    <div class="hero-copy">
      <p class="eyebrow">${esc(c.eyebrow)}</p>
      <h1>${esc(c.headline)}</h1>
      <p class="lead">${esc(c.lead)}</p>
      <div class="actions">
        ${ctaButton(link)}
        <a class="button button-secondary" href="${esc(link.page('howWeWork'))}">Explore how we work</a>
      </div>
      <p class="hero-audience">${esc(c.audience)}</p>
    </div>
    <div class="hero-art" aria-hidden="true">
      ${contourSvg({ width: 560, height: 640, lines: 13, seed: 7 })}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="situations-heading">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${esc(c.chooserEyebrow)}</p>
      <h2 id="situations-heading" class="section-title">${esc(c.situationsHeading)}</h2>
      <p>${esc(c.chooserIntro)}</p>
    </div>
    <ul class="chooser">
      ${c.situations
        .map(
          (s) => `<li><a class="chooser-card" href="${esc(s.page ? link.page(s.page) : link.page('services', s.anchor))}">
        <span class="chooser-text">${esc(s.text)}</span>
        <span class="chooser-path"><span class="chooser-label">${esc(c.chooserStartLabel)}</span> ${esc(s.start)}</span>
      </a></li>`,
        )
        .join('')}
    </ul>
    <div class="chooser-unsure">
      <p>${esc(c.chooserUnsure)}</p>
      ${ctaButton(link, { variant: 'secondary' })}
    </div>
    </ul>
  </div>
</section>

<section class="section section-alt" aria-labelledby="pillars-heading">
  <div class="wrap">
    <div class="section-head">
      <h2 id="pillars-heading" class="section-title">${esc(c.pillarsHeading)}</h2>
      <p>${esc(c.pillarsIntro)}</p>
    </div>
    <div class="pillars">
      ${c.pillars
        .map(
          (p) => `<article class="pillar">
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.body)}</p>
        <a class="text-link" href="${esc(p.page ? link.page(p.page) : link.page('services', p.anchor))}">${esc(p.linkText)}</a>
      </article>`,
        )
        .join('')}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="stages-heading">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${esc(c.stagesEyebrow)}</p>
      <h2 id="stages-heading" class="section-title">${esc(c.stagesHeading)}</h2>
      <p>${esc(c.stagesIntro)}</p>
    </div>
    <ol class="stages">
      ${c.stages
        .map(
          (st, i) => `<li class="stage">
        <p class="stage-num" aria-hidden="true">${i + 1}</p>
        <h3>${esc(st.name)}</h3>
        <p class="stage-summary">${esc(st.summary)}</p>
        <dl class="stage-questions">
          <div><dt>${esc(c.stagesPeopleLabel)}</dt><dd>${esc(st.people)}</dd></div>
          <div><dt>${esc(c.stagesNumbersLabel)}</dt><dd>${esc(st.numbers)}</dd></div>
        </dl>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="section section-dark" aria-labelledby="integrated-heading">
  <div class="wrap integrated">
    <div class="integrated-copy">
      <h2 id="integrated-heading" class="section-title">${esc(c.integratedHeading)}</h2>
      ${paras(c.integratedBody)}
      <a class="text-link text-link-light" href="${esc(link.page('howWeWork'))}">${esc(c.integratedLink)}</a>
    </div>
    ${lanesDiagram()}
  </div>
</section>

<section class="section" aria-labelledby="people-heading">
  <div class="wrap">
    <div class="section-head section-head-row">
      <h2 id="people-heading" class="section-title">${esc(c.peopleHeading)}</h2>
      <a class="text-link" href="${esc(link.page('about'))}">${esc(c.peopleLink)}</a>
    </div>
    <div class="people">${founders}</div>
  </div>
</section>

${closing(link, c.closingHeading, c.closingBody)}`;
}

export function services({ site, link, copy }) {
  const c = copy.services;
  const jump = `<nav class="jump" aria-label="On this page"><ul>${c.sections
    .map((s) => `<li><a href="#${esc(s.id)}">${esc(s.title)}</a></li>`)
    .join('')}</ul></nav>`;

  const sections = c.sections
    .map(
      (s, i) => `<section id="${esc(s.id)}" class="service${i % 2 ? ' service-alt' : ''}${s.id === 'integrated' ? ' service-integrated' : ''}" aria-labelledby="${esc(s.id)}-heading">
  <div class="wrap service-inner">
    <div class="service-main">
      <p class="lane-chip">${esc(s.lane)}</p>
      <h2 id="${esc(s.id)}-heading">${esc(s.title)}</h2>
      ${paras(s.body)}
      ${s.note ? `<p class="service-note">${esc(s.note)}</p>` : ''}
      <div class="service-actions">
        ${ctaButton(link, { variant: s.id === 'integrated' ? 'light' : 'primary', text: s.cta })}
        <a class="service-email" href="${esc(mailtoHref(site, s.emailSubject))}">${esc(c.emailPrompt)}</a>
      </div>
      ${s.page ? `<a class="text-link${s.id === 'integrated' ? ' text-link-light' : ''}" href="${esc(link.page(s.page))}">${esc(s.pageLinkText)}</a>` : ''}
    </div>
    <div class="service-list">
      <h3>${esc(s.listHeading)}</h3>
      <ul>${s.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
    </div>
  </div>
</section>`,
    )
    .join('\n');

  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: jump, seed: 4 })}
${sections}
<section class="section" aria-labelledby="scope-heading">
  <div class="wrap scope">
    <h2 id="scope-heading">${esc(c.scopeHeading)}</h2>
    <p>${esc(c.scope)}</p>
    <div class="actions">${ctaButton(link)}<a class="button button-secondary" href="${esc(link.page('howWeWork'))}">See how we work</a></div>
  </div>
</section>`;
}

export function howWeWork({ site, link, copy }) {
  const c = copy.howWeWork;
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 9 })}
<section class="section" aria-labelledby="steps-heading">
  <div class="wrap">
    <h2 id="steps-heading" class="section-title">${esc(c.stepsHeading)}</h2>
    <ol class="steps">
      ${c.steps
        .map(
          (s, i) => `<li class="step">
        <span class="step-num" aria-hidden="true">${i + 1}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
      </li>`,
        )
        .join('')}
    </ol>
    <p class="steps-note">${esc(c.stepsNote)}</p>
  </div>
</section>

<section class="section section-alt" aria-labelledby="faq-heading">
  <div class="wrap faq-wrap">
    <h2 id="faq-heading" class="section-title">${esc(c.faqHeading)}</h2>
    <div class="faq">
      ${c.faq
        .map(
          (f) => `<div class="faq-item">
        <h3>${esc(f.q)}</h3>
        <p>${esc(f.a)}</p>
      </div>`,
        )
        .join('')}
    </div>
  </div>
</section>

${closing(link, copy.home.closingHeading, copy.home.closingBody)}`;
}

export function about({ site, link, copy }) {
  const c = copy.about;
  const bios = site.founders
    .map(
      (f) => `<article class="bio${f.photo ? ' has-photo' : ''}" id="${esc(f.id)}" aria-labelledby="${esc(f.id)}-name">
      ${portrait(f, link)}
      <div class="bio-text">
        <p class="person-role">${esc(f.role)}</p>
        <h2 id="${esc(f.id)}-name">${esc(founderName(f))}</h2>
        ${paras(f.bio)}
      </div>
    </article>`,
    )
    .join('');

  const buildHref = link.has('build') ? link.page('build') : site.build.url;
  const buildLink = buildHref
    ? `<a class="text-link" href="${esc(buildHref)}">${esc(link.has('build') ? c.buildLink : site.build.urlLabel)}</a>`
    : '';

  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, seed: 2 })}
<section class="section" aria-label="Josh Muller and Matt LaFleur">
  <div class="wrap bios">${bios}</div>
</section>

<section class="section section-dark" aria-labelledby="together-heading">
  <div class="wrap integrated">
    <div class="integrated-copy">
      <h2 id="together-heading" class="section-title">${esc(c.togetherHeading)}</h2>
      ${paras(c.together)}
    </div>
    ${lanesDiagram()}
  </div>
</section>

<section class="section" aria-labelledby="who-heading">
  <div class="wrap two-col">
    <div>
      <h2 id="who-heading" class="section-title">${esc(c.whoHeading)}</h2>
      <p>${esc(c.who)}</p>
    </div>
    <div>
      <h2 class="section-title" id="values-heading">${esc(c.valuesHeading)}</h2>
      <dl class="values">
        ${c.values.map((v) => `<div><dt>${esc(v.title)}</dt><dd>${esc(v.body)}</dd></div>`).join('')}
      </dl>
    </div>
  </div>
</section>

<section class="section section-alt" aria-labelledby="build-heading">
  <div class="wrap build-note">
    <h2 id="build-heading" class="section-title">${esc(c.buildHeading)}</h2>
    <p>${esc(c.buildBody)}</p>
    ${buildLink}
  </div>
</section>

${closing(link, copy.home.closingHeading, copy.home.closingBody)}`;
}

export function build({ site, link, copy }) {
  const c = copy.build;
  const external = site.build.url
    ? `<p>${esc(c.linkIntro)}</p>
      <p><a class="button button-secondary" href="${esc(site.build.url)}" rel="noopener">${esc(site.build.urlLabel)}</a></p>`
    : '';
  const hero = pageHero({
    eyebrow: site.build.fullName ? `BUILD: ${site.build.fullName}` : c.eyebrow,
    headline: c.headline,
    lead: c.lead,
    seed: 13,
  });
  const room = site.build.gatherings?.length
    ? `<section class="section section-alt" aria-labelledby="room-heading">
  <div class="wrap two-col">
    <div>
      <h2 id="room-heading" class="section-title">${esc(c.roomHeading)}</h2>
      <p>${esc(c.roomIntro)}</p>
      <p>${esc(c.roomNote)}</p>
    </div>
    <dl class="gatherings">
      ${site.build.gatherings
        .map(
          (g) => `<div><dt>${esc(g.format)}</dt><dd><span>${esc(g.detail)}</span>${g.places ? `<span class="gathering-places">${esc(g.places)}</span>` : ''}</dd></div>`,
        )
        .join('')}
    </dl>
  </div>
</section>`
    : '';
  const numbered = (items) =>
    items
      .map(
        (s, i) => `<li class="step">
        <span class="step-num" aria-hidden="true">${i + 1}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
      </li>`,
      )
      .join('');

  return `${hero}
<section class="section" aria-labelledby="promise-heading">
  <div class="wrap promise">
    <h2 id="promise-heading" class="eyebrow">${esc(c.promiseHeading)}</h2>
    <p class="promise-text">${esc(c.promise)}</p>
    <h3 class="parts-heading">${esc(c.partsHeading)}</h3>
    <ul class="parts">
      ${c.parts.map((pt) => `<li><h4>${esc(pt.title)}</h4><p>${esc(pt.body)}</p></li>`).join('')}
    </ul>
  </div>
</section>
${room}
<section class="section" aria-labelledby="guides-heading">
  <div class="wrap">
    <h2 id="guides-heading" class="section-title">${esc(c.guideHeading)}</h2>
    <div class="people guides">
      ${c.guides
        .map(
          (g) => `<article class="person">
        <div class="person-text">
          <p class="person-role">${esc(g.role)}</p>
          <h3>${esc(g.name)}</h3>
          <p>${esc(g.body)}</p>
        </div>
      </article>`,
        )
        .join('')}
    </div>
    <div class="retreat">
      <h3>${esc(c.retreatHeading)}</h3>
      <p>${esc(c.retreat)}</p>
      ${site.build.url ? `<p><a class="text-link" href="${esc(site.build.url)}" rel="noopener">${esc(c.retreatLink)}</a></p>` : ''}
    </div>
  </div>
</section>
<section class="section section-alt" aria-labelledby="journey-heading">
  <div class="wrap">
    <h2 id="journey-heading" class="section-title">${esc(c.journeyHeading)}</h2>
    <ol class="steps">${numbered(c.journey)}</ol>
  </div>
</section>
<section class="section" aria-labelledby="build-values-heading">
  <div class="wrap two-col">
    <div>
      <h2 id="build-values-heading" class="section-title">${esc(c.valuesHeading)}</h2>
      <ul class="build-values">${c.values.map((v) => `<li>${esc(v)}</li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="section-title" id="relation-heading">${esc(c.relationHeading)}</h2>
      ${paras(c.relation)}
      ${external}
    </div>
  </div>
</section>

${closing(link, copy.home.closingHeading, copy.home.closingBody)}`;
}

export function contact({ site, link, copy }) {
  const c = copy.contact;
  const response = site.contact.responseTime ? `<p class="contact-response">${esc(site.contact.responseTime)}</p>` : '';
  const booking = site.bookingUrl
    ? `<div class="contact-book">
      <h2 id="book-heading">${esc(c.bookHeading)}</h2>
      <p>${esc(c.book(site.bookingLength))}</p>
      <div class="actions">${ctaButton(link)}</div>
    </div>`
    : '';
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 21 })}
<section class="section" aria-labelledby="${site.bookingUrl ? 'book-heading' : 'send-heading'}">
  <div class="wrap contact-grid">
    <div class="contact-card">
      ${booking}
      <div class="contact-write">
      <h2 id="send-heading">${esc(site.bookingUrl ? c.writeHeading : c.howHeading)}</h2>
      <p>${esc(c.how)}</p>
      <div class="actions">
        <a class="button button-${site.bookingUrl ? 'secondary' : 'primary'}" href="${esc(mailtoHref(site))}">${esc(c.buttonText)}</a>
      </div>
      </div>
      <div class="contact-addresses">
        <p class="footer-label" id="addresses-label">Email addresses</p>
        <ul aria-labelledby="addresses-label">
          ${site.contact.recipients.map((e) => `<li><a href="mailto:${esc(e)}">${esc(e)}</a></li>`).join('')}
        </ul>
        <button class="button button-quiet copy-emails" type="button" data-copy="${esc(site.contact.recipients.join(', '))}" data-copied="${esc(c.copiedText)}">${esc(c.copyText)}</button>
        <p class="copy-status" role="status" aria-live="polite"></p>
      </div>
      ${response}
    </div>
    <div class="contact-include">
      <h2 id="include-heading">${esc(c.includeHeading)}</h2>
      <ul class="check-list">${c.include.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <p class="service-note">${esc(c.privacyNote)}</p>
    </div>
  </div>
</section>`;
}

export function notFound({ site, link, copy }) {
  const c = copy.notFound;
  const links = [
    ['home', 'Home'],
    ['services', 'Services'],
    ['howWeWork', 'How we work'],
    ['about', 'About Josh and Matt'],
    ['contact', 'Contact Josh and Matt'],
  ];
  return `${pageHero({
    eyebrow: 'Page not found',
    headline: c.headline,
    lead: c.lead,
    extra: `<ul class="not-found-links">${links.map(([k, t]) => `<li><a class="text-link" href="${esc(link.page(k))}">${esc(t)}</a></li>`).join('')}</ul>`,
    seed: 17,
  })}`;
}

// Dedicated service pages share one layout.
function servicePage(key) {
  return ({ site, link, copy }) => {
    const c = copy[key];
    const sections = c.sections
      .map(
        (sec, i) => `<section class="section${i % 2 ? ' section-alt' : ''}" aria-labelledby="${key}-s${i}">
  <div class="wrap svc-block">
    <h2 id="${key}-s${i}" class="section-title">${esc(sec.heading)}</h2>
    ${sec.paras ? paras(sec.paras) : ''}
    ${sec.list ? `<ul class="check-list">${sec.list.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>` : ''}
    ${sec.note ? `<p class="service-note">${esc(sec.note)}</p>` : ''}
    ${sec.link && link.has(sec.link.key) ? `<a class="text-link" href="${esc(link.page(sec.link.key))}">${esc(sec.link.text)}</a>` : ''}
  </div>
</section>`,
      )
      .join('\n');
    const others = ['coaching', 'fractionalCfo', 'advisory'].filter((k) => k !== key && link.has(k));
    return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<div class="actions">${ctaButton(link)}</div>`, seed: key.length * 3 })}
${sections}
<section class="section section-dark" aria-labelledby="${key}-faq">
  <div class="wrap faq-wrap">
    <h2 id="${key}-faq" class="section-title">Common questions</h2>
    <div class="faq">
      ${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}
    </div>
  </div>
</section>
<section class="section" aria-labelledby="${key}-related">
  <div class="wrap svc-related">
    <h2 id="${key}-related" class="section-title">Related services</h2>
    <ul>
      ${others.map((k) => `<li><a class="text-link" href="${esc(link.page(k))}">${esc(copy[k].eyebrow)}</a></li>`).join('')}
      <li><a class="text-link" href="${esc(link.page('services'))}">All services</a></li>
    </ul>
  </div>
</section>

${closing(link, copy.home.closingHeading, copy.home.closingBody)}`;
  };
}

export const coaching = servicePage('coaching');
export const fractionalCfo = servicePage('fractionalCfo');
export const advisory = servicePage('advisory');

// Standalone page for churches and ministries (/church/).
// Standalone audience pages share one layout. Scripture blocks render only when present.
function industryPage(key) {
  return ({ site, link, copy }) => {
  const c = copy[key];
  const verse = (v, cls = '') =>
    `<blockquote class="verse${cls}"><p>${esc(v.text)}</p><footer><cite>${esc(v.ref)}</cite> <span class="verse-version">(${esc(c.bibleVersion)})</span></footer></blockquote>`;

  const services = c.services
    .map(
      (s, i) => `<section class="service${i % 2 ? ' service-alt' : ''}${s.lane === 'Josh and Matt together' ? ' service-integrated' : ''}" aria-labelledby="${key}-svc-${i}">
  <div class="wrap service-inner">
    <div class="service-main">
      <p class="lane-chip">${esc(s.lane)}</p>
      <h3 class="service-title" id="${key}-svc-${i}">${esc(s.title)}</h3>
      <p>${esc(s.body)}</p>
      ${s.note ? `<p class="service-note">${esc(s.note)}</p>` : ''}
      <div class="service-actions">${ctaButton(link, { variant: s.lane === 'Josh and Matt together' ? 'light' : 'primary' })}</div>
    </div>
    <div class="service-list">
      <h4>Work can include</h4>
      <ul>${s.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
    </div>
  </div>
</section>`,
    )
    .join('\n');

  const cards = (items) =>
    `<ul class="departments" style="--cols:${items.length === 6 ? 3 : items.length}">
      ${items.map((d) => `<li><h3>${esc(d.name)}</h3>${d.meta ? `<p class="card-meta">${esc(d.meta)}</p>` : ''}<p>${esc(d.body)}</p>${d.link ? `<p><a class="text-link" href="${esc(d.link.href)}" rel="noopener">${esc(d.link.label)}</a></p>` : ''}</li>`).join('')}
    </ul>`;
  const extLinks = (links) =>
    links?.length ? `<div class="actions">${links.map((l) => `<a class="button button-${l.variant || 'secondary'}" href="${esc(l.href)}" rel="noopener">${esc(l.label)}</a>`).join('')}</div>` : '';
  const showEvents = c.events && new Date() <= new Date(c.events.until);

  const people = site.founders
    .map(
      (f) => `<article class="bio${f.photo ? ' has-photo' : ''}">
      ${f.photo ? `<img class="portrait" src="${esc(link.asset(f.photo.src))}" width="${esc(f.photo.width)}" height="${esc(f.photo.height)}" alt="${esc(f.photo.alt)}" loading="lazy" decoding="async">` : ''}
      <div class="bio-text">
        <p class="person-role">${esc(f.role)}</p>
        <h3>${esc(f.name)}</h3>
        <p>${esc(c.people?.[f.id] || f.short)}</p>
      </div>
    </article>`,
    )
    .join('');

  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<div class="actions">${ctaButton(link)}${c.heroLink ? `<a class="button button-secondary" href="${esc(c.heroLink.href)}" rel="noopener">${esc(c.heroLink.label)}</a>` : ''}</div>${c.verse ? verse(c.verse, ' verse-hero') : ''}`, seed: c.seed || 19 })}

<section class="section" aria-labelledby="${key}-situations">
  <div class="wrap svc-block">
    <h2 id="${key}-situations" class="section-title">${esc(c.situationsHeading)}</h2>
    <p>${esc(c.situationsIntro)}</p>
    ${c.situationsOrdered
      ? `<ol class="question-list">${c.situations.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>`
      : `<ul class="check-list">${c.situations.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>`}
    ${c.situationsNote ? `<p class="situations-note">${esc(c.situationsNote)}</p>` : ''}
    ${extLinks(c.situationsLinks)}
  </div>
</section>

${c.season ? `<section class="section section-dark season" aria-labelledby="${key}-season">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow eyebrow-light">${esc(c.season.eyebrow)}</p>
      <h2 id="${key}-season" class="section-title">${esc(c.season.heading)}</h2>
      <p>${esc(c.season.intro)}</p>
    </div>
    <div class="season-chart" aria-hidden="true">
      ${c.season.months.map(([m, lvl]) => `<div class="season-month"><span class="season-bar lvl-${lvl}"></span><span class="season-label"><span class="m-full">${esc(m)}</span><span class="m-short">${esc(m[0])}</span></span></div>`).join('')}
    </div>
    <ol class="season-phases">
      ${c.season.phases.map((ph) => `<li style="--span:${ph.span}"><h3>${esc(ph.name)}</h3><p>${esc(ph.body)}</p></li>`).join('')}
    </ol>
    <p class="season-note">${esc(c.season.note)}</p>
  </div>
</section>` : ''}
${c.departments ? `<section class="section" aria-labelledby="${key}-departments">
  <div class="wrap">
    <div class="section-head">
      <h2 id="${key}-departments" class="section-title">${esc(c.departmentsHeading)}</h2>
      <p>${esc(c.departmentsIntro)}</p>
    </div>
    ${cards(c.departments)}
    ${extLinks(c.departmentsLinks)}
  </div>
</section>` : ''}

<section class="section section-alt industry-services-head" aria-labelledby="${key}-services">
  <div class="wrap svc-block">
    <h2 id="${key}-services" class="section-title">${esc(c.servicesHeading)}</h2>
    <p>${esc(c.servicesIntro)}</p>
  </div>
</section>
${services}
${showEvents ? `<section class="section section-alt" aria-labelledby="${key}-events">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${esc(c.events.eyebrow)}</p>
      <h2 id="${key}-events" class="section-title">${esc(c.events.heading)}</h2>
      <p>${esc(c.events.intro)}</p>
    </div>
    ${cards(c.events.items)}
    <div class="actions">${ctaButton(link)}</div>
  </div>
</section>` : ''}
${c.audiences ? `<section class="section" aria-labelledby="${key}-audiences">
  <div class="wrap">
    <div class="section-head">
      <h2 id="${key}-audiences" class="section-title">${esc(c.audiencesHeading)}</h2>
      <p>${esc(c.audiencesIntro)}</p>
    </div>
    ${cards(c.audiences)}
  </div>
</section>` : ''}
${c.values ? `<section class="section" aria-labelledby="${key}-values">
  <div class="wrap two-col">
    <div>
      <h2 id="${key}-values" class="section-title">${esc(c.valuesHeading)}</h2>
      ${c.stewardshipVerse ? verse(c.stewardshipVerse) : ''}${c.valuesIntro ? `<p>${esc(c.valuesIntro)}</p>` : ''}
    </div>
    <dl class="values">
      ${c.values.map((v) => `<div><dt>${esc(v.title)}</dt><dd>${esc(v.body)}</dd></div>`).join('')}
    </dl>
  </div>
</section>` : ''}

<section class="section section-alt" aria-labelledby="${key}-steps">
  <div class="wrap">
    <h2 id="${key}-steps" class="section-title">${esc(c.stepsHeading)}</h2>
    <ol class="steps">
      ${c.steps
        .map(
          (s, i) => `<li class="step">
        <span class="step-num" aria-hidden="true">${i + 1}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.body)}</p>
      </li>`,
        )
        .join('')}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="${key}-people">
  <div class="wrap">
    <h2 id="${key}-people" class="section-title">${esc(c.peopleHeading)}</h2>
    <div class="bios industry-bios">${people}</div>
  </div>
</section>

<section class="section section-dark" aria-labelledby="${key}-faq">
  <div class="wrap faq-wrap">
    <h2 id="${key}-faq" class="section-title">Common questions</h2>
    <div class="faq">
      ${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="closing" aria-labelledby="closing-heading">
  <div class="wrap closing-inner">
    <h2 id="closing-heading">${esc(c.closingHeading)}</h2>
    <p>${esc(c.closingBody)}</p>
    <div class="actions">${ctaButton(link, { variant: 'light' })}</div>
    ${c.closingVerse ? verse(c.closingVerse, ' verse-dark') : ''}
  </div>
  ${contourSvg({ width: 1200, height: 360, lines: 9, seed: 23, className: 'contours contours-closing' })}
</section>`;
  };
}

export const church = industryPage('church');
export const carts = industryPage('carts');
