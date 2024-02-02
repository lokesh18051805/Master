@ignore
Feature: Home Owners Policy Test Scenarios

Background: 
   Given I am a user with the Super User role

@LOB3tcpc001 @lob3 @quickquote
Scenario: Creating a Quick Quote Home Owner Policy of Personal Account with 1 location, 1 Building and policy type as Dwelling
    Given a Personal account for Home Owners Policy
    When I quickly need to create a quote for Home Owner Policy with with 1 location, 1 Building and policy type as Dwelling
    Then I can see the details of the created quick quote of Home Owners

@LOB3tcpc008 @lob3 @fullapplication
Scenario: Changing the Policy of Home Owners Full Term
    Given a Personal Account Active Home Owners Policy
    When I need to perform a Full Term Policy Change in Address and Dwelling Construction
    Then I can see the updated details of the changed Home Owner Policy 

@LOB3tcpc015 @lob3 @rescindpolicy
Scenario: Rescinding the Cancelled Policy
    Given a Personal Account Active Home Owners Policy
    When I need to perform a rescind operation on a cancelled Home Owners policy
    Then I can see the rescind cancellation status of the Home Owners policy