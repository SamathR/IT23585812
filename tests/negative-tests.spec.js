import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala', () => {

  test('NEG_FUN_0001 - Handle random symbol input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '&&&#');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Symbols should not produce valid Sinhala
    expect(bodyText).not.toContain('මම');
    expect(bodyText).not.toContain('ඔයා');
  });

  test('NEG_FUN_0002 - Handle emoji mixed input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'mama 😊 yannavaa');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Emoji might break translation or be omitted
    expect(bodyText).not.toContain('😊');
    // Translation accuracy might be reduced
  });

  test('NEG_FUN_0003 - Handle numeric only input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '1234567');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Numbers alone shouldn't produce meaningful Sinhala
    expect(bodyText).not.toContain('මම');
    expect(bodyText).not.toContain('ඔයා');
  });

  test('NEG_FUN_0004 - Handle heavy spelling errors', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'mmoaa vaedaa karnva');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Should produce incorrect or garbled output
    expect(bodyText).not.toContain('මම වැඩ කරනවා'); // Correct version
  });

  test('NEG_FUN_0005 - Handle broken sentence structure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'yanawa mama office adha');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Wrong word order should give wrong meaning
    expect(bodyText).not.toContain('මම අද office යනවා'); // Correct order
  });

  test('NEG_FUN_0006 - Handle mixed symbols in sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'mama $$ yannavaa');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Symbols should not appear in output
    expect(bodyText).not.toContain('$$');
    // Translation accuracy affected
  });

  test('NEG_FUN_0007 - Handle meaningless English string', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'jsdsjcsdnjnjc');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Nonsense input should give nonsense output
    // Check it doesn't produce common Sinhala words
    expect(bodyText).not.toContain('මම');
    expect(bodyText).not.toContain('ඔයා');
  });

  test('NEG_FUN_0008 - Handle extremely long meaningless input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    const meaninglessText = 'abc abc abc abc abc abc abc abc abc abc abb abb abb abb abb aaa';
    await page.fill('textarea', meaninglessText);
    await page.waitForTimeout(5000);
    const bodyText = await page.locator('body').textContent();
    // Should produce meaningless output
    expect(bodyText).not.toContain('මම');
    expect(bodyText).not.toContain('ඔයා');
  });

  test('NEG_FUN_0009 - Handle excessive repeated characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'maaaaama yannavaaaa');
    await page.waitForTimeout(3000);
    const bodyText = await page.locator('body').textContent();
    // Excessive vowels should confuse the system
    // Should not produce clean "මම යනවා"
    expect(bodyText).not.toContain('මම යනවා'); // Clean version
  });

  test('NEG_FUN_0010 - Very long input causes truncation or failure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    const longText = 'mamagedharayanavaamatavinthurakannaooneeapiwaetathiyenawaoyaathkohedaeniyanavadaanidakaramuapaadanayehewathmamaeevathkarannabayaepaahemaadharayohedakiyanavadaeeniyanavadaapiyanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenaw';
    await page.fill('textarea', longText);
    await page.waitForTimeout(10000); // Longer wait for very long text
    
    const bodyText = await page.locator('body').textContent();
    // System might truncate or fail
    // Check if output is significantly shorter than input
    expect(bodyText.length).toBeLessThan(longText.length * 2);
  });

  // Additional negative tests from your Excel file
  test('NEG_FUN_0011 - Empty input should not produce output', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '');
    await page.waitForTimeout(2000);
    const bodyText = await page.locator('body').textContent();
    // Empty input should give empty or default output
    expect(bodyText).not.toContain('මම');
    expect(bodyText).not.toContain('ඔයා');
  });

  test('NEG_FUN_0012 - Input with only spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '     ');
    await page.waitForTimeout(2000);
    const bodyText = await page.locator('body').textContent();
    // Spaces only should not produce valid Sinhala
    expect(bodyText).not.toContain('මම');
  });
});