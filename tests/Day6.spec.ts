import {test,chromium} from '@playwright/test';

test('launchChrome', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');
    // Add your test steps here
    await browser.close();
});

