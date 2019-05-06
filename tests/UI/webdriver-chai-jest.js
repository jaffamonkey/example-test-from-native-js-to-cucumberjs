/* eslint-env browser */
/* global describe, test */
// Initialise the webdriver browser driver (for Chrome)
require('chromedriver');
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

    test('Check search results', () => {
        browser.get('http://localhost:8081');
        browser.wait(until.elementLocated(By.name('q')), 3000, 'Could not locate search field').sendKeys('donald trump simulator');
        browser.wait(until.elementLocated(By.id('searchButton')), 3000, 'Could not locate search button').click();
        browser.wait(until.elementLocated(By.partialLinkText('Donald Trump')), 3000, 'Could not locate link');
        browser.getTitle().then(function (title) {
            expect(title).to.equal('donald trump simulator site:github.com at DuckDuckGo');
        });
        // What this line does is find the first element with class "result_snippet" (the first search result)
        browser.findElement(By.className('results--main')).getAttribute('innerHTML').then(function (text) {

            // then checks that phrase "Donald Trump" is in the text.
            expect(text).to.contain('Donald Trump');
        })
    });
});
