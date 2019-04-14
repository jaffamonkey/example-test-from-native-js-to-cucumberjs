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
    throw new Error(err);
  } finally {
    process.exitCode = 1;
    await shutdown();
  }
})();
