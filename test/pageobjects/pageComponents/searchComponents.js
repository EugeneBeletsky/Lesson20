
const MainPage = require('../mainPage');

const { default: $ } = require('webdriverio/build/commands/browser/$');
const { default: $$ } = require('webdriverio/build/commands/browser/$$');
const BasePage = require('../basePage');

class SearchComponents extends MainPage {
    get homeButton() {
        return $('.navbar__brand');
    };

    get docsButton() {
        return browser.$('//*[contains(text(),"Docs")]');
    }; 

    get blogButton(){
        return browser.$('//*[contains(text(),"Blog")]');

    };

    get searchButton(){
        return browser.$('.DocSearch.DocSearch-Button');
    }

    get searchField(){
        return browser.$('.DocSearch-Input');
        
    }


}

module.exports = new SearchComponents();