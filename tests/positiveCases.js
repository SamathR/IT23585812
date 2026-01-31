import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0001-Convert a simple greeting ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'oyaata kohomadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('ඔයාට කොහොමද?');
  });


  test('POS_FUN_0002- Simple present tence Statement ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'Mama Gedara Yanawa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම ගෙදර යනවා');
  });


  test('POS_FUN_0003- Request with polite phrasing ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'karuNaakara eeka dhenavadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('කරුණාකර ඒක දෙනවද?');
  });


  test('POS_FUN_0004- Negative form sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama ehema karannee naehae');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම එහෙම කරන්නේ නැහැ');
  });


  test('POS_FUN_0005- Compound sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි කෑම කන්න යනවා සහ පස්සෙ චිත්‍රපටයකුත් බලනවා');
  });


  test('POS_FUN_0006- Mixed english with Interrogative ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'Zoom meeting ekak thiyennee?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('Zoom meeting එකක් තියෙන්නේ?');
  });


  test('POS_FUN_0007- Future tense expression ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api iiLaGa sathiyee gedhara yamu');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි ඊළඟ සතියේ ගෙදර යමු');
  });


   test('POS_FUN_0008 - Plural pronoun usage ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'eyaalaa enavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('එයාලා එනවා');
  });


   test('POS_FUN_0009 - Day-to-day expression ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'eyaalaa enavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('එයාලා එනවා');
  });


   test('POS_FUN_0010 - Multi-word collocationx ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mata oona poddak inna');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මට ඕන පොඩ්ඩක් ඉන්න');
  });


   test('POS_FUN_0011 - Repeated words for emphasis ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'hari hari');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('හරි හරි');
  });


  test('POS_FUN_0012 - Imperative command ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'vahaama enna');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('වහාම එන්න');
  });


  test('POS_FUN_0013 - Mixed language with brand term ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mata WhatsApp ekak evanna puLuvandha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මට WhatsApp එකක් එවන්න පුළුවන්ද?');
  });


  test('POS_FUN_0014 - Convert sentence with measurement unit ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'siini 8kg k saha parippu 2kg k ganna');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('සීනි 8kg ක් සහ පරිප්පු 2kg ක් ගන්න');
  });




  test('POS_FUN_0015 - Convert sentence with place name ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api colombo valata trip ekak yamu');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි colombo වලට trip එකක් යමු');
  });


  test('POS_FUN_0016 - Convert multi-line sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama adha gedhara inne   oyaa enavadha paadama ahaganna');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම අද ගෙදර ඉන්නේ ඔයා එනවද පාඩම අහගන්න');
  });


  test('POS_FUN_0017 - Convert long paragraph with scheduling update ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama adha office yadhdhi traffic eka godak thibuna nisaa parakku vunaa mama manager ta message ekak yaevvaa meeting eka kaldhaanna puluvandha kiyalaa. ohu eekata kaemathi vunaa. Meeting eka heta udhee thiyenavaa saha eeka online Zoom meeting ekak vidhihata karanna thiraNaya vuna nisaa mama documents tika email magin yaevvaa. ehema karala api team eka ekka agenda eka discuss karalaa work plan eka finalize kalaa.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම අද office යද්දි traffic එක ගොඩක් තිබුන නිසා පරක්කු වුනා මම manager ට message එකක් යැව්වා meeting එක කල්දාන්න පුලුවන්ද කියලා. ඔහු ඒකට කැමති වුනා. Meeting එක හෙට උදේ තියෙනවා සහ ඒක online Zoom meeting එකක් විදිහට කරන්න තිරණය වුන නිසා මම documents ටික email මගින් යැව්වා. එහෙම කරල අපි team එක එක්ක agenda එක discuss කරලා work plan එක finalize කලා.');
  });


  test('POS_FUN_0018 - Convert mixed brand reference sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama WhatsApp message ekak evvaa oyaata. ');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම WhatsApp message එකක් එව්වා ඔයාට.');
  });


  test('POS_FUN_0019 - Convert negative permission sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mata adha ee vaedeeta yanna baehae');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මට අද ඒ වැඩේට යන්න බැහැ');
  });


  test('POS_FUN_0020 - Convert sentence with technical abbreviation ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'magee laptop ekee SSD eka upgrade karanna oone');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මගේ laptop එකේ SSD එක upgrade කරන්න ඕනෙ');
  });


  test('POS_FUN_0021 - Convert plural pronoun activity sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'eyaalaa vaarshika chaarikaava giyaa mama naethuva');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('එයාලා වාර්ශික චාරිකාව ගියා මම නැතුව');
  });


  test('POS_FUN_0022 - Convert imperative command sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'karaeNaakaralaa oyaala eLiyata yadhdhi dhora vahagena yanna puluvan dha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('කරැණාකරලා ඔයාල එළියට යද්දි දොර වහගෙන යන්න පුලුවන් ද?');
  });


  test('POS_FUN_0023 - Convert future plan with plural pronoun ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api heta muhudhe naanna yamu');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි හෙට මුහුදෙ නාන්න යමු');
  });


  test('POS_FUN_0024 - Convert sentence with currency and number format ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'poth pahak Rs.1200 k kivvaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('පොත් පහක් Rs.1200 ක් කිව්වා');
  });


  test('POS_FUN_0025 - Convert mixed English technical terms sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'magee phone ekata WiFi connect venne naehae');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මගේ phone එකට WiFi connect වෙන්නෙ නැහැ');
  });


  test('POS_UI_0001 - Convert mixed English technical terms sentence ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'magee phone ekata WiFi connect venne naehae');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මගේ phone එකට WiFi connect වෙන්නෙ නැහැ');
  });
});


