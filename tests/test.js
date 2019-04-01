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
    const screenshot = await session.takeScreenshot();
    screenshot.getScreenshotAs(OutputType.FILE);
    console.log('Opening the homepage (Ok)');
    const input = await session.findElement('css selector', '[name="q"]');
    console.log('Found element (Ok)');
    await input.sendKeys('donald trump simulator');
    console.log('Value entered in search field (Ok)');
    const button = await session.findElement('css selector', '[name="search"]');
    console.log('Found element (Ok)');
    await button.click();
    const result = await session.findElement('css selector', '.result__snippet');
    const text = await result.getText();
    console.log(text)
    console.log('Result output (Ok)');
  } catch (err) {
    console.log(err.stack);
   } 
})();
