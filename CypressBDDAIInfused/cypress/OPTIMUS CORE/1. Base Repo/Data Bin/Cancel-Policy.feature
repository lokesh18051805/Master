@ignore
Feature: Policy cancellation

Background: 
    Given I am a user with the Super User role

@tcpc015 @commercial_auto_policy_cancellation
Scenario: Insured initiated Prorata cancellation on a Commercial Auto policy
    Given a Company account
    #Given An active commercial auto policy
    When I need to create a full application quote for Commercial Auto Policy
    Then I can view the details of the created full application quote 
    When I quickly initiate commercial auto policy cancellation
    Then I can able to cancel commercial auto policy