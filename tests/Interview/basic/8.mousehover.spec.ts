import {test} from '@playwright/test';

test('handle mouse hover', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/', {waitUntil: 'load'});
    await page.getByRole('button', {name: 'Point Me'}).hover();
    await page.getByRole('link', {name:"Mobiles"}).click();
    await page.waitForTimeout(2000);
})  