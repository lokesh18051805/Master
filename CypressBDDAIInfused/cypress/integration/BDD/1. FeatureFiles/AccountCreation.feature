Feature: Guidewire PC Account Creation
  As an administrator
  I want to be able to create a new account in Guidewire PC
  So that I can manage policies for customers

  Scenario: Successful account creation
    Given I am on the Guidewire PC login page
    When I enter valid administrator credentials and click "Login"
    Then I should be logged in to the Guidewire PC system
    And I am on the account creation page
    When I enter the following account details:
      | Account Number | ABC123 |
      | Account Name   | John Doe |
      | Address        | 123 Main St |
      | City           | Anytown |
      | State          | California |
      | Zip Code       | 12345 |
    And I click on the "Create Account" button
    Then I should see a success message confirming the account creation

  Scenario: Account creation with missing information
    Given I am on the Guidewire PC login page
    When I enter valid administrator credentials and click "Login"
    Then I should be logged in to the Guidewire PC system
    And I am on the account creation page
    When I enter incomplete account details
    And I click on the "Create Account" button
    Then I should see an error message indicating the missing information

  Scenario: Account creation with duplicate account number
    Given I am on the Guidewire PC login page
    When I enter valid administrator credentials and click "Login"
    Then I should be logged in to the Guidewire PC system
    And I am on the account creation page
    When I enter the following account details:
      | Account Number | ABC123 |
      | Account Name   | Jane Smith |
      | Address        | 456 Elm St |
      | City           | Anytown |
      | State          | California |
      | Zip Code       | 98765 |
    And I click on the "Create Account" button
    Then I should see an error message indicating the duplicate account number