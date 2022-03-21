import { test, expect } from '@playwright/test';

test.describe('01-hello-world', () => {
  test('test url', async ({ page }) => {
    await page.goto(`https://blog.errorbaker.tw/`);
    await page.waitForTimeout(5000);

    expect(page.url().includes(`https://blog.errorbaker.tw/`)).toBeTruthy();
  });
});
