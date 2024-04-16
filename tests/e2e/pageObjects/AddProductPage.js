const config = require("../config");
const uploadFile = require('../utils/fileHelper');

class AddProduct {
  constructor() {
    this.categorySelector = "//li/div/a[@href='#'][2]";
    this.taxDropDownSelector = '#tax_class';
    this.descriptionInputFieldSelector = ".ck > p";
    this.urlKeyInputFieldSelector = "input[name='url_key']";
    this.metaTitleInputFieldSelector = "input[name='meta_title']";
    this.metaKeywordsInputFieldSelector = "input[name='meta_keywords']";
    this.colorAttributeSelector = "select[name='attributes[0][value]']";
    this.sizeAttributeSelector = "select[name='attributes[1][value]']";
    this.metaDescriptionInputFieldSelector = "#meta_description";
    this.toastSucessContainerSelector = ".Toastify__toast--success";
    this.toastErrorContainerSelector = ".Toastify__toast--error";
    this.editProductUrl = `${config.baseUrl}/admin/products/edit/*`;
    this.viewProductUrl = `${config.baseUrl}/admin/products`;
    this.viewproductNameSelector = "//td/div/a";
  }

  async fillDetails(dataTable) {
    const datas = dataTable.hashes();
    await page.getByPlaceholder('Name').fill(datas[0].Name);
    await page.getByPlaceholder('SKU').fill(datas[0].SKU);
    await page.getByPlaceholder('Price').fill(datas[0].Price);
    await page.getByPlaceholder('Weight').fill(datas[0].Weight);
    await page.locator('.text-interactive').click();
    await page.getByRole('link', { name : datas[0].Category }).click();
    await page.selectOption(this.taxDropDownSelector, { label: datas[0]['Tax Class'] });
    await page.fill(this.descriptionInputFieldSelector, datas[0].Description);
    await page.mouse.wheel(0, 750);
    await uploadFile(datas[0].Media);
    await page.getByPlaceholder('Quantity').fill(datas[0].Quantity);
    await page.fill(this.urlKeyInputFieldSelector, datas[0]['Url key']);
    await page.fill(this.metaTitleInputFieldSelector, datas[0]['Meta title']);
    await page.fill(this.metaKeywordsInputFieldSelector, datas[0]['Meta keywords']);
    await page.selectOption(this.colorAttributeSelector, { label: datas[0].Color });
    await page.selectOption(this.sizeAttributeSelector, { label: datas[0].Size });
    await page.mouse.wheel(0, 400);
    await page.fill(this.metaDescriptionInputFieldSelector, datas[0]['Meta description']);
  }

  async getProduct() {
    await page.waitForURL(this.editProductUrl);
    await page.goto(this.viewProductUrl);
    await page.waitForSelector(this.viewproductNameSelector);
    const productName = await page.locator(this.viewproductNameSelector).first();
    return productName;
  }
}

module.exports = AddProduct;