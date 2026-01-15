import { LoginPage } from "./1.login";

export class WelcomePage extends LoginPage {

    public locators = {
        welcomeButton: `//div[@id='button']/a`
    }
    async clickWelcomePage() {
        await this.page1.locator(this.locators.welcomeButton).click()
    }
}

