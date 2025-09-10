import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

const storageState = 'storageState.json';
test.use({ storageState }); // reuse valid session

test('Checkout flow using saved session', async ({ page }) => {
  const products = new ProductsPage(page);
  const checkout = new CheckoutPage(page);

  // navigate to products page
  await page.goto('https://www.saucedemo.com/inventory.html');

  // add selected items to cart
  await products.addMatchingItems();

  // wait until cart badge is visible (increase timeout)
  await products.cartBadge.waitFor({ state: 'visible', timeout: 15000  });

  // click on cart badge
  await products.goToCart();

  // verify cart page
  await expect(page.locator('.title')).toHaveText('Your Cart');

  // fill checkout info and continue
  await checkout.checkoutInfo('Sabbir', 'Hasan', '12345');

  // verify checkout overview page
  await expect(page.locator('.title')).toHaveText('Checkout: Overview');
});
