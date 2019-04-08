/* global describe, test, expect */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

describe('Simple website example', () => {
  test('test the search',  async function () {
     await nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(function() {
        return document.querySelector('.results--main').innerText
       })
      .end()
      .then(function(text) {
      expect(text).toContain('Donald Trump');
      })
      .catch(function(error) {
      console.error('Search failed:', error)
    })
  });
});
