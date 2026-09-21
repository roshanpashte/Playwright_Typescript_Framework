import { test as setup, expect } from '@playwright/test';
import { ENV } from '../config/env';

const authFile = 'playwright/.auth/user.json';

setup('Authenticate SauceDemo', async ({ page }) => {

  await page.goto('/');

  await page.locator('#user-name').fill(ENV.USERNAME);
  await page.locator('#password').fill(ENV.PASSWORD);
  await page.locator('#login-button').click();

  await expect(page).toHaveTitle('Swag Labs');

  await page.context().storageState({
    path: authFile,
  });
});