var webdriver = require('w3c-webdriver');

// Mainly useful for development, but for the test "async" provide 
// useful way to makde tests run smoothly, by reducing time between the steps.
(async () => {
  try {

    // This part starts up webdriver and specifies the browser options
    session = await webdriver.newSession('http://localhost:9515', {
      desiredCapabilities: {
        browserName: 'Chrome',
        chromeOptions: {
          args: ["headless", "disable-gpu"]
        }
      }
    });

    // This is the point the browser first opens
    await session.go('http://localhost:8081');

    // console.log is standard Javascript to output text to the screen.
    // Is this context, it's outputting confirmation message step passed ok.
    console.log('Opening the homepage (Ok)');

    // Locating the field that has name "q" 
    // "await" tells the test to wait until element is visible (can timeout)
    const input = await session.findElement('css selector', '[name="q"]');
    console.log('Found element (Ok)');

    // Fill in field "q" with the text within the brackets
    await input.sendKeys('donald trump simulator');
    console.log('Value entered in search field (Ok)');

    // Locating the field that has name "search" 
    const button = await session.findElement('css selector', '[name="search"]');
    console.log('Found element (Ok)');

    // Click on the "search" button
    await button.click();
    const result = await session.findElement('css selector', '.result__snippet');
    const text = await result.getText();
    console.log('Result output (Ok)');

    // The line below will return a value of True or False.
    // This depends on whether the results text contains the expected value.
    const check = text.includes('Donald Trump');

    // A basic if-else function - the 3 "=" are necessary when checking boolean value
    if (check === true) {
      console.log('The actual results match the expected results')
    }
    else {
      console.log('The actual results does not match the expected results')
    }
  }
  // When a step fails, the test immediately exit and this function outputs error detail to the screen.
  catch (err) {
    console.log(err.stack);
  }
  // Closes web browser
  finally {
    session.deleteSession;
  }
})();
