class Search {
    constructor () {
        this.displayResultSelector = "//div[@class='search-result']/div/div";
        this.searchResultSelector = ".item-category>a>div.font-bold";
    }
}

module.exports = Search;