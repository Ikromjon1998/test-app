import {test, expect, chromium, Browser, BrowserContext} from "@playwright/test";
import { config } from "dotenv";
import * as path from "path";

config({path: path.resolve(__dirname, '../../.env')});

test.describe.configure({ mode: 'parallel' });

let browser:Browser;
let context:BrowserContext;
let page;

const password = process.env.PASSWORD;
const username = process.env.USERNAME;
const baseUrl = process.env.BASE_URL;

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext({ headless: true });
    page = await context.newPage();
    await page.goto('https://care-stage.iubh.de');
    await page.getByPlaceholder('Benutzername').fill(username);
    await page.getByRole('textbox', { name: 'Passwort' }).fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
});

test('Update Vorname to the Anastasiya', async ({ browser }) => {
    await page.waitForTimeout(3000);
    await page.goto(baseUrl);

    const iframeMain = page.frameLocator('iframe[name="main"]');
    const iframeToolbar = page.frameLocator('iframe[name="toolbar"]');

    await iframeMain.locator('input#vorname').fill('Anastasia');
    await iframeToolbar.locator('a').getByText('Speichern').click();
    await expect(iframeMain.locator('input#vorname')).toHaveValue('Anastasia');

    context.close();
});

test('Update Vorname to the Anita', async ({ browser }) => {
    await page.waitForTimeout(3000);
    await page.goto(baseUrl);

    const iframeMain = page.frameLocator('iframe[name="main"]');
    const iframeToolbar = page.frameLocator('iframe[name="toolbar"]');

    await iframeMain.locator('input#vorname').fill('Anita');
    await iframeToolbar.locator('a').getByText('Speichern').click();
    await expect(iframeMain.locator('input#vorname')).toHaveValue('Anita');

    context.close();
});
