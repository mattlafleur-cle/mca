// A holiday version of the BUILD logo for the December 2026 party page and its link preview. Redrawn from the
// logo on buildowners.com (wordmark, gold, orange, and red stripes, white mountains), with the sun turned into a
// gold star and holly, evergreens, and snow added. Inline SVG with real text, so it stays sharp and readable.
export function buildHolidayLogo({ title = 'BUILD, Business United in Leadership Development, holiday edition', idPrefix = 'bh' } = {}) {
  // Deterministic snowfall so builds are repeatable.
  let seed = 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280);
  const flakes = Array.from({ length: 46 }, () => {
    const x = (rand() * 640).toFixed(1);
    const y = (rand() * 330).toFixed(1);
    const r = (0.8 + rand() * 2.2).toFixed(2);
    const o = (0.18 + rand() * 0.5).toFixed(2);
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="#ffffff" opacity="${o}"/>`;
  }).join('');
  const star = (cx, cy, R, r) => {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const a = (Math.PI / 5) * i - Math.PI / 2;
      const rad = i % 2 ? r : R;
      pts.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
    }
    return pts.join(' ');
  };
  const tree = (x, h) => `<polygon points="${x},${208 - h} ${x - h * 0.42},208 ${x + h * 0.42},208" fill="#2f7d4f"/><polygon points="${x},${208 - h} ${x - h * 0.18},${208 - h * 0.55} ${x + h * 0.18},${208 - h * 0.55}" fill="#ffffff" opacity="0.85"/>`;
  const p = idPrefix;
  return `<svg class="build-holiday" viewBox="0 0 640 330" role="img" aria-labelledby="${p}-title" xmlns="http://www.w3.org/2000/svg">
  <title id="${p}-title">${title}</title>
  <defs>
    <radialGradient id="${p}-glow" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#f0b323" stop-opacity="0.55"/><stop offset="1" stop-color="#f0b323" stop-opacity="0"/></radialGradient>
    <radialGradient id="${p}-bg" cx="0.62" cy="0.18" r="0.9"><stop offset="0" stop-color="#2d2526"/><stop offset="1" stop-color="#171314"/></radialGradient>
  </defs>
  <rect width="640" height="330" rx="18" fill="url(#${p}-bg)"/>
  ${flakes}
  <circle cx="352" cy="64" r="62" fill="url(#${p}-glow)"/>
  <polygon points="${star(352, 64, 27, 11)}" fill="#f0b323"/>
  <polygon points="468,208 532,118 596,208" fill="#ffffff" stroke="#1d1819" stroke-width="9" stroke-linejoin="round" paint-order="stroke"/>
  <polygon points="532,118 596,208 548,208" fill="#dbe6f0"/>
  <polygon points="392,208 456,96 520,208" fill="#ffffff" stroke="#1d1819" stroke-width="9" stroke-linejoin="round" paint-order="stroke"/>
  <polygon points="456,96 520,208 470,208" fill="#dbe6f0"/>
  <polygon points="286,208 384,66 482,208" fill="#ffffff" stroke="#1d1819" stroke-width="9" stroke-linejoin="round" paint-order="stroke"/>
  <polygon points="384,66 482,208 410,208" fill="#dbe6f0"/>
  ${tree(560, 30)}${tree(584, 24)}${tree(604, 34)}
  <text x="44" y="128" font-family="'Libre Franklin', 'Helvetica Neue', Arial, sans-serif" font-size="96" font-weight="800" fill="#ffffff" letter-spacing="-1">BUILD</text>
  <polygon points="44,144 318,144 306,162 44,162" fill="#f0b323"/>
  <polygon points="44,168 302,168 290,186 44,186" fill="#d86018"/>
  <polygon points="44,192 286,192 274,210 44,210" fill="#9d2235"/>
  <g transform="translate(298 44)">
    <ellipse cx="-14" cy="0" rx="17" ry="7.5" fill="#2f7d4f" transform="rotate(-28 -14 0)"/>
    <ellipse cx="14" cy="0" rx="17" ry="7.5" fill="#3b9460" transform="rotate(28 14 0)"/>
    <circle cx="-4" cy="6" r="5.4" fill="#c8102e"/><circle cx="5" cy="7" r="5.4" fill="#d81e3a"/><circle cx="0.5" cy="-1" r="5.4" fill="#b80e29"/>
  </g>
  <text x="44" y="240" font-family="'Libre Franklin', 'Helvetica Neue', Arial, sans-serif" font-size="13.5" font-weight="600" fill="#cfc8c1" letter-spacing="1.6">BUSINESS UNITED IN LEADERSHIP DEVELOPMENT</text>
  <line x1="44" y1="262" x2="104" y2="262" stroke="#f0b323" stroke-width="2"/>
  <text x="44" y="302" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="36" fill="#f0b323">Holiday Party 2026</text>
</svg>`;
}
