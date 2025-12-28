import {expect, test} from "@playwright/test";

test("Alert & Frame Interactions", async({page}) => {

    page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
    page.on("dialog", async(dialog) => {
        console.log(`Alert message is: ${dialog.message()}`);
        console.log(`Alert type is: ${dialog.type()}`);
        await dialog.accept(); 
    });
    const frame = page.frameLocator("#iframeResult");
    await frame.locator("//button[text()='Try it']").click();
    const demoText = frame.locator("//p[@id='demo']");
    await expect(demoText).toContainText("You pressed OK!");
    // await expect(frame.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
    console.log("Alert handled and verified successfully");
    console.log("Test completed successfully");
    await page.waitForTimeout(3000); 
});