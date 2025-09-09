import { LoginPage } from '../pages/LoginPage.js';

export async function loginAs(page, username, password, saveState = false) {
  const login = new LoginPage(page);
  await login.login(username, password);

  await page.locator('.title').waitFor({ state: 'visible' });

  if (saveState) {
    await page.context().storageState({ path: 'storageState.json' });
  }
}
