var home = require('./page-objects/nightwatch/Homepage');

module.exports = {
  '@tags': ['donaldtrump'],

  'Check the DuckDuckGo search results page (one step)': function (browser) {
    const pageObjs = browser.page.Homepage();
    pageObjs.performSearch()
  },

  'Check the DuckDuckGo search results page': function (browser) {
    browser
      .url('http://localhost:8081')
      .waitForElementVisible('body')
      .setValue(home.elements.searchField, 'donald trump simulator')
      .click(home.elements.searchButton)
      .assert.title('donald trump simulator site:github.com at DuckDuckGo')
      .assert.containsText(home.elements.results, 'Donald Trump')
      .end();

  }
};
