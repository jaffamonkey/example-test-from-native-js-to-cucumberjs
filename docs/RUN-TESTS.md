# Browser and API tests

## The quick way

Open up your Terminal Program (for Macs. it's in the `Utilities` folder), and navigate to your repo folder. For example:
```
cd /User/myname/projects/repo-name
```
Then run these two shell script, which will do the setup and run all the tests at once.  
_To run individually, see further below._

```
sh set-up.sh
sh run-all-tests.sh
```

## Install

The tests need certain packages, which are listed in the `package.json` file.

From the terminal, run:
```
npm install
```

## Browser/API testing

Open a new tab in your Terminal program, for each command

#### Start the web server
```
node ./web/server.js
```
You will see this:
`Server running at http://127.0.0.1:8081/`

#### Start the API server
```
node ./api/api.js
```
You will see this:
`server running on port 3001`


#### Run webdriver-manager update (for Protractor test)
```
npm run wdupdate
```

#### Start tests running

### Test Environment

(To start the website and api server, that the tests will test against)

`npm run startweb` - command run: `node web/server.js &`
`npm run startapi` - command run: `node api/api.js &`

### API

`npm run test:api` - command run: `node ./tests/API/api-test.js`
`npm run test:superagent` - command run: `node ./tests/API/api-test-superagent.js`

### Nightwatch

`npm run test:nightwatch` - command run: `./node_modules/.bin/nightwatch --test ./tests/UI/webdriver-nightwatch.js --config ./conf/nightwatch.conf.js`

### Protractor

`npm run update-webdriver-manager` - command run: `./node_modules/.bin/webdriver-manager update`

`npm run test:protractor` - command run: `./node_modules/.bin/protractor ./conf/protractor.conf.js`

### Puppeteer

`npm run test:puppeteer` - command run: `./tests/UI/puppeteer.js`


### API

`npm run test:api` - command run: `node ./tests/API/api-test.js`
`npm run test:superagent` - command run: `node ./tests/API/api-test-superagent.js`

### Nightmare

`npm run test:nightmare` - command run: `./node_modules/.bin/mocha --recursive ./tests/UI/electron-nightmare-mocha.js`

### Jest

`npm run test:jest` - command run: `./node_modules/.bin/jest ./tests/UI/jest-webdriver.js"`

### Mocha

`npm run test:mocha` - command run: `./node_modules/.bin/mocha ./conf/puppeteer.conf.js --recursive ./tests/UI/puppeteer-mocha.js`

### NightwatchAPI

`npm run test:nightwatchapi` - command run: `node ./tests/UI/webdriver-nightwatchapi.js -e local`

### Node

`npm run test:javascript` - command run: `node ./tests/UI/webdriver-javascript.js`

### WebdriverIO

`npm run test:webdriverio` - command run: `node ./tests/UI/webdriverio-selenium.js`

### Node (Async)

`npm run test:webdriver` - command run: `node ./tests/UI/webdriver-node-async.js`

### Zombie

`npm run test:zombie` - command run: `./node_modules/.bin/mocha --recursive ./tests/UI/zombiejs.js`
