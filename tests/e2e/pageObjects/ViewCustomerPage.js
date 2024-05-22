const { expect } = require('playwright/test');

class ViewCustomerPage {
  constructor() {
    //locators
    this.adminPanelUrl = 'http://localhost:3000/admin';
    this.adminLoginUrl = 'http://localhost:3000/admin/login';
    this.emailSelector = "//input[@name='email']";
    this.passwordSelector = "//input[@name='password']";
    this.loginBtnSelector = "//button[@class='button primary']";
    this.customerBtnSelector = "//a[@href='/admin/customers']";
    this.tableSelector = "//table[@class='listing sticky']";
  }

  async navigateToLoginPage() {
    await page.goto(this.adminLoginUrl);
  }

  async fillLoginInputFields(inputData) {
    await page.fill(this.emailSelector, inputData[0].email);
    await page.fill(this.passwordSelector, inputData[0].password);
  }

  async clickLoginBtn() {
    await page.click(this.loginBtnSelector);
  }
  async navigateToCustomerPage() {
    await page.click(this.customerBtnSelector);
  }
}
module.exports = { ViewCustomerPage };