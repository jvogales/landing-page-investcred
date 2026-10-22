import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { access } from 'node:fs/promises';
import { createServer } from 'node:net';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.SMOKE_PORT ?? 3100);
assert.ok(Number.isInteger(port) && port > 0 && port <= 65535, 'SMOKE_PORT must be a valid TCP port');
const origin = `http://127.0.0.1:${port}`;
await access(new URL('../.next/BUILD_ID', import.meta.url)).catch(() => {
  throw new Error('Production build missing. Run npm run build before npm run test:smoke.');
});

// A TCP check also detects occupied ports that do not serve HTTP.
const probe = createServer();
await new Promise((resolve, reject) => {
  probe.once('error', error => reject(new Error(`Port ${port} is unavailable: ${error.code}`)));
  probe.listen(port, '127.0.0.1', resolve);
});
await new Promise((resolve, reject) => probe.close(error => error ? reject(error) : resolve()));

const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '--hostname', '127.0.0.1', '--port', String(port)], {
  cwd: root,
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env, NEXT_TELEMETRY_DISABLED: '1' },
});
let logs = '';
const capture = chunk => { logs = `${logs}${chunk}`.slice(-16000); };
server.stdout.on('data', capture);
server.stderr.on('data', capture);
let startupError;
server.on('error', error => { startupError = error; });
const request = path => fetch(new URL(path, origin), { signal: AbortSignal.timeout(5000) });
try {
  let response;
  const deadline = Date.now() + 30000;
  while (Date.now() < deadline) {
    if (startupError) throw startupError;
    if (server.exitCode !== null || server.signalCode !== null) throw new Error(`Server exited: ${logs}`);
    // Only probe after this child reports readiness, avoiding a race with an unrelated process.
    if (!logs.includes('Ready in')) {
      await new Promise(resolve => setTimeout(resolve, 250));
      continue;
    }
    try {
      const candidate = await request('/');
      if (candidate.status === 200) {
        response = candidate;
        break;
      }
      await candidate.body?.cancel();
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  assert.ok(response, `Server did not become ready: ${logs}`);
  assert.match(response.headers.get('content-type') ?? '', /text\/html/);
  const html = await response.text();
  for (const expected of ['MAX ASSESSORIA', '<main', 'id="servicos"', 'wa.me/']) {
    assert.ok(html.includes(expected), `Missing expected content: ${expected}`);
  }
  assert.match(html, /<html[^>]+lang="pt-BR"/, 'Document language must match the Portuguese content');
  assert.match(html, /<title>[^<]+<\/title>/, 'Page title must be present');
  assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, 'Homepage must have one primary heading');

  const ids = [...html.matchAll(/\bid="([^"\s]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'HTML IDs must be unique');
  for (const [, target] of html.matchAll(/\bhref="#([^"\s]+)"/g)) {
    assert.ok(ids.includes(decodeURIComponent(target)), `Broken anchor: #${target}`);
  }

  const assets = new Map();
  for (const [, path] of html.matchAll(/\bsrc="([^"\s]*\/_next\/static\/[^"\s]+\.js)"/g)) assets.set(path, /javascript/);
  for (const [, path] of html.matchAll(/\bhref="([^"\s]*\/_next\/static\/[^"\s]+\.css)"/g)) assets.set(path, /text\/css/);
  assert.ok([...assets.keys()].some(path => path.endsWith('.js')), 'Missing application JavaScript');
  assert.ok([...assets.keys()].some(path => path.endsWith('.css')), 'Missing application stylesheet');
  for (const [path, contentType] of assets) {
    const asset = await request(path);
    assert.equal(asset.status, 200, `Asset must be served: ${path}`);
    assert.match(asset.headers.get('content-type') ?? '', contentType);
    assert.ok((await asset.arrayBuffer()).byteLength > 0, `Asset is empty: ${path}`);
  }
  const notFound = await request('/__smoke_missing_page__');
  assert.equal(notFound.status, 404);
  await notFound.body?.cancel();
  console.log(`Smoke passed: homepage, metadata, navigation anchors, ${assets.size} assets and 404`);
} finally {
  if (server.exitCode === null && server.signalCode === null && server.pid) {
    const exited = once(server, 'exit');
    const timer = setTimeout(() => server.kill('SIGKILL'), 5000);
    server.kill('SIGTERM');
    await exited;
    clearTimeout(timer);
  }
}
