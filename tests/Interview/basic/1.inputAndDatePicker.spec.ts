import {test , expect} from '@playwright/test';
import { Cred } from  '../enum/enum';
import testdata from '../testdata/testdata.json';

test('handle date picker', async ({page}) =>{
    await page.goto(Cred.Date_URL,{waitUntil: 'load'})    
    await page.getByLabel('Input: Number').fill(testdata.NUMBER)
    await page.getByLabel('Input: Text').fill(testdata.USERNAME)
    await page.getByLabel('Input: Password').fill(testdata.PASSWORD)
    await page.getByLabel('Input: Date').fill(testdata.DOB)
    // Another way to fill date picker
    // await page.locator('#input-date').fill('2020-06-24'); // if we give invalid date it will throw error  Malformed value
    await page.getByRole('button', { name: 'Clear Inputs'}).click()
    await page.waitForTimeout(3000)
})