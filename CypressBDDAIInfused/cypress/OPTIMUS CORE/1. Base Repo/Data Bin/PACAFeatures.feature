@ignore
Feature: Commercial And Personal Auto Policies Using Company or Personal Account

 Background: 
   Given I am a user with the Super User role 

@tcpc002 @tcpc
Scenario: Creating a Quote of Personal Account
    Given a Personal account
    When I quickly need to create a quote for Personal Auto Policy with two drivers and two vehicle
    Then I can see the details of the created quote of submission

@tcpc008 @tcpc
Scenario: Issuing a Quote of Company Account with discounts by using Full app
    Given a Company account
    When I quickly need to create a quote for Commercial Auto Policy with discounts by using Full app
    When I can see the details of the created quote of policy
    Then I can issue the quoted submission

    @tcpc014 @tcpc
Scenario: Cancelling a insured Commercial Auto policy
    Given a insured Commercial Auto Policy
    When I quickly need to to perform Insured initiated flat cancellation 
    Then I can see the details of the Cancelled policy

@tcpc017 @tcpc
Scenario: Cancelling a insured Commercial Auto policy
    Given a insured Commercial Auto Policy
    When I quickly need to to perform Insurer initiated Prorata cancellation 
    Then I can see the details of the Cancelled policy

@tcpc020 @tcpc
Scenario: Reinstating for mid term cancelled policy.
    Given a cancelled Commercial Auto Policy
    When I quickly need to to perform Reinstate the cancelled policy 
    Then I can see the details of the policy

@tcpc023 @tcpc
Scenario: Reinstating for mid term cancelled policy.
    Given a cancelled Commercial Auto Policy
    When I quickly need to to perform Rewrite full Term policy 
    Then I can see the details of the new term policy




