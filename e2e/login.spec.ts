import { test, expect } from '@playwright/test';


// @ts-check
test('Login Page', async ({ page }) => {
    await page.goto('http://localhost/');
    const locator = page.locator('a');

    await expect(page).toHaveURL(/.*login/)
});


test('Dushboard', async ({ page }) => {
    await page.goto('http://localhost/login');

    await expect(page).toHaveURL(/.*login/);

    // Fill the form.
    await page.fill('input[name="username"]', 'test@example.com');
    await page.fill('input[name="password"]', 'password');

    // Click the submit button.
    await page.click('button[type="submit"]');
    
    // Expects redirect to dashboard.
    await expect(page).toHaveURL(/.*dashboard/);
});