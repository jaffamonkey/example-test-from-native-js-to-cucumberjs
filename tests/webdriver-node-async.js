const assert = require('assert');
const { Builder, Capabilities, By } = require('selenium-webdriver');
let chromedriver = require('chromedriver');
let chrome = require('selenium-webdriver/chrome');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

Promise.resolve()

	// using async, available with ES6
	.then(async function () {
		const driver = new Builder()
			.withCapabilities(
				Capabilities.chrome()
					.set('chromeOptions', { args: ['--headless', 'disable-gpu'] })
			)
			.build();
		await driver.get('https://duckduckgo.com');
		await driver.findElement(By.name('q')).sendKeys('TrumpKlon');
		await driver.findElement(By.id('search_button_homepage')).click();
		const title = await driver.getTitle();
		assert.equal((/TrumpKlon at DuckDuckGo/i).test(title), true);
		console.log('The search results page title: ' + title);
		const results = await driver.findElement(By.id('r1-0')).getText();
		console.log('The first search result: ' + results);
		assert.equal((/Donald Trump/i).test(results), true);
		await driver.quit();
	})
	.catch(function (error) {
		console.error(error);
		process.exit(1);
	});
