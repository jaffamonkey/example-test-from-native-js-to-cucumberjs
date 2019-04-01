var webdriver = require('w3c-webdriver');

let session;
(async () => {
  try {
    session = await webdriver.newSession('http://localhost:9515', {
      desiredCapabilities: {
        browserName: 'Chrome',
        chromeOptions: {
          args: ["headless", "disable-gpu"]
        }
      }
    });
    await session.go('https://elated-montalcini-28a317.netlify.com');
    console.log('Opening the homepage (Ok)');
    const element = await session.findElement('css selector', 'a');
    console.log('Finding the link on the homepage (Ok)');
    await element.click();
        console.log('Clicking the link (Ok)');
  } catch (err) {
    console.log(err.stack);
   } 
})();
