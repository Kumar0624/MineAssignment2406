
import { chromium , Page } from "playwright-core";

export class LoginPage {
    // Class properties
    page1 : Page;  // Page is a type provided by Playwright. It represents a browser tab or web page.

    constructor(Tpage: Page) {
        this.page1 = Tpage;
    }   
    // Method to display login page details
    async launchBrowser(url: string) {
        await this.page1.goto(url)
    }
    async enterUsername() {
         await this.page1.locator(`//p[@class="top"]//input`).fill(`Demosalesmanager`)
    }
    async enterPassword() {
         await this.page1.locator(`//input[@id="password"]`).fill(`crmsfa`)
    }
    async clickLogin(){
        await this.page1.locator(`//p/input[@class="decorativeSubmit"]`).click()
    }
    async closeBrowser() {
        await this.page1.close();    
   }
}