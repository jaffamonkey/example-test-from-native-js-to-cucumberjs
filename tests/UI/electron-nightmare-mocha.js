const Nightmare = require('nightmare');
const chai = require('chai')
const expect = chai.expect

describe('Check the DuckDuckGo search results page title', function () {
  this.timeout('60s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare({ show: false })
  })

  describe('Homepage', function () {
    describe('Page Title', () => {
      it('should show correct results page title', done => {
        // your actual testing urls will likely be `http://localhost:port/path`
        nightmare.goto('http://localhost:8081')
          .type('input[name="q"]', 'donald trump simulator')
          .click('#searchButton')
          .wait(3000)
          .evaluate(() => document.getElementsByTagName('title')[0].innerText)
          .then(function (title) {
            expect(title).contains('donald trump simulator site:github.com at DuckDuckGo')
            done()
          })
          .catch(done)
          .then(_ => {
            // finally cleanup
            nightmare.end();
            // kill the Electron process explicitly to ensure no orphan child processes
            nightmare.proc.disconnect();
            nightmare.proc.kill();
            nightmare.ended = true;
            nightmare = null;
          });
      })
    })

    describe('Search Results', () => {
      it('should show correct results', done => {
        nightmare
          .goto('http://localhost:8081')
          .type('input[name="q"]', 'donald trump simulator')
          .click('#searchButton')
          .wait(3000)
          .evaluate(() => document.getElementsByClassName('result__body')[0].innerText)
          .then(function (text) {
            expect(text).contains('Donald Trump')
            done()
          })
          .catch(done)
          .then(_ => {
            // finally cleanup
            nightmare.end();
            // kill the Electron process explicitly to ensure no orphan child processes
            nightmare.proc.disconnect();
            nightmare.proc.kill();
            nightmare.ended = true;
            nightmare = null;
          });
      })
    })
  })
})
