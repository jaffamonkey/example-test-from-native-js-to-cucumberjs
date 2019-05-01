var home = require('./protractor/AngularHomepage');

describe('Protractor Demo App', function () {
  // we are using a proatctor library function ExpectedConditions
  var EC = protractor.ExpectedConditions;

  it('should give a valid search result', () => {
    browser.get('https://formio.github.io/angular-demo/#/');
    browser.wait(EC.presenceOf($('.formio-component-textfield')), 5000, 'Element taking too long to appear in the DOM');
    home.firstName.sendKeys(home.randomAlphaCharsWord(10));
    home.lastName.sendKeys(home.randomAlphaCharsWord(10));
    home.email.sendKeys(home.randomEmail(10));
    home.phone.sendKeys(home.randomPhone());
    home.submitButton.click(home.submitButton);
    browser.wait(EC.presenceOf($('.alert')), 5000, 'Element taking too long to appear in the DOM');
    expect(element(by.css('div.alert')).getText()).toContain('Submission Complete.');
  });
});
