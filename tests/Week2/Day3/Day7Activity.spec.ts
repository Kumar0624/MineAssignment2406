import {test,chromium} from '@playwright/test';


test('launchChrome', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://login.salesforce.com/');
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
  await page.locator('#password').fill('TestLeaf@2025');
  await page.locator('#Login').click();
});