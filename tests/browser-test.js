require('chromedriver');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

driver = new webdriver
  .Builder()
  .usingServer()
  .withCapabilities({
    'browserName': 'chrome',
    'chromeOptions': {
      args: ["headless", "disable-gpu"]
    }
  }).build();

driver.get('http://localhost:8081');

// waiting for element to load, the fill in field
driver.wait(until.elementLocated(By.name('q')), 10000, 'Could not locate').sendKeys('donald trump simulator');

// Locating the element that has name "search", then click
driver.wait(until.elementLocated(By.name('search')), 10000, 'Could not locate').click();

// waiting for search results to load
driver.wait(until.elementLocated(By.css('.result__snippet')), 10000, 'Could not locate');

// Verifying the search results page title
driver.getTitle().then(function (title) {
  if (title === 'donald trump simulator site:github.com at DuckDuckGo') {
    console.log('The title "' + title + '" is correct');
  } else {
    console.log('The title "' + title + '" is incorrect');
  }
  // Close web session
  driver.quit();
});
