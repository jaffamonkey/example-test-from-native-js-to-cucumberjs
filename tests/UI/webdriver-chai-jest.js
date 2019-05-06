/* eslint-env browser */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

// Chai packages give us more flexibility with how to check on various areas of the page
var chai = require('chai');
var expect = chai.expect;

var browser = new webdriver
    .Builder()
    .usingServer()
    .withCapabilities({
        'browserName': 'chrome',
        'chromeOptions': {
            args: ["headless", "disable-gpu"]
        }
    }).build();

describe('Check the DuckDuckGo search results page', () => {

    it('Check search results', async () => {
        await browser.get('http://localhost:8081');
        await browser.findElement(By.name('q')).sendKeys('donald trump simulator');
        await browser.findElement(By.id('searchButton')).click();
        await browser.findElement(By.className('result__title')).getText().then((results) => {
            expect(results).to.contain('TrumpKlon');
        });
        await browser.getTitle().then((title) => {
            expect(title).to.equal('donald trump simulator site:github.com at DuckDuckGo');
        });
    });
});
