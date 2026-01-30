import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0001-Simple sentences ,Proper spacing ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama yanavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම යනවා');
  });
});