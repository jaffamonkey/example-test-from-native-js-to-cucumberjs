[![Build Status](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify.svg?branch=master)](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify)

_Part of the "zero to vanilla web developer and test engineer" workshop (zero, as in zero prior knowledge)_

### FOR FULL GUIDE ON THIS REPO PLEASE READ `GUIDE.md` in the `docs` folder

## Folder descriptions

`docs` Where the guides live
`test` Where the website tests live
`web` Where to basic website lives, that we will use to test and deploy

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

_See full guide for creating GitHub Repo, Creating A Travis Build Job and Deploying Website To Netlify (Go Live!)_
