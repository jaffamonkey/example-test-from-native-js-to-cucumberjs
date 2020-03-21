const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  client
} = require('nightwatch-api');

// Selenium server is not necessary as we are the the W3C webdriver API, so we just nbeed to start the browser driver
async function setup(env = 'chrome', configFile = './conf/nightwatch.conf.js') {
  await startWebDriver({ env, configFile });
  await createSession({ env, configFile });
}

// using async, available with ES6
async function shutdown() {
  await closeSession();
  await stopWebDriver();
}

async function run() {
  // "client" is the browser object
  await client
    .url('https://duckduckgo.com')
    .setValue('input[name="q"]', 'TrumpKlon')
    .click('#search_button_homepage')
    .assert.title('TrumpKlon site:github.com at DuckDuckGo')
    .assert.containsText('#links', 'Donald Trump');
}

(async function () {
  try {
    await setup('chrome');
    await run();
  } catch (err) {
    console.log(err.stack);
  } finally {
    await shutdown();
  }
})();
