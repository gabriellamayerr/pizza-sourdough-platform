Feature: UI recipes
  Scenario: View recipes and add one
    Given I open the app
    Then I see "Sourdough Pizza & Bread"
    When I add a recipe named "CI Loaf"
    Then I see "CI Loaf"
