import { test, expect } from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe('Search Results', () => {
  test('Should find search results', async ({ page }) => {
  //  await page.goto('http://zero.webappsecurity.com/index.html')
    let homePage: HomePage
    homePage = new HomePage(page)
    await homePage.visit()
    await homePage.searchFor('bank')
//    await page.type('#searchTerm', 'bank')
//    await page.keyboard.press('Enter')

    const numberOfLinks = await page.locator('li > a')
    await expect(numberOfLinks).toHaveCount(2)
  })
})
