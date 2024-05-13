const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const ViewProduct = require("../pageObjects/ViewProductPage");

const viewProduct = new ViewProduct();

When('the user has browsed to the products page', async function () {
    await page.locator(viewProduct.productsButtonSelector).click();
    await page.waitForURL(viewProduct.viewProductUrl);
    await expect(page).toHaveURL(viewProduct.viewProductUrl);
 });

Then('the user should see the products table', async function () {
    await expect(page.getByRole('heading', { name : 'Products' })).toBeVisible();
    await expect(page.locator(viewProduct.tableSelector)).toBeVisible();
});