const assert = require('assert');
describe('http://webdriver.io/', function () {
	it('getTitle', function () {
		await browser.url('http://localhost:8081/');
		await browser.findElement(By.name('q')).sendKeys('donald trump simulator')
		await browser.findElement(By.id('searchButton')).click();
		const title = await browser.getTitle();
		assert.equal((/donald trump simulator site:github.com at DuckDuckGo/i).test(title), true);
		const results = await browser.findElement(By.className('result__snippet')).getAttribute('innerHTML');
		assert.equal((/TrumpKlon/i).test(results), true);
	});
});
