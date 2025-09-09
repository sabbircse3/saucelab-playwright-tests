export async function waitAndClick(locator, timeout = 10000) {
  await locator.waitFor({ state: 'visible', timeout });
  await locator.click();
}

export async function fillForm(fields) {
  for (const [locator, value] of Object.entries(fields)) {
    await locator.fill(value);
  }
}
