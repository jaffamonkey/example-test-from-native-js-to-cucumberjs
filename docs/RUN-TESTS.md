# Browser and API tests

## Requirements
Open up your Terminal Program (for Macs. it's in the `Utilities` folder), and navigate to your repo folder. For example:
```
cd /User/myname/projects/repo-name
```
Then install the packages listed in Dependencies section of the `package.json` file.
```
npm install
```

## Browser testing

Open a new tab in your Terminal program, for each command

#### Start the web server
```
node ./web/server.js
```

#### Start the API server
```
node ./api/api.js
```

#### Start test running

### Test Environment

(To start the website and api server, that the tests will test against)

`npm run startweb` - command run: `node web/server.js &`
`npm run startapi` - command run: `node api/api.js &`

### Nightwatch

`npm run test:nightwatch` - command run: `./node_modules/.bin/nightwatch --test ./tests/UI/webdriver-nightwatch.js --config ./conf/nightwatch.conf.js`

### Protractor

`npm run update-webdriver-manager` - command run: `./node_modules/.bin/webdriver-manager update`

`npm run test:protractor` - command run: `./node_modules/.bin/protractor ./conf/protractor.conf.js`


### API

`npm run test:api` - command run: `node ./tests/API/api-test.js`
`npm run test:superagent` - command run: `node ./tests/API/api-test-superagent.js`

### Nightmare

`npm run test:nightmare` - command run: `./node_modules/.bin/jest`

### Chai

`npm run test:chai` - command run: `./node_modules/.bin/jest`

### NightwatchAPI

`npm run test:nightwatchapi` - command run: `node ./tests/UI/webdriver-nightwatchapi.js -e local`

### Node

`npm run test:javascript` - command run: `node ./tests/UI/webdriver-javascript.js`


`npm run test:webdriverio` - command run: `node ./tests/UI/webdriverio-selenium.js`

### Node (Async)

`npm run test:webdriver` - command run: `node ./tests/UI/webdriver-node-async.js`

### CucumberJS

`npm run test:cucumberjs` - command run: `./node_modules/.bin/cucumber-js -r tests/UI/cucumberjs-chai-webdriver/**/*.js ./tests/UI/*.feature`
