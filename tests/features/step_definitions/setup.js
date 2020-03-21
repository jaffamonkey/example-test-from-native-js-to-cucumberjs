const { After, Before } = require('cucumber');
const World = require('../support/world');

function testCaseHook(finished, testCase, callback) {
  if (!finished) {
    World.start();
  }

  if (callback) {
    callback();
  }
}

const after = testCaseHook.bind(this, true);

const before = testCaseHook.bind(this, false);

Before(before);
After(after);

After(() => World.end());
