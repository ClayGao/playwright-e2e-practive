import { test, expect } from '@playwright/test';

test.describe('02-addToCart', () => {
  test('test add to cart', async ({ page }) => {
    await page.goto(`https://lookbook2010.easy.co/`);
    await page.waitForTimeout(1000);
    const allProducts = await page.$$('.product_grid-item');
    await allProducts[0].click();
    await page.click('#AddToCart');
    await page.waitForTimeout(3000);
    // await page.click('#AddToCart');
    // await page.waitForTimeout(3000);
    const cartItems = await page.$$('.cart__row--table-large');

    expect(cartItems.length).toBe(2);
    expect(cartItems.length).not.toBe(1);
    expect(cartItems.length).not.toBe(3);
  });
});
