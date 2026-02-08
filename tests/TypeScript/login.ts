
import { Page, expect } from '@playwright/test';

export async function login(page: Page,  username: string,  password: string): Promise<void> {

  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#loginButton');

  await page.waitForSelector('#welcomeMessage');
  await expect(page.locator('#welcomeMessage')).toHaveText(`Welcome, ${username}`);
}


 
