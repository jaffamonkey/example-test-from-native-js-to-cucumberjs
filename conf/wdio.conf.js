exports.config = {
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. 
    //
    specs: [
        '.,/tests/webdriverio-selenium.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    services: ['selenium-standalone'],
    //
    // ============
    // Capabilities
    // ============
    //
    maxInstances: 10,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 1,
        //
        browserName: 'chrome',
        chromeOptions: {
            args: ['headless', 'disable-gpu']
        },
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // 
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    screenshotPath: '../tests/screenshots/',
    baseUrl: 'https://duckduckgo.com',
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    // Default timeout in milliseconds for request
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    framework: 'mocha',
    //
    // Test reporter for stdout.
    //
    mochaOpts: {
        ui: 'bdd'
    },
    // =====
    // Hooks
    // =====
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },

    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    // beforeSuite: function (suite) {
    // },
    /**
     * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     */
    // beforeTest: function (test) {
    // },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function () {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function () {
    // },
    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
     * @param {Object} test test details
     */
    // afterTest: function (test) {
    // },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    // afterSuite: function (suite) {
    // },

    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }
}
