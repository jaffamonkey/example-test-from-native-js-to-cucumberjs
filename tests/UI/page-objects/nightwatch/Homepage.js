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
        .setValue('input[name="q"]', 'donald trump simulator')
        .click('#searchButton')
        .assert.title('donald trump simulator site:github.com at DuckDuckGo')
        .assert.containsText('div.results--main', 'Donald Trump')
        .end()
    }
  }]
};