import { chromium , Page } from "playwright-core";

class loginPage1 {
    // Class properties
    page1 : Page;  // Page is a type provided by Playwright. It represents a browser tab or web page.

    // page → Playwright page

    // Tpage → receives that page

    constructor(Tpage: Page) {
        this.page1 = Tpage; // Store the Playwright page inside the class so it can be used in all methods.
    }   
    // Method to display login page details
    async launchBrowser(url: string) {
        await this.page1.goto(url)
    }
    async enterUsername() {
         await this.page1.locator(`//p[@class="top"]//input`).fill(`Demosalesmanager`)
         await this.page1.locator(`//input[@id="password"]`).fill(`crmsfa`)
    }
    async closeBrowser() {
        await this.page1.close();    
   }
}

// Test function to utilize the loginPage class
    async function testLoginPage() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    const login = new loginPage1(page);  
    await login.launchBrowser("http://leaftaps.com/opentaps/control/main");
    await login.enterUsername();
    await login.closeBrowser();
    }
 // Execute the test function
 testLoginPage()
