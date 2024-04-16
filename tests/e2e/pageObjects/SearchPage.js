class Search {
    constructor () {
        this.displayResultSelector = "//div[@class='search-result']/div/div";
        this.searchResultSelector = ".item-category>a>div.font-bold";
    }

    async searchResults () {
        const result = await page.locator(this.searchResultSelector).allTextContents();
        return result;
    }
    
    async resultFound (product) {
        let found = false;
        const searchResults = await this.searchResults();
        for (const result of searchResults) {
            if(result.toLowerCase().includes(product.toLowerCase())){
                found = true;
                break;
            }
        }
        return found;
    }
}

module.exports = Search;