const { createSession, closeSession, startWebDriver, stopWebDriver, client } = require('nightwatch-api');

async function setup(options) {
  await startWebDriver(options);
  await createSession();
}

async function shutdown() {
  await closeSession();
  await stopWebDriver();
  process.exit();
}

async function runtest() {

  // "client" is the browser object
  await client
    .url('http://localhost:8081')
    .setValue('input[name="q"]', 'donald trump simulator')
    .click('#searchButton')
    .assert.title('donald trump simulator site:github.com at DuckDuckGo')
    .assert.containsText('div.results--main', 'Donald Trump');
}

(async function () {
  try {
    // This line runs the setup function at the top, passing options to the nightwatch.conf.js, which starts webdriver
    await setup({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });

    // The line run the runtest function above
    await runtest();
  } 
  
  // If an error occurs, then this "traps" the error, so you can conteol the output.
  catch (err) {
    throw new Error(err);
  } 
  
  // Close all of the open browser windows, then stop chromedriver.
  finally {
    process.exitCode = 1;
    await shutdown();
  }
})();
