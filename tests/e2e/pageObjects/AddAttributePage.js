const { expect } = require('playwright/test');

class AddAttributePage {
  constructor() {
    this.addNewAttributeUrl = 'http://localhost:3000/admin/attributes/new';
    this.addAttributeBtnSelector = "//a[@href='/admin/attributes/new']";

    this.inputNameSelector = "//input[@name='attribute_name']";
    this.inputCodeSelector = "//input[@name='attribute_code']";
    this.inputSortOrderSelector = "//input[@name='sort_order']";
    this.saveBtnSelector = "//button[@class='button primary']";
    this.groupSelector = "//div[@class=' css-6j8wv5-Input']";

    this.textRadioBtnSelector = "//span[text()='Text']";
    this.selectRadioBtnSelector = "//span[text()='Select']";
    this.multiselectRadioBtnSelector = "//span[text()='Multiselect']";
    this.textareaRadioBtnSelector = "//span[text()='Textarea']";

    this.editAttributeSelector = "//h1[text()='Editing %s']";
  }
  async addAttributes(dataTable) {
    const dataToFill = dataTable.hashes();

    await page.click(this.addAttributeBtnSelector);
    for (const attribute of dataToFill) {
      await page.fill(this.inputNameSelector, attribute.name);
      await page.fill(this.inputCodeSelector, attribute.code);

      switch (attribute.type.toLowerCase()) {
        case 'text':
          await page.check(this.textRadioBtnSelector);
          break;
        case 'select':
          await page.check(this.selectRadioBtnSelector);
          break;
        case 'multiselect':
          await page.check(this.multiselectRadioBtnSelector);
          break;
        case 'textarea':
          await page.check(this.textareaRadioBtnSelector);
          break;
        default:
          console.error(`Unsupported attribute type: ${attribute.type}`);
      }
      await page.click(this.groupSelector);
      await page.keyboard.press('Enter');
      await page.fill(this.inputSortOrderSelector, attribute.order);
      await page.click(this.saveBtnSelector);
    }
  }
}
module.exports = { AddAttributePage };
