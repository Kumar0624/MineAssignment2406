import {test} from"@playwright/test";


test("interact with window handles", async({page, context}) =>{

    await page.goto("https://leafground.com/window.xhtml"); 

    const newPage = await context.waitForEvent("page"); // to wait for new page to open

    await page.locator(`#home`).click(); // clicking on open home page button

    const childpage = await newPage; // to wait for the new page to load completely
    console.log(`The title of the child page is: ${await childpage.title()}`);
    
    /* Page is parent page reference
    newPage is the new page reference */

}); // Frame and Alert interactions completed successfully