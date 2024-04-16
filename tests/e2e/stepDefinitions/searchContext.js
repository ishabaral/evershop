const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const Login = require('../pageObjects/LoginPage');
const Search = require('../pageObjects/SearchPage');
const getUserCredentials = require('../utils/userHelper');
const capitalize = require('../utils/stringHelper');

const login = new Login();
const search = new Search();

Given('user {string} has logged in', async function (user) {
    await login.navigateToLoginPage();
    const { email, password } = getUserCredentials(user);
    await login.login(email, password);
    await expect(page).not.toHaveURL(login.logInPageURL);
  }
);

Given('the user has navigated to the admin panel dashboard', async function () {
  await expect(page).toHaveURL(login.adminDashboardPageURL);
})

When('the user searches for product {string}', async function (product) {
  await page.getByPlaceholder('Search').fill(product);
});

Then('the result should be empty', async function () {
  const result = await page.locator(search.resultHeadingSelector);
  await result.waitFor();
  expect(result).toContainText('No results');
});

Then(
  'the user should see results for the product {string}',async function (product) {
    const searchResults = await page.locator(search.searchResultSelector).all();
    const productName = capitalize(product);
    for (const result of searchResults) {
      await expect(result).toContainText(productName);
    }
  }
);

When('the user searches for customer {string}', async function (product) {
  await page.getByPlaceholder('Search').fill(product);
});

Then(
  'the user should see results for the customer {string}',async function (customer) {
    const searchResults = await page.locator(search.searchResultSelector).all();
    const customerName = capitalize(customer);
    for (const result of searchResults) {
      await expect(result).toContainText(customerName);
    }
  }
);