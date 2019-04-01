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
    const input = await session.findElement('css selector', '[name="q"]');
    console.log('Found element (Ok)');
    await a.sendKeys('donald trump simulator');
    console.log('Value entered in search field and submitted (Ok)');
    const result = await session.findElement('css selector', '.repo-list');
    const text = await result.getText();
    console.log(text)
  } catch (err) {
    console.log(err.stack);
   } 
})();
