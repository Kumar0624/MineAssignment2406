import {test, expect} from '@playwright/test';


test('basic Code', async ({page}) =>{

    await page.goto(`https://practice.expandtesting.com/login`)

})