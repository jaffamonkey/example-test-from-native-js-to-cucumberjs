var home = require('./page-objects/protractor/AngularHomepage');
var utility = require('./page-objects/protractor/Utility');

var firstname = utility.randomAlphaCharsWord(10);
var lastname = utility.randomAlphaCharsWord(10);
var email = utility.randomEmail(10);
var phone = utility.randomPhone(10);

// Protractor uses Jasmine framework by default
describe('Complete form and check verification message', function () {

  // using async, available with ES6
  it('fill in a valid form', function() {
    home.getHomepage();
    home.setFirstName(firstname);
    home.setLastName(lastname);
    home.setEmail(email);
    home.setPhone(phone);
    utility.clickButton('.btn-primary');
    utility.areaContains('div.alert', 'Submission Complete.');
  });
}); 
