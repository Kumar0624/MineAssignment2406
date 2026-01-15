import { test as baseTest } from '@playwright/test';

// baseTest === test is used inorder to avoid confusion with the same name "test"

export const test = baseTest.extend({

    page: async ({ page }, use) => {
        // Custom setup can be done here
        await page.goto('http://leaftaps.com/opentaps/control/main')
        await page.locator(`//p[@class="top"]//input`).fill(`Demosalesmanager`)
        await page.locator(`//input[@id="password"]`).fill(`crmsfa`)
        await page.locator(`//p/input[@class="decorativeSubmit"]`).click()
        await use(page);
    }
});