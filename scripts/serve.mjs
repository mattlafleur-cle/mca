// Minimal local preview server for dist/. Binds to localhost only.
//   node scripts/serve.mjs [port]
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const port = Number(process.argv[2] || process.env.PORT || 4173);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

async function resolve(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]);
  let file = path.normalize(path.join(root, clean));
  if (!file.startsWith(root)) return null;
  try {
    const info = await stat(file);
    if (info.isDirectory()) file = path.join(file, 'index.html');
    await stat(file);
    return file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const file = await resolve(req.url || '/');
  const target = file || path.join(root, '404.html');
  const body = await readFile(target);
  res.writeHead(file ? 200 : 404, {
    'Content-Type': types[path.extname(target)] || 'application/octet-stream',
    'X-Robots-Tag': 'noindex, nofollow',
  });
  res.end(body);
}).listen(port, '127.0.0.1', () => {
  console.log(`Preview running at http://localhost:${port}/ (Ctrl+C to stop)`);
});
