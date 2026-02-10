import {test , expect} from '@playwright/test';
import { Cred } from  './enum';

test('handle checkbox', async ({page}) =>{
    await page.goto(`https://practice.expandtesting.com/checkboxes`,{waitUntil: 'load'})
    await page.getByLabel('Checkbox 1').click()
    await page.getByLabel('Checkbox 2').click()
    await page.getByRole('checkbox',{name:'Checkbox 2'}).click()
    await page.waitForTimeout(6000)
})