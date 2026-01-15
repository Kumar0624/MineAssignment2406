import { Page } from "playwright-core";
import { LoginPageLocators } from "../locators/1.loginLocators";

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
         await this.page1.locator(LoginPageLocators.userName).fill(`Demosalesmanager`)
    }
    async enterPassword() {
         await this.page1.locator(LoginPageLocators.password).fill(`crmsfa`)
    }
    async clickLogin(){
        await this.page1.locator(LoginPageLocators.loginButton).click()
    }
    async closeBrowser() {
        await this.page1.close();    
   }
}