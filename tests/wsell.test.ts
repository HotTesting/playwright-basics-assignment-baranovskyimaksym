import { test, expect } from '@playwright/test';
import { randomUUID } from 'node:crypto'

test('open', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');

  await expect(page).toHaveTitle(/MERN Store/);
});

test('Register sell', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');

 
  await page.getByPlaceholder('Your Full Name').fill(`QA`);
  await page.getByPlaceholder('Your Email Address').fill(`baranovskyi.maksym+${randomUUID()}@pdffiller.team`);
  await page.getByPlaceholder('Your Phone Number').fill(`0505555555`);
  await page.getByPlaceholder('Your Business Brand').fill(`Some test brand`);
  await page.getByPlaceholder('Please Describe Your Business').fill(`Some test area`)
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page).toHaveURL(/.sell/)

  
});