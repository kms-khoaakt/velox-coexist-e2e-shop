// @tms SHOP-1
import { ProductsPage } from '../pages/products.page';

await step('Open the products page', async () => {
  const products = new ProductsPage(page);
  await products.goto();
  await page.waitForLoadState('networkidle').catch(() => {});
});

await step('Add the product named "Widget 7" to the cart', async () => {
  await page.locator('div', { hasText: process.env.PRODUCT_NAME! }).filter({ hasText: /^\s*Widget 7\s/ }).locator('button', { hasText: 'Add' }).click();
});

await step('Verify the cart shows 1 item', async () => {
  const products = new ProductsPage(page);
  await products.expectCartCount(1);
});