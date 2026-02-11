import {test} from '@playwright/test';



test('handle file upload', async ({page}) =>{
    await page.goto('https://practice.expandtesting.com/upload');
    await page.setInputFiles('#fileInput','tests/Interview/testdata/3d_11zon.jpg');
    await page.getByRole('button', { name:'Upload'}).click();
    await page.waitForTimeout(2000);
})