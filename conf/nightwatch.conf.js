const PKG = require('../package.json'); // so we can get the version of the project
const SCREENSHOT_PATH = "./tests/screenshots/";

const config = { // we use a nightwatch.conf.js file so we can include comments and helper functions
  "src_folders": [
    "test/e2e"     // we use '/test' as the name of our test directory by default. So 'test/e2e' for 'e2e'.
  ],
  page_objects_path: ["./tests/UI/page-objects/nightwatch"],
  "output_folder": "./tests/reports",
  "webdriver": {
    "start_process": true,
    "host": "localhost",
    "port": 4444
  },

  // "test_workers": { "enabled": true, "workers": "auto" }, // perform tests in parallel where possible
  "test_settings": {
    "default": {
      "launch_url": "http://localhost:8081",
      "webdriver": {
        "server_path": "./node_modules/.bin/geckodriver",
        "cli_args": [
          "--log", "debug"
        ],
        "silent": false,
        "screenshots": {
          "enabled": true, // save screenshots taken here
          "path": SCREENSHOT_PATH
        },
        "desiredCapabilities": {
          "browserName": "firefox",
          "firefoxOptions": {
            args: ['headless', 'disable-gpu']
          },
          "javascriptEnabled": true,
          "acceptSslCerts": true
        },
        "globals": {
          "waitForConditionTimeout": 10000    // wait for content on the page before continuing
        }
      }
    },
    "chrome": {
      "webdriver": {
        "port": 9515,
        "default_path_prefix": "",
        "silent": false,
        "server_path": "./node_modules/.bin/chromedriver",
        "cli_args": [
          "--verbose"
        ]
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true,
        "acceptSslCerts": true,
        "chromeOptions": {
          args: ['headless', 'disable-gpu']
        },
      }
    },
  }
}

module.exports = config;

function padLeft(count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/
  return count < 10 ? '0' + count : count.toString();
}

var FILECOUNT = 0; // "global" screenshot file count
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath(browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name); // this is the test filename so always exists.
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
