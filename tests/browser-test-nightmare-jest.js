/* global describe, test, expect */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

describe('Simple website example', function () {
  test('test the search', async (done) => {
    await nightmare
      .goto('http://localhost:8081')
      .type('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .evaluate(function () {
        document.getElementsByTagName('body').innerText;
      })
      .end()
      .then(function (text) {
        expect(text).toContain('Donald Trump');
      })
  });
});