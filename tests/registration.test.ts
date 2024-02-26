import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto'

test('opening site', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');

  await expect(page).toHaveTitle(/MERN Store/);
});

test('Register', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');

  
  await page.getByRole('link', { name: 'Welcome!' }).click();
  await page.getByRole('menuitem', { name: 'Sign Up' }).click();

  await expect(page).toHaveURL(/.register/);;

  await page.getByPlaceholder('Please Enter Your Email').first().click();
  await page.getByPlaceholder('Please Enter Your Email').first().fill(`baranovskyi.maksym+${randomUUID()}@pdffiller.team`);
  await page.getByPlaceholder('Please Enter Your First Name').fill(`Test`);
  await page.getByPlaceholder('Please Enter Your Last Name').fill(`Testov`);
  await page.getByPlaceholder('Please Enter Your Password').fill(`123456`);
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await expect(page).toHaveURL(/.dashboard/)
});
