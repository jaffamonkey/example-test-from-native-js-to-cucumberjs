const Nightmare = require('nightmare');
let assert = require('chai').assert;

describe('Check the DuckDuckGo search results page title', function () {
  this.timeout('60s');

  //before each test,
  beforeEach(function (done) {
    nightmare = Nightmare({
      show: false
    });
    done();
  });

  it('should show correct results page title', function (done) {
    nightmare.goto('https://duckduckgo.com')
      .type('input[name="q"]', 'TrumpKlon')
      .click('#search_button_homepage')
      .evaluate(() => document.getElementsByTagName('title')[0].innerText)
      .end()
      .then((title) => {
        console.log('Title:', title);
        assert.equal(title, 'TrumpKlon at DuckDuckGo');
      }).then(() => done());
  });

  it('should show correct results', function (done) {
    nightmare.goto('https://duckduckgo.com')
      .type('input[name="q"]', 'TrumpKlon')
      .click('#search_button_homepage')
      .evaluate(() => document.getElementsByClassName('result__title')[0].innerText)
      .end()
      .then((text) => {
        console.log('Result:', text);
        assert.include(text, 'TrumpKlon');
      }).then(() => done());
  });
});
