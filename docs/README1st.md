_Part of the "zero to vanilla web developer and test engineer" workshop (zero, as in zero prior knowledge)_

**FOR FULL GUIDE ON THIS REPO PLEASE READ `TRAINING-GUIDE-1.md` in the `docs` folder (`TRAINING-GUIDE-2.md` is TBD)**

## Folder descriptions

* `docs` Where the guides live **(Training Guides 1 & 2)**
* `tests` Where the website tests live **(Training Guides 1 & 2)**
* `api` Where the simple API server lives **(Training Guide 2)**
* `web` Where to basic website lives, that we will use to test and deploy **(Training Guides 1 & 2)**
* `node_modules` When you run npm install, this folder is created with the packages (optional to look at)

## Guides in `docs` folder

* `docs/RUN-TESTS.md` Follow this if you just want to run the tests.
* `docs/SYSTEM-REQUIREMENTS.md` This has the software you will need on your machine, before starting.
* `docs/TRAINING-GUIDE-1.md` The training guide
* `docs/TRAINING-GUIDE-2.md` The training guide part 2 (TBD)
* `docs/GITHUB.md` A guide specifically for GitHub features (TBD)

## File descriptions

**(Training Guides 1 & 2)**

* `.travis.yml` This the config file for deployment to Travis CI
* `netlify.toml` This the config file for deployment to Netlify cloud server
* `.gitignore` When working on code, there are files and folders that you don't want included and they are specified here.
* `web/index.html` The basic website for purpose of learning coding, testing and deploying\
* `package-lock.json` This is created upon first install run, and records all versions installed.
* `package.json` This contain the development packages we need for the test framework
* `tests/browser-test.js` The executable test that will open the basic website, fill and search form and check results.

#### Additional file descriptions

**(Training Guide 2)**

* `api/api.js` A barebones API server
* `tests/api-test-get.js` API tests for GET API action (for example, requesting a webpage)
* `tests/api-test-post.js` API tests for POST API action (for example, submitting a contact form)
* `web/client.js` A barebones app
* `web/client.js` A barebones web client
* `web/server.js` A barebones http server 

## What's installed

* `selenium-webdriver` A "remote control" for web browsers; enable us to perform browser actions using code 
* `chromedriver` ChromeDriver is a separate program that Selemium Webdriver uses to control Chrome
* `body-parser` This is for the API server and cleans input data
* `express` A mininal application server for the API server
* `superagent` Provides features for testing API's
