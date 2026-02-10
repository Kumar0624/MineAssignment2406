import {test , expect} from '@playwright/test';

test('handle dropdown', async ({page}) =>{
    await page.goto(`https://practice.expandtesting.com/dropdown`,{waitUntil: 'load'})
    // await page.locator('#dropdown').selectOption({label:"Option 2", value:"option2", index: 0}) // multiselect dropdown
    await page.selectOption('#dropdown', {value:"2"})
    await page.selectOption('#elementsPerPageSelect', {index: 3})
    await page.selectOption('#country', {label:"India"})
    await page.waitForTimeout(2000)
    // Another way to handle dropdown
    await page.goto(`https://seleniumpractise.blogspot.com/2016/08/bootstrap-dropdown-example-for-selenium.html#`,{waitUntil: 'load'})
    await page.getByRole('button', { name:"Tutorials"}).click()
    await page.getByText('JavaScript').click()
    await page.waitForTimeout(2000)
    // multiple select dropdown
    await page.goto(`https://www.tutorialspoint.com/selenium/practice/select-menu.php`,{waitUntil: 'load'})
    await page.locator('span').nth(2).click();
    //await page.locator('//input[@id="demo-multiple-select-input"]').click()
    await page.getByRole('option', { name: 'Books' }).click()
    await page.getByRole('option', { name: 'Movies, Music & Games' }).click()
    await page.waitForTimeout(2000)  
})


test('print dropdown values', async ({page}) =>{
    await page.goto(`https://leafground.com/select.xhtml`, {waitUntil: 'load'})
    await page.selectOption('select[class="ui-selectonemenu"]', {label :"Playwright"});
    console.log("DropDown Selected");
    const allOptions =  page.locator('select[class="ui-selectonemenu"]>option')
    const count = await allOptions.count();
    console.log(`Number Of DropDown Count ${count}`);
        for(let i=0;i<count;i++){
            const optionText = await allOptions.nth(i).innerText();
            console.log(`Dropdown Values are :  ${optionText}`); 
        }        
    await page.waitForTimeout(2000)  
})