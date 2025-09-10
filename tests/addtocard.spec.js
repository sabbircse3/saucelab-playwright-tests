import { test, expect } from '@playwright/test';
import { AddToCardPage } from '../pages/addtocard.js';

const storageState = 'storageState.json';
test.use({ storageState }); // reuse login session

test('Add specific products to cart', async ({ page }) => {
  const addToCard = new AddToCardPage(page);

  // Navigate directly to inventory page (session is already active)
  await page.goto('https://www.saucedemo.com/inventory.html');

  // Add 2 specific products
  await addToCard.addToCart('Sauce Labs Backpack');
  await addToCard.addToCart('Sauce Labs Bike Light');

  // Verify cart badge is visible
  await addToCard.verifyCartBadge();

  // Go to cart page and verify
  await addToCard.goToCart();
  const cartItems = page.locator('.inventory_item_name');
  await expect(cartItems).toContainText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
});
