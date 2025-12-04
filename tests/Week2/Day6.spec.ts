import {test,chromium,webkit} from '@playwright/test';

test('launchChrome', async () => {

  const browser = await chromium.launch();
  const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.flipkart.com/');

    const title = await page.title();
    console.log('Flipkart Page Title:', title);

    const url = await page.url();
    console.log('Flipkart Page URL:', url);

    await browser.close();
});

test('launchWebkit', async () => {

  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.redbus.in/');

   const title = await page.title();
   console.log('Redbus Page Title:', title);

   const url = await page.url();
   console.log('Redbus Page URL:', url);

  await browser.close();
});

