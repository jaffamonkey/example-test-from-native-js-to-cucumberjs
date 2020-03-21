
/* global element, by, protractor, browser, $*/
var AngularHomepage = function () {

  var firstName = element(by.name('data[firstName]'));
  var lastName = element(by.name('data[lastName]'));
  var email = element(by.name('data[email]'));
  var phone = element(by.name('data[phoneNumber]'));

  // using async, available with ES6
  this.getHomepage = async () => {

    // we are using a proatctor library function ExpectedConditions
    var EC = protractor.ExpectedConditions;
    await browser.get('https://formio.github.io/angular-demo/#/');
    await browser.wait(EC.presenceOf($('.formio-component-firstName')), 5000, 'Element taking too long to appear in the DOM');
  };

  this.setFirstName = async (firstname) => {
    await firstName.sendKeys(firstname);
  };

  this.setLastName = async (lastname) => {
    await lastName.sendKeys(lastname);
  };

  this.setEmail = async (emailaddress) => {
    await email.sendKeys(emailaddress);
  };

  this.setPhone = async (phonenumber) => {
    await phone.sendKeys(phonenumber);
  };
};
module.exports = new AngularHomepage();
