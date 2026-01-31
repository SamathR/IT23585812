import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0001-Convert a simple greeting ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'oyaata kohomadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('ඔයාට කොහොමද?');
  });
});


test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0002- Simple present tence Statement ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'Mama Gedara Yanawa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා');
  });
});


test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0003- Request with polite phrasing ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'karuNaakara eeka dhenavadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('karuNaakara eeka dhenavadha?');
  });
});



test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0004- Negative form sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama ehema karannee naehae');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම එහෙම කරන්නේ නැහැ');
  });
});



test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0005- Compound sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා');
  });
});