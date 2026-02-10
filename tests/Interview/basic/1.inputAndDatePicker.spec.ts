import {test , expect} from '@playwright/test';
import { Cred } from  './enum';

test('handle date picker', async ({page}) =>{
    await page.goto(`https://practice.expandtesting.com/inputs`)    
    await page.getByLabel('Input: Number').fill(Cred.NUMBER) 
    await page.getByLabel('Input: Text').fill(Cred.USERNAME)
    await page.getByLabel('Input: Password').fill(Cred.PASSWORD)
    await page.getByLabel('Input: Date').fill(Cred.DOB)
    // Another way to fill date picker
    // await page.locator('#input-date').fill('2020-06-24'); // if we give invalid date it will throw error  Malformed value
    await page.getByRole('button', { name: 'Clear Inputs'}).click()
    await page.waitForTimeout(3000)
})