[![Build Status](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify.svg?branch=master)](https://travis-ci.org/jaffamonkey/starter-github-html-tests-travis-netlify)

_Part of the "zero to vanilla web developer and test engineer" workshop (zero, as in zero prior knowledge)_

### FOR FULL GUIDE ON THIS REPO PLEASE READ `GUIDE.md` in the `docs` folder

## Folder descriptions

* `docs` Where the guides live
* `tests` Where the website tests live
* `api` Where the simple API server lives (optional to look at)
* `web` Where to basic website lives, that we will use to test and deploy
* `node_modules` When you run npm install, this folder is created with the packages (optional to look at)

## Files descriptions

* `.travis.yml` This the config file for deployment to Travis CI
* `netlify.toml` This the config file for deployment to Netlify cloud server
* `.gitignore` When working on code, there are files and folders that you don't want included and they are specified here.
* `web/index.html` The basic website for purpose of learning coding, testing and deploying
* `tests/test.js` The executable test that will open the basic website, fill and search form and check results.
* `package.json` This contain the development packages we need for the test framework
* `package-lock.json` This is created upon first install run, and records all versions installed.

## Software you need your laptop

On Macs you can use the ```brew``` package manager to install these (or ```npm``` on Linux or Windows)

| MacOS                   | Linux ( Debian, Ubuntu, Linux Mint)   | Windows                 |
| ----------------------- | ------------------------------------- | ----------------------- |
| ```brew install node``` | ```sudo apt-get install nodejs npm``` | Download/Install NodeJS |
| ```brew install git```  | ```npm install -g git```              | Download/Install Git    |

* 
* brew install git

I would advise using a decent IDE to code in, like Visual Studio Code (free)/

_On Windows, use the Gitbash terminal program that is part of the Git Windows package._


## Install test framework components and run website tests

```
npm install
./node_modules/.bin/chromedriver &
node tests/test.js
```

_See full guide for creating GitHub Repo, Creating Basic Website, Creating A Travis Build Job and Deploying Website To Netlify (Go Live!)_
