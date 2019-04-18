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

For convenience, there are small npm scripts to help

`npm run test:api` - command run: `node ./tests/API/api-test.js`
`npm run test:superagent` - command run: `node ./tests/API/api-test-superagent.js`
        
`npm run test:nightmare` - command run: `./node_modules/.bin/jest`
`npm run test:chai` - command run: `./node_modules/.bin/jest`

`npm run test:nightwatch` - command run: `node ./tests/UI/browser-test-nightwatch.js`
`npm run test:javascript` - command run: `node ./tests/UI/webdriver-javascript.js`
`npm run test:webdriverio` - command run: `node ./tests/UI/webdriverio-selenium.js`
`npm run test:webdriver` - command run: `node ./tests/UI/webdriver-node-async.js`

`npm run test:protractor` - command run: `./node_modules/.bin/protractor ./tests/adventurous/protractor/`
`npm run test:cucumberjs` - command run: `./node_modules/.bin/cucumber-js ./tests/adventurous/cucumberjs/`
`npm run test:mocha` - command run: `./node_modules/.bin/wdio --spec ./tests/adventurous/mocha-webdriverio-selenium.js`
`npm run lint` - command run: `./node_modules/.bin/eslint ./tests/**/**/*.js`
