// The easiest way to look at this, is it's creating an object that's webdriver.
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
var errorMessage = 'Could not locate the correct ';

// This is creating an object that is the browser
const browser = new webdriver
  .Builder()
  .usingServer()
  .withCapabilities({
    'browserName': 'chrome',
    'chromeOptions': {
      args: ['headless', 'disable-gpu']
    }
  }).build();

try {
  browser.get('http://localhost:8081');
  browser.wait(until.elementLocated(By.name('q')), 3000, errorMessage + 'field').sendKeys('TrumpKlon');
  browser.wait(until.elementLocated(By.id('searchButton')), 3000, errorMessage + 'button').click();
  browser.wait(until.titleIs('TrumpKlon site:github.com at DuckDuckGo'), 3000, errorMessage + 'title')
  browser.wait(until.elementLocated(By.partialLinkText('TrumpKlon')), 3000, errorMessage + 'link');
}
catch (err) {
  console.log(err)
  return false;
}
finally {
  browser.quit();
}
