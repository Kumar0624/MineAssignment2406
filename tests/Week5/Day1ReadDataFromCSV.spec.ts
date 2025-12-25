import {test} from '@playwright/test';
import { parse } from  "csv-parse/sync";
import fs from "fs";

let data: any = parse(fs.readFileSync("Data/login.csv"), { columns: true, skip_empty_lines: true });
 for (const record of data) {

test(`Data Driven Testing - CSV File - ${record.tcid}`, async ({page}) =>  {
        console.log(record);
        await page.goto('https://login.salesforce.com/');
        await page.fill('//input[@id="username"]', record.username);
        await page.fill('//input[@id="password"]', record.password);
        await page.click('//input[@id="Login"]');
        await page.waitForTimeout(3000);
    
})
}