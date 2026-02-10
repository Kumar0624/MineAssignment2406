import {test} from '@playwright/test';

test('Handle Multiple types of Dropdowns', async ({page}) => {
    await page.goto('https://leafground.com/select.xhtml')  

    await page.selectOption(`select[class="ui-selectonemenu"]`,{label:`Playwright`})  

    const favoriteAutomationTool = page.locator(`select[class="ui-selectonemenu"]>option`)
    const count = await favoriteAutomationTool.count()

    console.log("The total number of favoriteAutomationTool dropdown options are: "+count);
    
    for(let i=0;i<count;i++){
      const favoriteAutomationToolDropdowntext =  await favoriteAutomationTool.nth(i).innerText()
      console.log("The favoriteAutomationTool dropdown options are: "+favoriteAutomationToolDropdowntext);
    }

    await page.locator(`//label[contains(text(),"Select Country")]`).click()
    await page.locator(`//li[contains(text(),"India")]`).click()
    await page.locator(`//button[contains(@class,"ui-autocomplete-dropdown")]`).click()
    await page.locator(`//li[contains(text(),'Playwright')]`).click()
    await page.locator(`//button[contains(@class,"ui-autocomplete-dropdown")]`).click()
    await page.locator(`//li[contains(text(),'Selenium')]`).click()
    await page.locator(`//button[contains(@class,"ui-autocomplete-dropdown")]`).click()
    await page.locator(`//li[contains(text(),'PostMan')]`).click()
    await page.locator(`//label[contains(text(),'Select Language')]`).click()
    await page.locator(`//li[contains(text(),'Tamil')]`).click()

    const languages = page.locator(`select[id="j_idt87:lang_input"]>option`)

    const countlanguages = await languages.count()
    console.log("The total number of dropdowns languages are: "+countlanguages);
    for(let i=0;i<countlanguages;i++){
    const languageText = await languages.nth(i).innerText()
    console.log("Language dropdown option are: "+languageText);
    }
    await page.locator(`//label[contains(text(),'Select Values')]`).click()
    await page.locator(`//li[contains(text(),'ஒன்று')]`).click()
    await page.waitForTimeout(5000);
});