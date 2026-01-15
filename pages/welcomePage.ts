import { LoginPage } from "./login";



export class WelcomePage extends LoginPage{

    async clcikWelcomePage(){
         await this.page1.locator(`//div[@id='button']/a`).click()
   } 
}