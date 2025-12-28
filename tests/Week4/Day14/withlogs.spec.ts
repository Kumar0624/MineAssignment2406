/* 
 # An alert is an application popup dialog box created using JavaScript function. 
 It cannot be inspected in the DOM and it cannot be ignored because it will block the interaction with the other element until it is handled.

 # why do we need to handle ?  it will block the interaction with the other element until it is handled.

 # Why Have alert ? Only once you accept that so you can use their application furthermore

 # if not handled you will not be able to move further

 # How to hanbdle ? Playwright provides an event driven approch to handle the alerts.

 # There are two alerts something called as Model and Non-Modal alerts.

    Model alerts : These are the alerts which are generated using JavaScript functions like 
    1. simple alert()
    2. confirm alert()
    3. prompt alert().

   Model Alerts Non Interactable alerts

   Non-Model alerts : These are the alerts which are generated using HTML tags like 
   1. <div>
   2. <span>
   3. <popup> etc.,  Sweet alert is one of the example for Non-Model alert.

   Non-Model Alerts Interactable alerts

 # simple alert() : It displays some message and requires acknowledgment.

 # confirm alert() : It displays some message and requires user to confirm or cancel the operation.

 # prompt alert() : It displays some message and requires user to input some text value and confirm or cancel the operation.

 DIfference between simple, confirm and prompt alert:
 
 # Simple alert have only one button OK

 # Confirm alert have two buttons OK and Cancel

 # Prompt alert have two buttons OK and Cancel along with text box to enter the value.
    
    */


import{test} from"@playwright/test";

test("Interact with alerts", async({page}) =>{

    page.goto("https://leafground.com/alert.xhtml");

    /*   So basically what playwright does , here all popups are basically clicked with your cancel button only.
    so by default it will click on cancel button.
    if You don't handle alert playwright is talking control to click on cancel button.

    To Handle alert we have to use "page.on" event listener given by playwright.

    Page means an event that specifi to this particular page only.

    on means you are going to on this particular listener.

    Page.on thing we have write after clicking the buootn or before clicking the button it doesn't matter.
    but it's a good practice to write before clicking the button so that you won't miss any alert.
    if you write after clicking the button there is a chance that you may miss the alert if alert comes very fast.
    So always you should have this listener before clicking the button which triggers the alert.

    If you dont listen will you be able to interact thats why we write this listener before clicking the button.

   */

     //page.once("dialog", async(alert) => {
     //page.once is used to handle single alert once in the entire test case
     page.on("dialog", async(alert) => {// Here alert is the reference variable for that particular alert popup

        const alertMessage = alert.message(); // to get the alert message

        console.log(`The alert message is: ${alertMessage}`);
        // or we can write like below
        /* console.log(`The alert message is: ${alert.message()}`); */

        const alertType = alert.type(); // to get the alert type: alert, confirm, prompt, beforeunload
        console.log(`The alert type is: ${alertType}`);
        //console.log(`The alert type is: ${alert.type()}`);
        
        await alert.accept(); // to accept the alert
        // await alert.dismiss(); // to dismiss the alert
        // await alert.accept("Text to be entered in prompt alert"); // to enter text in prompt alert and accept

    });

    page.locator(`(//span[text()="Show"])[1]`).click(); 
     await page.waitForTimeout(5000);  

     /* So Once you click it, it is going to capture that particular alert
   and put that alert in the listener  
    and then you can perform the actions on that alert using that alert reference. 
   */

    page.locator(`(//span[text()="Show"])[2]`).click();
     await page.waitForTimeout(5000); 

    page.locator(`(//span[text()="Show"])[5]`).click();
    await page.waitForTimeout(5000);  

})