import {test} from '@playwright/test';

test('handle double click', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/#',{waitUntil: 'load'});
    await page.getByRole('button', {name: 'Copy Text'}).dblclick();
    await page.waitForTimeout(2000);
})  