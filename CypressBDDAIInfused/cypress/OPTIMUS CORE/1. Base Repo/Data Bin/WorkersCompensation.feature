@ignore
Feature: Verify ability to Quote and Issue a Workers Compensation policy with different coverage value combinations

 Background: 
   Given I am a user with the Super User role 

@tcwc003 @tcwc
Scenario: Quoting a Workers Compensation policy with different coverage value combinations
    Given a Company Account
    When I quickly need to quote a workers compensation with different coverage value combinations 
    Then I can see the details of the quoted wokers compensation policy

@tcwc009 @tcwc
Scenario: Issuing a Workers Compensation policy with Different Payment methods - Cash/Cheque
    Given a Company Account
    When I quickly need to quote a workers compensation with different coverage value combinations 
    Then I can issue the policy with different payment methods

@tcwc014 @tcwc
Scenario: To perform Insured initiated Prorata cancellation on a Workers Compensation policy
    Given a Company Account
    When I quickly need to quote a workers compensation with different coverage value combinations 
    Then I can issue the policy with different payment methods
    Then I can cancel the insured workers compensation policy as Prorata

@tcwc019 @tcwc
Scenario: To Reinstate for mid term cancelled policy
    Given a Company Account
    When I quickly need to quote a workers compensation with different coverage value combinations 
    Then I can issue the policy with different payment methods
    Then I can perform mid-term cancellation
    Then I can Reinstate the cancelled policy

