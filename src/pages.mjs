// Page bodies. Copy comes from src/content.mjs; facts come from site.config.mjs.
import { esc, ctaButton, contourSvg, lanesDiagram, mailtoHref } from './layout.mjs';
import { typeSlugs, industrySlugs } from './working-genius-guides-content.mjs';
import { guideSlugs } from './guides-content.mjs';

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

  return `<section class="hero hero-photo">
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
  </div>
</section>
${c.events?.some((e) => link.has(e.key))
  ? `<section class="section home-events" aria-labelledby="events-heading">
  <div class="wrap">
    <div class="section-head section-head-row">
      <h2 id="events-heading" class="section-title">${esc(c.eventsHeading)}</h2>
      <p class="home-events-place">${esc(c.eventsPlace)}</p>
    </div>
    <ul class="event-cards">${c.events
      .filter((e) => link.has(e.key))
      .map((e) => `<li><a class="event-card" href="${esc(link.page(e.key))}"><span class="event-date"><strong>${esc(e.date)}</strong><span>${esc(e.time)}</span></span><span class="event-body"><span class="event-name">${esc(e.name)}</span><span class="event-line">${esc(e.line)}</span><span class="tool-card-cta">${esc(e.cta)}</span></span></a></li>`)
      .join('')}</ul>
  </div>
</section>`
  : ''}

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
    ${lanesDiagram({ owner: true })}
  </div>
</section>

${c.tools?.some((t) => link.has(t.key))
  ? `<section class="section section-alt" aria-labelledby="tools-heading">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow">${esc(c.toolsEyebrow)}</p>
      <h2 id="tools-heading" class="section-title">${esc(c.toolsHeading)}</h2>
      <p>${esc(c.toolsIntro)}</p>
    </div>
    <ul class="tool-cards">${c.tools
      .filter((t) => link.has(t.key))
      .map((t) => `<li><a class="tool-card" href="${esc(link.page(t.key))}"><span class="tool-card-name">${esc(t.name)}</span><span class="tool-card-question">${esc(t.question)}</span><span class="tool-card-body">${esc(t.body)}</span><span class="tool-card-cta">${esc(t.cta)}</span></a></li>`)
      .join('')}</ul>
  </div>
</section>`
  : ''}
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
  // At a glance: every offer grouped by need, linking to a detail page or to its section on this page.
  const glanceHref = (it) => (it.key && link.has(it.key) ? link.page(it.key) : it.anchor ? `#${it.anchor}` : '');
  const glance = c.glance?.length
    ? `<section class="section" aria-labelledby="glance-heading">
  <div class="wrap">
    <div class="section-head">
      <h2 id="glance-heading" class="section-title">${esc(c.glanceHeading)}</h2>
      <p>${esc(c.glanceIntro)}</p>
    </div>
    <ul class="glance">${c.glance
      .map((g) => `<li class="glance-group">
        <h3>${esc(g.need)}</h3>
        <p>${esc(g.line)}</p>
        <ul>${g.items.filter(glanceHref).map((it) => `<li><a href="${esc(glanceHref(it))}">${esc(it.text)}</a></li>`).join('')}</ul>
      </li>`)
      .join('')}</ul>
    ${c.toolsLinks?.some((t) => link.has(t.key)) ? `<p class="glance-tools">${esc(c.toolsLine)} ${c.toolsLinks.filter((t) => link.has(t.key)).map((t) => `<a class="text-link" href="${esc(link.page(t.key))}">${esc(t.text)}</a>`).join(' <span aria-hidden="true">&middot;</span> ')}</p>` : ''}
  </div>
</section>`
    : '';

  const sections = c.sections
    .map(
      (s, i) => `<section id="${esc(s.id)}" class="service${i % 2 ? ' service-alt' : ''}${s.id === 'integrated' ? ' service-integrated' : ''}" aria-labelledby="${esc(s.id)}-heading">
  <div class="wrap service-inner">
    <div class="service-main">
      ${s.lane ? `<p class="lane-chip">${esc(s.lane)}</p>` : ''}
      <h2 id="${esc(s.id)}-heading">${esc(s.title)}</h2>
      ${paras(s.body)}
      ${s.note ? `<p class="service-note">${esc(s.note)}</p>` : ''}
      <div class="service-actions">
        ${ctaButton(link, { variant: s.id === 'integrated' ? 'light' : 'primary', text: s.cta })}
        <a class="service-email" href="${esc(mailtoHref(site, s.emailSubject))}">${esc(c.emailPrompt)}</a>
      </div>
      ${s.page ? `<a class="text-link${s.id === 'integrated' ? ' text-link-light' : ''}" href="${esc(link.page(s.page))}">${esc(s.pageLinkText)}</a>` : ''}
      ${(s.moreLinks || []).filter((m) => link.has(m.page)).map((m) => `<a class="text-link" href="${esc(link.page(m.page))}">${esc(m.text)}</a>`).join('')}
      ${s.externalLink === 'retreat' && (site.build.retreatUrl || site.build.url) ? `<a class="text-link" href="${esc(site.build.retreatUrl || site.build.url)}" rel="noopener">${esc(s.externalLinkText)}</a>` : ''}
    </div>
    <div class="service-list">
      <h3>${esc(s.listHeading)}</h3>
      <ul>${s.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
    </div>
  </div>
</section>`,
    )
    .join('\n');

  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 4 })}
${answerBlock(site, c)}
${glance}
${sections}
${c.faq?.length ? `<section class="section section-dark" aria-labelledby="services-faq">
  <div class="wrap faq-wrap">
    <h2 id="services-faq" class="section-title">${esc(c.faqHeading)}</h2>
    <div class="faq">${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div>
  </div>
</section>` : ''}
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
  const people = [...site.founders, ...(site.team || [])];
  const bios = people
    .map(
      (f) => `<article class="bio${f.photo ? ' has-photo' : ''}" id="${esc(f.id)}" aria-labelledby="${esc(f.id)}-name">
      ${portrait(f, link)}
      <div class="bio-text">
        <p class="person-role">${esc(f.role)}</p>
        <h2 id="${esc(f.id)}-name">${esc(founderName(f))}</h2>
        ${paras(f.bio)}
        ${f.email ? `<p class="bio-email"><a href="mailto:${esc(f.email)}">${esc(f.email)}</a></p>` : ''}
      </div>
    </article>`,
    )
    .join('');

  const buildHref = link.has('build') ? link.page('build') : site.build.url;
  const buildLink = buildHref
    ? `<a class="text-link" href="${esc(buildHref)}">${esc(link.has('build') ? c.buildLink : site.build.urlLabel)}</a>`
    : '';

  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, seed: 2 })}
<section class="section" aria-label="${esc(people.map((f) => f.name).join(', '))}">
  <div class="wrap bios">${bios}</div>
</section>

<section class="section section-dark" aria-labelledby="together-heading">
  <div class="wrap integrated">
    <div class="integrated-copy">
      <h2 id="together-heading" class="section-title">${esc(c.togetherHeading)}</h2>
      ${paras(c.together)}
      ${c.noAlumniLine && link.has('noAlumni') ? `<p>${esc(c.noAlumniLine)} <a class="text-link text-link-light" href="${esc(link.page('noAlumni'))}">${esc(c.noAlumniLink)}</a></p>` : ''}
    </div>
    ${lanesDiagram({ owner: true })}
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
      ${site.build.retreatUrl || site.build.url ? `<p><a class="text-link" href="${esc(site.build.retreatUrl || site.build.url)}" rel="noopener">${esc(c.retreatLink)}</a></p>` : ''}
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
        <p class="footer-label" id="addresses-label">${site.contact.recipients.length > 1 ? 'Email addresses' : 'Email address'}</p>
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
    const others = ['coaching', 'fractionalCfo', 'advisory', 'sell'].filter((k) => k !== key && link.has(k));
    return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<div class="actions">${ctaButton(link)}</div>`, seed: key.length * 3 })}
${sections}
${c.quotes?.length ? `<section class="section" aria-labelledby="${key}-quotes">
  <div class="wrap">
    <h2 id="${key}-quotes" class="section-title">${esc(c.quotesHeading)}</h2>
    <div class="quotes">${c.quotes.map((q) => `<figure class="quote"><blockquote><p>\u201c${esc(q.text)}\u201d</p></blockquote><figcaption>${esc(q.name)}</figcaption></figure>`).join('')}</div>
    ${c.quotesNote ? `<p class="service-note">${esc(c.quotesNote)}</p>` : ''}
  </div>
</section>` : ''}
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
        ${f.email ? `<p class="bio-email"><a href="mailto:${esc(f.email)}">${esc(f.email)}</a></p>` : ''}
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
    <ol class="steps"${c.steps.length === 6 ? ' style="--steps:3"' : ''}>
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
export const sell = industryPage('sell');

// Unlisted page for current clients (/client-updates/). Sections appear only once they have content.
export function clients({ site, link, copy }) {
  const c = copy.clients;
  const has = (a) => Array.isArray(a) && a.length > 0;
  const filled = [c.announcements, c.benefits, c.unchanged, c.dates, c.actions, c.faq].some(has);
  let alt = false;
  const section = (id, heading, inner, intro = '') => {
    alt = !alt;
    return `<section class="section${alt ? '' : ' section-alt'}" aria-labelledby="clients-${id}">
  <div class="wrap">
    <div class="section-head">
      <h2 id="clients-${id}" class="section-title">${esc(heading)}</h2>
      ${intro ? `<p>${esc(intro)}</p>` : ''}
    </div>
    ${inner}
  </div>
</section>`;
  };

  const blocks = [];
  if (!filled) {
    alt = true;
    blocks.push(`<section class="section" aria-label="Status">
  <div class="wrap svc-block">
    <p>${esc(c.pendingNote)}</p>
    <div class="actions">${ctaButton(link)}<a class="button button-secondary" href="${esc(mailtoHref(site, '2027 client updates'))}">Email us</a></div>
  </div>
