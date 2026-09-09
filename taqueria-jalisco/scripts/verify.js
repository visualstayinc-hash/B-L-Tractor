// Playwright verification runner for Clearline Studio.
// Run via scripts/verify.sh (sets NODE_PATH for the global Playwright install).
// Captures screenshots to ../artifacts/visual/, checks console/pageerror, checks
// horizontal overflow at every tested viewport, and prints a pass/fail summary
// that a human (or the next Claude session) can cross-reference against
// QUALITY_GATE.md. This script does not itself edit QUALITY_GATE.md — that
// stays a manual, deliberate act so status changes are never silent.

const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const ROOT = path.resolve(__dirname, '..');
const FILE = 'file://' + path.join(ROOT, 'index.html');
const OUT = path.join(ROOT, 'artifacts', 'visual');

const VIEWPORTS = [
  { name: 'desktop-wide', width: 1920, height: 1080 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'mobile', width: 390, height: 844, isMobile: true, hasTouch: true },
];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const results = { errors: [], overflow: [], screenshots: [] };

  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
      isMobile: !!vp.isMobile,
      hasTouch: !!vp.hasTouch,
    });
    const consoleErrors = [];
    page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
    page.on('pageerror', (e) => consoleErrors.push('PAGEERROR: ' + e.message));

    await page.goto(FILE, { waitUntil: 'networkidle' });
    await page.waitForTimeout(600);

    // Real incremental scroll, not an instant jump: IntersectionObserver-gated
    // draw-on animations only fire on genuine scroll traversal. A fullPage
    // screenshot without this step can render below-fold SVGs as blank even
    // though they work correctly for real users — confirmed during Pass 1.
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const steps = Math.ceil(scrollHeight / 500);
    for (let i = 0; i < steps; i++) {
      await page.mouse.wheel(0, 500);
      await page.waitForTimeout(150);
    }
    await page.waitForTimeout(700);

    // Scroll back to top before the fullPage screenshot: position:fixed
    // elements (this site's top banner nav) freeze at their last real scroll
    // offset when a fullPage capture fires, so a shot taken mid-scroll makes
    // a correctly-fixed top nav appear to float partway down the page — a
    // screenshot artifact, not a layout bug (confirmed via direct
    // boundingBox() checks at scrollY=0 and scrollY=2000, both correct).
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(300);

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    if (overflow.scrollWidth > overflow.clientWidth) {
      results.overflow.push(`${vp.name}: scrollWidth ${overflow.scrollWidth} > clientWidth ${overflow.clientWidth}`);
    }

    const unexpected = consoleErrors.filter((e) => !e.includes('ERR_CONNECTION_RESET'));
    if (unexpected.length) {
      results.errors.push(`${vp.name}: ${JSON.stringify(unexpected)}`);
    }

    const shotPath = path.join(OUT, `${vp.name}-initial.png`);
    await page.screenshot({ path: shotPath, fullPage: true });
    results.screenshots.push(shotPath);

    await page.close();
  }

  await browser.close();

  console.log('--- VERIFY SUMMARY ---');
  console.log('Screenshots:', results.screenshots.length, 'captured in', OUT);
  console.log('Overflow issues:', results.overflow.length ? results.overflow : 'none');
  console.log('Unexpected console/pageerror:', results.errors.length ? results.errors : 'none');
  console.log('--- END SUMMARY ---');
})();
