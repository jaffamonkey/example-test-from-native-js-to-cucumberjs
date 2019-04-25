module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['donaldtrump'],
  'Simple website example': function(browser) {
    browser
      .url('http://localhost:8081')
      .waitForElementVisible('body')
      .setValue('input[name="q"]', 'donald trump simulator')
      .click('#searchButton')
      .assert.title('donald trump simulator site:github.com at DuckDuckGo')
      .assert.containsText('div.results--main', 'TrumpKlon')
      .end();
  }
};
