/* global element, expect, by, protractor, browser, $*/
var Utility = function () {
  var EC = protractor.ExpectedConditions;

  this.waitForElement = async (el) => {
    await browser.wait(EC.presenceOf($(el)), 5000, 'Element taking too long to appear in the DOM');
  };

  this.randomAlphaCharsWord = (numChars) => {
    let text = Math.random().toString(36).substring(numChars);
    return text;
  };

  this.takeScreenshot = (data, filename) => {
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(data, 'base64'));
    stream.end();
  };

  this.randomEmail = (numChars) => {
    var allowedChars = "abcdefghiklmnopqrstuvwxyz";
    var randomstring = '';
    for (var i = 0; i < numChars; i++) {
      var rnum = Math.floor(Math.random() * allowedChars.length);
      randomstring += allowedChars.substring(rnum, rnum + 1);
    }
    randomstring += "@testemaildomain.com";
    return randomstring;
  };

  this.randomPhone = (numInt) => {
    var randomnum = '';
    // Generate random 10-digit number
    randomnum = String(Math.random()).substring(2, numInt + 2);
    return randomnum;
  };

  this.areaContains = async (selector, text) => {
    await browser.wait(EC.presenceOf($(selector)), 5000, 'Element taking too long to appear in the DOM');
    expect(await element(by.css(selector)).getText()).toContain(text);
  };

  this.clickButton = async (selector) => {
    await element(by.css(selector)).click();
    await browser.wait(EC.presenceOf($('div.alert')), 5000, 'Element taking too long to appear in the DOM');
  }
};
module.exports = new Utility();
