import {test , expect} from '@playwright/test';

// 3 ways to handle frames
// 1. using frame URL page.frame({url:"https://leafground.com/default.xhtml"})
// 2. using frame name or id page.frame({name:"frame1"})
// 3. using frame locator page.frameLocator('iframe[src="https://leafground.com/default.xhtml"]')
// An iframe is a web page inside another web page.
// 👉 Playwright cannot directly access iframe elements using page.

test('handle frames', async ({page}) =>{
    await page.goto(`https://leafground.com/frame.xhtml`, {waitUntil : 'load'})
    // using frameLocator its preferred way to handle frames in playwright
    await page.frameLocator('[src="default.xhtml"]').getByRole('button', {name :'Click Me'}).click();
    // Handle nested frames
    await page.frameLocator('[src="page.xhtml"]').frameLocator('[src="framebutton.xhtml"]').getByRole('button', {name: "Click Me"}).click();
    await page.waitForTimeout(2000)
})

test('print all frames count and title', async ({page}) =>{
    await page.goto(`https://leafground.com/frame.xhtml`, {waitUntil : 'load'})
    const outerFrame = page.frameLocator('[src="page.xhtml"]');
    const innerFrame = outerFrame.frameLocator('[src="framebutton.xhtml"]');
    const childFrame = innerFrame.locator('#Click');
    await childFrame.click();
    const text = await childFrame.innerText();
    console.log(`The text inside the child frame is: ${text}`);
    expect(text).toContain("Hurray! You Clicked Me.");
    const allFrames = page.frames();
    for(let frame of allFrames){
        const title = await frame.title();
        console.log(`The title of the frame is: ${title}`);
    }         
})