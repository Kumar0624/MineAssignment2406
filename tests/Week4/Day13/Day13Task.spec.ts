import { test, expect } from '@playwright/test';

// For nested frames we need to handle outer frame first and then by taking its reference  we can handle inner/nested frame
test("Interact with nested frames", async({page}) =>{
  await page.goto("https://leafground.com/frame.xhtml");
    const frame_Outerframe = page.frameLocator(`[src="page.xhtml"]`);
    const frame_Innerframe = frame_Outerframe.frameLocator(`[src="framebutton.xhtml"]`);
    const clickButton = frame_Innerframe.locator('#Click');
    await clickButton.click();
    const Actualtext = await clickButton.innerText();
    console.log(`The Actual text is: ${Actualtext}`);
    expect(Actualtext).toContain("Hurray! You Clicked Me.");
    // Get the title of the frame
    const allFrames = page.frames();
    const frameCount = allFrames.length;
    console.log(`Total number of frames on this page is: ${frameCount}`);
    for (let frame of allFrames){
       const title = await frame.title();
         console.log(`The title of the frame is : ${title}`);
    }
});