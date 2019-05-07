module.exports = {
  elements: {
    searchField: {
      selector: 'input[name="q"]'
    },
    searchButton: {
      selector: '#searchButton'
    },
    results: {
      selector: 'div.results--main'
    },
  },
  commands: [{
    performSearch: function () {
      return this.api
        .url('http://localhost:8081')
        .waitForElementVisible('body')
        .setValue('input[name="q"]', 'TrumpKlon')
        .click('#searchButton')
        .assert.title('TrumpKlon site:github.com at DuckDuckGo')
        .assert.containsText('div.results--main', 'Donald Trump')
        .end()
    }
  }]
};