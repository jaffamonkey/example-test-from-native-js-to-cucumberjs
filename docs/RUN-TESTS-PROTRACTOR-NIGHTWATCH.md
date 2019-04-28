# Browser tests

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

For convenience, there are small npm scripts to help

### Nightwatch

(To start the website that nightwatch will run tests against)

`npm run start-server` - command run: `node web/server.js &`

`npm run test:nightwatch` - command run: `./node_modules/.bin/nightwatch --test ./tests/UI/webdriver-nightwatch.js --config ./conf/nightwatch.conf.js`

### Protractor

`npm run update-webdriver-manager` - command run: `./node_modules/.bin/webdriver-manager update`

`npm run test:protractor` - command run: `./node_modules/.bin/protractor ./conf/protractor.conf.js`
