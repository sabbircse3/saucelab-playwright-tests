export class ProductSortPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test="product_sort_container"]').first();
    this.productNames = page.locator('.inventory_item_name');
  }

  // Wait until the sort dropdown is visible
  async waitForDropdown() {
    await this.sortDropdown.waitFor({ state: 'visible', timeout: 20000 });
  }

  // Sort products using dropdown: "az" or "za"
  async sortProducts(option) {
    await this.waitForDropdown();
    await this.sortDropdown.selectOption(option);
  }

  // Get all product names currently displayed
  async getProductNames() {
    await this.waitForDropdown();
    return this.productNames.allTextContents();
  }
}
