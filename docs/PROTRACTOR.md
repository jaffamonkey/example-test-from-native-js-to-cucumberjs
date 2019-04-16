# Setup

Create a new GitHub repo and clone to your laptop to work on

Use npm to install Protractor:

npm install protractor

This will install two command line tools, protractor and webdriver-manager. 

Try running protractor --version to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. 

Use it to download the necessary binaries with:

```
./node_modules/.bin/webdriver-manager update
```

Now start up a server with:
```
./node_modules/.bin/webdriver-manager start
```

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. 

Leave this server running throughout the tutorial. You can see information about the status of the server at http://localhost:4444/wd/hub.

# Create a test 

Protractor needs two files to run, a spec file and a configuration file.

// spec.js
```describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
  });
});
```

`describe` is from the Jasmine framework. 
`browser` is a global created by Protractor, which is used for browser-level commands

// conf.js
```
exports.config = {

  // specifies that we are using Jasmine framework
  framework: 'jasmine',

  // Address of the selenium server (Protractor is a wrapper)  
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Tells Protractor what the test files are
  specs: ['spec.js']
}
```

# To Run The Tests

```protractor conf.js
```
You should see a Chrome browser window open up and navigate to the Calculator, then close itself (this should be very fast!). The test output should be 1 tests, 1 assertion, 0 failures. Congratulations, you've run your first Protractor test!

Step 1 - interacting with elements
Now let's modify the test to interact with elements on the page. Change spec.js to the following:

// spec.js
```
describe('Protractor Demo App', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
        toEqual('5'); // This is wrong!
  });
});
```

This uses the globals element and by, which are also created by Protractor. The element function is used for finding HTML elements on your webpage. It returns an ElementFinder object, which can be used to interact with the element or get information from it. In this test, we use sendKeys to type into <input>s, click to click a button, and getText to return the content of an element.

element takes one parameter, a Locator, which describes how to find the element. The by object creates Locators. Here, we're using three types of Locators:


`by.model('first')` to find the element with `ng-model="first"`. 

If you inspect the Calculator page source, you will see this is `<input type="text" ng-model="first">`.

by.id('gobutton') to find the element with the given id. This finds `<button id="gobutton">`.

by.binding('latest') to find the element bound to the variable latest. This finds the span containing `{{latest}`}


Run the tests with
```
protractor conf.js
```
You should see the page enter two numbers and wait for the result to be displayed. Because the result is 3, not 5, our test fails. Fix the test and try running it again.

# Multiple test scenarios

// spec.js
```describe('Protractor Demo App', function() {
  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));

  beforeEach(function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);

    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });

  it('should add four and six', function() {
    // Fill this in.
    expect(latestResult.getText()).toEqual('10');
  });

  it('should read the value from an input', function() {
    firstNumber.sendKeys(1);
    expect(firstNumber.getAttribute('value')).toEqual('1');
  });
});
```

Here, we've pulled the navigation out into a beforeEach function which is run before every it block. We've also stored the ElementFinders for the first and second input in nice variables that can be reused. Fill out the second test using those variables, and run the tests again to ensure they pass.

In the last assertion we read the value from the input field with firstNumber.getAttribute('value') and compare it with the value we have set before.

Step 3 - changing the configuration
Now that we've written some basic tests, let's take a look at the configuration file. The configuration file lets you change things like which browsers are used and how to connect to the Selenium Server. Let's change the browser. Change conf.js to the following:

// conf.js
```
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}
```

Try running the tests again. You should see the tests running on Firefox instead of Chrome. The capabilities object describes the browser to be tested against. For a full list of options, see the config file.

You can also run tests on more than one browser at once. Change conf.js to:

// conf.js
```exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}
```

Try running once again. You should see the tests running on Chrome and Firefox simultaneously, and the results reported separately on the command line.