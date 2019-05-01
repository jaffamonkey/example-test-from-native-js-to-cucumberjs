var home = require('./protractor/AngularHomepage');
var utility = require('./protractor/Utility');
var firstname = utility.randomAlphaCharsWord(10);
var lastname = utility.randomAlphaCharsWord(10);
var email = utility.randomEmail(10);
var phone = utility.randomPhone(10);

describe('Protractor Demo App', () => {
  // we are using a proatctor library function ExpectedConditions

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
