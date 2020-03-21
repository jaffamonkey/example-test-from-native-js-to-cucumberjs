module.exports = {
  elements: {
    searchField: {
      selector: 'input[name="q"]'
    },
    searchButton: {
      selector: 'input[id="search_button_homepage"]'
    },
    results: {
      selector: '#links'
    },
  },
  commands: [{
    performSearch: function () {
      return this.api
        .url('https://duckduckgo.com')
        .waitForElementVisible('body')
        .setValue('input[name="q"]', 'TrumpKlon')
        .click('#search_button_homepage')
        .assert.title('TrumpKlon at DuckDuckGo')
        .assert.containsText('#links', 'Donald Trump')
        .end()
    }
  }]
};