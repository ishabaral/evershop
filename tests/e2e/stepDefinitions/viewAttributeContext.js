const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ViewAttributePage } = require('../pageObjects/ViewAttributePage');

const viewAttributePage = new ViewAttributePage();

Given(
  'user {string} has navigated to the admin login page',
  async function (string) {
    await viewAttributePage.navigateToLoginPage();
    expect(page.url()).toBe('http://localhost:3000/admin/login');
  }
);

Given(
  'user {string} login with following credentials',
  async function (string, dataTable) {
    const credentials = dataTable.hashes();
    await viewAttributePage.fillLoginInputFields(credentials);
    await viewAttributePage.clickLoginBtn();
  }
);

When('user {string} navigates to attributes page', async function (string) {
  await viewAttributePage.navigateToAttribute();
});

Then('user {string} should view the attributes table', async function (string) {
  await expect(page.locator(viewAttributePage.tableSelector)).toBeVisible();
});
