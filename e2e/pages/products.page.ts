import { Page, Locator, expect } from "@playwright/test";

/** The product catalogue. NOTE: there is intentionally no "add product X" helper — many products share an
 *  identical "Add" button, so a test that adds a specific product must locate it by its row's unique name. */
export class ProductsPage {
  readonly cartCount: Locator;

  constructor(private readonly page: Page) {
    this.cartCount = page.locator("#cart .count");
  }

  async goto(): Promise<void> {
    await this.page.goto("/");
  }

  async expectCartCount(count: number): Promise<void> {
    await expect(this.cartCount).toHaveText(String(count));
  }
}
