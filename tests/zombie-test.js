/* global describe */
const Browser = require('../node_modules/zombie');
Browser.visit('https://duckduckgo.com');

describe('User visits signup page', function () {

    const browser = new Browser({
        waitDuration: 29 * 1000
    });

    before(function (done) {
        browser.visit('https://duckduckgo.com', done);
    });

    describe('Check the DuckDuckGo search results page', function () {

        it('Perform search', function () {
            browser.fill('q', 'TrumpKlon');
            return browser.pressButton('#search_button_homepage');
        });

        it('The page title is correct', function () {
            return browser.assert.text('title', 'TrumpKlon at DuckDuckGo');
        });

        it('Relevant first search result displayed', function () {
            return browser.assert.text('h2.result__title', /TrumpKlon/i);
        });
    });
});