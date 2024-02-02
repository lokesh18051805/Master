@ignore
Feature: Commercial And Personal Auto Policies Using Company or Personal Account

Background: 
   Given I am a user with the Super User role

@tcpc001 @lob1 @quickquote
Scenario: Creating a Quick Quote of Company Account
    Given a Company account
    When I quickly need to create a quote for Commercial Auto Policy with one driver and one vehicle
    Then I can see the details of the created quote 

@tcpc007 @lob1 @fullapplication
Scenario: Issuing a Full Application Policy of Company Account
    Given a Company account
    When I need to create a full application quote for Commercial Auto Policy
    Then I can view the details of the created full application quote 

@tcpc013 @lob1 @midtermpolicychange
Scenario: Changing the Policy of Personal Auto Mid Term
    Given a Personal Account Active Policy
    When I need to perform a Mid Term Policy Change
    Then I can see the updated details of the changed policy 

@tcpc016 @lob1 @cancelpolicy
Scenario: Cancelling the Commercial Policy
    Given a Company Account active Commercial Policy
    When I need to perform a cancellation of a policy
    Then I can see the confirmation status of the cancelled policy

@tcpc018 @lob1 @rescindpolicy
Scenario: Rescinding the Cancelled Policy
    Given a Company Account Active Commercial Policy
    When I need to perform a rescind operation on a cancelled policy
    Then I can see the rescind cancellation status of the cancelled policy