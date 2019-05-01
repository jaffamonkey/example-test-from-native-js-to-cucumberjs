/* global describe, test, expect */
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

describe('Check the DuckDuckGo search results page', () => {
  test('Check page title', () => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(() => {
        return document.title;
      })
      .end()
      .then((title) => {
        expect(title).toContain('donald trump simulator site:github.com at DuckDuckGo');
      })
  })

  test('Check results page', () => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(() => { return document.querySelector('.serp__results').innerHTML() })
      .end()
      .then((result) => {
        expect(result).toContain('TrumpKlon');
      })
  })
});

