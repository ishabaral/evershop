const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { OrdersPage } = require('../pageObjects/ordersPage');

const ordersPage = new OrdersPage();

When('user {string} navigates to orders page', async function (string) {
  await ordersPage.navigateToOrdersPage();
});

Then('user {string} should view the orders table', async function (string) {
  await ordersPage.checkForTable();
});