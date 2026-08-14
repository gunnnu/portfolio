// Smoke test for the dev container.
//
// The point is not to re-test the site — it is to prove this container can do
// the things the project's normal workflow depends on: serve the page, drive a
// real Chromium at phone and desktop widths, read computed geometry back, and
// run the anti-pattern detector. If this passes, measurements taken here can be
// trusted against the numbers recorded in DESIGN.md.

import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const repo = resolve(here, '..');
const PORT = 8899;
const BASE = `http://127.0.0.1:${PORT}`;

let failures = 0;
const check = (name, ok, detail = '') => {
  if (!ok) failures++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  — ' + detail : ''}`);
};

// Bound to 0.0.0.0 rather than 127.0.0.1: Codespaces forwards ports by
// connecting from outside the container's loopback, so a localhost-only bind
// is reachable from these tests but not from your browser.
console.log('Starting server…');
const server = spawn('python3', ['-m', 'http.server', String(PORT), '--bind', '0.0.0.0', '--directory', repo],
  { stdio: 'ignore' });
const stop = () => { try { server.kill('SIGTERM'); } catch {} };
process.on('exit', stop);
process.on('SIGINT', () => { stop(); process.exit(130); });

// Wait for it to accept connections rather than sleeping a fixed amount.
let up = false;
for (let i = 0; i < 50; i++) {
  try { const r = await fetch(BASE + '/index.html'); if (r.ok) { up = true; break; } } catch {}
  await new Promise(r => setTimeout(r, 100));
}
if (!up) { console.error('Server never came up on ' + BASE); stop(); process.exit(1); }

console.log('\nEnvironment');
check('node 22.x', process.version.startsWith('v22'), process.version);

const browser = await chromium.launch();
check('chromium launches', true, browser.version());

console.log('\nPage loads and runs');
for (const [w, h, label] of [[390, 844, 'mobile 390px'], [1440, 900, 'desktop 1440px']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, hasTouch: w === 390, isMobile: w === 390 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded' });
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);

  const m = await page.evaluate(() => {
    const stack = document.querySelector('.stack');
    const rail = stack ? getComputedStyle(stack, '::before') : null;
    const dot = document.querySelector('.tl-item');
    const dotCs = dot ? getComputedStyle(dot, '::before') : null;
    return {
      sections: ['about', 'build', 'work', 'experience', 'contact'].filter(id => document.getElementById(id)).length,
      hOverflow: document.documentElement.scrollWidth > window.innerWidth,
      // Geometry the repo asserts on: rail and dot both centre on x = 7 / 28.
      railCentre: rail ? parseFloat(rail.left) + parseFloat(rail.width) / 2 : null,
      dotCentre: dotCs ? parseFloat(dotCs.left) + parseFloat(dotCs.width) / 2 : null,
      cardsPainted: [...document.querySelectorAll('.cards .card')].every(c => +getComputedStyle(c).opacity > 0.1),
    };
  });

  console.log(`  · ${label}`);
  check('    all 5 sections present', m.sections === 5, `${m.sections}/5`);
  check('    no horizontal overflow', !m.hOverflow);
  check('    no JS errors', errors.length === 0, errors.join(' | '));
  check('    build rail centres on 28', m.railCentre === 28, String(m.railCentre));
  check('    timeline dot centres on 7', m.dotCentre === 7, String(m.dotCentre));
  check('    every project card painted', m.cardsPainted === true);
  await ctx.close();
}

console.log('\nTheme switching');
for (const scheme of ['light', 'dark']) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, colorScheme: scheme });
  const page = await ctx.newPage();
  await page.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(400);
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const expected = scheme === 'dark' ? 'rgb(19, 21, 25)' : 'rgb(239, 236, 228)';
  check(`  ${scheme} theme ground`, bg === expected, bg);
  await ctx.close();
}

console.log('\nPrototypes');
for (const p of ['/proto/', '/proto/b-systems.html', '/proto/c-engineering.html']) {
  const r = await fetch(BASE + p);
  check(`  ${p}`, r.ok, String(r.status));
}

await browser.close();

console.log('\nDetector');
const detector = resolve(repo, '.impeccable/.claude/skills/impeccable/scripts/detector/detect-antipatterns.mjs');
if (!existsSync(detector)) {
  check('  impeccable detector present', false, 'submodule not initialised — run .devcontainer/setup.sh');
} else {
  const code = await new Promise(res => {
    const d = spawn('node', [detector, resolve(repo, 'index.html')], { stdio: 'inherit' });
    d.on('close', res);
  });
  check('  index.html clean', code === 0, code === 0 ? '' : `exit ${code}`);
}

stop();
console.log(failures === 0
  ? '\nAll checks passed — this container reproduces the reference environment.\n'
  : `\n${failures} check(s) failed.\n`);
process.exit(failures === 0 ? 0 : 1);
