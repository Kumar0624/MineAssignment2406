

import {test} from '@playwright/test';

test("Interact with context menu", async({page}) =>{  
    await page.goto("https://practice.expandtesting.com/context-menu",{waitUntil: 'load'});
    await page.locator('#hot-spot').hover();
    await page.locator('#hot-spot').click({button: 'right'});
    await page.waitForTimeout(2000);
})