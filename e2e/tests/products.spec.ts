import { test } from "@playwright/test";
import { ProductsPage } from "@pages/products.page";

test("the cart starts empty", async ({ page }) => {
  const products = new ProductsPage(page);
  await products.goto();
  await products.expectCartCount(0);
});
