var home = require('./nightwatch/Homepage');

module.exports = {
  '@tags': ['donaldtrump'],
  'DuckDuckGo search (one step)': function (browser) {
    const pageObjs = browser.page.Homepage();
    pageObjs.performSearch()
  },

  'DuckDuckGo search': function (browser) {
    browser
      .url('http://localhost:8081')
      .waitForElementVisible('body')
      .setValue(home.elements.searchField, 'donald trump simulator')
      .click(home.elements.searchButton)
      .assert.title('donald trump simulator site:github.com at DuckDuckGo')
      .assert.containsText(home.elements.results, 'TrumpKlon')
      .end();
  }
};
