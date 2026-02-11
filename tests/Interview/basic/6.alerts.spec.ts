/* # There are two alerts something called as Model and Non-Modal alerts.

    Model alerts : These are the alerts which are generated using JavaScript functions like 
    1. simple alert()
    2. confirm alert()
    3. prompt alert().

   Model Alerts Non Interactable alerts */

  /*  # Non-Model alerts : These are the alerts which are generated using HTML tags like 
   1. <div>
   2. <span>
   3. <popup> etc.,  Sweet alert is one of the example for Non-Model alert.

   Non-Model Alerts Interactable alerts
 */

    // To Handle alert we have to use "page.on" event listener given by playwright. 

import{test} from"@playwright/test";

test("Interact with alerts", async({page}) =>{ 
    await page.goto("https://leafground.com/alert.xhtml");
    // 
     page.on("dialog",async(alert) =>{
        console.log(`The alert message is: ${alert.message()}`);
        console.log(`The alert type is: ${alert.type()}`);

        if(alert.type() === "confirm"){
            await alert.accept();
        } else if(alert.type() === "prompt"){
            await alert.accept("Kumar M");
        } else{
            await alert.dismiss();
        }
     })
     await page.locator('(//span[text()="Show"])[1]').click();
     await page.locator('(//span[text()="Show"])[2]').click();
     await page.locator('(//span[text()="Show"])[5]').click();
     await page.screenshot({ path: 'screenshots/fullpage.png' });
     await page.waitForTimeout(2000);

})