import { test, expect } from '@playwright/test';

async function getSinhalaOutput(page) {
  const output = page.locator('textarea').last();
  return (await output.inputValue()) || (await output.textContent());
}

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0001 - Convert simple greeting', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'oyaata kohomadha?');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(0);
  });

  test('POS_FUN_0002 - Simple present tense', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mama gedhara yanavaa');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('මම ගෙදර යනවා');
  });

  test('POS_FUN_0003 - Polite request', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'karuNaakara eeka dhenavadha?');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0004 - Negative form sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mama ehema karannee naehae');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('න');
  });

  test('POS_FUN_0005 - Compound sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(20);
  });

  test('POS_FUN_0006 - Mixed English interrogative', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'Zoom meeting ekak thiyennee?');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('Zoom');
  });

  test('POS_FUN_0007 - Future tense expression', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'api iiLaGa sathiyee gedhara yamu');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(10);
  });

  test('POS_FUN_0008 - Plural pronoun usage', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'eyaalaa enavaa');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0009 - Day-to-day expression', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mata nidhimathayi');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0010 - Multi-word collocation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mata oona poddak inna');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(10);
  });

  test('POS_FUN_0011 - Repeated words', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'hari hari');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0012 - Imperative command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'vahaama enna');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0013 -Mixed language with Brand term', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mata WhatsApp ekak evanna puLuvandha?');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('WhatsApp');
  });

  test('POS_FUN_0014 - Convert sentence with Measurement units', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'siini 8kg k saha parippu 2kg k ganna');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('kg');
  });

  test('POS_FUN_0015 - Place name sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'api colombo valata trip ekak yamu');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('colombo');
  });

  test('POS_FUN_0016 - Multi-line sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','mama adha gedhara inne oyaa enavadha paadama ahaganna');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(10);
  });

  test('POS_FUN_0017 - Long paragraph', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','mama adha office yadhdhi traffic eka godak thibuna nisaa parakku vunaa');
    await page.waitForTimeout(5000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(20);
  });

  test('POS_FUN_0018 - Brand reference sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','mama WhatsApp message ekak evvaa oyaata');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('WhatsApp');
  });

  test('POS_FUN_0019 - Negative permission sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','mata adha ee vaedeeta yanna baehae');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0020 - Technical abbreviation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','magee laptop ekee SSD eka upgrade karanna oone');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('SSD');
  });

  test('POS_FUN_0021 - Plural pronoun activity', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','eyaalaa vaarshika chaarikaava giyaa');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0022 - Imperative polite command', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','karaeNaakaralaa oyaala eLiyata yadhdhi dhora vahagena yanna puluvan dha?');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(10);
  });

  test('POS_FUN_0023 - Future plan plural', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','api heta muhudhe naanna yamu');
    await page.waitForTimeout(3000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(5);
  });

  test('POS_FUN_0024 - Currency and numbers', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','poth pahak Rs.1200 k kivvaa');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('Rs');
  });

  test('POS_FUN_0025 - Mixed technical terms', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea','magee phone ekata WiFi connect venne naehae');
    await page.waitForTimeout(3000);
    expect(await getSinhalaOutput(page)).toContain('WiFi');
  });

});

test.describe('UI Tests – Singlish to Sinhala', () => {

  test('POS_UI_0001 - Real-time output update', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    const textarea = page.locator('textarea');

    await textarea.fill('m');
    await page.waitForTimeout(1000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(0);

    await textarea.fill('mama');
    await page.waitForTimeout(1000);
    expect((await getSinhalaOutput(page)).length).toBeGreaterThan(0);
  });

});
