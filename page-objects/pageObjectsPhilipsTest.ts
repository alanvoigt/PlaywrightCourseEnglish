import { ElementHandle, Locator, Page } from '@playwright/test';

export class PageObject {
  protected page: Page | undefined;

  setPage(aPage: Page): void {
    this.page = aPage;
  }

  async findElements(selector: string): Promise<ElementHandle[] | undefined> {
    return await this.page?.$$(selector);
  }

}
