const config = require('../config');

class Login {
  constructor() {
    this.logInPageURL = `${config.baseUrl}/admin/login`;
    this.adminDashboardPageURL = `${config.baseUrl}/admin`;
    this.loginBtnSelector = 'button';
  }

  async navigateToLoginPage() {
    await page.goto(this.logInPageURL);
  }

  async login(email, password) {
    await page.getByPlaceholder('Email').fill(email);
    await page.getByPlaceholder('Password').fill(password);
    await page.click(this.loginBtnSelector);
  }
}

module.exports = Login;
