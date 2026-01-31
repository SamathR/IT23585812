import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala', () => {

  test('NEG_FUN_0001 - Handle random symbol input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '&&&#');
    await page.waitForTimeout(3000);
    
    // Get the Sinhala output area specifically
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Random symbols should not produce any Sinhala output
    // But they might appear as-is or produce some output
    expect(outputText.trim()).toBe('');
  });

  test('NEG_FUN_0002 - Handle emoji mixed input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'mama 😊 yannavaa');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Emoji should be filtered out from output
    // But emoji will likely appear in the output
    expect(outputText).not.toContain('😊');
  });

  test('NEG_FUN_0003 - Handle numeric only input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '1234567');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Numbers only should produce no Sinhala output
    // But numbers might appear as-is
    expect(outputText).toBe('');
  });

  test('NEG_FUN_0004 - Handle heavy spelling errors', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'mmoaa vaedaa karnva');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Heavy spelling errors should produce incorrect output or error
    // But system might try to autocorrect
    expect(outputText).not.toContain('මම වැඩ කරනවා');
  });

  test('NEG_FUN_0005 - Handle broken sentence structure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'yanawa mama office adha');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Wrong word order should produce wrong or no output
    // But system might still translate incorrectly
    expect(outputText).not.toContain('මම අද office යනවා');
  });

  test('NEG_FUN_0006 - Handle mixed symbols in sentence', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'mama $$ yannavaa');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Symbols should be filtered from output
    // But symbols will likely appear in output
    expect(outputText).not.toContain('$$');
  });

  test('NEG_FUN_0007 - Handle meaningless English string', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'jsdsjcsdnjnjc');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Nonsense input should produce no meaningful output
    // But might produce garbled Sinhala
    expect(outputText).toBe('');
  });

  test('NEG_FUN_0008 - Handle extremely long meaningless input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    const meaninglessText = 'abc abc abc abc abc abc abc abc abc abc abb abb abb abb abb aaa';
    await page.fill('textarea', meaninglessText);
    await page.waitForTimeout(5000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Meaningless repetition should produce no meaningful output
    // But might produce some output
    expect(outputText).toBe('');
  });

  test('NEG_FUN_0009 - Handle excessive repeated characters', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', 'maaaaama yannavaaaa');
    await page.waitForTimeout(3000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Excessive repetition should confuse the translator
    // But might still produce output
    expect(outputText).not.toContain('මම යනවා');
  });

  test('NEG_FUN_0010 - Very long input causes truncation or failure', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    const longText = 'mamagedharayanavaamatavinthurakannaooneeapiwaetathiyenawaoyaathkohedaeniyanavadaanidakaramuapaadanayehewathmamaeevathkarannabayaepaahemaadharayohedakiyanavadaeeniyanavadaapiyanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenawamataudaarayanavakiyalaataenagiyaiyeweethiyenaw';
    await page.fill('textarea', longText);
    await page.waitForTimeout(10000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Extremely long input should cause issues
    // But might be processed (will fail if processed successfully)
    expect(outputText.length).toBe(0);
  });

  // Additional tests matching your Excel
  test('NEG_FUN_0011 - Empty input should not produce output', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '');
    await page.waitForTimeout(2000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Empty input might show placeholder or previous output
    expect(outputText.trim()).toBe('');
  });

  test('NEG_FUN_0012 - Input with only spaces', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.fill('textarea', '     ');
    await page.waitForTimeout(2000);
    
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const outputText = await outputArea.textContent();
    
    // SHOULD FAIL: Spaces might produce some output
    expect(outputText.trim()).toBe('');
  });

  // UI Negative Test
  test('NEG_UI_0001 - Rapid input causes UI lag or crash', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    const textarea = page.locator('textarea').first();
    
    // Type very fast to stress the UI
    for (let i = 0; i < 20; i++) {
      await textarea.press('a');
      await page.waitForTimeout(10);
    }
    
    await page.waitForTimeout(1000);
    
    // Check if UI is responsive
    const outputArea = page.locator('.Sinhala-output, [class*="output"], [class*="result"], textarea').last();
    const isVisible = await outputArea.isVisible();
    
    // SHOULD FAIL: UI should handle rapid input without issues
    expect(isVisible).toBe(true);
    
    // Try to type more - UI might freeze
    await textarea.press('b');
    await page.waitForTimeout(100);
    
    const canType = await textarea.isEnabled();
    expect(canType).toBe(true);
  });
});