import { test, expect, type Locator, type Page, type TestInfo } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const topicLabel = 'Desconto no benefício';
const stageLabel = 'Em que momento você está? (opcional)';
const submitLabel = 'Preparar minha conversa';
const contactLabel = /^Continuar no WhatsApp/;

async function audit(page: Page, testInfo: TestInfo, state: string) {
  const result = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
    .analyze();
  await testInfo.attach(`accessibility-${state}`, {
    body: JSON.stringify({ violations: result.violations, incomplete: result.incomplete }, null, 2),
    contentType: 'application/json',
  });
  // Keep the test failing while collecting evidence from every audited state.
  expect.soft(result.violations, `Accessibility violations in ${state}`).toEqual([]);
}

async function expectUnobscured(page: Page, locator: Locator) {
  const bounds = await locator.boundingBox();
  expect(bounds).not.toBeNull();
  const header = await page.locator('header').boundingBox();
  if (header) expect(bounds!.y, 'A focused lead control must not be behind the sticky header').toBeGreaterThanOrEqual(header.y + header.height);
  const stickyContact = page.locator('.mobile-contact-bar');
  if (await stickyContact.isVisible()) {
    const contact = await stickyContact.boundingBox();
    expect(bounds!.y + bounds!.height, 'A focused lead control must not be behind the sticky contact bar').toBeLessThanOrEqual(contact!.y);
  }
}

async function prepareLead(page: Page) {
  await page.getByRole('form', { name: 'Preparar conversa com a MAX', exact: true }).getByText(topicLabel, { exact: true }).click();
  await expect(page.getByRole('radio', { name: topicLabel, exact: true })).toBeChecked();
  await page.getByRole('combobox', { name: stageLabel, exact: true }).selectOption({ label: 'Já identifiquei um desconto' });
  await page.getByRole('button', { name: submitLabel, exact: true }).click();
  await expect(page.getByRole('link', { name: contactLabel })).toBeVisible();
}

test('page renders without browser errors or broken navigation and assets', async ({ page }, testInfo) => {
  const errors: string[] = [];
  const failedRequests: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => failedRequests.push(`${request.url()}: ${request.failure()?.errorText}`));
  const response = await page.goto('/', { waitUntil: 'networkidle' });
  expect(response?.status()).toBe(200);
  await expect(page).toHaveTitle(/MAX ASSESSORIA/i);
  await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
  await expect(page.locator('h1')).toHaveCount(1);
  expect(await page.locator('a button, button a, button button').count()).toBe(0);
  const navigation = await page.locator('a[href^="#"], a[href^="/#"]').evaluateAll(elements => {
    const ids = Array.from(document.querySelectorAll('[id]'), element => element.id);
    return {
      ids,
      broken: elements.map(element => new URL(element.getAttribute('href')!, location.href)).filter(url => url.hash.length > 1 && url.pathname === location.pathname && !document.getElementById(decodeURIComponent(url.hash.slice(1)))).map(url => url.hash),
    };
  });
  expect(new Set(navigation.ids).size).toBe(navigation.ids.length);
  expect(navigation.broken).toEqual([]);
  expect(errors).toEqual([]);
  expect(failedRequests).toEqual([]);
  await testInfo.attach('homepage', { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
});

test('qualification validates inline, focuses the missing topic, and preserves edit state', async ({ page }, testInfo) => {
  await page.goto('/');
  const form = page.getByRole('form', { name: 'Preparar conversa com a MAX', exact: true });
  await expect(form).toHaveAttribute('novalidate', '');
  await page.getByRole('button', { name: submitLabel, exact: true }).click();
  const firstRadio = page.getByRole('radio', { name: topicLabel, exact: true });
  await expect(firstRadio).toBeFocused();
  await expectUnobscured(page, firstRadio.locator('..'));
  const invalid = form.locator('[aria-invalid="true"]').first();
  await expect(invalid).toBeVisible();
  const description = await invalid.getAttribute('aria-describedby');
  expect(description).toBeTruthy();
  for (const id of description!.split(/\s+/)) await expect(page.locator(`[id="${id}"]`)).toBeVisible();
  await audit(page, testInfo, 'validation-error');
  await firstRadio.press('Space');
  await expect(firstRadio).toBeChecked();
  await prepareLead(page);
  await expect(page.locator('#orientacao h2')).toBeFocused();
  await expectUnobscured(page, page.locator('#orientacao h2'));
  await expect(page.getByText(topicLabel, { exact: true })).toBeVisible();
  await expect(page.getByText('Já identifiquei um desconto', { exact: true })).toBeVisible();
  await audit(page, testInfo, 'review');
  await page.getByRole('button', { name: 'Editar informações', exact: true }).click();
  await expect(page.locator('#orientacao h2')).toBeFocused();
  await expectUnobscured(page, page.locator('#orientacao h2'));
  await expect(firstRadio).toBeChecked();
  await expect(page.getByRole('combobox', { name: stageLabel, exact: true })).toHaveValue(/.+/);
  await expect(page.getByRole('combobox', { name: stageLabel, exact: true }).locator('option:checked')).toHaveText('Já identifiquei um desconto');
  await page.getByRole('combobox', { name: stageLabel, exact: true }).focus();
  await page.keyboard.press('ArrowUp');
  await expect(page.getByRole('combobox', { name: stageLabel, exact: true }).locator('option:checked')).toHaveText('Quero entender minhas opções');
  await page.keyboard.press('Tab');
  const submit = page.getByRole('button', { name: submitLabel, exact: true });
  await expect(submit).toBeFocused();
  await expectUnobscured(page, submit);
});

test('lead is only handed off after an explicit action and never stored or posted by the site', async ({ page, context }) => {
  const mutationRequests: string[] = [];
  page.on('request', request => {
    if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method())) mutationRequests.push(request.url());
  });
  await page.goto('/');
  await expect(page.locator('input:not([type="radio"]):not([type="hidden"]), textarea')).toHaveCount(0);
  const initialPageCount = context.pages().length;
  await prepareLead(page);
  expect(context.pages()).toHaveLength(initialPageCount);
  await expect(page.getByText('Nada foi enviado. A mensagem só será enviada quando você confirmar no WhatsApp.', { exact: true })).toBeVisible();
  expect(mutationRequests).toEqual([]);
  const storage = await page.evaluate(() => ({ local: Object.keys(localStorage), session: Object.keys(sessionStorage), cookie: document.cookie }));
  expect(storage).toEqual({ local: [], session: [], cookie: '' });
  const contact = page.getByRole('link', { name: contactLabel });
  const url = new URL((await contact.getAttribute('href'))!);
  expect(url.protocol).toBe('https:');
  expect(url.hostname).toBe('wa.me');
  expect(url.pathname).toBe('/554333711212');
  expect(url.searchParams.get('text')).toContain(topicLabel);
  expect(url.searchParams.get('text')).toContain('Já identifiquei um desconto');
  await expect(contact).toHaveAttribute('target', '_blank');
  await expect(contact).toHaveAttribute('rel', /noopener/);
  await expect(contact).toHaveAttribute('rel', /noreferrer/);
  // Intercept the external navigation: this test must never reach WhatsApp or send a message.
  await context.route('https://wa.me/**', route => route.fulfill({ status: 200, contentType: 'text/html', body: '<title>WhatsApp handoff intercepted by QA</title>' }));
  const popupPromise = page.waitForEvent('popup');
  await contact.click();
  const popup = await popupPromise;
  await popup.waitForLoadState('domcontentloaded');
  expect(new URL(popup.url()).hostname).toBe('wa.me');
  await popup.close();
});

