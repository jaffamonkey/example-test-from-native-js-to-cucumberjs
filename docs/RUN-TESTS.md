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

`npm run test:nightwatchapi` - command run: `node ./tests/UI/webdriver-nightwatchapi.js --config ./conf/nightwatchapi.conf.js`
`npm run test:nightwatch` - command run: `./node_modules/.bin/nightwatch --test ./tests/UI/webdriver-nightwatch.js --config ./conf/nightwatch.conf.js`
`npm run test:protractor` - command run: `./node_modules/.bin/webdriver-manager update && ./node_modules/.bin/protractor ./conf/protractor.conf.js`
