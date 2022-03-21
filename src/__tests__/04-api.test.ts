import { test, expect } from '@playwright/test';

test('testing api', async ({ request }) => {
  const result = await request.get(`https://lidemy-book-store.herokuapp.com/books`);

  const data = await result.json();
  expect(result.ok()).toBeTruthy();
  expect(data.length).toBe(20);
  expect(data.length).not.toBe(21);
  expect(data.length).not.toBe(19);
});
