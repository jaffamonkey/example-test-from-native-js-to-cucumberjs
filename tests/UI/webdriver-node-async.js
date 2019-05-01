require('chromedriver');
const assert = require('assert');
const { Builder, Capabilities, By } = require('selenium-webdriver');

Promise.resolve()

	// Using ES6 Async/Await
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
		const results = await driver.findElement(By.className('result__snippet')).getAttribute('innerHTML');
		assert.equal((/TrumpKlon/i).test(results), true);
		await driver.quit();
	})
	.catch(function (error) {
		console.error(error);
		process.exit(1);
	});
