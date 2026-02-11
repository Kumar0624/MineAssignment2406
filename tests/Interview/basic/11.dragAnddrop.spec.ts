import {test, expect} from '@playwright/test';

test('handle drag and drop', async ({page}) =>{

    await page.goto(`https://testautomationpractice.blogspot.com/#`, { waitUntil: 'load' });

    const source = page.locator("#draggable");
    const target = page.locator("#droppable");

    await source.dragTo(target);
    await expect(target).toHaveText('Dropped!');
    await page.waitForTimeout(2000);


})