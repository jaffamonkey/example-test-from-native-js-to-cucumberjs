// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
var JSONReporter = require('jasmine-json-test-reporter');

exports.config = {

  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['headless'],
      binary: require('puppeteer').executablePath()
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    onPrepare: function () {
      jasmine.getEnv().addReporter(new JSONReporter({
        file: 'tests/reports/protractor-test-results.json',
        beautify: true,
        indentationLevel: 4 // used if beautify === true
      }));
    },

    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },
    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['../tests/UI/puppeteer-protractor.js']
  }
}
