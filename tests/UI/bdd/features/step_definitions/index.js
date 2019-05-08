const { Given, Then, When } = require('cucumber');
const World = require('../support/world');

Given('I am on test website homepage', async () => World.goToHomePage())

Given('I fill in the search field with {string}', async (string) => World.fillInSearchField(string))

When('I click the search button', async () => World.clickSearchButton())

Then('the page title is {string}', async (string) => World.thePageTitle(string))

Then('the first search result should contain {string}', async (string) => World.firstSearchResultContains(string))
