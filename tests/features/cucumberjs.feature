Feature: Testing the test website
  
  Scenario: Testing searching
    Given I am on test website homepage
    And I fill in the search field with "TrumpKlon"
    When I click the search button
    And the page title is "TrumpKlon at DuckDuckGo"
    Then the first search result should contain "TrumpKlon"
