// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  // Method to perform login
  async login(username, password) {
    await this.page.goto('https://www.saucedemo.com/');
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  // Method to get error message text
  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }
}