</section>`);
  }
  if (has(c.announcements))
    blocks.push(section('announcements', c.announcementsHeading, `<div class="announcements">${c.announcements
      .map((a) => `<article class="announcement">
      ${a.date ? `<p class="card-meta">${esc(a.date)}</p>` : ''}
      <h3>${esc(a.title)}</h3>
      ${paras(a.body || [])}
      ${has(a.items) ? `<ul class="check-list">${a.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>` : ''}
    </article>`)
      .join('')}</div>`));
  if (has(c.benefits))
    blocks.push(section('benefits', c.benefitsHeading, `<ul class="departments" style="--cols:${Math.min(c.benefits.length, 4)}">${c.benefits
      .map((b) => `<li><h3>${esc(b.name)}</h3><p>${esc(b.body)}</p>${b.link && link.has(b.link.key) ? `<p><a class="text-link" href="${esc(link.page(b.link.key))}">${esc(b.link.label)}</a></p>` : ''}</li>`).join('')}</ul>`, c.benefitsIntro));
  if (has(c.unchanged))
    blocks.push(section('unchanged', c.unchangedHeading, `<ul class="check-list">${c.unchanged.map((u) => `<li>${esc(u)}</li>`).join('')}</ul>`));
  if (has(c.dates))
    blocks.push(section('dates', c.datesHeading, `<dl class="key-dates">${c.dates
      .map((d) => `<div><dt>${esc(d.date)}</dt><dd>${esc(d.body)}</dd></div>`).join('')}</dl>`));
  if (has(c.actions))
    blocks.push(section('actions', c.actionsHeading, `<ol class="steps${c.actions.length === 1 ? ' steps-single' : ''}"${c.actions.length === 3 || c.actions.length > 4 ? ' style="--steps:3"' : ''}>${c.actions
      .map((s, i) => `<li class="step"><span class="step-num" aria-hidden="true">${i + 1}</span><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p>${s.button ? `<p><a class="button button-primary" href="${esc(s.button.href)}" rel="noopener">${esc(s.button.label)}</a></p>` : ''}</li>`).join('')}</ol>`));
  if (has(c.faq))
    blocks.push(`<section class="section section-dark" aria-labelledby="clients-faq">
  <div class="wrap faq-wrap">
    <h2 id="clients-faq" class="section-title">Common questions</h2>
    <div class="faq">${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div>
  </div>
</section>`);

  const ann = link.has('announcement') ? `<p class="updated-note"><a class="text-link" href="${esc(link.page('announcement'))}">${esc(c.announcementLinkText)}</a></p>` : '';
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `${c.updated ? `<p class="updated-note">Last updated ${esc(c.updated)}</p>` : ''}${ann}`, seed: c.seed })}
${blocks.join('\n')}
${closing(link, c.closingHeading, c.closingBody)}`;
}

// Public announcement page (/announcement/).
export function announcement({ site, link, copy }) {
  const c = copy.announcement;
  const people = site.founders
    .map(
      (f) => `<article class="bio${f.photo ? ' has-photo' : ''}">
      ${f.photo ? `<img class="portrait" src="${esc(link.asset(f.photo.src))}" width="${esc(f.photo.width)}" height="${esc(f.photo.height)}" alt="${esc(f.photo.alt)}" loading="lazy" decoding="async">` : ''}
      <div class="bio-text">
        <p class="person-role">${esc(f.role)}</p>
        <h3>${esc(f.name)}</h3>
        <p>${esc(f.short)}</p>
        ${f.email ? `<p class="bio-email"><a href="mailto:${esc(f.email)}">${esc(f.email)}</a></p>` : ''}
      </div>
    </article>`,
    )
    .join('');
  const offers = c.offers.filter((o) => link.has(o.key));
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<p class="updated-note"><time datetime="${esc(c.datePublished)}">${esc(c.dateLabel)}</time></p><div class="actions">${ctaButton(link)}</div>`, seed: c.seed })}

<section class="section" aria-labelledby="ann-why">
  <div class="wrap svc-block">
    <h2 id="ann-why" class="section-title">${esc(c.whyHeading)}</h2>
    ${paras(c.why)}
  </div>
</section>

<section class="section section-alt" aria-labelledby="ann-people">
  <div class="wrap">
    <h2 id="ann-people" class="section-title">Who leads ${esc(site.siteName)}</h2>
    <div class="bios industry-bios">${people}</div>
  </div>
</section>

<section class="section" aria-labelledby="ann-offer">
  <div class="wrap">
    <div class="section-head">
      <h2 id="ann-offer" class="section-title">${esc(c.offerHeading)}</h2>
      <p>${esc(c.offerIntro)}</p>
    </div>
    <ul class="departments" style="--cols:${offers.length}">
      ${offers.map((o) => `<li><h3>${esc(o.name)}</h3><p>${esc(o.body)}</p><p><a class="text-link" href="${esc(link.page(o.key))}">Learn more<span class="visually-hidden"> about ${esc(o.name.toLowerCase())}</span></a></p></li>`).join('')}
    </ul>
  </div>
</section>

<section class="section section-alt" aria-labelledby="ann-clients">
  <div class="wrap svc-block">
    <h2 id="ann-clients" class="section-title">${esc(c.clientsHeading)}</h2>
    <ul class="check-list">${c.clients.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
    ${link.has('clients') ? `<a class="text-link" href="${esc(link.page('clients'))}">${esc(c.clientsLinkText)}</a>` : ''}
  </div>
</section>

<section class="section section-dark" aria-labelledby="ann-faq">
  <div class="wrap faq-wrap">
    <h2 id="ann-faq" class="section-title">Common questions</h2>
    <div class="faq">
      ${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}
    </div>
  </div>
</section>

${closing(link, c.closingHeading, c.closingBody)}`;
}

// Unlisted onboarding page (/onboarding/). The form itself is a Close CRM web form, embedded with Close's
// script; answers go straight to Close. A direct link is shown in case the embed is blocked.
export function onboarding({ site, link, copy }) {
  const c = copy.onboarding;
  const f = site.onboardingForm;
  const help = site.contact.recipients[0];
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, seed: 61 })}
<section class="section onboarding-section" aria-label="Onboarding form">
  <div class="wrap">
    <div class="onboarding-card">
      <script src="${esc(f.script)}" type="module" crossorigin="anonymous" defer></script>
      <close-form id="${esc(f.id)}"></close-form>
    </div>
    <p class="onboarding-fallback">${esc(c.fallback)} <a class="text-link" href="${esc(f.shareUrl)}" target="_blank" rel="noopener">${esc(c.fallbackLink)}</a><br>${esc(c.help)} <a href="mailto:${esc(help)}">${esc(help)}</a>.</p>
  </div>
</section>`;
}

// The brand family board: the parent brand above a grid of the other brands. Shared by the unlisted
// /brands/ page and scripts/brands-image.mjs, which renders it to a downloadable image.
export function brandBoard({ link, copy }) {
  const c = copy.brands;
  const host = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
  const siteLine = (b) =>
    b.url
      ? `<a class="brand-url" href="${esc(b.url)}" rel="noopener">${esc(b.urlLabel || host(b.url))}</a>`
      : `<p class="brand-url brand-url-pending">${esc(c.pendingSite)}</p>`;
  const logo = (b) =>
    b.logo.kind === 'mark'
      ? `<img class="brand-mark" src="${esc(link.asset(b.logo.src))}" width="56" height="56" alt="${esc(b.name)} logo"><span class="brand-word">${esc(b.logo.text)}</span>`
      : `<span class="brand-word">${esc(b.logo.text)}</span>${b.logo.sub ? `<span class="brand-sub">${esc(b.logo.sub)}</span>` : ''}`;
  const p = c.parent;
  return `<div class="brand-board">
  <article class="brand-parent">
    <img class="brand-parent-logo" src="${esc(link.asset('logo.svg'))}" width="108" height="116" alt="${esc(p.name)} logo">
    <div class="brand-parent-text">
      <p class="brand-tag">${esc(p.tag)}</p>
      <h2>${esc(p.name)}</h2>
      <p>${esc(p.body)}</p>
      ${siteLine(p)}
    </div>
  </article>
  <ul class="brand-grid">${c.brands
    .map((b) => `<li class="brand-card brand-${esc(b.id)}">
      <div class="brand-logo">${logo(b)}</div>
      <div class="brand-body">
        <p class="brand-tag">${esc(b.tag)}</p>
        <h3>${esc(b.name)}</h3>
        <p>${esc(b.body)}</p>
        ${b.note ? `<p class="brand-note">${esc(b.note)}</p>` : ''}
        ${siteLine(b)}
      </div>
    </li>`)
    .join('')}</ul>
</div>`;
}

// Unlisted family of brands page (/brands/).
export function brands({ site, link, copy }) {
  const c = copy.brands;
  const extra = `<p class="updated-note">Last updated ${esc(c.updated)} · <a class="text-link" href="${esc(link.asset(c.imageFile))}" download>${esc(c.imageLink)}</a></p>`;
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra, seed: c.seed })}
<section class="section section-alt" aria-label="Brands">
  <div class="wrap">
    ${brandBoard({ site, link, copy })}
  </div>
</section>`;
}

// The three Grow pages share one layout: a switcher between them, offer cards, and the discovery panel.
function growPage(key) {
  return ({ site, link, copy }) => {
    const c = copy[key];
    const d = copy.discovery;
    const steps = copy.growOrder.filter((s) => link.has(s.key));
    const switcher = `<nav class="grow-switch" aria-label="Ways to grow"><ol>${steps
      .map((s) => {
        const here = s.key === key;
        return `<li><a href="${esc(link.page(s.key))}"${here ? ' aria-current="page"' : ''}><span class="grow-num" aria-hidden="true">${copy[s.key].step}</span>${esc(s.short)}</a></li>`;
      })
      .join('')}</ol></nav>`;
    const offers = c.offers
      .map(
        (o, i) => `<article class="grow-offer" aria-labelledby="${key}-o${i}">
      <p class="brand-tag">${esc(o.tag)}</p>
      <h2 id="${key}-o${i}">${esc(o.heading)}</h2>
      <p>${esc(o.body)}</p>
      <h3 class="grow-get">What you get</h3>
      <ul class="check-list">${o.list.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
      <div class="actions">${ctaButton(link, { variant: 'secondary', text: o.button })}${o.link && link.has(o.link.key) ? `<a class="text-link" href="${esc(link.page(o.link.key))}">${esc(o.link.text)}</a>` : ''}${o.tool && link.has(o.tool.key) ? `<a class="text-link" href="${esc(link.page(o.tool.key))}">${esc(o.tool.text)}</a>` : ''}</div>
    </article>`,
      )
      .join('\n    ');
    const others = steps.filter((s) => s.key !== key);
    const leadBlock = leadsSection({ site, link, id: `${key}-leads`, heading: c.leadsHeading, ids: c.leads });
    const leads = c.leads || [];
    return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: switcher, seed: 50 + c.step * 7 })}
${answerBlock(site, c)}
<section class="section section-alt grow-step-${c.step}" aria-label="${esc(c.eyebrow)}">
  <div class="wrap grow-offers">
    ${offers}
    ${c.credit ? `<p class="service-note grow-credit">${esc(c.credit)}</p>` : ''}
  </div>
