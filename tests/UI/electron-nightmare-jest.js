/* global describe, test, expect */
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

describe('Simple website example', () => {
  test('check page title', () => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .title()
      .end()
      .then((pageTitle) => {
        expect(pageTitle).toContain('donald trump simulator site:github.com at DuckDuckGo');
      })
  })

  test('test the search', () => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(() => { return document.querySelector('.serp__results').innerHTML() })
      .end()
      .then((result) => {
        expect(result).toContain('TrumpKlon');
      })
  });
});

