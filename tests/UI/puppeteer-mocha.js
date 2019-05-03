describe('Check the DuckDuckGo search results page', function () {
    let page;

    before(async function () {
        page = await browser.newPage();
        await page.goto('http://localhost:8081');
    });

    after(async function () {
        await page.close();
    })

    it('should have the correct page title', async function () {
        const SEARCHFIELD_SELECTOR = 'input[name="q"]';
        const BUTTON_SELECTOR = '#searchButton';
        await page.type(SEARCHFIELD_SELECTOR, 'donald trump simulator');
        await page.click(BUTTON_SELECTOR);
        await page.waitFor('.results--main');
        expect(await page.title()).to.eql('donald trump simulator site:github.com at DuckDuckGo');
    });

    it('should have correct first result', async function () {
        const RESULTS_SELECTOR = '.results--main';
        expect(await page.$$(RESULTS_SELECTOR)).to.have.lengthOf(1);
    });
});
