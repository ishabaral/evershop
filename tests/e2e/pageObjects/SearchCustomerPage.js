const { expect } = require('playwright/test');

class SearchCustomerPage {
  constructor() {
    this.inputNameSelector = "//input[@placeholder='Full Name']";
    this.inputEmailSelector = "//input[@placeholder='Email']";
    this.customerNameSelector1 = "//a[text()='Larry']";
    this.customerNameSelector2 = "//a[text()='harry']";
  }

  async searchByName(name) {
    await page.fill(this.inputNameSelector, name);
    await page.keyboard.press('Enter');
  }

  async searchByEmail(email) {
    await page.fill(this.inputEmailSelector, email);
    await page.keyboard.press('Enter');
  }
}
module.exports = { SearchCustomerPage };
