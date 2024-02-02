Feature: Guidewire PC Login
  As a user
  I want to be able to log in to the Guidewire PC system
  So that I can access policy-related functionalities

  Scenario: Successful login with valid credentials
    Given I am on the Guidewire PC login page
    When I enter valid credentials and click "Login"
    Then I should be logged in to the Guidewire PC system
    And I should be directed to the policy dashboard

  Scenario: Failed login with invalid credentials
    Given I am on the Guidewire PC login page
    When I enter invalid credentials and click "Login"
    Then I should see an error message indicating the failed login
    And I should remain on the login page

  Scenario: Failed login with missing credentials
    Given I am on the Guidewire PC login page
    When I leave the username or password field blank and click "Login"
    Then I should see an error message indicating the missing credentials
    And I should remain on the login page

  Scenario: Account locked after multiple failed login attempts
    Given I am on the Guidewire PC login page
    When I enter invalid credentials multiple times
    Then I should see an error message indicating the account is locked
    And I should be directed to the account recovery page