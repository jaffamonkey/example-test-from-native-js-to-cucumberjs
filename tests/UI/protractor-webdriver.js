/* global describe, it */
var home = require('./page-objects/protractor/AngularHomepage');
var utility = require('./page-objects/protractor/Utility');
var firstname = utility.randomAlphaCharsWord(10);
var lastname = utility.randomAlphaCharsWord(10);
var email = utility.randomEmail(10);
var phone = utility.randomPhone(10);

// Protractor uses Jasmine framework by default
describe('Complete form and check verification message', () => {

  // using async, available with ES6
  it('fill in a valid form', async () => {
    await home.getHomepage();
    await home.setFirstName(firstname);
    await home.setLastName(lastname);
    await home.setEmail(email);
    await home.setPhone(phone);
    await utility.clickButton('.btn-primary');
    await utility.areaContains('div.alert', 'Submission Complete.');
  });
}); 
