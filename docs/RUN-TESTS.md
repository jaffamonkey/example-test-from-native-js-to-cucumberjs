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

#### Start Chromedriver (ready for browser testing)
```
./node_modules/.bin/chromedriver
```
#### Start the web server
```
node ./web/server.js
```
#### Start test runniung
```
node ./tests/browser-test.js
```

## Nightwatch testing

Open a new tab in your Terminal program, for each command.

The same tests as above, but demonstrating the value of using a package to make the code mre readable and easier to maintain. In this case, using nightwatch-api.

There is no need to start up chromedriver, because nightwatch does this a test runtime.

#### Start the web server (if not already running
```
node ./web/server.js
```
#### Start test runniung
```
node ./tests/alternatives/browser-test-nightwatch.js
```

## Jest/Nightmare testing

A little more adventurous, but cleaner more readbale code - a combination of Jest and Nightmare, and requires only one command to start running the actual test.


#### Start the web server (if not already running)
```
node ./web/server.js
```
#### Start test runniung
```
./node_modules/.bin/jest ./tests/alternatives/browser-test-nightmare-jest.js

```

## API testing

Open a new tab in your Terminal program, for each command

#### Start the API server
```
node ./api/api.js
```
#### Run API tests
```
node tests/api-test.js

```
