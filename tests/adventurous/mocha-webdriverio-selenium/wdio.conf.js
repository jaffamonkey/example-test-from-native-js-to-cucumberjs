exports.config = {
	specs: ['test.js'],
	capabilities: [{
		browserName: 'chrome',
		chromeOptions: {args: ['--headless']}
	}],
	logLevel: 'verbose',
	coloredLogs: true,
	services: ['selenium-standalone'],
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {ui: 'bdd'}
}
