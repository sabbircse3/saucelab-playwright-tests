// pages/CheckoutPage.js
export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = page.locator('[data-test="checkout"]');
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueBtn = page.locator('[data-test="continue"]');
  }

  // Method to perform checkout information entry
  async checkoutInfo(first, last, postal) {
    await this.checkoutBtn.click();
    await this.firstName.fill(first);
    await this.lastName.fill(last);
    await this.postalCode.fill(postal);
    await this.continueBtn.click();
  }
}
