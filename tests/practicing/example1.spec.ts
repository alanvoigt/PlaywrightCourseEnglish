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


test("Validate operators", async ({ page }) => {
   const flagstate = 'enabled'   
   const enabled = 'enabled' 
   const state = String(flagstate === 'enabled');
   console.log(state);
})

test.only("Validate operators1", async ({ page }) => {
    const test = await setFeatureFlagState();
 })
})

async function setFeatureFlagState() {
    const flagName = 'Flag name'   
    const flagState = 'Flag state' 
      console.log(`Setting flag ${flagName} with state ${flagState}`);
      await WaitingUtilities.waitUntil(
        async () => {
          const response = await axios.post(
            `${UnleashUrlService}/UnleashApi?toggleName=${flagName}&toggleEnvironment=default&toggleState=${state}`,
            ''
          );
          console.log('unleash service response: ' + response.status);
          return response.status === 200;
        },
        10,
        10
      );
      // wait to propagate the new status on Unleash Server
      await WaitingUtilities.delay(5000);
  }

  static async waitUntil(condition: WaitingCondition, maxRetries = 30, interval = 1): Promise<void> {
    await this.waitUntilCondition(condition, maxRetries, interval);
  }

  private static async waitUntilCondition(
    condition: WaitingCondition,
    maxRetries: number,
    intervalInSeconds: number
  ): Promise<void> {
    let retryCount = 0;
    let outcome = await condition().catch(() => false);
    const sleepTime = intervalInSeconds * 1000;
    while (!outcome && retryCount < maxRetries) {
      await this.delay(sleepTime);
      outcome = await condition().catch(() => false);
      retryCount++;
    }
    if (!outcome) {
      throw new Error();
    }
  }