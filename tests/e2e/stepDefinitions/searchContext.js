const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const Login = require('../pageObjects/LoginPage');
const Search = require('../pageObjects/SearchPage');
const getUserCredentials = require('../utils/userHelper');

const login = new Login();
const search = new Search();

Given('user {string} has logged in', async function (user) {
    await login.navigateToLoginPage();
    const { email, password } = getUserCredentials(user);
    await login.login(email, password);
    await page.waitForURL(login.adminDashboardPageURL);
  }
);

Given('the user has navigated to the admin dashboard', async function () {
  await expect(page).toHaveURL(login.adminDashboardPageURL);
});

When('the user searches for product {string}', async function (product) {
  await page.getByPlaceholder('Search').fill(product);
});

Then('the result should be empty', async function () {
  const searchResults = await page.locator(search.displayResultSelector).first();
  await expect(searchResults).toContainText("TRY OTHER RESOURCES");
});

Then(
  'the user should see results for the product {string}',async function (product) {
    await page.waitForSelector(search.searchResultSelector);
    const searchResults = await page.locator(search.searchResultSelector).allTextContents();
    await expect(searchResults.length).toBeGreaterThanOrEqual(1);
    let found = false;
    for (const result of searchResults) {
      if(result.toLowerCase().includes(product.toLowerCase())){
        found = true;
        break;
      }
    }
    await expect(found).toBe(true);
  }
);