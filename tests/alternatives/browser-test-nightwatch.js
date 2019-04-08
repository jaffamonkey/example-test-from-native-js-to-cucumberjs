const { createSession, closeSession, startWebDriver, stopWebDriver, client } = require('nightwatch-api');

// Using async means not having to specify a step to wait for elements to load

async function setup(options) {
  await startWebDriver(options);
  await createSession();
}

async function shutdown() {
  await closeSession();
  await stopWebDriver();
  process.exit();
}

async function run() {
  await client
    .url('http://localhost:8081')
    .setValue('input[name="q"]', 'donald trump simulator')
    .click('#searchButton')
    .assert.title('donald trump simulator site:github.com at DuckDuckGo')
    .assert.containsText('.results--main', 'Donald Trump');
}

(async function () {
  try {
    await setup({ env: process.env.NIGHTWATCH_ENV || 'chromeHeadless' });
    await run();
  } catch (err) {
    console.log(err.stack);
    process.exitCode = 1;
  } finally {
    await shutdown();
  }
})();
