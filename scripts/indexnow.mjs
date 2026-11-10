// IndexNow change notifications. Used by .github/workflows/deploy.yml:
//   node scripts/indexnow.mjs --changed   (after the build, before deploy) prints a JSON list of public pages
//                                         whose built HTML differs from the live site. Add --all to list every
//                                         public page (used for manual runs of the workflow).
//   node scripts/indexnow.mjs --submit '<json list>'   (after deploy) sends that list to IndexNow.
// Pages come from dist/sitemap.xml, so noindex and unlisted pages are never sent. Never fails the deploy:
// network problems are logged and the script exits 0.
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import site from '../site.config.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const base = site.canonicalDomain;

// Asset fingerprints (?v=...) change whenever CSS or JS changes; ignore them so a style-only
// change does not count as a content change on every page.
const normalize = (html) => html.replace(/\?v=[0-9a-f]{8}/g, '');

async function changed(all = false) {
  if (!site.indexNowKey || !site.allowIndexing || !base) return [];
  const sitemap = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const out = [];
  for (const url of urls) {
    const rel = url.slice(base.length).replace(/^\//, '');
    const file = path.join(dist, rel.endsWith('/') || rel === '' ? path.join(rel, 'index.html') : rel);
    if (all) {
      out.push(url);
      continue;
    }
    const built = normalize(await readFile(file, 'utf8'));
    let live = null;
    try {
      const res = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
      if (res.ok) live = normalize(await res.text());
    } catch {
      // Treat an unreachable page as changed.
    }
    if (live !== built) out.push(url);
  }
  return out;
}

async function submit(list) {
  if (!site.indexNowKey || !list.length) {
    console.log('IndexNow: nothing to send.');
    return;
  }
  const host = new URL(base).host;
  const body = { host, key: site.indexNowKey, keyLocation: `${base}/${site.indexNowKey}.txt`, urlList: list };
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    console.log(`IndexNow: HTTP ${res.status} for ${list.length} page(s):\n${list.join('\n')}`);
    if (res.status >= 400) console.log(await res.text());
  } catch (err) {
    console.log(`IndexNow: request failed (${err.message}). The deploy is unaffected.`);
  }
}

const arg = process.argv[2];
if (arg === '--changed') {
  const list = await changed(process.argv.includes('--all'));
  console.error(`IndexNow: ${list.length} changed page(s).`);
  process.stdout.write(JSON.stringify(list));
} else if (arg === '--submit') {
  let list = [];
  try {
    list = JSON.parse(process.argv[3] || '[]');
  } catch {
    console.log('IndexNow: could not read the page list.');
  }
  await submit(list);
} else {
  console.error('Usage: node scripts/indexnow.mjs --changed | --submit <json>');
}
