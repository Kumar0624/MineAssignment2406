import{test} from"@playwright/test";

test("Interact with alerts", async({page}) =>{

    page.goto("https://leafground.com/alert.xhtml");

     page.on("dialog", async(alert) => {// Here alert is the reference variable for that particular alert popup
        console.log(`The alert message is: ${alert.message()}`); 
        console.log(`The alert type is: ${alert.type()}`);
        if(alert.type() === "confirm"){
            await alert.accept(); 
        } else if(alert.type() === "prompt"){
            await alert.accept("Kumar M"); // to enter text in prompt alert and accept
        } else{
            await alert.dismiss(); // to dismiss the alert    
        }   
    });

    page.locator(`(//span[text()="Show"])[1]`).click(); 
     await page.waitForTimeout(4000);  
        /* So Once you click it, it is going to capture that particular alert*/
    page.locator(`(//span[text()="Show"])[2]`).click();
     await page.waitForTimeout(4000); 

    page.locator(`(//span[text()="Show"])[5]`).click();
     await page.waitForTimeout(3000);  

})