/* global it */
/* eslint-env browser */
// Initialise the webdriver browser driver (for Chrome)
require('chromedriver');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

// Chai packages give us more flexibility with how to check on various areas of the page
var chai = require('chai');

var browser = new webdriver
    .Builder()
    .usingServer()
    .withCapabilities({
        'browserName': 'chrome',
        'chromeOptions': {
            args: ["headless", "disable-gpu"]
        }
    }).build();

describe('Basic Tests', () => {

    it('Check the search results page', () => {
        browser.get('http://localhost:8081');
        browser.wait(until.elementLocated(By.name('q')), 3000, 'Could not locate search field').sendKeys('donald trump simulator');
        browser.wait(until.elementLocated(By.id('searchButton')), 3000, 'Could not locate search button').click();
        browser.wait(until.elementLocated(By.partialLinkText('TrumpKlon')), 3000, 'Could not locate link');
        browser.getTitle().then(function (title) {
            chai.expect(title).to.equal('donald trump simulator site:github.com at DuckDuckGo');

            // By adding chai package, it gives us a more flexible way to check things on the page, and without having to use "waits".
            // What this line does is find the first element with class "result_snippet" (the first search result),
            // then checks that phrase "Donald Trump" is in the text.
            chai

                // Between the brackets is what extracts the content that "expect" will verify against.
                .expect(browser.findElement(By.className('result__snippet')).getAttribute('innerHTML'))

                // Final check on the condition that "Donald Trump" is in the result of what is extracted from previous line.
                .to.contain('Donald Trump');
        })
            .catch(function (error) {
                throw new Error('Search failed:', error)
            })
    });
});
