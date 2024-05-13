const config = require("../config");

class ViewProduct{
    constructor() {
        this.productsButtonSelector= "//a[text() ='Products']";
        this.viewProductUrl = `${config.baseUrl}/admin/products`;
        this.tableSelector = "table";
    }
}

module.exports = ViewProduct;