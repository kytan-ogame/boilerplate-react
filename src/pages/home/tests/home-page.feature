Feature: Home Page

  Scenario: Clicking the button shows success message
    Given the endpoint api/counter/default-value will respond "5"
    And I am on the url "/"
    Then the section "home-page-wrapper" is displayed
    And the section "counter-value" has text content "5"
    When the user clicks on the button "decrement-counter"
    Then the section "counter-value" has text content "4"
    When the user clicks on the button "increment-counter"
    Then the section "counter-value" has text content "5"
    When the user clicks on the button "nav-link-contact"
    Then the location path is "/contact"
    And the input with label "Nom" has the value ""
    When the user fill the input with the label "Nom" with "Tartampion"
    And the input with label "Nom" has the value "Tartampion"


