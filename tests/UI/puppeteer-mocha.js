describe('Check the DuckDuckGo search results page', function () {
    // let page;

    before(async function () {
        page = await browser.newPage();
        await page.goto('http://localhost:8081');
    });

    after(async function () {
        await page.close();
    })

    it('should have the correct page title and first search result', async function () {
        await page.type('input[name="q"]', 'TrumpKlon');
        await page.click('#searchButton');
        await page.waitFor('.results--main');
        expect(await page.title()).to.eql('TrumpKlon site:github.com at DuckDuckGo');
        await page.waitFor('.result__title');
        const firstresult = await page.$eval('.result__title', txt => txt.textContent.trim())
        expect(firstresult).to.eql('GitHub - blinkgestalten/TrumpKlon: An artwork for automated ...Your browser indicates if you\'ve visited this link');
    });
});
