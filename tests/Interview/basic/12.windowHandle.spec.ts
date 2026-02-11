
import {test} from '@playwright/test';

test(`Handling Multiple pages`,async ({page,context}) => {
    await page.goto(`https://leafground.com/window.xhtml`);
    // Promise.all is a method which is going to wait for all the actions to complete
    await Promise.all([context.waitForEvent('page'),page.getByText(`Open Multiple`,{exact:true}).click()])
    // pages() this is a method to basically capture the number of pages opened in the browser context
    const allPages = context.pages(); 
    allPages[0].waitForLoadState()
    allPages[1].waitForLoadState()
    allPages[2].waitForLoadState()
    // to get length of the pages opened
    console.log(allPages.length);
    // to get the title of the pages opened
    console.log(await allPages[0].title());
    console.log(await allPages[1].title());
    console.log(await allPages[2].title());  
    // to perform some action on the child page
    //await allPages[1].locator(`//h5[text()="Alert"]`).click();
    // to bring the parent page to the front
    await allPages[0].bringToFront();     
    await  page.waitForTimeout(5000);  
 })