</section>
${leadBlock}
<section class="section${leads.length ? ' section-alt' : ''}" aria-labelledby="${key}-discovery">
  <div class="wrap">
    <div class="grow-discovery">
      <p class="brand-tag">${esc(d.tag)}</p>
      <h2 id="${key}-discovery">${esc(d.heading)}</h2>
      <p>${esc(d.intro)}</p>
      <ul class="check-list">${d.list.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>
      <div class="actions">${ctaButton(link, d.button ? { text: d.button } : {})}</div>
      <p class="service-note">${esc(d.note)}</p>
    </div>
  </div>
</section>
<section class="section section-alt" aria-labelledby="${key}-more">
  <div class="wrap svc-related">
    <h2 id="${key}-more" class="section-title">${esc(copy.otherHeading)}</h2>
    <ul>
      ${others.map((s) => `<li><a class="text-link" href="${esc(link.page(s.key))}">${esc(copy[s.key].eyebrow)}</a></li>`).join('')}
      <li><a class="text-link" href="${esc(link.page('services'))}">All services</a></li>
    </ul>
  </div>
</section>`;
  };
}

export const growTeam = growPage('growTeam');
export const growBusiness = growPage('growBusiness');
export const growFinance = growPage('growFinance');

// "Who leads this work": people by id from founders or team in site.config.mjs.
function leadsSection({ site, link, id, heading, ids = [], notes = {}, alt = false, mailto = (p) => `mailto:${p.email}` }) {
  const people = [...site.founders, ...(site.team || [])];
  const leads = ids.map((pid) => people.find((p) => p.id === pid)).filter(Boolean);
  if (!leads.length) return '';
  return `<section class="section${alt ? ' section-alt' : ''}" aria-labelledby="${id}">
  <div class="wrap">
    <h2 id="${id}" class="section-title">${esc(heading)}</h2>
    <div class="bios industry-bios">${leads
      .map((f) => `<article class="bio${f.photo ? ' has-photo' : ''}">
      ${portrait(f, link)}
      <div class="bio-text">
        <p class="person-role">${esc(f.role)}</p>
        <h3>${esc(f.name)}</h3>
        <p>${esc(notes[f.id] || f.short)}</p>
        ${f.email ? `<p class="bio-email"><a href="${esc(mailto(f))}">${esc(f.email)}</a></p>` : ''}
        ${link.has('about') ? `<p><a class="text-link" href="${esc(link.page('about', f.id))}">More about ${esc(f.name.split(' ')[0])}</a></p>` : ''}
      </div>
    </article>`)
      .join('')}</div>
  </div>
</section>`;
}

// A simple eight-tooth gear with a letter, for the six Working Genius types.
function geniusGear(letter) {
  const teeth = 8, rOut = 46, rIn = 38, cx = 50, cy = 50;
  const pts = [];
  for (let i = 0; i < teeth * 2; i++) {
    const a0 = (Math.PI * 2 * i) / (teeth * 2) - Math.PI / 2;
    const r = i % 2 === 0 ? rOut : rIn;
    const half = Math.PI / (teeth * 2) * 0.62;
    pts.push([cx + r * Math.cos(a0 - half), cy + r * Math.sin(a0 - half)], [cx + r * Math.cos(a0 + half), cy + r * Math.sin(a0 + half)]);
  }
  const d = 'M' + pts.map(([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`).join('L') + 'Z';
  return `<svg class="genius-gear" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="${d}"/><circle cx="50" cy="50" r="27"/><text x="50" y="51" text-anchor="middle" dominant-baseline="central">${esc(letter)}</text></svg>`;
}

// The 6 Types of Working Genius (/working-genius/).
export function workingGenius({ site, link, copy }) {
  const c = copy.workingGenius;
  const hero = pageHero({
    eyebrow: c.eyebrow,
    headline: c.headline,
    lead: c.lead,
    extra: `<div class="actions">${ctaButton(link, { text: c.button })}<a class="button button-secondary" href="#six-types">${esc(c.typesLink)}</a></div>`,
    seed: 61,
  });
  return `${hero}
${answerBlock(site, c)}
<section class="section" aria-labelledby="wg-what">
  <div class="wrap svc-block">
    <h2 id="wg-what" class="section-title">${esc(c.whatHeading)}</h2>
    ${paras(c.what)}
  </div>
</section>
<section class="section section-dark" id="six-types" aria-labelledby="wg-types">
  <div class="wrap">
    <div class="section-head">
      <h2 id="wg-types" class="section-title">${esc(c.typesHeading)}</h2>
      <p>${esc(c.typesIntro)}</p>
    </div>
    <ol class="genius-stages">${c.stages
      .map((st) => `<li class="genius-stage">
        <h3>${esc(st.name)}</h3>
        <ul>${st.types.map((t) => {
          const k = `wg-${t.name.toLowerCase()}`;
          const nameHtml = link.has(k) ? `<a href="${esc(link.page(k))}">${esc(t.name)}</a>` : esc(t.name);
          return `<li class="genius-type">${geniusGear(t.letter)}<div><h4>${nameHtml}</h4><p>${esc(t.body)}</p></div></li>`;
        }).join('')}</ul>
      </li>`)
      .join('')}</ol>
    ${c.typesMore ? `<p class="genius-more">${esc(c.typesMore)}</p>` : ''}
    ${industrySlugs.some((sl) => link.has(`wg-${sl}`)) ? `<p class="genius-more">${esc(c.industriesLine)} ${industrySlugs.filter((sl) => link.has(`wg-${sl}`)).map((sl) => `<a class="text-link text-link-light" href="${esc(link.page(`wg-${sl}`))}">${esc(copy[`wg-${sl}`].headline.replace('Working Genius for ', ''))}</a>`).join(', ')}.</p>` : ''}
  </div>
</section>
<section class="section" aria-labelledby="wg-roi">
  <div class="wrap">
    <div class="section-head">
      <h2 id="wg-roi" class="section-title">${esc(c.roiHeading)}</h2>
      <p>${esc(c.roiIntro)}</p>
    </div>
    <ul class="genius-offers genius-roi">${c.roi.map((r) => `<li><h3>${esc(r.name)}</h3><p>${esc(r.body)}</p></li>`).join('')}</ul>
    <p class="service-note genius-roi-note">${esc(c.roiNote)}</p>
  </div>
</section>
<section class="section section-alt" aria-labelledby="wg-why">
  <div class="wrap">
    <h2 id="wg-why" class="section-title">${esc(c.whyHeading)}</h2>
    <ul class="departments" style="--cols:4">${c.why.map((w) => `<li><h3>${esc(w.name)}</h3><p>${esc(w.body)}</p></li>`).join('')}</ul>
  </div>
</section>
<section class="section" aria-labelledby="wg-offer">
  <div class="wrap">
    <h2 id="wg-offer" class="section-title">${esc(c.offerHeading)}</h2>
    <ul class="genius-offers">${c.offers
      .map((o) => `<li><h3>${esc(o.name)}</h3><p>${esc(o.body)}</p>${o.link && link.has(o.link.key) ? `<p><a class="text-link" href="${esc(link.page(o.link.key))}">${esc(o.link.text)}</a></p>` : ''}</li>`)
      .join('')}</ul>
    <div class="actions genius-actions">${ctaButton(link, { text: c.button })}</div>
  </div>
</section>
${leadsSection({ site, link, id: 'wg-leads', heading: c.leadsHeading, ids: c.leads, notes: c.leadNotes, alt: true })}
<section class="section section-dark" aria-labelledby="wg-faq">
  <div class="wrap faq-wrap">
    <h2 id="wg-faq" class="section-title">Common questions</h2>
    <div class="faq">${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div>
  </div>
</section>
<section class="section" aria-label="Credits">
  <div class="wrap"><p class="service-note">${esc(c.credit)}</p></div>
</section>
${closing(link, c.closingHeading, c.closingBody)}`;
}

