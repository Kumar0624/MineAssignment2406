await page.goto(`https://www.makemytrip.com/`,{waitUntil: 'load'})

  await page.locator('//span[@class="commonModal__close"]').click()

  await page.locator('(//div[@class="tp-dt-header-icon"])[2]').click()

  const from = page.locator('//input[@id="fromCity"]')

  await from.click();

  await page.locator('//input[@placeholder="From"]').fill("chennai");

  await page.locator('//p[text()="Chennai International Airport"]').click()

  const to = page.locator('//input[@id="toCity"]')

  await to.click()

  await page.locator('//input[@placeholder="To"]').fill("delhi");

  await page.locator('//span[text()="New Delhi, India"]').click()

  await page.locator('//div[@aria-label="Wed Mar 04 2026"]').click()

  await page.locator('//a[text()="Search"]').click()

//  const price =  page.locator(`//span[contains(text(), '₹')]`)

//  const prices = await price.textContent()

//  console.log(prices)