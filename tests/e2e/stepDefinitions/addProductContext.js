const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const AddProduct = require('../pageObjects/AddProductPage');

const addProduct = new AddProduct();

When('the user adds a product with the following details', async function (dataTable) {
  await addProduct.fillDetails(dataTable);
  await page.getByRole('button', { name: 'Save' }).click();
});

Then('the user should see a success message', async function () {
  await expect(page.locator(addProduct.toastSucessContainerSelector)).toBeVisible();
});

Then('the user should see the added product {string} in products page', async function (product) {
  const  productName = await addProduct.getProduct()
  await expect(productName).toHaveText(product);
});