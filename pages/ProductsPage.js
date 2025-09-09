export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addMatchingItems() {
    const matchedNames = await this.page.$$eval('.inventory_item_name', elements =>
      elements
        .filter(el =>
          el.textContent.includes('Sauce Labs Backpack') ||
          el.textContent.includes('Sauce Labs Bolt T-Shirt') ||
          el.textContent.includes('Sauce Labs Onesie') ||
          el.textContent.includes('Sauce Labs Bike Light') ||
          el.textContent.includes('Sauce Labs Fleece Jacket') ||
          el.textContent.includes('Test.allTheThings() T-Shirt (Red)')
        )
        .map(el => el.textContent.trim())
    );

    const allItems = await this.items.all();
    for (const item of allItems) {
      const name = (await item.locator('.inventory_item_name').textContent()).trim();
      if (matchedNames.includes(name)) {
        await item.locator('button').click();
      }
    }
  }

  async goToCart() {
    await this.cartBadge.waitFor({ state: 'visible', timeout: 10000 });
    await this.cartBadge.click();
  }
}
