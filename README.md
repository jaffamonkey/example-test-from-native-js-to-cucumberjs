[![Build Status](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify.svg?branch=master)](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify)

_Part of the "zero to vanilla web developer and test engineer" workshop (zero, as in zero prior knowledge)_

### FOR FULL GUIDE ON THIS REPO PLEASE READ `GUIDE.md` in the `docs` folder

## Folder descriptions

* `docs` Where the guides live
* `test` Where the website tests live
* `web` Where to basic website lives, that we will use to test and deploy

## Files descriptions

* `.travis.yml` This the config file for deployment to Travis CI
* `netlify.toml` This the config file for deployment to Netlify cloud server
* `.gitignore` When working on code, there are files and folders that you don't want included and they are specified here.
* `web/index.html` The basic website for purpose of learning coding, testing and deploying
* `tests/test.js` The executable test that will open the basic website, fill and search form and check results.

## Requirements

* NodeJS (11+)
* Git
* Mac/Linux/Windows 

I would advice using the command-line Terminal program wherever possible, for the increased learning potential

On Windows, use the Gitbash terminal program that is part of the Git Windows package.


## Install test framework components and run tests

```
cd path-to-your-repo/tests
npm install w3c-webdriver
npm install chromedriver
./node_modules/.bin/chromedriver &
node test.js
```

_See full guide for creating GitHub Repo, Creating Basic Website, Creating A Travis Build Job and Deploying Website To Netlify (Go Live!)_
