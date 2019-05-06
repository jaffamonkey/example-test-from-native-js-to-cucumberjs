// Initialise the webdriver browser driver (for Chrome)
require('chromedriver');

// The easiest way to look at this, is it's creating an object that's webdriver.
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

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
  // This line is telling the browser to open a url.
  browser.get('http://localhost:8081');

  // Now the search field is filled in with our search terms, after the field becomes visible (allowing for page load time).
  browser.wait(until.elementLocated(By.name('q')), 3000, 'Could not locate the search field').sendKeys('donald trump simulator');

  // Now we click the search button, after the button becomes visible.
  browser.wait(until.elementLocated(By.id('searchButton')), 3000, 'Could not locate the search button').click();

  // Now checking that the page title is what is expected.
  browser.wait(until.titleIs('donald trump simulator site:github.com at DuckDuckGo'), 3000, 'Could not locate correct title')

  // This looks for a link text that includes "Donald Trump", which is the expected result.
  browser.wait(until.elementLocated(By.partialLinkText('Donald Trump')), 3000, 'Could not locate correct link');

}
finally {
  console.log('A final step that tells us all the test steps passed')

  // Close all of the open browser windows, then stop chromedriver.
  browser.quit();
}
