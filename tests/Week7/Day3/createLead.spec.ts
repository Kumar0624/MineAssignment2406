import { test } from '@playwright/test';
import { LoginPage } from "../../../pages/login";
import { WelcomePage } from '../../../pages/welcomePage';
import { Homepage } from '../../../pages/Homepage';

test(`Create a Lead in TestLeaf CRM`, async ({page}) =>{
    const welcomepage = new Homepage(page);
    await welcomepage.launchBrowser("http://leaftaps.com/opentaps/control/main");
    await welcomepage.enterUsername();
    await welcomepage.enterPassword();
    await welcomepage.clickLogin();
    await welcomepage.clcikWelcomePage();
    await welcomepage.clcikHomepage();
    await welcomepage.closeBrowser();
});