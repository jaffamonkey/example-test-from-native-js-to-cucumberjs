const until = require('protractor');

describe('Protractor Demo App', function () {
  var submitButton = element(by.css('.btn-primary'));
  var firstName = element(by.name('data[firstName]'));
  var lastName = element(by.name('data[lastName]'));
  var email = element(by.name('data[email]'));
  var phone = element(by.name('data[phoneNumber]'));
  var EC = protractor.ExpectedConditions;

  it('should give a valid search result', () => {
    browser.get('https://formio.github.io/angular-demo/#/');
    browser.wait(EC.presenceOf($('.formio-component-textfield')), 5000, 'Element taking too long to appear in the DOM');
    firstName.sendKeys('Simon');
    lastName.sendKeys('Says');
    email.sendKeys('simon.says@says.com');
    phone.sendKeys('07745 443221');
    submitButton.click();
    browser.wait(EC.presenceOf($('.alert')), 5000, 'Element taking too long to appear in the DOM');
    expect(element(by.css('div.alert')).getText()).toContain('Submission Complete.');
  });
});
