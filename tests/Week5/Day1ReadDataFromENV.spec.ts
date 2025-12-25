import {test} from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({path: `Data/qa.env`});

test(`Read Data from ENV File`, async ({page}) =>  {
    console.log("URL is: "+process.env.url);
    console.log("Username is: "+process.env.username);
    console.log("Password is: "+process.env.password);  
    await page.goto(process.env.url as string);
    await page.locator('//input[@id="username"]').fill(process.env.username as string);
    await page.locator('//input[@id="password"]').fill(process.env.password as string);
    await page.locator('//input[@id="Login"]').click();
    await page.waitForTimeout(3000);
})  
