import webdriver from 'w3c-webdriver';
let session;
(async () => {
  try {
    session = await webdriver.newSession('http://localhost:4444', {
      desiredCapabilities: {
        browserName: 'Chrome',
        chromeOptions: {
          args: ["headless", "disable-gpu"]
        }
      }
    });
    await session.go('http://your-netlify-web-address');
    const element = await session.findElement('css selector', 'a');
    await element.click();
  } catch (err) {
    console.log(err.stack);
  } finally {
    session.deleteSession();
  }
})();
