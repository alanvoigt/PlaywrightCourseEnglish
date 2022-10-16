import { test, expect } from '@playwright/test'
import { PageObject } from '../../page-objects/pageObjectsPhilipsTest'

test.describe('Feedback Form', () => {

test.skip("Mouse movement", async ({ page }) =>{
    await page.goto('https://www.example.com')
    await page.waitForTimeout(3000)
    await page.mouse.move(0, 0)
    await page.waitForTimeout(3000)
    await page.mouse.down()
    await page.waitForTimeout(3000)
    await page.mouse.move(300, 100)
    await page.waitForTimeout(3000)
    await page.mouse.up()
    await page.waitForTimeout(3000)
})

// Philips testes
test("Mouse movements", async ({ page }) => {
    let pageObject: PageObject
    pageObject = new PageObject
    await page.goto('http://zero.webappsecurity.com/login.html') 
  //  const elements = (await page.$$('#user_login'))
  const elements = (await page.$('.control-label'))
    //   return await this.page?.$$(selector);
    console.log(elements.textContent)
})
})