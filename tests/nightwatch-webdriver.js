//tests/nightwatch-webdriver.js
module.exports = {
  '@tags': ['donaldtrump'],

  'Check the DuckDuckGo search results page (one step)': function (browser) {
    var home = browser.page.Homepage();
    home.performSearch();
  },

  'Check the DuckDuckGo search results page': function (browser) {
    var home = browser.page.Homepage();
    browser
      .url('https://duckduckgo.com')
      .waitForElementVisible('body')
      .setValue(home.elements.searchField, 'TrumpKlon')
      .click(home.elements.searchButton)
      .assert.title('TrumpKlon at DuckDuckGo')
      .assert.containsText(home.elements.results, 'Donald Trump')
      .end();
  }
};

//page-objects/Homepage.js
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

// nightwatch.json
{
  "src_folders": [
    "tests"
  ],
  "page_objects_path": [
    "page-objects"
  ],
  "webdriver": {
    "start_process": true
  },
  "test_settings": {
    "default": {
      "webdriver": {
        "server_path": "node_modules/.bin/chromedriver",
        "port": 9515,
        "cli_args": [
          "--log", "debug"
        ]
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            "headless",
            "disable-gpu"
          ]
        },
        "acceptSslCerts": true
      }
    }
  }
}