import {test, expect } from '@playwright/test'
import { loadHomepage, assertTitle } from '../helpers'

test("Simple basic test", async ({ page }) =>{
    // Here goes the test code
    await page.goto('https://www.example.com')
    const pageTitle = await page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
})

test("Custom Helpers", async ({ page }) => {
    await loadHomepage(page)
    await assertTitle(page)
})