// Answer-first block under a page hero: a one-paragraph definition, an optional credential line,
// and the last-updated date with reviewers. Search snippets and AI answers quote this paragraph.
function answerBlock(site, c) {
  if (!c.answer) return '';
  const people = [...site.founders, ...(site.team || [])];
  const reviewers = (c.reviewedBy || []).map((id) => people.find((p) => p.id === id)).filter(Boolean);
  const date = c.dateModified && !c.hideDate ? new Date(`${c.dateModified}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '';
  const meta = [
    date ? `Last updated <time datetime="${esc(c.dateModified)}">${esc(date)}</time>` : '',
    reviewers.length ? `Reviewed by ${reviewers.map((r) => esc(r.name)).join(' and ')}` : '',
  ].filter(Boolean).join(' &middot; ');
  return `<section class="answer-block" aria-label="Summary">
  <div class="wrap">
    <p class="answer-first">${esc(c.answer)}</p>
    ${c.credential ? `<p class="answer-credential">${esc(c.credential)}</p>` : ''}
    ${meta ? `<p class="page-meta">${meta}</p>` : ''}
  </div>
</section>`;
}

// Unlisted event page for Josh's J-TEC session (/jtec/): session recap, The 6 Types of Working Genius,
// an attendee assessment offer, next steps, and the team. Calls to action point to Josh first.
export function jtec({ site, link, copy }) {
  const c = copy.jtec;
  const wg = copy.workingGenius;
  const josh = site.founders.find((f) => f.id === 'josh');
  // Every email link on this page goes to the shared inbox (owner request, 2026-11-11), keeping the visible
  // wording. The subject names the person so the inbox can route it.
  const inbox = site.contact.recipients[0];
  const mail = (subject) => `mailto:${inbox}?subject=${encodeURIComponent(`${subject} (for ${josh.name.split(' ')[0]})`)}`;
  const bioMail = (p) => `mailto:${inbox}?subject=${encodeURIComponent(`Following up from J-TEC (for ${p.name.split(' ')[0]})`)}`;
  const emailBtn = (label, subject, variant = 'secondary') =>
    `<a class="button button-${variant}" href="${esc(mail(subject))}">${esc(label)}</a>`;
  const talk = ctaButton(link, { text: c.talkLabel });
  const banner = `<aside class="news-banner" aria-label="${esc(c.offerEyebrow)}"><div class="wrap"><p>${esc(c.banner)} <a href="${esc(mail(c.discountSubject))}">${esc(c.bannerLink)}</a></p></div></aside>`;
  const hero = pageHero({
    eyebrow: c.eyebrow,
    headline: c.headline,
    lead: c.lead,
    extra: `<div class="actions">${ctaButton(link)}${emailBtn(c.emailLabel, c.emailSubject)}</div>`,
    seed: c.seed,
  });
  const buildLink = site.build?.url
    ? `<p class="situations-note">${esc(c.buildNote)} <a class="text-link" href="${esc(site.build.url)}" rel="noopener">${esc(c.buildLink)}</a></p>`
    : '';
  return `${banner}
${hero}
<section class="section" aria-labelledby="jtec-recap">
  <div class="wrap">
    <div class="section-head">
      <h2 id="jtec-recap" class="section-title">${esc(c.recapHeading)}</h2>
      <p>${esc(c.recapIntro)}</p>
    </div>
    <ul class="departments" style="--cols:4">${c.recap.map((r) => `<li><h3>${esc(r.name)}</h3><p>${esc(r.body)}</p></li>`).join('')}</ul>
    <div class="actions jtec-actions">${talk}</div>
  </div>
</section>
<section class="section section-alt" aria-labelledby="jtec-step">
  <div class="wrap svc-block">
    <h2 id="jtec-step" class="section-title">${esc(c.stepHeading)}</h2>
    <ol class="question-list">${c.step.map((t) => `<li>${esc(t)}</li>`).join('')}</ol>
    <p class="situations-note">${esc(c.stepHelp)}</p>
    <div class="actions">${emailBtn(c.emailLabel, c.emailSubject)}</div>
  </div>
</section>
<section class="section section-dark" id="six-types" aria-labelledby="jtec-types">
  <div class="wrap">
    <div class="section-head">
      <p class="eyebrow eyebrow-light">${esc(c.typesEyebrow)}</p>
      <h2 id="jtec-types" class="section-title">${esc(c.typesHeading)}</h2>
      <p>${esc(c.typesIntro)}</p>
    </div>
    <ol class="genius-stages">${wg.stages
      .map((st) => `<li class="genius-stage">
        <h3>${esc(st.name)}</h3>
        <ul>${st.types.map((t) => `<li class="genius-type">${geniusGear(t.letter)}<div><h4>${esc(t.name)}</h4><p>${esc(t.body)}</p></div></li>`).join('')}</ul>
      </li>`)
      .join('')}</ol>
    <div class="jtec-offer" id="assessment-offer">
      <p class="eyebrow eyebrow-light">${esc(c.offerEyebrow)}</p>
      <h3>${esc(c.offerHeading)}</h3>
      <p>${esc(c.offerBody)}</p>
      <div class="actions">${emailBtn(c.offerButton, c.discountSubject, 'light')}${link.has('workingGenius') ? `<a class="text-link jtec-more" href="${esc(link.page('workingGenius'))}">${esc(c.typesLink)}</a>` : ''}</div>
    </div>
  </div>
</section>
<section class="section" aria-labelledby="jtec-why">
  <div class="wrap">
    <h2 id="jtec-why" class="section-title">${esc(c.whyHeading)}</h2>
    <ul class="departments" style="--cols:4">${c.why.map((w) => `<li><h3>${esc(w.name)}</h3><p>${esc(w.body)}</p></li>`).join('')}</ul>
    <div class="actions jtec-actions">${ctaButton(link, { text: c.whyCta })}${emailBtn(c.offerButton, c.discountSubject)}</div>
  </div>
</section>
<section class="section section-alt" aria-labelledby="jtec-next">
  <div class="wrap">
    <div class="section-head">
      <h2 id="jtec-next" class="section-title">${esc(c.nextHeading)}</h2>
      <p>${esc(c.nextIntro)}</p>
    </div>
    <ul class="genius-offers offers-two">${c.next.map((o) => `<li><h3>${esc(o.name)}</h3><p>${esc(o.body)}</p></li>`).join('')}</ul>
    <div class="actions genius-actions">${talk}${emailBtn(c.emailLabel, c.emailSubject)}</div>
    ${buildLink}
  </div>
</section>
${leadsSection({ site, link, id: 'jtec-leads', heading: c.leadsHeading, ids: ['josh'], notes: c.leadNotes, mailto: bioMail })}
${leadsSection({ site, link, id: 'jtec-team', heading: c.teamHeading, ids: ['matt', 'greg'], notes: c.leadNotes, alt: true, mailto: bioMail })}
<section class="closing" aria-labelledby="closing-heading">
  <div class="wrap closing-inner">
    <h2 id="closing-heading">${esc(c.closingHeading)}</h2>
    <p>${esc(c.closingBody)}</p>
    <div class="actions">${ctaButton(link, { variant: 'light' })}${emailBtn(c.closingEmail, c.emailSubject, 'light')}</div>
  </div>
  ${contourSvg({ width: 1200, height: 360, lines: 9, seed: 11, className: 'contours contours-closing' })}
</section>
<section class="section" aria-label="Trademarks">
  <div class="wrap"><p class="service-note">${esc(c.trademark)}</p></div>
</section>`;
}

// Owner Freedom Calculator (/owner-freedom-calculator/). The math and interactivity live in assets/time-back.js;
// everything stays in the browser. Results, tips, and messages are rendered here so the copy has one home.
export function timeBack({ site, link, copy }) {
  const c = copy.timeBack;
  const f = c.fields;
  const field = (id, d) => `<div class="tb-field">
        <label for="tb-${id}">${esc(d.label)}</label>
        <input id="tb-${id}" name="${id}" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" aria-describedby="tb-${id}-hint tb-${id}-err">
        <p class="tb-hint" id="tb-${id}-hint">${esc(d.hint)}</p>
        <p class="tb-error" id="tb-${id}-err" hidden></p>
      </div>`;
  const stepGroup = (key, items) => {
    const l = c.stepLinks[key];
    return `<div class="tb-steps" data-where="${esc(key)}"${key === 'default' ? '' : ' hidden'}>
      <ol>${items.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
      ${l && link.has(l.key) ? `<p><a class="text-link" href="${esc(link.page(l.key))}">${esc(l.text)}</a></p>` : ''}
    </div>`;
  };
  // Strings the script needs, kept with the rest of the copy.
  const strings = {
    equal: c.equalMessage,
    under: c.underMessage,
    exampleNote: c.exampleNote,
    email: site.contact.recipients[0],
    emailSubject: c.emailSubject,
  };
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<p class="tb-privacy">${esc(c.privacy)}</p>`, seed: 73 })}
<section class="section tb-section" aria-labelledby="tb-form-h">
  <div class="wrap tb-grid">
    <form class="tb-form" id="tb-form" novalidate>
      <h2 id="tb-form-h" class="section-title">${esc(c.formHeading)}</h2>
      <p class="tb-intro">${esc(c.formIntro)}</p>
      <noscript><p class="tb-noscript">${esc(c.noscript)}</p></noscript>
      ${field('current', f.current)}
      ${field('preferred', f.preferred)}
      ${field('weeks', f.weeks)}
      <div class="tb-buttons">
        <button type="button" class="button button-secondary" id="tb-example">${esc(c.exampleButton)}</button>
        <button type="button" class="tb-clear" id="tb-reset">${esc(c.resetButton)}</button>
      </div>
      <p class="tb-example-note" id="tb-example-note" role="status"></p>
      <p class="tb-hint">${esc(c.limitsNote)}</p>
      <fieldset class="tb-where">
        <legend>${esc(c.whereHeading)}</legend>
        <p class="tb-hint">${esc(c.whereHint)}</p>
        <div class="tb-chips">${c.where.map((w) => `<label class="tb-chip"><input type="radio" name="where" value="${esc(w.id)}"><span>${esc(w.label)}</span></label>`).join('')}</div>
      </fieldset>
    </form>

    <div class="tb-results" id="tb-results" aria-labelledby="tb-results-h">
      <h2 id="tb-results-h" class="section-title">${esc(c.resultsHeading)}</h2>
      <p class="tb-empty" id="tb-empty">${esc(c.emptyResult)}</p>
      <div id="tb-out" hidden>
        <p class="tb-headline" id="tb-head"></p>
        <p class="tb-sub" id="tb-sub"></p>
        <div class="tb-bars" aria-hidden="true">
          <div class="tb-bar-row"><span class="tb-bar-label">${esc(c.barCurrent)}</span><div class="tb-track"><div class="tb-bar tb-bar-current" id="tb-bar-current"><span class="tb-bar-gap" id="tb-bar-gap"></span></div></div><span class="tb-bar-value" id="tb-val-current"></span></div>
          <div class="tb-bar-row"><span class="tb-bar-label">${esc(c.barPreferred)}</span><div class="tb-track"><div class="tb-bar tb-bar-preferred" id="tb-bar-preferred"></div></div><span class="tb-bar-value" id="tb-val-preferred"></span></div>
          <p class="tb-legend" id="tb-legend"><span class="tb-swatch"></span>${esc(c.barGap)}</p>
        </div>
        <div id="tb-gap-detail">
          <dl class="tb-stats">
            <div><dt>${esc(c.statWeek)}</dt><dd id="tb-stat-week"></dd></div>
            <div><dt>${esc(c.statYear)}</dt><dd id="tb-stat-year"></dd></div>
            <div><dt>${esc(c.statDays)}</dt><dd id="tb-stat-days"></dd></div>
            <div><dt>${esc(c.statWeeks)}</dt><dd id="tb-stat-weeks"></dd></div>
          </dl>
          <figure class="tb-dots-figure">
            <div class="tb-dots" id="tb-dots" aria-hidden="true"></div>
            <figcaption>${esc(c.dotsCaption)} <span id="tb-dots-more"></span></figcaption>
          </figure>
          <div class="tb-goal">
            <h3>${esc(c.goalHeading)}</h3>
            <p>${esc(c.goalIntro)}</p>
            <label for="tb-goal">${esc(c.goalLabel)}: <strong id="tb-goal-value">0</strong></label>
            <input type="range" id="tb-goal" min="0" max="1" step="0.5" value="0">
            <p class="tb-goal-result" id="tb-goal-result"></p>
            <p class="tb-hint">${esc(c.goalNote)}</p>
          </div>
        </div>
        <p class="tb-message" id="tb-message" hidden></p>
        <p class="tb-assumption">${esc(c.assumption)}</p>
      </div>
      <p class="visually-hidden" id="tb-live" aria-live="polite" aria-atomic="true"></p>
    </div>
  </div>
</section>

