describe('Check the DuckDuckGo search results page', function () {
    // let page;

    before(async function () {
        page = await browser.newPage();
        await page.goto('https://duckduckgo.com');
    });

    after(async function () {
        await page.close();
    })

    it('should have the correct page title and first search result', async function () {
        await page.type('input[name="q"]', 'TrumpKlon');
        await page.click('#search_button_homepage');
        await page.waitFor('.results--main');
        expect(await page.title()).to.eql('TrumpKlon at DuckDuckGo');
        await page.waitFor('.result__title');
        await page.screenshot({path: './tests/screenshots/puppeteer-mocha-test-screenshot.png'});
        const firstresult = await page.$eval('.result__title', txt => txt.textContent.trim())
        expect(firstresult).to.eql('GitHub - blinkgestalten/TrumpKlon: An artwork for automated tweet...Your browser indicates if you\'ve visited this link');
    });
});
