import {test , expect} from '@playwright/test';
import { Cred } from  '../../Interview/basic/enum';


test('Handle Input', async ({page}) =>{
    await page.goto(`https://practice.expandtesting.com/login`)
    // const username =  page.getByRole('textbox', { name: 'username'})
    // await username.fill(Cred.USERNAME)
    await page.getByRole('textbox' , { name : 'Username', exact : true}).fill(Cred.USERNAME);
    await page.getByRole('textbox' , { name: 'Password', exact: true}).fill(Cred.PASSWORD);
    await page.getByRole('button' , { name: 'Login', exact : true}).click();
    await page.waitForTimeout(6000)
})



