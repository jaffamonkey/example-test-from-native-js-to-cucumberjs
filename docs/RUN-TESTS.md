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
yarn
```

#### Start the API server
```
node ./servers/api/api.js
```
You will see this:
`server running on port 3001`


#### Run webdriver-manager update (for Protractor test)
```
npm run wdupdate
```

#### Start tests running

### API

`npm run test:api` - command run: `node ./tests/api-test.js`
`npm run test:superagent` - command run: `node ./tests/api-test-superagent.js`

### Nightwatch/Webdriver

`npm run test:nightwatch` - command run: `./node_modules/.bin/nightwatch --test ./tests/nightwatch-webdriver.js --config ./nightwatch.json`

### Protractor/Webdriver-manager/Jasmine

`npm run update-webdriver-manager` - command run: `./node_modules/.bin/webdriver-manager update`

`npm run test:protractor` - command run: `./node_modules/.bin/protractor ./protractor.conf.js`

### Puppeteer

`npm run test:puppeteer` - command run: `./tests/puppeteer.js`

### Nightmare/Mocha

`npm run test:nightmare` - command run: `./node_modules/.bin/mocha --recursive ./tests/electron-nightmare-mocha.js`

### Jest/Webdriver

`npm run test:jest` - command run: `./node_modules/.bin/jest ./tests/jest-webdriver.js"`

### Mocha/Puppoeteer

`npm run test:mocha` - command run: `./node_modules/.bin/mocha ./puppeteer.conf.js --recursive ./tests/mocha-puppeteer.js`

### Nightwatch-api/Webdriver

`npm run test:nightwatchapi` - command run: `node ./tests/nightwatchapi-webdriver.js -e default`

### Node/Webdriver

`npm run test:javascript` - command run: `node ./tests/webdriver-javascript.js`

### Webdriver-async

`npm run test:webdriver` - command run: `node ./tests/webdriver-node-async.js`

### Zombie/Mocha

`npm run test:zombie` - command run: `./node_modules/.bin/mocha --recursive ./tests/zombiejs.js`
