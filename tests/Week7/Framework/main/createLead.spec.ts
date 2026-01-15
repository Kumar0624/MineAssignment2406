import { test } from "../Utility/customFixture";

test(`Create a Lead in TestLeaf CRM`, async ({ lopfix, wpfix, hpfix, lpfix, clpfix, page }) => {
    await lopfix.launchBrowser("http://leaftaps.com/opentaps/control/main");
    await lopfix.enterUsername();
    await lopfix.enterPassword();
    await lopfix.clickLogin();
    console.log(`page title is : ${await page.title()}`);
    await wpfix.clickWelcomePage();
    await hpfix.clickHomepage();
    await lpfix.createLead();
    await clpfix.enterCompanyName();
    await clpfix.enterFirstName();
    await clpfix.enterLastName();
    await clpfix.enterPersonalTitle();
    await clpfix.enterGeneralProfTitle();
    await clpfix.enterAnnualRevenue();
    await clpfix.enterDepartmentName();
    await clpfix.enterPrimaryPhoneNumber();
    await page.waitForTimeout(5000);
});