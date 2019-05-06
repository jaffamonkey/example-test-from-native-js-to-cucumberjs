require('chromedriver');
const assert = require('assert');
const { Builder, Capabilities, By } = require('selenium-webdriver');

Promise.resolve()

	// using async, available with ES6
	.then(async function () {
		const driver = new Builder()
			.withCapabilities(
				Capabilities.chrome()
					.set('chromeOptions', { args: ['--headless', 'disable-gpu'] })
			)
			.build();
		await driver.get('http://localhost:8081/');
		await driver.findElement(By.name('q')).sendKeys('donald trump simulator')
		await driver.findElement(By.id('searchButton')).click();
		const title = await driver.getTitle();
		assert.equal((/donald trump simulator site:github.com at DuckDuckGo/i).test(title), true);
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
