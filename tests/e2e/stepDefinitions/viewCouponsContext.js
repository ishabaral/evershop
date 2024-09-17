const {Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const { ViewCouponsPage } = require('../pageObjects/ViewCouponsPage');

const viewCouponsPage = new ViewCouponsPage();

Given(
  'user {string} has navigated to the admin login page',
  async function (string) {
    await viewCouponsPage.navigateToLoginPage();
    expect(page.url()).toBe('http://localhost:3000/admin/login');
  }
);

When(
  'user {string} login with following credentials',
  async function (string, dataTable) {
    const credentials = dataTable.hashes();
    await viewCouponsPage.fillLoginInputFields(credentials);
    await viewCouponsPage.clickLoginBtn();
  }
);

When('user {string} navigates to coupons page', async function (string) {
  await viewCouponsPage.navigateToCouponsPage();
});

Then('user {string} should view the coupons table', async function (string) {
  await expect(
    page.locator(viewCouponsPage.couponsTableSelector)
  ).toBeVisible();
});
