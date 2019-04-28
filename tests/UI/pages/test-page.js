module.exports = {

  clickSearchButton: function () {
    return browser.click('#searchButton');
  },
    //Initiate page elements
    elements: {

      // establish key variables
      searchButton: '#searchButton',
      searchField: 'input[name="q"]',
      searchResults: 'div.results--main',
      pageTitle: 'donald trump simulator site:github.com at DuckDuckGo'
    }
};