test('keyboard navigation, mobile menu, reduced motion, and layout remain usable', async ({ page }, testInfo) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: /Pular para o conteúdo/i })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#conteudo')).toBeFocused();
  await page.evaluate(() => scrollTo(0, 0));
  const menu = page.locator('button[aria-controls="menu-principal"]');
  if (await menu.isVisible()) {
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(menu).toBeFocused();
    await menu.click();
    await page.getByRole('navigation', { name: /principal/i }).locator('a[href$="#sobre"]').click();
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(page).toHaveURL(/#sobre$/);
  }
  for (const width of [320, 375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.evaluate(() => scrollTo(0, 0));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px`).toBe(true);
    await testInfo.attach(`viewport-${width}`, { body: await page.screenshot({ fullPage: true }), contentType: 'image/png' });
  }
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(true);
});

test('initial page, privacy and localized 404 meet automated accessibility checks', async ({ page, request }, testInfo) => {
  await page.goto('/');
  await audit(page, testInfo, 'initial');
  await page.getByRole('link', { name: /Privacidade e uso de dados/i }).click();
  await expect(page).toHaveURL('/privacidade');
  expect((await request.get('/privacidade')).status()).toBe(200);
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.getByText(/Não pedimos nome, telefone, CPF/)).toBeVisible();
  await expect(page.getByText(/hospedagem pode processar registros técnicos/)).toBeVisible();
  await audit(page, testInfo, 'privacy');
  const brokenPrivacyNavigation = await page.locator('header a, footer a').evaluateAll(elements => elements
    .map(element => new URL((element as HTMLAnchorElement).href))
    .filter(url => url.origin === location.origin && url.hash && url.pathname !== '/')
    .map(url => url.href));
  expect(brokenPrivacyNavigation).toEqual([]);
  const privacyMenu = page.locator('button[aria-controls="menu-principal"]');
  if (await privacyMenu.isVisible()) await privacyMenu.click();
  await page.getByRole('navigation', { name: /principal/i }).getByRole('link', { name: 'Como ajudamos', exact: true }).click();
  await expect(page).toHaveURL('/#servicos');
  await expect(page.locator('#servicos')).toBeVisible();
  const missing = await page.goto('/__qa_missing_page__');
  expect(missing?.status()).toBe(404);
  await expect(page.getByRole('heading', { name: /^Página não encontrada\.?$/ })).toBeVisible();
  await audit(page, testInfo, '404');
  await page.getByRole('link', { name: 'Voltar ao início', exact: true }).click();
  await expect(page).toHaveURL('/');
  await expect(page.locator('h1')).toBeVisible();
});

test('without JavaScript the page stays readable and qualification cannot submit a misleading GET request', async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  try {
    const page = await context.newPage();
    const requests: string[] = [];
    page.on('request', request => requests.push(request.url()));
    const response = await page.goto(baseURL!, { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('#servicos')).toBeVisible();
    expect(await page.locator('form button[type="submit"]:enabled').count()).toBe(0);
    const contact = page.locator('a[href^="https://wa.me/554333711212"]').first();
    await expect(contact).toBeVisible();
    expect(requests.some(url => new URL(url).searchParams.has('topic') || new URL(url).searchParams.has('stage'))).toBe(false);
  } finally {
    await context.close();
  }
});
