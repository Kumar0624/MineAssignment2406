import{test} from'@playwright/test';


test("interact with window handles sequential", async({page,context}) =>{
    await page.goto("https://www.flipkart.com/");
    const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`,{exact:true})
    await searchBox.fill("Phone");
    await searchBox.press("Enter")
    // so this is sequential execution
    const newPage = context.waitForEvent('page');
    await page.locator(`(//div[contains(text(),"POCO")])[1]`).click();
    const childPage = await newPage;
    console.log(`The parent page title is: ${await page.title()}`);
    console.log(`The title of the child page is: ${await childPage.title()}`);
    await page.bringToFront(); // is a method used to Bringing my parent page to the front
    await page.waitForTimeout(3000)
    await page.locator(`//span[text()="Electronics"]`).click();
    await  page.waitForTimeout(5000);
});




// in sequential maybe we get flakiness so that we can do concurrent execution
test("interact with window handles concurrent", async({page,context}) =>{ // here we are doing parallel execution
    console.log("Test started");
    await page.goto("https://www.flipkart.com/");
    const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`,{exact:true})
    await searchBox.fill("Phone");
    await searchBox.press("Enter");
    await page.waitForTimeout(3000);

    await Promise.all([ // Promise.all is a method which is going to wait for all the actions to complete
        context.waitForEvent('page'), // 
        page.locator(`(//div[contains(text(),"POCO")])[1]`).click()
    ]);
    const allPages =  context.pages() // pages() this is a method to basically capture the number of pages opened in the browser context
    console.log(`Total number of pages opened are: ${ allPages.length}`); // to get the total number of pages opened.
    console.log(`The title of the parent page is: ${await allPages[0].title()}`) //
    console.log(`The title of the child page is: ${await allPages[1].title()}`); // 
    const mobileAmount = allPages[1].locator(`(//div[contains(text(),"₹")])[1]`).innerText()
    console.log("The mobile Amount is "+ mobileAmount)
    await  page.waitForTimeout(5000);
});




test.only(`Handling Multiple pages`,async ({page,context}) => {
    
    await page.goto(`https://leafground.com/window.xhtml`);
    // Promise.all is a method which is going to wait for all the actions to complete
    await Promise.all([context.waitForEvent('page'),page.getByText(`Open Multiple`,{exact:true}).click()])

    const allPages = context.pages(); // pages() this is a method to basically capture the number of pages opened in the browser context

    allPages[0].waitForLoadState()

    allPages[1].waitForLoadState()

    console.log(allPages.length);

    console.log(await allPages[0].title());

    console.log(await allPages[1].title());

    console.log(await allPages[2].title());  
    
    await  page.waitForTimeout(5000);
    
 })