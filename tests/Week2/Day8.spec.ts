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
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Mr`)
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill(`QA Automation Engineer`)
    await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill(`500000`)
    await page.locator(`//input[@id='createLeadForm_departmentName']`).fill(`IT`)
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill(`9876543210`)
    await page.locator(`//input[@name="submitButton"]`).click()
    await page.waitForTimeout(5000);
});

test(`Edit Lead in TestLeaf CRM`, async ({page}) =>{
    page.goto('http://leaftaps.com/opentaps/control/main')
    await page.locator(`//p[@class="top"]//input`).fill(`Demosalesmanager`)
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`)
    await page.locator(`//p/input[@class="decorativeSubmit"]`).click()
    await page.locator(`//div[@id='button']/a`).click()
    await page.locator(`//a[text()="Leads"]`).click()
    await page.locator(`//a[text()="Find Leads"]`).click()
    await page.locator(`//input[@id="ext-gen248"]`).fill(`Kumar`)
    await page.locator(`//button[@id="ext-gen334"]`).click()
    await page.locator(`((//table[@class="x-grid3-row-table"])[1]//a)[1]`).click()
    await page.locator(`//a[text()="Edit"]`).click()
    await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill(`TestLeaf Solutions`)
    await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill(`750000`)
    await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill(`Quality Assurance`)
    await page.locator(`//textarea[@id="updateLeadForm_description"]`).fill(`Updating company details`)
    await page.locator(`//td/input[@value="Update"]`).click()
    await page.waitForTimeout(5000);
})