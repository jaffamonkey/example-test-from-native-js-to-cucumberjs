require('chromedriver');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

const browser = new webdriver
  .Builder()
  .usingServer()
  .withCapabilities({
    'browserName': 'chrome',
    'chromeOptions': {
      args: ["headless", "disable-gpu"]
    }
  }).build();

browser.get('http://localhost:8081');
browser.wait(until.elementLocated(By.name('q')), 3000, 'Could not locate').sendKeys('donald trump simulator');
browser.wait(until.elementLocated(By.id('searchButton')), 3000, 'Could not locate').click();
browser.wait(until.elementLocated(By.partialLinkText('TrumpKlon')), 3000, 'Could not locate');
browser.wait(until.titleIs('donald trump simulator site:github.com at DucDuckGo'), 3000, 'Could not locate');
browser.quit();