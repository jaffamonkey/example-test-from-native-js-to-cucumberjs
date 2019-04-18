const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  client
} = require('nightwatch-api');

async function setup(env = 'chrome') {
  await startWebDriver({ env });
  await createSession({ env });
}

async function shutdown() {
  await closeSession();
  await stopWebDriver();
}

async function run() {
  // "client" is the browser object
  await client
    .url('http://localhost:8081')
    .setValue('input[name="q"]', 'donald trump simulator')
    .click('#searchButton')
    .assert.title('donald trump simulator site:github.com at DuckDuckGo')
    .assert.containsText('div.results--main', 'TrumpKlon');
}

(async function() {
  try {
    await setup('chrome');
    await run();
  } catch (err) {
    console.log(err.stack);
  } finally {
    await shutdown();
  }
})();
