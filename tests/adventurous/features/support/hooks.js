'use strict';

var {Given, Then, When, Before, After} = require('cucumber');
var fs = require('fs');
var path = require('path');

  After(function (scenarioResult) {
    if (scenarioResult.isFailed) {
      this.driver.takeScreenshot().then(function (data) {
        var base64Data = data.replace(/^data:image\/png;base64,/, ""); scenarioResult.scenario.name
        var fileName = scenarioResult.scenario.name + "png";
        fs.writeFile(path.join('screenshots', filename.replaceAll("[^a-zA-Z0-9\\.\\-]", "_")), base64Data, 'base64', function (err) {
          if (err) console.log(err);
        });
      });
    }
    return this.driver.quit();
  });
