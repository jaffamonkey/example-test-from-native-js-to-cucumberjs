// The first section is setting up the environment in order for us to run the test code on a browser
require('chromedriver');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

browser = new webdriver
  .Builder()
  .usingServer()
  .withCapabilities({
    'browserName': 'chrome',
    'chromeOptions': {
      args: ["headless", "disable-gpu"]
    }
  }).build();

// Open a web address (URL)
browser.get('http://localhost:8081');

// waiting for element to load, the fill in field
browser.wait(until.elementLocated(By.name('q')), 10000, 'Could not locate').sendKeys('donald trump simulator');

// Locating the element that has name "search", then click
browser.wait(until.elementLocated(By.id('searchButton')), 10000, 'Could not locate').click();

// waiting for search results to load
browser.wait(until.elementLocated(By.css('.results--main')), 10000, 'Could not locate');

// Verifying the search results page title
browser.getTitle().then(function (title) {

  // The first line is a check for a condition ...
  if (title === 'donald trump simulator site:github.com at DuckDuckGo') {

    // ... and if the check is sucessful, a success message output to screen ...
    console.log('The title "' + title + '" is correct');
  }
  else {

    // ... or if check fails, a failure message is output to screen
    throw new Error('The title "' + title + '" is incorrect');

    // Close the browser and webdriver 
    browser.quit();
  }
});
