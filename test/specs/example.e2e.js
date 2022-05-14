//const LoginPage = require('../pageobjects/login.page');
//const SecurePage = require('../pageobjects/secure.page');
const BaseElement = require('../helpers/baseElements');
const SearchComponents = require('../pageobjects/pageComponents/searchComponents');
const MainPage = require('../pageobjects/mainPage');
const { default: $ } = require('webdriverio/build/commands/element/$');
const homePage = require('../../../Lesson_21 WDIO/Lesson 20new/pageobjects/home.page');
const searchComponents = require('../pageobjects/pageComponents/searchComponents');
const baseElements = require('../helpers/baseElements');
//const { expect } = require('chai');

const mainPage = new MainPage();

describe('NEW_TEST', () => {


    it  (`check homepage title name'`, async()=>{
        //browser.url('https://webdriver.io/');
        await mainPage.navigate('https://webdriver.io/');
        await expect(browser).toHaveTitleContaining('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js')
     

    });

    it   (`check Docs tab`, async ()=>{
        await mainPage.navigate('https://webdriver.io/');
        //await browser.pause(3000);
        await BaseElement.click(SearchComponents.docsButton);
        //await browser.pause(3000);
        //const docsButton = await  browser.$('//*[contains(text(),"Docs")]');
        //await docsButton.click();
        await expect(browser).toHaveTitleContaining('Getting Started');
        //await browser.pause(3000);
        
    });


    it   (`check Blog tab`, async ()=>{
        await mainPage.navigate('https://webdriver.io/');
        // const blogButton = await  browser.$('//*[contains(text(),"Blog")]');
        // await blogButton.click();
        await BaseElement.click(searchComponents.blogButton);
        await expect(browser).toHaveTitleContaining('Blog');
        
    });

    it (`check search "setWindowSize"`, async()=>{
        browser.setWindowSize(1920, 1080);
        await mainPage.navigate('https://webdriver.io/');
        await browser.pause(3000);

        await BaseElement.click(searchComponents.searchButton);
        await browser.pause(3000);
        const searchField = browser.$('.DocSearch-Input');
        //await BaseElement.click(searchComponents.searchField);
        await searchField.addValue('setWindowSize');
        await browser.pause(3000);
        await browser.keys('Enter');
        await browser.pause(3000);
        //const searchResultField = await browser.$('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/header/h1').getText();
        //expect(await searchResultField).to.contain('setWindowSize');
        await expect(browser).toHaveTitleContaining('setWindowSize');
                       
             
       
    });



    it  (`check search "getText"`, async()=>{
        browser.setWindowSize(1920, 1080);
        await mainPage.navigate('https://webdriver.io/');
        await browser.pause(3000);

        await BaseElement.click(searchComponents.searchButton);
        await browser.pause(3000);
        const searchField = browser.$('.DocSearch-Input');
        await searchField.addValue('getText');
        await browser.pause(3000);
        await browser.keys('Enter');
        await browser.pause(3000);
        //const searchResultField = await browser.$('//*[@id="__docusaurus"]/div[2]/div/main/div/div/div[1]/div/article/div[2]/header/h1').getText();
        //expect(await searchResultField).to.contain('setWindowSize');
        await expect(browser).toHaveTitleContaining('getText');
                       
             
       
    });


    it (`check "read the book" link`, async ()=>{
        browser.setWindowSize(1920, 1080);
        await mainPage.navigate('https://webdriver.io/');
        const bookButton = await browser.$$('.button.button--outline.button--secondary.button--lg');
        await bookButton[2].click();
        await browser.pause(3000);
        //почему не работает так?
        //  const bookUrl =  await browser.getUrl();
        //  expect(bookUrl).isEqual('https://leanpub.com/webapp-testing-guidebook');
        await browser.switchWindow('https://leanpub.com/webapp-testing-guidebook');
        await expect(browser).toHaveTitleContaining('Web App');

    })



    
    it.skip (`test mocha+chai`, async ()=>{
        const { expect } = require('chai');
        let text = 'setWindowSize';
        expect(text).to.contain('setWindowSize');
        
    });


});


