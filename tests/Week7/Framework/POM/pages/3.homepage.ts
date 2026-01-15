import { WelcomePage } from "./2.welcomePage";

export class Homepage extends WelcomePage {
    public homePageLocators = {
        leadsButton: `//a[text()="Leads"]`
    }
    async clickHomepage() {
        await this.page1.locator(this.homePageLocators.leadsButton).click()
    }
}