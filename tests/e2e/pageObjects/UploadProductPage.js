const config = require('../config');

class UploadProduct {
  constructor() {
    this.addProductPageUrl = `${config.baseUrl}/admin/products/new`;
    this.uploadIconSelector = ".uploader-icon";
    this.imageSelector = ".img";
    this.toastErrorContainerSelector = ".Toastify__toast--error";
  }

  async navigateToUploadIcon() {
    await page.mouse.wheel(0, 400);
    const locateIcon = await page.locator(this.uploadIconSelector);
    await locateIcon.waitFor();
    return locateIcon;
  }
}

module.exports = UploadProduct;