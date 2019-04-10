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

browser.get('http://localhost:8081');
browser.wait(until.elementLocated(By.name('q')), 10000, 'Could not locate').sendKeys('donald trump simulator');
browser.wait(until.elementLocated(By.id('searchButton')), 10000, 'Could not locate').click();
browser.wait(until.elementLocated(By.partialLinkText('TrumpKlon')), 10000, 'Could not locate');
browser.getTitle().then(function (title) {
  if (title === 'donald trump simulator site:github.com at DuckDuckGo') {
    console.log('The title "' + title + '" is correct');
  }
  else {
    throw new Error('The title "' + title + '" is incorrect');
  }
  browser.quit();
});
