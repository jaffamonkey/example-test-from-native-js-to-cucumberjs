describe('Protractor Demo App', function () {
  var submitButton = element(by.css('.btn-primary'));
  var firstName = element(by.name('data[firstName]'));
  var lastName = element(by.name('data[lastName]'));
  var email = element(by.name('data[email]'));
  var phone = element(by.name('data[phone]'));
  var successMessage = element(by.css('alert'));

  beforeEach(() => {
    browser.get('https://formio.github.io/angular-demo/#/');
  });

  it('should give a valid search result', () => {
    firstName.sendKeys('Simon');
    lastName.sendKeys('Says');
    email.sendKeys('simon.says@says.com');
    phone.sendKeys('07745 443221');
    submitButton.click();
    expect(successMessage).toContain('Submission Complete.');
  });
});
