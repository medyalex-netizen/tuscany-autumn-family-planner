// Test-only runtime: TUSCANY_TEST_RUNTIME must contain jsdom and tsx.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const runtime = process.env.TUSCANY_TEST_RUNTIME;
if (!runtime) throw Error('Set TUSCANY_TEST_RUNTIME to the test dependencies directory.');
const { JSDOM } = require(runtime + '/node_modules/jsdom');
const dom = new JSDOM('<div id="root"></div>', {url: 'http://localhost:3079/search', pretendToBeVisual: true});
for (const key of ['self', 'window', 'document', 'navigator', 'HTMLElement', 'HTMLInputElement', 'Element', 'location', 'requestAnimationFrame']) Object.defineProperty(globalThis, key, {configurable: true, value: dom.window[key]});
Object.assign(globalThis, {IS_REACT_ACT_ENVIRONMENT: true});

async function run() {
  const {act, createElement} = await import('react');
  const {createRoot} = await import('react-dom/client');
  const {default: Search} = await import('../app/search/page');
  const {default: Results} = await import('../app/results/page');
  const {default: Itinerary} = await import('../app/itinerary/page');
  const {default: Prompt} = await import('../app/prompt/page');
  const {default: Weather} = await import('../app/weather/page');
  const {STORAGE_KEY} = await import('../lib/answers');
  const {LanguageProvider} = await import('../language-context');
  const root = createRoot(document.getElementById('root')!);
  const render = async (Page: typeof Search) => {
    await act(async () => root.render(null));
    await act(async () => root.render(createElement(LanguageProvider, {children: createElement(Page)})));
  };
  const text = () => document.body.textContent || '';
  const click = async (label: string) => {
    const button = Array.from(document.querySelectorAll('button')).find(b => b.textContent?.replace('✓ ', '').trim() === label);
    assert.ok(button, label);
    await act(async () => button.click());
  };
  let checks = 0;
  await render(Search);
  assert.equal(window.localStorage.getItem(STORAGE_KEY), null);
  assert.equal(document.querySelector('a[href="/results"]')?.getAttribute('aria-disabled'), null);
  checks++;
  for (const [duration, count] of [['4–5 ימים', 5], ['6–7 ימים', 7], ['8–10 ימים', 10]] as const) {
    await render(Search); await click(duration);
    assert.equal(JSON.parse(window.localStorage.getItem(STORAGE_KEY)!).tripLength, duration);
    await render(Itinerary);
    const dayLabels = Array.from(document.querySelectorAll('p')).filter(p => /^יום \d+$/.test(p.textContent?.trim() || ''));
    assert.equal(dayLabels.length, count);
    assert.equal(dayLabels.at(-1)?.textContent?.trim(), `יום ${count}`);
    assert.ok(text().includes('סיום הטיול וחזרה הביתה'));
    await render(Search);
    assert.equal(Array.from(document.querySelectorAll('button')).find(b => b.textContent?.trim() === duration)?.getAttribute('aria-pressed'), 'true');
    checks++;
  }
  await click('סיינה'); await click('רכבות ותחבורה ציבורית בלבד');
  await render(Results); assert.ok(text().includes('סיינה')); checks++;
  await render(Prompt); assert.ok(text().includes('- אזור לינה מועדף: סיינה') && text().includes('- אופן ההתניידות: רכבות ותחבורה ציבורית בלבד')); checks++;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({tripStartDate: '2026-10-28', tripEndDate: '2026-11-02', tripLength: '8–10 ימים'}));
  await render(Itinerary);
  assert.equal(Array.from(document.querySelectorAll('p')).filter(p => /^יום \d+$/.test(p.textContent?.trim() || '')).length, 6); checks++;
  window.localStorage.setItem(STORAGE_KEY, '{broken');
  await render(Search); assert.ok(text().includes('לא ניתן לשמור')); await click('4–5 ימים');
  assert.equal(JSON.parse(window.localStorage.getItem(STORAGE_KEY)!).tripLength, '4–5 ימים'); checks++;
  await click('מחיקת תשובות'); assert.equal(window.localStorage.getItem(STORAGE_KEY), null);
  await render(Search); assert.equal(window.localStorage.getItem(STORAGE_KEY), null); checks++;
  const urls: string[] = [];
  let signals: AbortSignal[] = [];
  globalThis.fetch = (async (url: string, options?: {signal: AbortSignal}) => {
    urls.push(url); if (options?.signal) signals.push(options.signal);
    if (url.includes('geocoding')) return {ok:true, json:async () => ({results:[{name:'Siena', country:'Italy',country_code:'IT',latitude:43.3,longitude:11.3}]})};
    return {ok:true,json:async () => ({current:{temperature_2m:16,apparent_temperature:15},daily:{time:['2026-10-05'],temperature_2m_max:[20],temperature_2m_min:[10]}})};
  }) as unknown as typeof fetch;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({baseArea:'סיינה', tripLength:'6–7 ימים',tripStartDate:'2026-11-05',tripEndDate:'2026-11-11'}));
  await render(Weather);
  assert.ok(urls[0].includes('name=Siena')); assert.ok(text().includes('מזג אוויר בסיינה') && text().includes('2026-11-05 עד 2026-11-11') && text().includes('6–7 ימים'));
  assert.ok(text().includes('סיכוי לגשם: לא זמין')); checks++;
  const select = document.querySelector('select')!;
  await act(async () => { select.value = 'Lucca'; select.dispatchEvent(new window.Event('change', {bubbles:true})); });
  assert.ok(urls.some(url => url.includes('name=Lucca')));
  assert.ok(signals[0].aborted); checks++;
  globalThis.fetch = (async () => ({ok:false,json:async () => ({})})) as unknown as typeof fetch;
  await render(Weather); assert.ok(text().includes('לא הצלחנו לטעון תחזית')); checks++;
  signals = [];
  globalThis.fetch = (async (_url: string, options?: {signal: AbortSignal}) => {
    if (options?.signal) signals.push(options.signal);
    return {ok:true,json:async () => ({results:[{name:'Siena',country_code:'US'}]})};
  }) as unknown as typeof fetch;
  await render(Weather); assert.ok(text().includes('לא נמצא מיקום לתחזית')); checks++;
  await render(Search);
  await click('אנגלית');
  await click('Family apartment');
  assert.equal(JSON.parse(window.localStorage.getItem(STORAGE_KEY)!).lodgingType, 'דירה משפחתית');
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
    baseArea: 'סיינה',
    transportation: 'רכבות ותחבורה ציבורית בלבד',
    lodgingType: 'דירה משפחתית',
    lodgingPriorities: ['חניה נוחה', 'ארוחת בוקר'],
    teenPriorities: ['קניות ורחובות יפים', 'גלידה, קינוחים ובתי קפה'],
    arrivalPoint: 'פירנצה',
    departurePoint: 'פיזה',
  }));
  for (const Page of [Results, Prompt, Itinerary]) {
    await render(Page);
    const content = text();
    assert.match(content, /Family apartment/);
    assert.match(content, /Convenient parking, Breakfast/);
    assert.match(content, /פירנצה/);
    assert.match(content, /פיזה/);
    assert.doesNotMatch(content.replaceAll('פירנצה', '').replaceAll('פיזה', ''), /[\u0590-\u05ff]/u);
    checks++;
  }
  await act(async () => root.unmount());
  console.log(`${checks} UI scenarios passed`);
}
run().catch(error => {console.error(error);process.exitCode=1;});
