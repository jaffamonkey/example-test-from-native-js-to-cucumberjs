/* global describe, test, expect */
const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

describe('Simple website example', function () {
  test('test the search', async (done) => {
//      let page = nightmare().goto('http://localhost:8081')
//      let text = await page.evaluate(() => document.body.textContent)
//                          .end()
//      expect(text).toContain('Welcome to React')
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
