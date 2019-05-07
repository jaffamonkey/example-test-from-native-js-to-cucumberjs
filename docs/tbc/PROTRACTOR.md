# Protractor

Protractor is wrapper written on top of Webdriver.js, all the features which are supported in Selenium Webdriver are supported by it, in addition to angular specific features.

WebDriverJs is the Official javascript implementation of Selenium, and supports testing on many browsers (and versions), and is what enables us to be able to run tests against browsers.

In this guide we will mostly be using `chromedriver` which the webdriver browser driver (for Chrome).

The flow is `webdriver.js` (which you test code will be using) will communicate instructions to `selenium-server` which will in turn implement these instructions on a real browser using `chromedriver` (the webdriver browser driver).

`selenium-server` is generally not needed, as you can set up to execute browser actions directly through webdriver API. The server is a necessity when performing distributed testing on 2 or more machines.

The other layer is `jasmine`, a behavior-driven development framework for testing JavaScript code (included in the Protractor package).

# Setup

## Create repo

Create a new GitHub repo and clone to your laptop to work on.

## Protractor

From the repo folder, use npm to install Protractor:
```
npm install protractor
```
This will install two command line tools, protractor and webdriver-manager. 

A `package-lock.json` is also generated, along with the `node_modules` folder.

Check the version, which is also a check to see if its working:
```
protractor --version to make sure it's working.
```
## webdriver-manager

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. 

Use it to download the necessary binaries with:
```
./node_modules/.bin/webdriver-manager update
```
Now start up selenium server with:
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

`by.id('gobutton')` to find the element with the given id. This finds `<button id="gobutton">`.

`by.binding('latest')` to find the element bound to the variable latest. This finds the span containing `{{latest}`}


Run the tests with
```
protractor conf.js
```
You should see the page enter two numbers and wait for the result to be displayed. Because the result is 3, not 5, our test fails. Fix the test and try running it again.

# Multiple test scenarios

`spec.js`
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

`conf.js`
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

`conf.js`
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



# Locators 
The heart of end-to-end tests for webpages is finding DOM elements (buttons, images, form fields, etc), interacting with them, and getting information about the current state of your application. 

Protractor has global function `element`, which takes a Locator and will return an `ElementFinder`. This function finds a single element - if you need to manipulate multiple elements, use the element.all function.

The ElementFinder has a set of action methods, such as click(), getText(), and sendKeys. These are the core way to interact with an element and get information back from it.

When you find elements in Protractor all actions are asynchronous. Behind the scenes, all actions are sent to the browser being controlled using the JSON Webdriver Wire Protocol. The browser then performs the action as a user natively would.

## Common locators

// Find an element using a css selector.
`by.css('.myclass')`

// Find an element with the given id.
`by.id('myid')`

// Find an element using an input name selector.
`by.name('field_name')`

// Find an element with a certain ng-model.
// Note that at the moment, this is only supported for AngularJS apps.
`by.model('name')`

// Find an element bound to the given variable.
// Note that at the moment, this is only supported for AngularJS apps.
`by.binding('bindingname')`

**The locators are passed to the element function, as below:**

element(by.css('some-css'));
element(by.model('item.name'));
element(by.binding('item.name'));
When using CSS Selectors as a locator, you can use the shortcut $() notation:

`$('my-css');` is the same as: `element(by.css('my-css'));`

## Common Actions

The element() function returns an ElementFinder object. The ElementFinder knows how to locate the DOM element using the locator you passed in as a parameter, but it has not actually done so yet. It will not contact the browser until an action method has been called.

var el = element(locator);

// Click on the element.
el.click();

// Send keys to the element (usually an input).
el.sendKeys('my text');

// Clear the text in an element (usually an input).
el.clear();

// Get the value of an attribute, for example, get the value of an input.
el.getAttribute('value');
Since all actions are asynchronous, all action methods return a promise. So, to log the text of an element, you would do something like:

var el = element(locator);
el.getText().then(function(text) {
  console.log(text);
});

Any action available in WebDriverJS on a WebElement is available on an ElementFinder. See a full list.

## Finding Multiple Elements
To deal with multiple DOM elements, use the element.all function. This also takes a locator as its only parameter.

element.all(by.css('.selector')).then(function(elements) {
  // elements is an array of ElementFinders.
});
element.all() has several helper functions:

// Number of elements.
element.all(locator).count();

// Get by index (starting at 0).
element.all(locator).get(index);

// First and last.
element.all(locator).first();
element.all(locator).last();
When using CSS Selectors as a locator, you can use the shortcut $$() notation:

`$$('.selector');` is the same as: `element.all(by.css('.selector'));`

Finding Sub-Elements

To find sub-elements, simply chain element and element.all functions together as shown below.

Using a single locator to find:

an element

 element(by.css('some-css'));
a list of elements:

 element.all(by.css('some-css'));
Using chained locators to find:

a sub-element:

 element(by.css('some-css')).element(by.tagName('tag-within-css'));
to find a list of sub-elements:

 element(by.css('some-css')).all(by.tagName('tag-within-css'));
You can chain with get/first/last as well like so:

element.all(by.css('some-css')).first().element(by.tagName('tag-within-css'));
element.all(by.css('some-css')).get(index).element(by.tagName('tag-within-css'));
element.all(by.css('some-css')).first().all(by.tagName('tag-within-css'));
Behind the Scenes: ElementFinders versus WebElements
If you're familiar with WebDriver and WebElements, or you're just curious about the WebElements mentioned above, you may be wondering how they relate to ElementFinders.

When you call driver.findElement(locator), WebDriver immediately sends a command over to the browser asking it to locate the element. This isn't great for creating page objects, because we want to be able to do things in setup (before a page may have been loaded) like

var myButton = ??;
and re-use the variable myButton throughout your test. ElementFinders get around this by simply storing the locator information until an action is called.

var myButton = element(locator);
// No command has been sent to the browser yet.
The browser will not receive any commands until you call an action.

myButton.click();
// Now two commands are sent to the browser - find the element, and then click it.
ElementFinders also enable chaining to find subelements, such as element(locator1).element(locator2).

All WebElement actions are wrapped in this way and available on the ElementFinder, in addition to a couple helper methods like isPresent.

You can always access the underlying WebElement using elem