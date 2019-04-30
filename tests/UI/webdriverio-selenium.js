const { promisify } = require('util');
const assert = require('assert');
const selenium = require('selenium-standalone');
const webdriverio = require('webdriverio');
const processes = new Set();

function killProcesses() {
	for (const process of processes) {
		process.kill();
	}
}

Promise.resolve()
	.then(async function () {
		await promisify(selenium.install)();
		processes.add(await promisify(selenium.start)());
		const browser = webdriverio.remote({
			desiredCapabilities: {
				browserName: 'chrome',
				chromeOptions: { }
			},
			// logLevel: 'verbose'
		});
		await browser.init();
		await browser.url('http://localhost:8081/');
		const searchfield = browser.element('input[name="q"]');
		searchfield.addValue('donald trump simulator');
		const searchbutton = browser.element('#searchButton');
		await searchbutton.click();
		const title = await browser.getTitle();
		console.log(title);
		assert.equal((/donald trump simulator site:github.com at DuckDuckGo/i).test(title), true);
		await browser.end();
		killProcesses();
	})
	.catch(function (error) {
		killProcesses();
		console.error(error);
		process.exit(1);
	});
