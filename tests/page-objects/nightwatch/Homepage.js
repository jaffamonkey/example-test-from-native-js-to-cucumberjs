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
        .url('https://elated-montalcini-28a317.netlify.com')
        .waitForElementVisible('body')
        .setValue('input[name="q"]', 'TrumpKlon')
        .click('#searchButton')
        .assert.title('TrumpKlon site:github.com at DuckDuckGo')
        .assert.containsText('div.results--main', 'Donald Trump')
        .end()
    }
  }]
};