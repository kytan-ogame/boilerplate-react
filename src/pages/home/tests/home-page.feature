Feature: Home Page

  Scenario: Clicking the button shows success message
    Given the endpoint api/counter/default-value will respond "5"
    And the user is on the Default page
    Then the section "home-page-wrapper" is displayed
    And the section "counter-value" has text content "5"
    When the user clicks on the button "decrement-counter"
    Then the section "counter-value" has text content "4"
    When the user clicks on the button "increment-counter"
    Then the section "counter-value" has text content "5"
