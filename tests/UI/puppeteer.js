'use strict';

const puppeteer = require('puppeteer');


(async() => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://localhost:8081');
  await page.screenshot({path: './tests/UI/screenshots/full.png', fullPage: true});
  await browser.close();
})();