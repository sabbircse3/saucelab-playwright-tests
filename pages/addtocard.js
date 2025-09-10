export class AddToCardPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  // Add a specific product by name
  async addToCart(itemName) {
    const product = this.page.locator('.inventory_item').filter({
      hasText: itemName,
    });

    await product.locator('button').click();
  }

  // Verify product added by checking cart badge
  async verifyCartBadge() {
    await this.cartBadge.waitFor({ state: 'visible', timeout: 15000 });
  }

  // Go to cart page
  async goToCart() {
    await this.cartBadge.click();
  }
}
