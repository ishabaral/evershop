const path = require('path');
const config = require('../config');

uploadFile = async (filename) => {
    const filePath = path.resolve(config.assets, filename);
    try {
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator(".uploader-icon").click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(filePath);
    } catch (error) {
        console.error("Error uploading file:", error);
    }
}

module.exports = uploadFile;