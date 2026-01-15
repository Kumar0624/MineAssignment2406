
import { WelcomePage } from "./welcomePage";

export class Homepage extends WelcomePage{

    async clcikHomepage(){
         await this.page1.locator(`//a[text()="Leads"]`).click()
   }
}