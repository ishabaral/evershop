const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { OrdersPage } = require('../pageObjects/OrdersPage');

const ordersPage = new OrdersPage();

Given(
  'user {string} has navigated to the admin login page',
  async function (string) {
    await ordersPage.navigateToLoginPage();
    expect(page.url()).toBe('http://localhost:3000/admin/login');
  }
);

Given(
  'user {string} login with following credentials',
  async function (string, dataTable) {
    const credentials = dataTable.hashes();
    await ordersPage.fillLoginInputFields(credentials);
    await ordersPage.clickLoginBtn();
  }
);

When('user {string} navigates to orders page', async function (string) {
  await ordersPage.navigateToOrdersPage();
});

Then('user {string} should view the orders table', async function (string) {
  await expect(page.locator(ordersPage.tableSelector)).toBeVisible();
});
