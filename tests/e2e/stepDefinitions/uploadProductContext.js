const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const UploadProduct = require('../pageObjects/UploadProductPage');
const uploadFile = require('../utils/fileHelper');

const uploadproduct = new UploadProduct();

Given('the user has browsed to the add new product page', async function () {
  await page.getByRole('link', { name : 'New Product'}).click();
  await expect(page).toHaveURL(uploadproduct.addProductPageUrl);
});

When('the user uploads file {string}', async function (fileName) {
  const uploadIcon = await uploadproduct.navigateToUploadIcon();
  await expect(uploadIcon).toBeVisible();
  await uploadFile(fileName);
});

Then('the user should see the preview of file {string}', async function (string) {
  await page.waitForSelector(uploadproduct.imageSelector);
  const locator = await page.locator(uploadproduct.imageSelector);
  await expect(locator).toBeVisible();
});

Then('the user should see the next file upload option', async function () {
  const locator = await page.locator(uploadproduct.uploadIconSelector);
  await expect(locator).toBeVisible();
});

Then('the user should see a warning', async function () {
  const locator = await page.locator(uploadproduct.toastErrorContainerSelector);
  await expect(locator).toBeVisible();
});

Then('the user should not see the preview of file {string}', async function (string) {
  const locator = await page.locator(uploadproduct.imageSelector);
  await expect(locator).not.toBeVisible();
});