<section class="section section-alt" aria-labelledby="tb-reflect-h">
  <div class="wrap tb-two">
    <div>
      <h2 id="tb-reflect-h" class="section-title">${esc(c.reflectHeading)}</h2>
      <p>${esc(c.reflectIntro)}</p>
      <div class="tb-chips tb-reflect">${c.reflect.map((r, i) => `<label class="tb-chip"><input type="checkbox" name="reflect" value="${esc(r)}" id="tb-reflect-${i}"><span>${esc(r)}</span></label>`).join('')}</div>
    </div>
    <div>
      <h2 class="section-title" id="tb-steps-h">${esc(c.stepsHeading)}</h2>
      <p>${esc(c.stepsIntro)}</p>
      ${Object.entries(c.steps).map(([k, v]) => stepGroup(k, v)).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section-dark" aria-labelledby="tb-cta-h">
  <div class="wrap tb-cta">
    <h2 id="tb-cta-h" class="section-title">${esc(c.ctaHeading)}</h2>
    <p>${esc(c.ctaBody)}</p>
    <div class="actions">${ctaButton(link, { variant: 'light', text: c.ctaButton })}${link.has('growBusiness') ? `<a class="text-link text-link-light" href="${esc(link.page('growBusiness'))}">${esc(c.ctaFramework)}</a>` : ''}</div>
    <div class="tb-email">
      <button type="button" class="tb-email-button" id="tb-email" disabled>${esc(c.emailButton)}</button>
      <p>${esc(c.emailNote)}</p>
    </div>
    ${c.otherTool && link.has('profit') ? `<p class="pl-other"><a class="text-link text-link-light" href="${esc(link.page('profit'))}">${esc(c.otherTool)}</a></p>` : ''}
  </div>
</section>
<div class="tool-dock" data-target="tb-results" hidden><span class="tool-dock-text" aria-hidden="true"></span><a class="tool-dock-link" href="#tb-results">See results <span aria-hidden="true">&darr;</span></a></div>
<script type="application/json" id="tb-strings">${JSON.stringify(strings).replace(/</g, '\\u003c')}</script>
<script src="${esc(link.versioned('time-back.js'))}" defer></script>`;
}

// Profit Levers Calculator (/profit-levers-calculator/). Math and interactivity live in assets/profit-levers.js;
// everything stays in the browser. Shares the Owner Freedom Calculator's layout classes (tb-*) so the tools match.
export function profit({ site, link, copy }) {
  const c = copy.profit;
  const money = (id, d) => `<div class="tb-field">
        <label for="pl-${id}">${esc(d.label)}</label>
        <div class="pl-money"><span aria-hidden="true">$</span><input id="pl-${id}" name="${id}" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" aria-describedby="pl-${id}-hint pl-${id}-err"></div>
        <p class="tb-hint" id="pl-${id}-hint">${esc(d.hint)}</p>
        <p class="tb-error" id="pl-${id}-err" hidden></p>
      </div>`;
  const lever = (id, d) => `<div class="pl-lever">
        <div class="pl-lever-head"><label for="pl-lever-${id}">${esc(d.label)}</label><output id="pl-lever-${id}-out" for="pl-lever-${id}">No change</output></div>
        <input type="range" id="pl-lever-${id}" min="-10" max="10" step="0.5" value="0" data-lever="${id}" aria-valuetext="No change">
        <div class="pl-ends" aria-hidden="true"><span>&larr; ${esc(d.left)}</span><span>${esc(d.right)} &rarr;</span></div>
      </div>`;
  const row = (id, label) => `<tr><th scope="row">${esc(label)}</th><td id="pl-s-${id}"></td><td id="pl-n-${id}"></td></tr>`;
  const bridge = (id, label) => `<li class="pl-bridge-row" data-row="${id}"><span class="pl-bridge-label">${esc(label)}</span><span class="pl-bridge-track"><span class="pl-bridge-bar" id="pl-b-${id}"></span><span class="pl-bridge-zero"></span></span><span class="pl-bridge-value" id="pl-bv-${id}"></span></li>`;
  const split = (id, label) => `<div class="pl-split-row"><span class="pl-split-label">${esc(label)}</span><span class="pl-split-track" id="pl-split-${id}"><span class="pl-seg pl-seg-direct"></span><span class="pl-seg pl-seg-overhead"></span><span class="pl-seg pl-seg-profit"></span><span class="pl-seg pl-seg-loss"></span></span></div>`;
  const steps = Object.entries(c.steps)
    .map(([k, items]) => `<div class="tb-steps pl-steps" data-lever="${esc(k)}"${k === 'default' ? '' : ' hidden'}>${k === 'default' ? '' : `<h3>${esc(c.levers[k].label)}</h3>`}<ol>${items.map((s) => `<li>${esc(s)}</li>`).join('')}</ol></div>`)
    .join('\n      ');
  const strings = {
    labels: { price: c.levers.price.label, direct: c.levers.direct.label, overhead: c.levers.overhead.label },
    neutral: c.neutral,
    zeroRevenue: c.zeroRevenue,
    exampleNote: c.exampleNote,
    email: site.contact.recipients[0],
    emailSubject: c.emailSubject,
  };
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<p class="tb-privacy">${esc(c.privacy)}</p>`, seed: 83 })}
<section class="section tb-section" aria-labelledby="pl-snap-h">
  <div class="wrap tb-grid">
    <form class="tb-form" id="pl-form" novalidate>
      <h2 id="pl-snap-h" class="section-title">${esc(c.snapshotHeading)}</h2>
      <p class="tb-intro">${esc(c.snapshotIntro)}</p>
      <noscript><p class="tb-noscript">${esc(c.noscript)}</p></noscript>
      ${money('revenue', c.fields.revenue)}
      ${money('direct', c.fields.direct)}
      ${money('overhead', c.fields.overhead)}
      <details class="pl-details"><summary>${esc(c.includeSummary)}</summary><ul>${c.include.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></details>
      <p class="tb-hint">${esc(c.limitsNote)}</p>
      <div class="tb-buttons">
        <button type="button" class="button button-secondary" id="pl-example">${esc(c.exampleButton)}</button>
        <button type="button" class="tb-clear" id="pl-clear">${esc(c.clearButton)}</button>
      </div>
      <p class="tb-example-note" id="pl-example-note" role="status"></p>

      <h2 class="section-title pl-levers-h" id="pl-levers-h">${esc(c.leversHeading)}</h2>
      <p class="tb-intro">${esc(c.leversIntro)}</p>
      <div class="pl-levers" role="group" aria-labelledby="pl-levers-h">
        ${lever('price', c.levers.price)}
        ${lever('direct', c.levers.direct)}
        ${lever('overhead', c.levers.overhead)}
      </div>
      <p class="tb-hint">${esc(c.rangeNote)}</p>
      <div class="pl-presets" role="group" aria-labelledby="pl-presets-label">
        <p class="pl-presets-label" id="pl-presets-label">${esc(c.presetsLabel)}</p>
        <div class="tb-buttons">${c.presets.map((p) => `<button type="button" class="pl-preset" data-lever="${esc(p.lever)}" data-value="${esc(p.value)}">${esc(p.label)}</button>`).join('')}</div>
        <p class="tb-hint">${esc(c.presetsNote)}</p>
      </div>
      <button type="button" class="tb-clear" id="pl-reset">${esc(c.resetLevers)}</button>
    </form>

    <div class="tb-results pl-results" id="pl-results" aria-labelledby="pl-results-h">
      <h2 id="pl-results-h" class="section-title">${esc(c.resultsHeading)}</h2>
      <p class="tb-empty" id="pl-empty">${esc(c.emptyResult)}</p>
      <p class="tb-message" id="pl-zero" hidden>${esc(c.zeroRevenue)}</p>
      <div id="pl-out" hidden>
        <p class="tb-headline pl-headline" id="pl-head"></p>
        <p class="tb-sub" id="pl-sub"></p>
        <table class="pl-table">
          <thead><tr><td></td><th scope="col">${esc(c.colStart)}</th><th scope="col">${esc(c.colScenario)}</th></tr></thead>
          <tbody>
            ${row('revenue', c.rowRevenue)}
            ${row('direct', c.rowDirect)}
            ${row('overhead', c.rowOverhead)}
            <tr class="pl-profit-row"><th scope="row" id="pl-profit-label">${esc(c.rowProfit)}</th><td id="pl-s-profit"></td><td id="pl-n-profit"></td></tr>
            ${row('margin', c.rowMargin)}
          </tbody>
        </table>
        <div class="pl-bridge" id="pl-bridge">
          <h3>${esc(c.bridgeHeading)}</h3>
          <ol>
            ${bridge('start', c.bridgeStart)}
            ${bridge('price', c.bridgePrice)}
            ${bridge('direct', c.bridgeDirect)}
            ${bridge('overhead', c.bridgeOverhead)}
            ${bridge('end', c.bridgeEnd)}
          </ol>
        </div>
        <div class="pl-split" aria-hidden="true">
          <h3>${esc(c.splitHeading)}</h3>
          ${split('start', c.colStart)}
          ${split('end', c.colScenario)}
          <p class="pl-legend"><span><i class="pl-key pl-seg-direct"></i>${esc(c.splitDirect)}</span><span><i class="pl-key pl-seg-overhead"></i>${esc(c.splitOverhead)}</span><span><i class="pl-key pl-seg-profit"></i>${esc(c.splitProfit)}</span><span id="pl-legend-loss"><i class="pl-key pl-seg-loss"></i>${esc(c.splitLoss)}</span></p>
        </div>
        <details class="pl-details"><summary>${esc(c.assumptionsSummary)}</summary><ul>${c.assumptions.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></details>
        <div class="pl-reality">
          <h3>${esc(c.realityHeading)}</h3>
          <ul>${c.reality.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
        </div>
      </div>
      <p class="visually-hidden" id="pl-live" aria-live="polite" aria-atomic="true"></p>
    </div>
  </div>
</section>

<section class="section section-alt" aria-labelledby="pl-reflect-h">
  <div class="wrap tb-two">
    <div>
      <h2 id="pl-reflect-h" class="section-title">${esc(c.reflectHeading)}</h2>
      <ul class="pl-questions">${c.reflect.map((q) => `<li>${esc(q)}</li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="section-title">${esc(c.stepsHeading)}</h2>
      <p>${esc(c.stepsIntro)}</p>
      ${steps}
    </div>
  </div>
</section>

<section class="section section-dark" aria-labelledby="pl-cta-h">
  <div class="wrap tb-cta">
    <h2 id="pl-cta-h" class="section-title">${esc(c.ctaHeading)}</h2>
    <p>${esc(c.ctaBody)}</p>
    <div class="actions">${ctaButton(link, { variant: 'light', text: c.ctaButton })}${link.has('fractionalCfo') ? `<a class="text-link text-link-light" href="${esc(link.page('fractionalCfo'))}">${esc(c.ctaCfo)}</a>` : ''}</div>
    <div class="tb-email">
      <button type="button" class="tb-email-button" id="pl-email" disabled>${esc(c.emailButton)}</button>
      <p>${esc(c.emailNote)}</p>
    </div>
    ${link.has('timeBack') ? `<p class="pl-other"><a class="text-link text-link-light" href="${esc(link.page('timeBack'))}">${esc(c.otherTool)}</a></p>` : ''}
  </div>
</section>
<div class="tool-dock" data-target="pl-results" hidden><span class="tool-dock-text" aria-hidden="true"></span><a class="tool-dock-link" href="#pl-results">See results <span aria-hidden="true">&darr;</span></a></div>
<script type="application/json" id="pl-strings">${JSON.stringify(strings).replace(/</g, '\\u003c')}</script>
<script src="${esc(link.versioned('profit-levers.js'))}" defer></script>`;
}

// Working Genius guides (/working-genius/<type>/ and /working-genius/<industry>/). Shared helpers first.
function breadcrumb(link, route, parentLabel = 'The 6 Types of Working Genius') {
  if (!route?.parent || !link.has(route.parent)) return '';
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><div class="wrap"><ol><li><a href="${esc(link.page('home'))}">Home</a></li><li><a href="${esc(link.page(route.parent))}">${esc(parentLabel)}</a></li><li aria-current="page">${esc(route.label)}</li></ol></div></nav>`;
}
function guideList(id, heading, items, ordered = false) {
  const tag = ordered ? 'ol' : 'ul';
  return `<section class="section" aria-labelledby="${id}"><div class="wrap svc-block"><h2 id="${id}" class="section-title">${esc(heading)}</h2><${tag} class="check-list">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</${tag}></div></section>`;
}
function guideFaq(id, faq) {
  if (!faq?.length) return '';
  return `<section class="section section-dark" aria-labelledby="${id}"><div class="wrap faq-wrap"><h2 id="${id}" class="section-title">Common questions</h2><div class="faq">${faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div></div></section>`;
}
function guideCta(link, c) {
  return `<section class="section" aria-label="Next steps"><div class="wrap guide-cta">
    <div class="actions">${ctaButton(link, { text: 'Bring Working Genius to your team' })}${link.has('workingGenius') ? `<a class="button button-secondary" href="${esc(link.page('workingGenius'))}">All about Working Genius</a>` : ''}</div>
    <p class="service-note">${esc(c.credit)}</p>
  </div></section>`;
}

export function wgType({ site, link, copy, route }) {
  const c = copy[route.key];
  const keys = typeSlugs.map((s) => `wg-${s}`).filter((k) => link.has(k));
  const i = keys.indexOf(route.key);
  const prev = keys[i - 1];
  const next = keys[i + 1];
  const others = keys
    .map((k) => `<li><a${k === route.key ? ' aria-current="page"' : ''} href="${esc(link.page(k))}"><span class="guide-letter" aria-hidden="true">${esc(copy[k].letter)}</span>${esc(copy[k].name)}</a></li>`)
    .join('');
  return `${breadcrumb(link, route)}
${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 90 + i })}
${answerBlock(site, c)}
${guideList(`${route.key}-looks`, `What ${c.name} looks like at work`, c.looksLike)}
<section class="section section-alt" aria-labelledby="${route.key}-missing">
  <div class="wrap svc-block">
    <h2 id="${route.key}-missing" class="section-title">When no one on the team has ${esc(c.name)}</h2>
    <ul class="check-list">${c.missing.map((m) => `<li>${esc(m)}</li>`).join('')}</ul>
    <h3>When ${esc(c.name)} is a frustration</h3>
    <p>${esc(c.frustration)}</p>
  </div>
</section>
${guideList(`${route.key}-owners`, 'What owners can do', c.owners, true)}
${guideFaq(`${route.key}-faq`, c.faq)}
<section class="section section-alt" aria-labelledby="${route.key}-all">
  <div class="wrap">
    <h2 id="${route.key}-all" class="section-title">All six types</h2>
    <ul class="guide-types">${others}</ul>
    <p class="guide-prevnext">${prev ? `<a class="text-link" href="${esc(link.page(prev))}">&larr; ${esc(copy[prev].name)}</a>` : ''}${next ? `<a class="text-link" href="${esc(link.page(next))}">${esc(copy[next].name)} &rarr;</a>` : ''}</p>
  </div>
</section>
${guideCta(link, c)}`;
}

export function wgIndustry({ site, link, copy, route }) {
  const c = copy[route.key];
  const related = (c.related || []).filter((r) => link.has(r.key));
  const types = typeSlugs.map((s) => `wg-${s}`).filter((k) => link.has(k));
  return `${breadcrumb(link, route)}
${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 97 })}
${answerBlock(site, c)}
<section class="section" aria-labelledby="${route.key}-stalls">
  <div class="wrap">
    <h2 id="${route.key}-stalls" class="section-title">${esc(c.stallsHeading)}</h2>
    <ul class="departments" style="--cols:3">${c.stalls.map((s) => `<li><h3>${esc(s.stage)}</h3><p>${esc(s.body)}</p></li>`).join('')}</ul>
    <p class="guide-background">${esc(c.background)}</p>
  </div>
</section>
${guideList(`${route.key}-cost`, c.costHeading, c.costs)}
${guideList(`${route.key}-how`, c.howHeading, c.how, true)}
${guideFaq(`${route.key}-faq`, c.faq)}
<section class="section section-alt" aria-labelledby="${route.key}-more">
  <div class="wrap svc-related">
    <h2 id="${route.key}-more" class="section-title">Keep exploring</h2>
    <ul>
      ${related.map((r) => `<li><a class="text-link" href="${esc(link.page(r.key, r.anchor))}">${esc(r.text)}</a></li>`).join('')}
      ${types.length ? `<li>The six types: ${types.map((k) => `<a class="text-link" href="${esc(link.page(k))}">${esc(copy[k].name)}</a>`).join(', ')}</li>` : ''}
    </ul>
  </div>
</section>
${guideCta(link, c)}`;
}

// Speaking (/speaking/): talk topics, audiences, formats, process, recent sessions, speakers, and a guided email.
export function speaking({ site, link, copy }) {
  const c = copy.speaking;
  const people = [...site.founders, ...(site.team || [])];
  const nameOf = (id) => people.find((p) => p.id === id)?.name || '';
  const to = site.contact.recipients.join(',');
  const planHref = `mailto:${to}?subject=${encodeURIComponent(c.planEmailSubject)}&body=${encodeURIComponent(c.planEmailBody.map((l) => `${l}\n`).join('\n'))}`;
  const actions = (variant = 'primary') => `<div class="actions"><a class="button button-${variant}" href="${esc(planHref)}">${esc(c.planButton)}</a>${ctaButton(link, { variant: variant === 'light' ? 'secondary' : 'secondary', text: c.callButton })}</div>`;
  const topics = c.topics
    .map((t, i) => `<article class="grow-offer speak-topic" aria-labelledby="speak-t${i}">
      <p class="brand-tag">${esc(t.topic)}</p>
      <h3 id="speak-t${i}">${esc(t.title)}</h3>
      <p class="speak-by">With ${esc(t.speakers.map(nameOf).join(' and '))}</p>
      <p>${esc(t.body)}</p>
      <ul class="check-list">${t.takeaways.map((k) => `<li>${esc(k)}</li>`).join('')}</ul>
      ${t.link && link.has(t.link.key) ? `<a class="text-link" href="${esc(link.page(t.link.key))}">${esc(t.link.text)}</a>` : ''}
      ${t.note ? `<p class="service-note">${esc(t.note)}</p>` : ''}
    </article>`)
    .join('\n    ');
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: actions(), seed: 101 })}
${answerBlock(site, c)}
<section class="section section-alt" aria-labelledby="speak-topics">
  <div class="wrap">
    <div class="section-head">
      <h2 id="speak-topics" class="section-title">${esc(c.topicsHeading)}</h2>
      <p>${esc(c.topicsIntro)}</p>
    </div>
    <div class="speak-topics">
    ${topics}
    </div>
  </div>
</section>
<section class="section" aria-labelledby="speak-aud">
  <div class="wrap">
    <h2 id="speak-aud" class="section-title">${esc(c.audiencesHeading)}</h2>
    <ul class="genius-offers">${c.audiences.map((a) => `<li><h3>${esc(a.name)}</h3><p>${esc(a.body)}</p></li>`).join('')}</ul>
    <p class="speak-formats"><strong>${esc(c.formatsHeading)}:</strong> ${esc(c.formats.join(' \u00b7 '))}</p>
  </div>
</section>
<section class="section section-alt" aria-labelledby="speak-gets">
  <div class="wrap tb-two">
    <div>
      <h2 id="speak-gets" class="section-title">${esc(c.getsHeading)}</h2>
      <ul class="check-list">${c.gets.map((g) => `<li>${esc(g)}</li>`).join('')}</ul>
    </div>
    <div>
      <h2 class="section-title">${esc(c.stepsHeading)}</h2>
      <ol class="speak-steps">${c.steps.map((s) => `<li><strong>${esc(s.title)}.</strong> ${esc(s.body)}</li>`).join('')}</ol>
    </div>
  </div>
</section>
${c.recent?.length ? `<section class="section" aria-labelledby="speak-recent">
  <div class="wrap">
    <h2 id="speak-recent" class="section-title">${esc(c.recentHeading)}</h2>
    <ul class="speak-recent">${c.recent.map((r) => `<li><strong>${esc(r.title)}</strong><span>${esc(r.event)}, ${esc(r.place)}</span><span>${esc(r.date)} \u00b7 ${esc(r.speaker)}</span>${r.detail ? `<p>${esc(r.detail)}</p>` : ''}</li>`).join('')}</ul>
    ${c.presented?.length ? `<h3 class="speak-presented-h">${esc(c.presentedHeading)}</h3><ul class="speak-presented">${c.presented.map((g) => `<li>${esc(g)}</li>`).join('')}</ul>` : ''}
  </div>
</section>` : ''}
${leadsSection({ site, link, id: 'speak-people', heading: c.speakersHeading, ids: ['josh', 'matt', 'greg'], notes: c.speakerNotes, alt: true })}
<section class="section" aria-labelledby="speak-plan">
  <div class="wrap">
    <div class="grow-discovery">
      <h2 id="speak-plan">${esc(c.planHeading)}</h2>
      <p>${esc(c.planBody)}</p>
      ${actions()}
    </div>
  </div>
</section>
<section class="section section-dark" aria-labelledby="speak-faq">
  <div class="wrap faq-wrap">
    <h2 id="speak-faq" class="section-title">Common questions</h2>
    <div class="faq">${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div>
  </div>
</section>
${closing(link, c.closingHeading, c.closingBody)}`;
}

// Maple Creek Advisors and No Alumni (/no-alumni/): the counterpart to noalumni.com/maple-creek/.
export function noAlumni({ site, link, copy }) {
  const c = copy.noAlumni;
  const people = [...site.founders, ...(site.team || [])];
  const roomLink = (r) => (r.link && link.has(r.link.key) ? `<a class="text-link" href="${esc(link.page(r.link.key))}">${esc(r.link.text)}</a>` : r.href ? `<a class="text-link" href="${esc(r.href)}" rel="noopener">${esc(r.linkText)}</a>` : '');
  const guideStart = (g) => (g.key && link.has(g.key) ? `<a href="${esc(link.page(g.key))}">${esc(g.start)}</a>` : g.href ? `<a href="${esc(g.href)}" rel="noopener">${esc(g.start)}</a>` : esc(g.start));
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<div class="actions">${ctaButton(link)}<a class="button button-secondary" href="${esc(c.naUrl)}" rel="noopener">${esc(c.visitButton)}</a></div>`, seed: 111 })}
${answerBlock(site, c)}
<section class="section" aria-labelledby="na-what">
  <div class="wrap">
    <h2 id="na-what" class="section-title">${esc(c.whatHeading)}</h2>
    <div class="na-rooms">${c.rooms
      .map((r) => `<article class="grow-offer na-room">
        <p class="brand-tag">${esc(r.name)}</p>
        <h3>${esc(r.tag)}</h3>
        <p>${esc(r.body)}</p>
        <ul class="check-list">${r.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        ${roomLink(r)}
      </article>`)
      .join('')}</div>
  </div>
</section>
<section class="section section-alt" aria-labelledby="na-people">
  <div class="wrap">
    <h2 id="na-people" class="section-title">${esc(c.peopleHeading)}</h2>
    <div class="na-people">${c.people
      .map((p) => {
        const f = people.find((x) => x.id === p.id);
        if (!f) return '';
        return `<article class="na-person">
        ${portrait(f, link)}
        <h3>${esc(f.name)}</h3>
        <dl>${p.roles.map((r) => `<div><dt>${esc(r.org)}</dt><dd>${esc(r.title)}</dd></div>`).join('')}</dl>
        ${link.has('about') ? `<a class="text-link" href="${esc(link.page('about', f.id))}">More about ${esc(f.name.split(' ')[0])}</a>` : ''}
      </article>`;
      })
      .join('')}</div>
  </div>
</section>
<section class="section" aria-labelledby="na-why">
  <div class="wrap">
    <h2 id="na-why" class="section-title">${esc(c.whyHeading)}</h2>
    <ul class="departments" style="--cols:3">${c.why.map((w) => `<li><h3>${esc(w.name)}</h3><p>${esc(w.body)}</p></li>`).join('')}</ul>
  </div>
</section>
<section class="section section-alt" aria-labelledby="na-guide">
  <div class="wrap">
    <h2 id="na-guide" class="section-title">${esc(c.guideHeading)}</h2>
    <table class="na-guide">
      <thead><tr><th scope="col">If you want</th><th scope="col">Start with</th></tr></thead>
      <tbody>${c.guide.map((g) => `<tr><td>${esc(g.want)}</td><td>${guideStart(g)}</td></tr>`).join('')}</tbody>
    </table>
  </div>
</section>
<section class="section section-dark" aria-labelledby="na-faq">
  <div class="wrap faq-wrap">
    <h2 id="na-faq" class="section-title">Common questions</h2>
    <div class="faq">${c.faq.map((f) => `<div class="faq-item"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('')}</div>
  </div>
</section>
<section class="section" aria-labelledby="na-close">
  <div class="wrap scope">
    <h2 id="na-close">${esc(c.closingHeading)}</h2>
    <p>${esc(c.closingBody)}</p>
    <div class="actions">${ctaButton(link, { text: `Schedule with ${site.siteName}` })}<a class="button button-secondary" href="${esc(c.naCallUrl)}" rel="noopener">${esc(c.naCallText)}</a></div>
  </div>
</section>`;
}

// Owner Freedom Assessment (/owner-freedom-assessment/). Scoring and interactivity live in
// assets/owner-assessment.js; everything stays in the browser. All copy is rendered here from
// src/assessment-content.mjs, and the script only fills in numbers and shows or hides what is already on the page.
export function assessment({ site, link, copy }) {
  const c = copy.assessment;
  const people = [...site.founders, ...(site.team || [])];
  const leadNames = (ids) => ids.map((id) => people.find((p) => p.id === id)?.name).filter(Boolean);
  const joinNames = (n) => (n.length <= 2 ? n.join(' and ') : `${n.slice(0, -1).join(', ')}, and ${n[n.length - 1]}`);
  const total = c.areas.reduce((sum, a) => sum + a.statements.length, 0);
  let q = 0;
  const statement = (text) => {
    q += 1;
    return `<fieldset class="oa-q" data-q="${q}">
          <legend><span class="oa-num">${q}.</span> ${esc(text)}</legend>
          <div class="oa-opts">${c.scale
            .map((label, v) => `<label class="oa-opt"><input type="radio" name="q${q}" value="${v}"><span>${esc(label)}</span></label>`)
            .join('')}</div>
        </fieldset>`;
  };
  const areaBlock = (a, i) => `<section class="oa-area" aria-labelledby="oa-area-${a.id}">
        <p class="oa-area-step">Area ${i + 1} of ${c.areas.length}</p>
        <h3 id="oa-area-${a.id}">${esc(a.name)}</h3>
        <p class="oa-area-q">${esc(a.question)}</p>
        ${a.statements.map(statement).join('\n        ')}
      </section>`;
  const barRow = (a) => `<div class="oa-bar-row" data-area="${a.id}">
            <div class="oa-bar-head"><span class="oa-bar-name">${esc(a.name)}</span><span class="oa-bar-score"><strong class="oa-score-num"></strong> <span class="oa-band"></span></span></div>
            <div class="oa-track" aria-hidden="true"><div class="oa-bar"></div></div>
          </div>`;
  const priority = (a) => {
    const l = a.link;
    return `<article class="oa-priority" data-area="${a.id}" hidden>
            <h4>${esc(a.name)} <span class="oa-priority-score"></span></h4>
            ${['low', 'mid', 'high'].map((b) => `<p class="oa-msg" data-band="${b}" hidden>${esc(a[b])}</p>`).join('')}
            <p class="oa-step"><strong>This week:</strong> ${esc(a.step)}</p>
            <p class="oa-lead">${esc(c.leadLabel)}: ${esc(joinNames(leadNames(a.lead)))}</p>
            ${l && link.has(l.key) ? `<p><a class="text-link" href="${esc(link.page(l.key))}">${esc(l.text)}</a></p>` : ''}
          </article>`;
  };
  const strings = {
    total,
    areas: c.areas.map((a) => ({ id: a.id, name: a.name, count: a.statements.length })),
    bands: c.bands,
    overall: c.overallMessages,
    example: c.example,
    exampleNote: c.exampleNote,
    email: site.contact.recipients[0],
    emailSubject: c.emailSubject,
  };
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<p class="tb-privacy">${esc(c.privacy)}</p>`, seed: 29 })}
<section class="section tb-section oa-section" aria-labelledby="oa-how-h">
  <div class="wrap oa-wrap">
    <div class="oa-intro">
      <h2 id="oa-how-h" class="section-title">${esc(c.howHeading)}</h2>
      <ul class="oa-how">${c.how.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      <noscript><p class="tb-noscript">${esc(c.noscript)}</p></noscript>
    </div>
    <form class="oa-form" id="oa-form" novalidate>
      <div class="oa-progress" id="oa-progress">
        <div class="oa-progress-text"><span><strong id="oa-count">0</strong> of ${total} ${esc(c.progressLabel)}</span><a class="oa-jump" id="oa-jump" href="#oa-results" hidden>See your results <span aria-hidden="true">&darr;</span></a></div>
        <div class="oa-progress-track" aria-hidden="true"><div class="oa-progress-bar" id="oa-progress-bar"></div></div>
      </div>
      <div class="tb-buttons">
        <button type="button" class="button button-secondary" id="oa-example">${esc(c.exampleButton)}</button>
        <button type="button" class="tb-clear" id="oa-reset">${esc(c.resetButton)}</button>
      </div>
      <p class="tb-example-note" id="oa-example-note" role="status"></p>
      ${c.areas.map(areaBlock).join('\n      ')}
    </form>
  </div>
</section>

<section class="section section-alt oa-results-section" aria-labelledby="oa-results-h">
  <div class="wrap oa-wrap">
    <div class="oa-results tb-results" id="oa-results" tabindex="-1">
      <h2 id="oa-results-h" class="section-title">${esc(c.resultsHeading)}</h2>
      <p class="tb-empty" id="oa-empty">${esc(c.emptyResult)}</p>
      <div id="oa-out" hidden>
        <div class="oa-overall">
          <div class="oa-dial"><span class="oa-overall-num" id="oa-overall"></span><span class="oa-overall-of">/100</span></div>
          <div>
            <p class="oa-overall-label">${esc(c.overallLabel)}: <strong id="oa-overall-band"></strong></p>
            <p class="oa-overall-msg" id="oa-overall-msg"></p>
            <p class="tb-hint">${esc(c.overallNote)}</p>
          </div>
        </div>
        <h3>${esc(c.areasHeading)}</h3>
        <div class="oa-bars">
          ${c.areas.map(barRow).join('\n          ')}
        </div>
        <p class="oa-strength">${esc(c.strengthLabel)}: <strong id="oa-strength"></strong></p>
        <h3>${esc(c.prioritiesHeading)}</h3>
        <p>${esc(c.prioritiesIntro)}</p>
        <div class="oa-priorities" id="oa-priorities">
          ${c.areas.map(priority).join('\n          ')}
        </div>
        <p class="tb-assumption">${esc(c.disclaimer)}</p>
      </div>
      <p class="visually-hidden" id="oa-live" aria-live="polite" aria-atomic="true"></p>
    </div>
  </div>
</section>

<section class="section section-dark" aria-labelledby="oa-cta-h">
  <div class="wrap tb-cta">
    <h2 id="oa-cta-h" class="section-title">${esc(c.ctaHeading)}</h2>
    <p>${esc(c.ctaBody)}</p>
    <div class="actions">${ctaButton(link, { variant: 'light', text: c.ctaButton })}</div>
    <p>${esc(c.roadmapNote)}</p>
    <div class="tb-email">
      <button type="button" class="tb-email-button" id="oa-email" disabled>${esc(c.emailButton)}</button>
      <p>${esc(c.emailNote)}</p>
    </div>
    ${link.has('timeBack') && link.has('profit') ? `<p class="pl-other"><a class="text-link text-link-light" href="${esc(link.page('timeBack'))}">Owner Freedom Calculator</a> · <a class="text-link text-link-light" href="${esc(link.page('profit'))}">Profit Levers Calculator</a></p>` : ''}
  </div>
</section>
<div class="tool-dock" data-target="oa-results" hidden><span class="tool-dock-text" aria-hidden="true"></span><a class="tool-dock-link" href="#oa-results">See results <span aria-hidden="true">&darr;</span></a></div>
<script type="application/json" id="oa-strings">${JSON.stringify(strings).replace(/</g, '\\u003c')}</script>
<script src="${esc(link.versioned('owner-assessment.js'))}" defer></script>`;
}

// Guides hub (/guides/): a card for each owner guide, in the order of guideSlugs.
export function guides({ site, link, copy }) {
  const c = copy.guides;
  const items = guideSlugs.map((s) => `guide-${s}`).filter((k) => link.has(k));
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 131 })}
<section class="section" aria-label="All guides">
  <div class="wrap">
    <ul class="tool-cards guide-cards">${items
      .map((k) => `<li><a class="tool-card" href="${esc(link.page(k))}"><span class="tool-card-name">${esc(copy[k].eyebrow)}</span><span class="tool-card-question">${esc(copy[k].headline)}</span><span class="tool-card-body">${esc(copy[k].description)}</span><span class="tool-card-cta">${esc(c.cardCta)}</span></a></li>`)
      .join('')}</ul>
  </div>
</section>
${closing(link, c.closingHeading, c.closingBody)}`;
}

