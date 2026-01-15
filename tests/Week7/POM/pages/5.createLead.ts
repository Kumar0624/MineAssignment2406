import { LeadPage } from "./4.leadPage"

export class CreateLead extends LeadPage {

    public createLeadLocators = {
        companyNameInput: `//input[@id='createLeadForm_companyName']`,
        firstNameInput: `//input[@id='createLeadForm_firstName']`,
        lastNameInput: `//input[@id='createLeadForm_lastName']`,
        personalTitleInput: `//input[@id='createLeadForm_personalTitle']`,
        generalProfTitleInput: `//input[@id='createLeadForm_generalProfTitle']`,
        annualRevenueInput: `//input[@id='createLeadForm_annualRevenue']`,
        departmentNameInput: `//input[@id='createLeadForm_departmentName']`,
        primaryPhoneNumberInput: `//input[@id='createLeadForm_primaryPhoneNumber']`
    }
    async enterCompanyName() {
        await this.page1.locator(this.createLeadLocators.companyNameInput).fill("TestLeaf")
    }
    async enterFirstName() {
        await this.page1.locator(this.createLeadLocators.firstNameInput).fill("Kumar")
    }
    async enterLastName() {
        await this.page1.locator(this.createLeadLocators.lastNameInput).fill("S")
    }
    async enterPersonalTitle() {
        await this.page1.locator(this.createLeadLocators.personalTitleInput).fill("Mr")
    }
    async enterGeneralProfTitle() {
        await this.page1.locator(this.createLeadLocators.generalProfTitleInput).fill("Automation Tester")
    }
    async enterAnnualRevenue() {
        await this.page1.locator(this.createLeadLocators.annualRevenueInput).fill("500000")
    }
    async enterDepartmentName() {
        await this.page1.locator(this.createLeadLocators.departmentNameInput).fill("IT")
    }
    async enterPrimaryPhoneNumber() {
        await this.page1.locator(this.createLeadLocators.primaryPhoneNumberInput).fill("9876543210")
    }
}