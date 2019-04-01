[![Build Status](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify.svg?branch=master)](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify)

_Part of the "zero to vanilla web developer and test engineer" workshop (zero, as in zero prior knowledge)_

### FOR FULL GUIDE ON THIS REPO PLEASE READ `GUIDE.md` in the `docs` folder

## Requirements

* NodeJS (11+)
* Git
* Mac/Linux/Windows (On Windows, use the Gitbash program that is part of the Git Windows package).

# Install and run tests

```
cd tests
npm install w3c-webdriver
npm install chromedriver
./node_modules/.bin/chromedriver &
node test.js
```


