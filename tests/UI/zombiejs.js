/* global describe */
const Browser = require('../../node_modules/zombie');
Browser.localhost('example.com', 8081);

describe('User visits signup page', function () {

    const browser = new Browser();

    before(function (done) {
        browser.visit('/', done);
    });

    describe('Check the DuckDuckGo search results page', () => {

        it('Perform search', (done) => {
            browser.fill('q', 'donald trump simulator')
            browser.pressButton('Search', done);
            browser.assert.text('title', 'donald trump simulator at DuckDuckGo');
        });
    });
});