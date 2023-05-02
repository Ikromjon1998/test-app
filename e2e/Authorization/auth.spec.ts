import { test, expect, chromium } from '@playwright/test';

// @ts-check
test('Login Page', async ({ page }) => {
    await page.goto('http://localhost/');
    await page.getByRole('link', { name: 'Log in' }).click();

    await expect(page).toHaveURL(/.*login/)
});

test('Dashboard', async ({ page }) => {
    await page.goto('http://localhost/dashboard');

    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password');
    await page.getByLabel('Password').press('Enter');

    await expect(page).toHaveURL(/.*dashboard/);

    await expect(page.getByText('You\'re logged in!')).toHaveText('You\'re logged in!');

});

test('Logout', async ({ page }) => {
    await page.goto('http://localhost/dashboard');

    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password');
    await page.getByLabel('Password').press('Enter');

    await page.getByRole('link', { name: 'Log out' }).click();

    await expect(page).toHaveURL(/localhost/);
});

