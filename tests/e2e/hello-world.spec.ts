import { test, expect } from '@playwright/test';

test('hello world functionality', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Adjust the URL as needed
    const helloWorldMessage = await page.locator('text=Hello World').isVisible();
    expect(helloWorldMessage).toBe(true);
});