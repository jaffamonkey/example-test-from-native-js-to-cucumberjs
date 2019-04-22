/* global describe, test, expect */
const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

describe('Simple website example', () => {
  test('check page title', () => {
    nightmare
      .goto('http://localhost:8081')
      .evaluate(() => { return document.title })
      .then((pageTitle) => {
        expect(pageTitle).toContain('donald trump simulator site:github.com at DuckgDuckGo');
      })
      .catch((error) => {
        throw new Error('Getting page failed:', error)
      })
  })

  test('test the search', () => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(() => { return document.querySelector('.results--main').innerText })
      .end()
      .then((result) => {
        expect(result).toContain('TrumpKlon');
      })
      // .catch((error) => {
      //   throw new Error('Search failed:', error)
      // })
  });
});

