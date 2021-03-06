const puppeteer = require('puppeteer');

(async function () {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://duckduckgo.com');
    // Type into search box.
    await page.type('input[name="q"]', 'TrumpKlon');
    await page.click('#search_button_homepage');
    await page.waitForSelector('#zci-github');
    // Wait for suggest overlay to appear and click "show all results".
    const stringIsIncluded = await page.evaluate(function () {
      const resultsSelector = '#zci-github';
      const string = 'TrumpKlon';
      return document.querySelector(resultsSelector).innerText.includes(string);
    });
    console.log(stringIsIncluded);
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
