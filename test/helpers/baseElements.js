const { sizeOfBrowser } = require('../../../Lesson_18 Framework/Lesson 18/pageObject/basePage');
const MainPage = require('../pageobjects/mainPage');

class BaseElements extends MainPage {
    constructor() {
        super();
    }

    async click(element){
        
        return await element.click();
    }

    async sendKeys(element, text, waitTime = 5000) {
        await driver.wait(until.elementIsVisible(element), waitTime);
        await element.sendKeys(text);
    }

    async getTitle(){
        return await driver.getTitle();
    }
}

module.exports = new BaseElements();