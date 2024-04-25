const { When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const { ViewCouponsPage } = require('../pageObjects/ViewCouponsPage');
const { AddCouponPage } = require('../pageObjects/AddCouponPage');

const viewCouponsPage = new ViewCouponsPage();
const addCouponPage = new AddCouponPage();
When(
  'user {string} creates new coupon with following details',
  async function (string, dataTable) {
    await addCouponPage.addCoupon(dataTable);
  }
);

Then(
  'user {string} should be able to edit the added coupon',
  async function (string) {
    await expect(page.locator(addCouponPage.editCouponSelector)).toBeVisible();
  }
);