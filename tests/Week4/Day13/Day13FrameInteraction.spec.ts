import {expect, test} from "@playwright/test";


// Interact with frame using different methods
test("Interact with frame using URL", async({page}) =>{
  await page.goto("https://leafground.com/frame.xhtml");
  const frameurl = page.frame({url:"https://leafground.com/default.xhtml"})
  await frameurl?.locator('#Click').click();
  await page.waitForTimeout(5000);
});


// Interact with frame using name
test("Interact with frame using name", async({page}) =>{
  await page.goto("https://leafground.com/frame.xhtml");
  const framenames = page.frame({name:"frame2"})
  await framenames?.locator('#Click').click();
   /* ?. --> Optional Chaining
    It is a safety feature to avoid null pointer exception */
  await page.waitForTimeout(5000);  
});


// Interact with frame using frame Locartors Mostly used
test("Interact with frame using frame Locartors", async({page}) =>{
  await page.goto("https://leafground.com/frame.xhtml");
  const frameRefpage = page.frameLocator(`[src="default.xhtml"]`);
  await frameRefpage.locator('#Click').click();
  await page.waitForTimeout(5000);  
});


// Interact with nested frames
test("Interact with nested frames", async({page}) =>{
  await page.goto("https://leafground.com/frame.xhtml");
    const frame_Outerframe = page.frameLocator(`[src="page.xhtml"]`);
    const frame_Innerframe = frame_Outerframe.frameLocator(`[src="framebutton.xhtml"]`);
    const clickButton = frame_Innerframe.locator('#Click');
    await clickButton.click();
    const Actualtext = await clickButton.innerText();
    console.log(`The Actual text is: ${Actualtext}`);
    expect(Actualtext).toContain("Hurray! You Clicked Me.");
    const allFrames = page.frames();
    const frameCount = allFrames.length;
    console.log(`Total number of frames on this page is: ${frameCount}`);
    for (let frame of allFrames){
       const title = await frame.title();
         console.log(`The title of the frame is : ${title}`);
    }
});