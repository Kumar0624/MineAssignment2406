import { test } from '@playwright/test';

test("Count and print frame titles", async ({ page }) => {

   // Print the total number of frames on the page and their titles

    await page.goto(`https://leafground.com/frame.xhtml`);
    const allFrames = page.frames();   
    /* console.log(allFrames);//prints the frame details in the console */
    const framecount = allFrames.length;
    console.log(`Total number of frames on this page is: ${framecount}`);

    // Using for loop
    for(let i=0; i<framecount; i++){
       const frameTitle = await allFrames[i].title();
       console.log(`The title of the frames are : ${frameTitle}`);
    }   

    // Using for..of loop
    for (let frame of allFrames){
       const frameTitle = await frame.title();
       console.log(`The title of the frame using for..of loop is : ${frameTitle}`);
    }

    // Using forEach loop
    allFrames.forEach( async (frame)  => {
       const frameTitle = await frame.title();
       console.log(`The title of the frame using forEach loop is : ${frameTitle}`);
    });
    await page.waitForTimeout(3000);

})

