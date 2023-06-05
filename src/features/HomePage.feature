Feature: Home Page

  Scenario: Clicking the button shows success message
    Given I am on the Home page
    When I click on the button
    Then I should see a success message
