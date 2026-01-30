import { test as baseTest } from '@playwright/test';
import { LoginPage } from '../POM/pages/1.login';
import { WelcomePage } from '../POM/pages/2.welcomePage';
import { Homepage } from '../POM/pages/3.homepage';
import { LeadPage } from '../POM/pages/4.leadPage';
import { CreateLead } from '../POM/pages/5.createLead';

type myFixtures = {
    lopfix: LoginPage; // we need to mention the type 
    wpfix: WelcomePage;
    hpfix: Homepage;
    lpfix: LeadPage;
    clpfix: CreateLead;
};

// lopfix will hold page fixture as well as the object created for LoginPage
export const test = baseTest.extend<myFixtures>({
    lopfix: async ({ page }, use) => {
        const lopobj = new LoginPage(page);
        await use(lopobj);
    },
    wpfix: async ({ page }, use) => {
        const welobj = new WelcomePage(page);
        await use(welobj);
    },
    hpfix: async ({ page }, use) => {
        const hpobj = new Homepage(page);
        await use(hpobj);
    },
    lpfix: async ({ page }, use) => {
        const lpobj = new LeadPage(page);
        await use(lpobj);
    },
    clpfix: async ({ page }, use) => {
        const clpobj = new CreateLead(page);
        await use(clpobj);
    }
});