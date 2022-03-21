import { test, expect } from '@playwright/test';

test.describe('practice', () => {
  test.only('test prices', async ({ page }) => {
    await page.goto(`https://lookbook2010.easy.co/`);
    await page.waitForTimeout(1000);
    const allProducts = await page.$$('.product_grid-item');
    await allProducts[0].click();
    await page.click('#AddToCart');
    await page.waitForTimeout(3000);
    const input = await page.$('#updates_32269887');
    await input?.fill('10');
    await page.click('.update-cart');
    const itemPriceText = await page.innerText('.one-third .h5');
    const itemTotalPrice = await page.innerText('.text-right .h5');
    expect(Number(itemPriceText.replace('TWD', '').replace(',', ''))).toBe(680);
    expect(Number(itemTotalPrice.replace('TWD', '').replace(',', ''))).toBe(680 * 10);
  });
});
