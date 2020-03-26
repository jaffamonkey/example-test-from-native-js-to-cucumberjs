
#! /bin/sh
PURPLE='\033[0;35m'
LIGHTBLUE='\033[0;34m'
echo "${PURPLE}TEST RUN STARTING ..."
echo "${PURPLE}Running test using ${LIGHTBLUE}mocha/puppeteer/chromium"
npm run test:mocha
echo "${PURPLE}Running test using ${LIGHTBLUE}nightmarejs/mocha/electron"
npm run test:nightmare
echo "${PURPLE}Running test using ${LIGHTBLUE}jest/webdriver"
npm run test:jest
echo "${PURPLE}Running test using ${LIGHTBLUE}nightwatch-api/chromedriver"
npm run test:nightwatchapi
echo "${PURPLE}Running test using ${LIGHTBLUE}nightwatch/chromedriver"
npm run test:nightwatch
echo "${PURPLE}Running test using ${LIGHTBLUE}javascript/webdriver"
npm run test:javascript
echo "${PURPLE}Running test using ${LIGHTBLUE}node/webdriver"
npm run test:webdriver
echo "${PURPLE}Running test using ${LIGHTBLUE}protractor/webdriver"
npm run test:protractor
echo "${PURPLE}Running test using ${LIGHTBLUE}puppeteer/chromium"
npm run test:puppeteer
echo "${PURPLE}Running test using ${LIGHTBLUE}zombiejs"
npm run test:zombie
echo "${PURPLE}Running test using ${LIGHTBLUE}cucumberjs/chromedriver"
npm run test:cucumberjs
echo "${PURPLE}TEST RUN COMPLETE"
