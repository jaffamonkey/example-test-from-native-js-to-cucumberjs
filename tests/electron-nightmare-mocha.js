const Nightmare = require('nightmare');
const chai = require('chai')
const expect = chai.expect

describe('Check the DuckDuckGo search results page title', function () {
  this.timeout('60s')

  //before each test,
  beforeEach(function(){
    nightmare = Nightmare();
  });
  
  it('should show correct results page title', function(done) {
    nightmare.goto('https://duckduckgo.com')
      .type('input[name="q"]', 'TrumpKlon')
      .click('#search_button_homepage')
      .evaluate(() => document.getElementsByTagName('title')[0].innerText)
      .end()
      .then((title) => {
        expect(title).to.eql('TrumpKlon at DuckDuckGo')
      }).then(() => done());
  });

  it('should show correct results', function(done) {
    nightmare
      .goto('https://duckduckgo.com')
      .type('input[name="q"]', 'TrumpKlon')
      .click('#search_button_homepage')
      .evaluate(() => document.getElementsByClassName('result__title')[0].innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('TrumpKlon')
      }).then(() => done());
  });
})
