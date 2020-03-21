// features/support/index.js
const { setWorldConstructor, setDefaultTimeout } = require('cucumber');
const { Builder, Capabilities, By, until } = require('selenium-webdriver');
require('chromedriver');
var chai = require('chai');
var expect = chai.expect;

const DEFAULT_TIMEOUT = 60000;
const BASE_URL = 'https://duckduckgo.com';

function buildDriver() {
  const chromeCapabilities = Capabilities.chrome();
  const chromeOptions = {
    args: ['incognito', 'window-size=1920,1080', 'headless', 'disable-gpu'],
  };

  chromeCapabilities.set('chromeOptions', chromeOptions);

  return new Builder()
    .forBrowser('chrome')
    .withCapabilities(chromeCapabilities)
    .build();
}

class CustomWorld {
  goToHomePage() {
    return this.driver.get(BASE_URL);
  }

  fillInSearchField(string) {
    return this.driver.findElement(By.name('q')).sendKeys(string);
  }

  clicksearch_button_homepage() {
    return this.driver.findElement(By.id('search_button_homepage')).click();
  }

  thePageTitle(string) {
    return this.driver.wait(until.titleIs(string), 3000, 'Could not find correct page title');
  }

  firstSearchResultContains(string) {
    return this.driver.findElement(By.css('#r1-0 > div > div.result__snippet.js-result-snippet')).getText()
      .then(function (resultText) {
        expect(resultText).to.contain(string);
      });
  }

  start() {
    this.driver = buildDriver();
  }

  async end() {
    await this.driver.close();
    return this.driver.quit();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(DEFAULT_TIMEOUT);

module.exports = new CustomWorld();
