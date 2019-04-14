/* global describe, test, expect */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

describe('Simple website example', () => {
  test('test the search', () => {
    nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(() => { return document.querySelector('.results--main').innerText })
      .end()
      .then(function (result) {
        expect(result).toContain('Donald Trump');
      })
      .catch(function (error) {
        throw new Error('Search failed:', error)
      })
  });
});

