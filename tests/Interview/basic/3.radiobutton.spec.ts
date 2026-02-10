import {test , expect} from '@playwright/test';
import { Cred } from  './enum';

test('handle radio button', async ({page}) => {
    await page.goto(`https://practice.expandtesting.com/radio-buttons`,{waitUntil: 'load'}) // Page fully loaded
    await page.getByLabel('Yellow').click()
    await page.getByRole('radio', {name:'Football'}).click()
    await page.waitForTimeout(6000)
})