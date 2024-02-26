import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto'

test('opening site', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');

  await expect(page).toHaveTitle(/MERN Store/);
});

test('Wishlist test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');

  await page.getByRole('link', { name: 'Welcome!' }).click();
  await page.getByRole('menuitem', { name: 'Login' }).click();

  await expect(page).toHaveURL(/.login/);;

  await page.getByPlaceholder('Please Enter Your Email').first().click();
  await page.getByPlaceholder('Please Enter Your Email').first().fill(`baranovskyi.maksym@pdffiller.team`);
  await page.getByPlaceholder('Please Enter Your Password').fill(`123456`);
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/.dashboard/)

  await page.getByRole('link', { name: 'Shop' }).click();
  await page.locator('.add-wishlist-box').first().click();
  await page.getByRole('link', { name: 'Test' }).click();
  await page.getByRole('menuitem', { name: 'Dashboard' }).click();
  await page.getByRole('link', { name: 'Wishlist' }).click();
  //check that cherry tomatoes added in wishlist
  await expect(page.locator('.w-list')).toBeVisible();

//delete cherry tomatoes cause in new run test will remove it from wishlist by clicking again
  await page.locator('.remove-wishlist-box').click();
  
});