const Nightmare = require('nightmare');
const chai = require('chai')
const expect = chai.expect

describe('Check the DuckDuckGo search results page title', function () {
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: false })
  })

  it('should show correct results page title', done => {
    nightmare.goto('http://localhost:8081')
      .type('input[name="q"]', 'TrumpKlon')
      .click('#searchButton')
      .evaluate(() => document.getElementsByTagName('title')[0].innerText)
      .end()
      .then(function (title) {
        expect(title).to.eql('TrumpKlon site:github.com at DuckDuckGo');
        done()
      })
  });

  it('should show correct results', done => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'TrumpKlon')
      .click('#searchButton')
      .evaluate(() => document.getElementsByClassName('result__title')[0].innerText)
      .end()
      .then(function (text) {
        expect(text).to.contain('TrumpKlon')
        done()
      })
  });
})
