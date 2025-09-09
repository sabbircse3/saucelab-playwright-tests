import { test, expect } from '@playwright/test';
import { loginAs } from '../helpers/loginHelper.js';
import { LoginPage } from '../pages/LoginPage.js';

test('Valid login using helper', async ({ page }) => {
  await loginAs(page, 'standard_user', 'secret_sauce', true);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('Invalid login shows error message', async ({ page }) => {
  const login = new LoginPage(page);
  await login.login('standard_user', 'wrong_password');
  const msg = await login.getErrorMessage();
  expect(msg).toBe(
    'Epic sadface: Username and password do not match any user in this service'
  );
});
