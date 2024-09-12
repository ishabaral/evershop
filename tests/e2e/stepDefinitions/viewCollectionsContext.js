const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { ViewCollectionPage } = require('../pageObjects/ViewCollectionPage');

const viewCollectionPage = new ViewCollectionPage();

Given(
  'user {string} has navigated to the admin login page',
  async function (string) {
    await viewCollectionPage.navigateToLoginPage();
  }
);

Given(
  'user {string} login with following credentials',
  async function (string, dataTable) {
    const credentials = dataTable.hashes();
    await viewCollectionPage.fillLoginInputFields(credentials);
    await viewCollectionPage.clickLoginBtn();
  }
);

When('user {string} navigates to collections page', async function (string) {
  await viewCollectionPage.navigateToCollections();
});

Then(
  'user {string} should view the collections table',
  async function (string) {
    await expect(page.locator(viewCollectionPage.tableSelector)).toBeVisible();
  }
);
