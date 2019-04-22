node ./tests/API/api-test.js
node ./tests/API/api-test-superagent-assert.js
./node_modules/.bin/jest
node ./tests/UI/webdriver-nightwatchapi.js --config ./conf/nightwatch.conf.js
node ./tests/UI/webdriver-javascript.js
node ./tests/UI/webdriverio-selenium.js
node ./tests/UI/webdriver-node-async.js
./node_modules/.bin/webdriver-manager update && ./node_modules/.bin/protractor ./conf/wdio.conf.js