// One owner guide (/guides/<slug>/). Sections are data: paragraphs, a list (ordered or not), or a table.
export function guideArticle({ site, link, copy, route }) {
  const c = copy[route.key];
  const id = (i) => `${route.key}-s${i}`;
  const section = (s, i) => {
    const body = [
      s.paras ? paras(s.paras) : '',
      s.list ? `<${s.ordered ? 'ol' : 'ul'} class="check-list">${s.list.map((x) => `<li>${esc(x)}</li>`).join('')}</${s.ordered ? 'ol' : 'ul'}>` : '',
      s.table
        ? `<div class="guide-table-wrap"><table class="guide-table"><thead><tr>${s.table.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${s.table.rows
            .map((r) => `<tr>${r.map((cell, j) => (j === 0 ? `<th scope="row">${esc(cell)}</th>` : `<td data-label="${esc(s.table.head[j])}">${esc(cell)}</td>`)).join('')}</tr>`)
            .join('')}</tbody></table></div>`
        : '',
      s.note ? `<p class="service-note">${esc(s.note)}</p>` : '',
    ].join('');
    return `<section class="section${i % 2 ? ' section-alt' : ''}" aria-labelledby="${id(i)}"><div class="wrap svc-block"><h2 id="${id(i)}" class="section-title">${esc(s.heading)}</h2>${body}</div></section>`;
  };
  const related = (c.related || []).filter((r) => link.has(r.key));
  return `${breadcrumb(link, route, 'Guides')}
${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, seed: 140 + guideSlugs.indexOf(c.slug) })}
${answerBlock(site, c)}
${c.sections.map(section).join('\n')}
${guideFaq(`${route.key}-faq`, c.faq)}
${related.length ? `<section class="section section-alt" aria-labelledby="${route.key}-more">
  <div class="wrap svc-related">
    <h2 id="${route.key}-more" class="section-title">Keep exploring</h2>
    <ul>${related.map((r) => `<li><a class="text-link" href="${esc(link.page(r.key))}">${esc(r.text)}</a></li>`).join('')}${link.has('guides') ? `<li><a class="text-link" href="${esc(link.page('guides'))}">All guides</a></li>` : ''}</ul>
  </div>
</section>` : ''}
${closing(link, 'Want help applying this?', 'A 20-minute conversation with Josh or Matt is a good place to start. You will leave with a practical next step, whether or not we ever work together.')}`;
}

