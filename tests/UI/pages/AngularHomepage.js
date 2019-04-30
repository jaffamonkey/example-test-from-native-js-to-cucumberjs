var AngularHomepage = function () {

  this.openhomepage = async function () {
    await browser.get('https://formio.github.io/angular-demo/#/');
  };
};
module.exports = new AngularHomepage();