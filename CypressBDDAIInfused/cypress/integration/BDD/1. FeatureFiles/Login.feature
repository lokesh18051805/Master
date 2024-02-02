 Feature: PC Login
     As a user
    I want to login to PC
    So that I can start working on Policy Center

 Scenario: Successful login
     Given I open PC login page
    When I fill username with "su"
    And I fill password with "gw"
    And I click the login button
    Then I expect to see the welcome message

 Scenario: Unsuccessful login
   Given I open PC login page
     When I fill username with "su"
    And I fill password with "gw"
    And I click the login button
    Then I expect to see the error message

Scenario: Unsuccessful login
     Given I open PC login page
    When I fill username with "su"
    And I fill password with "gw"
    And I click the login button
    Then I expect to see the error message
 
Scenario: Unsuccessful login
     Given I open PC login page
    When I fill username with "su"
    And I fill password with "gw"
    And I click the login button
    Then I expect to see the error message

Scenario: Unsuccessful login
    Given I open PC login page
    When I fill username with "su"
    And I fill password with "gw"
    And I click the login button
    Then I expect to see the error message
 