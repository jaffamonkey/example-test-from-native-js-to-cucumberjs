describe('Protractor Demo App', function () {
  var submitButton = element(by.css('.btn-primary'));
  var firstName = element(by.name('data[firstName]'));
  var lastName = element(by.name('data[lastName]'));
  var email = element(by.name('data[email]'));
  var phone = element(by.name('data[phoneNumber]'));

  it('should give a valid search result', () => {
    browser.get('https://formio.github.io/angular-demo/#/');
    firstName.sendKeys('Simon');
    lastName.sendKeys('Says');
    email.sendKeys('simon.says@says.com');
    phone.sendKeys('07745 443221');
    submitButton.click();
    const successMessage = element(by.css('div.alert'));
    expect(successMessage.getText()).toContain('Submission Complete.');
  });
});
