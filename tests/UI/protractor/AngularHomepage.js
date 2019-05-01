
module.exports = {

  submitButton: element(by.css('.btn-primary')),
  firstName: element(by.name('data[firstName]')),
  lastName: element(by.name('data[lastName]')),
  email: element(by.name('data[email]')),
  phone: element(by.name('data[phoneNumber]')),

  openhomepage: async function () {
    await browser.get('https://formio.github.io/angular-demo/#/');
  },
  randomAlphaCharsWord: function (numChars) {
    let text = Math.random().toString(36).substring(numChars);
    return text;
  },
  randomEmail: function (numChars) {
    var allowedChars = "abcdefghiklmnopqrstuvwxyz";
    var randomstring = '';
    for (var i = 0; i < numChars; i++) {
      var rnum = Math.floor(Math.random() * allowedChars.length);
      randomstring += allowedChars.substring(rnum, rnum + 1);
    }
    randomstring += "@testemaildomain.com";
    return randomstring;
  },
  randomPhone: function () {
    var randomnum = '';
    // Generate random 10-digit number
    randomnum = String(Math.random()).substring(2, 12);
    return randomnum;
  }
};
