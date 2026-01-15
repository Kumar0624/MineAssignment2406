import { test } from './fixture';

test(`Create a Lead in TestLeaf CRM`, async ({page}) =>{
   
    console.log( `page title is : ${await page.title()}`);
    await page.locator(`//div[@id='button']/a`).click()
    await page.locator(`//a[text()="Leads"]`).click() 
    await page.locator(`//a[text()="Create Lead"]`).click()
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`TestLeaf`)
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Kumar`)
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`M`)
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Mr`)
    
    await page.waitForTimeout(5000);
});

/* Page Fixture ==> It is giving the instance of the page directly from the playwright library 
Whicha has limitation : It can only hold the opening the browser &  closing the Browser */