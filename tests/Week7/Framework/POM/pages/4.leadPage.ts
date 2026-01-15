import { Homepage } from "./3.homepage";

export class LeadPage extends Homepage {

    public leadPageLocators = {
        createLeadButton: `//a[text()="Create Lead"]`
    }
    async createLead() {
        await this.page1.locator(this.leadPageLocators.createLeadButton).click()
    }
}