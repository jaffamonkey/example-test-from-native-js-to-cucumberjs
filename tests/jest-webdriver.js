var webdriver = require('selenium-webdriver'),
    By = webdriver.By;

var browser = new webdriver
    .Builder()
    .usingServer()
    .withCapabilities({
        'browserName': 'chrome',
        'chromeOptions': {
            args: ["headless", "disable-gpu"]
        }
    }).build();

describe('Check the DuckDuckGo search results page', () => {

    it('Check the page title', async () => {
        await browser.get('https://duckduckgo.com');
        await browser.findElement(By.name('q')).sendKeys('TrumpKlon');
        await browser.findElement(By.id('search_button_homepage')).click();
        var title = await browser.getTitle();
        expect(title).toEqual('TrumpKlon at DuckDuckGo');
        var result = await browser.findElement(By.className('result__title')).getText();
        expect(result).toMatch(/TrumpKlon/);
    });
});