// Physician practice owners (/physician-practices/). A visual-first page: short copy, a journey diagram, icon cards,
// the three-lane diagram, a staircase for the path, a timeline, and folded FAQs. Every diagram is HTML or inline SVG
// with real text, so search engines and AI assistants still read the substance.
const ppIcons = {
  lanes: '<path d="M4 6c6 0 8 6 12 6M4 12h12M4 18c6 0 8-6 12-6M16 12h4"/>',
  stage: '<path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v4M8 21h8"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  owner: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/>',
  people: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2 20c0-3.3 2.7-5 6-5s6 1.7 6 5M12 20c0-3.3 2.7-5 6-5s4 1 4 2"/>',
  numbers: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
};
const ppIcon = (k) => `<svg class="pp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${ppIcons[k] || ''}</svg>`;

export function physicianPractices({ site, link, copy }) {
  const c = copy.physicianPractices;
  const people = [...site.founders, ...(site.team || [])];
  const stepHref = (h) => (h.key && link.has(h.key) ? link.page(h.key) : h.anchor ? `#${h.anchor}` : '');
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<div class="actions">${ctaButton(link, { text: c.button })}${link.has('assessment') ? `<a class="button button-secondary" href="${esc(link.page('assessment'))}">Take the Owner Freedom Assessment</a>` : ''}</div>`, seed: 151 })}
<section class="section pp-journey-section" aria-labelledby="pp-journey">
  <div class="wrap">
    <h2 id="pp-journey" class="section-title">${esc(c.journeyHeading)}</h2>
    <ol class="pp-journey">${c.journey.map((j, i) => `<li class="pp-stop${i === c.journey.length - 1 ? ' pp-stop-end' : ''}"><span class="pp-dot" aria-hidden="true"></span><strong>${esc(j.label)}</strong><span>${esc(j.line)}</span></li>`).join('')}</ol>
  </div>
</section>
${answerBlock(site, c)}
<section class="section" aria-labelledby="pp-why">
  <div class="wrap">
    <h2 id="pp-why" class="section-title">${esc(c.whyHeading)}</h2>
    <ul class="pp-cards">${c.why.map((w) => `<li>${ppIcon(w.icon)}<h3>${esc(w.name)}</h3><p>${esc(w.line)}</p></li>`).join('')}</ul>
  </div>
</section>
<section class="section section-dark" aria-labelledby="pp-help">
  <div class="wrap pp-help">
    <div>
      <h2 id="pp-help" class="section-title">${esc(c.helpHeading)}</h2>
      <div class="pp-help-cols">${c.help.map((h) => `<div>${ppIcon(h.icon)}<h3>${esc(h.name)}</h3><ul>${h.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>
    </div>
    ${lanesDiagram({ owner: true })}
  </div>
</section>
<section class="section" aria-labelledby="pp-how">
  <div class="wrap">
    <h2 id="pp-how" class="section-title">${esc(c.howHeading)}</h2>
    <p class="pp-intro">${esc(c.howIntro)}</p>
    <ol class="pp-stairs">${c.how
      .map((h, i) => {
        const href = stepHref(h);
        return `<li style="--step:${i}"><span class="pp-step-num" aria-hidden="true">${i + 1}</span><h3>${esc(h.title)}</h3><p>${esc(h.line)}</p>${href ? `<a class="text-link" href="${esc(href)}">${esc(h.linkText || 'More')}</a>` : ''}</li>`;
      })
      .join('')}</ol>
    ${c.guideLink && link.has(c.guideLink.key) ? `<p class="pp-guide"><a class="text-link" href="${esc(link.page(c.guideLink.key))}">${esc(c.guideLink.text)}</a></p>` : ''}
  </div>
</section>
<section class="section section-alt" aria-labelledby="pp-forum-h" id="pp-forum">
  <div class="wrap">
    <div class="pp-forum">
      <div>
        <p class="brand-tag">${esc(c.forumTag)}</p>
        <h2 id="pp-forum-h" class="section-title">${esc(c.forumHeading)}</h2>
        <p>${esc(c.forumLine)}</p>
      </div>
      <ul class="pp-facts">${c.forumFacts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      <div class="actions"><a class="button button-primary" href="${esc(mailtoHref(site, c.forumSubject))}">${esc(c.forumButton)}</a></div>
    </div>
  </div>
</section>
<section class="section" aria-labelledby="pp-toward">
  <div class="wrap">
    <h2 id="pp-toward" class="section-title">${esc(c.towardHeading)}</h2>
    <ol class="pp-timeline">${c.toward.map((t) => `<li><strong>${esc(t.when)}</strong><span>${esc(t.line)}</span></li>`).join('')}</ol>
    <p class="pp-note">${esc(c.towardNote)}</p>
    <p class="pp-proof">${esc(c.proof)} ${link.has(c.proofLink.key) ? `<a class="text-link" href="${esc(link.page(c.proofLink.key))}">${esc(c.proofLink.text)}</a>` : ''}</p>
  </div>
</section>
<section class="section section-alt" aria-labelledby="pp-team">
  <div class="wrap">
    <h2 id="pp-team" class="section-title">${esc(c.teamHeading)}</h2>
    <ul class="pp-team">${c.team
      .map((t) => {
        const f = people.find((p) => p.id === t.id);
        if (!f) return '';
        return `<li>${portrait(f, link)}<div><h3>${esc(f.name)}</h3><p>${esc(t.line)}</p>${link.has('about') ? `<a class="text-link" href="${esc(link.page('about', f.id))}">More about ${esc(f.name.split(' ')[0])}</a>` : ''}</div></li>`;
      })
      .join('')}</ul>
  </div>
</section>
<section class="section" aria-labelledby="pp-faq">
  <div class="wrap pp-faq">
    <h2 id="pp-faq" class="section-title">${esc(c.faqHeading)}</h2>
    ${c.faq.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}
  </div>
</section>
${closing(link, c.closingHeading, c.closingBody)}
<section class="section" aria-label="Trademarks"><div class="wrap"><p class="service-note">${esc(c.credit)}</p></div></section>`;
}

// Event pages (/working-genius-workshop/, /holiday-party/): one shared, visual-first template. Facts at a glance,
// a calendar file, a short "why come," and a registration or RSVP block. The workshop's registration embed is
// inserted as-is from the content file once Matt supplies it.
export function eventPage({ site, link, copy, route }) {
  const c = copy[route.key];
  const v = c.venue;
  const regId = 'register';
  const primary = c.registerButton
    ? `<a class="button button-primary" href="#${regId}">${esc(c.registerButton)}</a>`
    : `<a class="button button-primary" href="${esc(mailtoHref(site, c.rsvpSubject))}">${esc(c.rsvpButton)}</a>`;
  const facts = [
    { k: 'When', v: `${c.when}`, sub: c.time },
    { k: 'Where', v: v.name, sub: `${v.street}, ${v.town}, Ohio`, href: v.mapUrl, hrefText: 'Map' },
    c.price ? { k: 'Cost', v: c.price, sub: `Includes ${c.includes.map((i) => i.charAt(0).toLowerCase() + i.slice(1)).join(', ').replace(/, ([^,]*)$/, ', and $1')}` } : { k: 'Hosts', v: c.hosts, sub: '' },
  ];
  const build = c.hosts && site.build?.url ? `<p class="ev-note">BUILD is the owner community of ${esc(site.siteName)}. <a class="text-link" href="${esc(site.build.url)}" rel="noopener">Visit BUILD</a></p>` : '';
  return `${pageHero({ eyebrow: c.eyebrow, headline: c.headline, lead: c.lead, extra: `<div class="actions">${primary}<a class="button button-secondary" href="${esc(link.asset(c.calendar.file))}" download>${esc(c.calendar.text)}</a></div>`, seed: 171 })}
<section class="section" aria-label="Event details">
  <div class="wrap">
    <dl class="ev-facts">${facts
      .map((f) => `<div><dt>${esc(f.k)}</dt><dd><strong>${esc(f.v)}</strong>${f.sub ? `<span>${esc(f.sub)}</span>` : ''}${f.href ? `<a class="text-link" href="${esc(f.href)}" rel="noopener">${esc(f.hrefText)}</a>` : ''}</dd></div>`)
      .join('')}</dl>
    <p class="ev-note">${esc(v.name)} is ${esc(v.note.charAt(0).toLowerCase() + v.note.slice(1))}.</p>
    ${build}
  </div>
</section>
${c.learn ? `<section class="section section-alt" aria-labelledby="ev-learn">
  <div class="wrap">
    <h2 id="ev-learn" class="section-title">${esc(c.learnHeading)}</h2>
    <ul class="pp-cards">${c.learn.map((l) => `<li>${ppIcon(l.icon)}<h3>${esc(l.name)}</h3><p>${esc(l.line)}</p></li>`).join('')}</ul>
    <h3 class="ev-for-h">${esc(c.forHeading)}</h3>
    <p>${esc(c.forLine)}</p>
  </div>
</section>` : ''}
<section class="section${c.learn ? '' : ' section-alt'}" aria-labelledby="ev-${regId}" id="${regId}">
  <div class="wrap">
    <div class="pp-forum ev-register">
      <div>
        <h2 id="ev-${regId}" class="section-title">${esc(c.registerHeading || 'RSVP')}</h2>
        ${c.embedHtml ? `<div class="ev-embed">${c.embedHtml}</div>` : `<p>${esc(c.registerFallback || c.rsvpNote)}</p>`}
      </div>
      ${c.embedHtml ? '' : `<div class="actions"><a class="button button-primary" href="${esc(mailtoHref(site, c.registerSubject || c.rsvpSubject))}">${esc(c.registerSubject ? 'Email to hold a seat' : c.rsvpButton)}</a></div>`}
    </div>
  </div>
</section>
${c.credit ? `<section class="section" aria-label="Trademarks"><div class="wrap"><p class="service-note">${esc(c.credit)}</p></div></section>` : ''}`;
}
