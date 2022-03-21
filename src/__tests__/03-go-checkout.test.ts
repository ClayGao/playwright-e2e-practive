import { test, expect } from '@playwright/test';

test.describe('03-adjust qty and go checkout', () => {
  test('test qty and go checkout', async ({ page }) => {
    await page.goto(`https://lookbook2010.easy.co/`);
    await page.waitForTimeout(1000);
    const allProducts = await page.$$('.product_grid-item');
    await allProducts[0].click();
    await page.click('#AddToCart');
    await page.waitForTimeout(3000);
    const input = await page.$('#updates_32269887');
    await input?.fill('10');
    await page.click('.checkout');
    const checkoutItemQty = await page.innerText('.prod-thumbnail-qty');
    expect(checkoutItemQty).toBe('10');
    expect(checkoutItemQty).not.toBe('1');
  });
});
