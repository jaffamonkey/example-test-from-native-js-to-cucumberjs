module.exports = {
  elements: {
    searchField: {
      selector: 'input[name="q"]'
    },
    search_button_homepage: {
      selector: '#search_button_homepage'
    },
    results: {
      selector: '#links'
    },
  },
  commands: [{
    performSearch: function () {
      return this.api
        .url('https://elated-montalcini-28a317.netlify.com')
        .waitForElementVisible('body')
        .setValue('input[name="q"]', 'TrumpKlon')
        .click('#search_button_homepage')
        .assert.title('TrumpKlon site:github.com at DuckDuckGo')
        .assert.containsText('#links', 'Donald Trump')
        .end()
    }
  }]
};