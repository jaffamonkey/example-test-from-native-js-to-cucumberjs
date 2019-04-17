describe('Protractor Demo App', function () {
  var searchButton = element(by.model('message.searchPrompt'));
  var searchField = element(by.css('.btn-primary'));
  var firstResult = element(by.css('.result__snippet'));

  beforeEach(() => {
    browser.get('http://localhost:8081/angular');
  });

  it('should give a valid search result', () => {
    searchField.sendKeys('donald trump simulator');
    searchButton.click();
    expect(firstResult.getText()).toContain('TrumpKlon');
  });
});