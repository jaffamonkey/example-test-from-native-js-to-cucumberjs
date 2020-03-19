module.exports = {
  '@tags': ['donaldtrump'],

  'Check the DuckDuckGo search results page (one step)': function (browser) {
    var home = browser.page.Homepage();
    home.performSearch();
  },

  'Check the DuckDuckGo search results page': function (browser) {
    var home = browser.page.Homepage();
    browser
      .url('https://elated-montalcini-28a317.netlify.com')
      .waitForElementVisible('body')
      .setValue(home.elements.searchField, 'TrumpKlon')
      .click(home.elements.searchButton)
      .assert.title('TrumpKlon site:github.com at DuckDuckGo')
      .assert.containsText(home.elements.results, 'Donald Trump')
      .end();
  }
};
