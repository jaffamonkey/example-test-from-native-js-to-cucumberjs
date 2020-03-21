//test/protractor-webdriver-manager.js

var home = require('./page-objects/protractor/AngularHomepage');
var utility = require('./page-objects/protractor/Utility');

var firstname = utility.randomAlphaCharsWord(10);
var lastname = utility.randomAlphaCharsWord(10);
var email = utility.randomEmail(10);
var phone = utility.randomPhone(10);

// Protractor uses Jasmine framework by default
describe('Complete form and check verification message', () => {

  // using async, available with ES6
  it('fill in a valid form', async () => {
    await home.getHomepage();
    await home.setFirstName(firstname);
    await home.setLastName(lastname);
    await home.setEmail(email);
    await home.setPhone(phone);
    await utility.clickButton('.btn-primary');
    await utility.areaContains('div.alert', 'Submission Complete.');
  });
}); 

//protractor.conf.js

var JSONReporter = require('jasmine-json-test-reporter');

exports.config = {

    // This setting means we don't need to use Selenium server, we use Protractor directly to test against browsers.
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [ 'headless', 'disable-gpu']
        }
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
    specs: ['tests/protractor*.js']
}
