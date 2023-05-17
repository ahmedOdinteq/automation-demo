// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.codecademy.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Learn to Code - for Free | Codecademy/);
});
