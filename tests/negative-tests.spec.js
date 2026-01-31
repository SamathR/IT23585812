import { test, expect } from '@playwright/test';

async function getSinhalaOutput(page) {
  const output = page.locator('textarea').last();
  return (await output.inputValue()) || (await output.textContent());
}

test.describe('Negative Functional Tests – Singlish to Sinhala', () => {

  test('NEG_FUN_0001 - Random symbols accepted', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', '&&&#');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

  test('NEG_FUN_0002 - Emoji preserved', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mama 😊 yannavaa');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out).toContain('😊');
  });

  test('NEG_FUN_0003 - Numeric only input processed', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', '1234567');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out).toContain('123');
  });

  test('NEG_FUN_0004 - Heavy spelling auto-correct', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mmoaa vaedaa karnva');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

  test('NEG_FUN_0005 - Broken word order still translated', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'yanawa mama office adha');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

  test('NEG_FUN_0006 - Symbols not removed', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'mama $$ yannavaa');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out).toContain('$$');
  });

  test('NEG_FUN_0007 - Meaningless string processed', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'jsdsjcsdnjnjc');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

  test('NEG_FUN_0008 - Repeated meaningless input accepted', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'abc abc abc abc abc abc');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

  test('NEG_FUN_0009 - Excessive character repetition', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'maaaaama yannavaaaa');
    await page.waitForTimeout(3000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

  test('NEG_FUN_0010 - Very long input accepted', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.fill('textarea', 'a'.repeat(600));
    await page.waitForTimeout(5000);

    const out = await getSinhalaOutput(page);
    expect(out.length).toBeGreaterThan(0);
  });

});


