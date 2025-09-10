import { test, expect } from '@playwright/test';
import { ProductSortPage } from '../pages/productsortA-ZandZ-A.js';

const storageState = 'storageState.json';
test.use({ storageState });

test('Sort products A-Z and Z-A using saved session', async ({ page }) => {
  // Go to inventory page
  await page.goto('https://www.saucedemo.com/inventory.html', { waitUntil: 'networkidle' });

  const productSort = new ProductSortPage(page);

  // Sort A-Z
  await productSort.sortProducts('az');
  const namesAZ = await productSort.getProductNames();
  const sortedAZ = [...namesAZ].sort((a, b) => a.localeCompare(b));
  await expect(namesAZ).toEqual(sortedAZ);

  // Sort Z-A
  await productSort.sortProducts('za');
  const namesZA = await productSort.getProductNames();
  const sortedZA = [...namesZA].sort((a, b) => b.localeCompare(a));
  await expect(namesZA).toEqual(sortedZA);
});
