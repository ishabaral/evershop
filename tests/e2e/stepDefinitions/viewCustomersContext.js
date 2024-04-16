const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ViewCustomerPage } = require('../pageObjects/ViewCustomerPage');

const viewCustomerPage = new ViewCustomerPage();

Given(
  'user {string} has navigated to the admin login page',
  async function (string) {
    await viewCustomerPage.navigateToLoginPage();
    expect(page.url()).toBe('http://localhost:3000/admin/login');
  }
);

Given(
  'user {string} login with following credentials',
  async function (string, dataTable) {
    const credentials = dataTable.hashes();
    await viewCustomerPage.fillLoginInputFields(credentials);
    await viewCustomerPage.clickLoginBtn();
  }
);

When('user {string} navigates to customers page', async function (string) {
  await viewCustomerPage.navigateToCustomerPage();
});

Then('user {string} should view the customers table', async function (string) {
  await expect(page.locator(viewCustomerPage.tableSelector)).toBeVisible();
});
