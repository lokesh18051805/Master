@ignore
Feature: Workers Compensation Policy Test Scenarios

Background: 
   Given I am a user with the Super User role

@LOB2tcpc002 @tcwc02
Scenario: Creating a Quick Quote Workers Compensation Policy of Company Account with Two Locations
    Given a Company account
    When I quickly need to create a quote for Workers Compensation Policy with two Locations
    Then I can see the details of the created quick quote 

@LOB2tcpc008 @tcwc02
Scenario: Creating a Full Application Workers Compensation Policy of Business Account with State Combinations
    Given a Business account
    When I need to create a full application quote for Workers Compensation Policy with state combinations
    Then I can see the details of the created full application

@LOB2tcpc013 @tcwc02
Scenario: Cancelling the Commercial Policy
    Given a Company Account active Workers Compensation Policy
    When I need to perform a cancellation of the policy from insured source
    Then I can see the status of the cancelled workers compensation policy

@LOB2tcpc015 @tcwc02
Scenario: Cancelling the Commercial Policy
    Given a Company Account active Workers Compensation Policy
    When I need to perform a cancellation of the policy from insurer source
    Then I can see the status of the cancelled workers compensation policy

@LOB2tcpc018 @tcwc02
Scenario: To verify functionality of Reinstate for flat cancelled policy.
    Given a Cancelled Workers Compensation Policy
    When I need to perform Reinstatement of the Policy
    Then I can view the details of the reinstated policy

@LOB2tcpc023 @tcwc02
Scenario: Cancelling the Commercial Policy
    Given a Company Account issued Workers Compensation Policy
    When I need to perform a OOS action on the policy
    Then I can see the status of the changed workers compensation policy