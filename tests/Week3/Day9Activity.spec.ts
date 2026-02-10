import { test, expect } from '@playwright/test';

test(`Create a Lead in TestLeaf CRM`, async ({page}) =>{
    page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator(`//p[@class="top"]//input`).fill(`Demosalesmanager`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`)
    await page.locator(`//p/input[@class="decorativeSubmit"]`).click()
    await page.locator(`//div[@id='button']/a`).click()
    await page.locator(`//a[text()="Leads"]`).click()
    await page.locator(`//a[text()="Create Lead"]`).click()
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(`TestLeaf`)
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Kumar`)
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`M`)

    const dropdown = page.locator(`#createLeadForm_marketingCampaignId>option`)
    
    const countdropdown = await dropdown.count() 
    console.log("The total number of dropdowns are: "+countdropdown);
    for(let i=0;i<countdropdown;i++){
        const dropdowntext = await dropdown.nth(i).textContent()
        console.log("The dropdown values are: "+dropdowntext);
    }
});