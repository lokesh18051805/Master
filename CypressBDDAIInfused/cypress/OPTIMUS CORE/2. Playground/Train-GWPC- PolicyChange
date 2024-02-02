@ignore
Feature: Verify ability to Quote a Home Owners policy

 Background: 
   Given I am a user with the Super User role 

@tcho007 @tcho
Scenario: Creating a Home Owners policy with Person Account ,  Quote with 1 locations, 1 building with valid person address and term type as anuual, policy type as Condominium
    Given Create a Personal Account for home owners policy
    When I quickly need to quote a home owners with policy as Condominium
    Then Issue the quoted home owners policy

@tcho014 @tcho
Scenario: Cancel_Insurer Initiated_Prorata
    Given Create a Personal Account for home owners policy
    When I quickly need to quote a home owners with policy as Rental
    Then Issue the quoted home owners policy
    Then Cancel the issued home owners policy

@tcho021 @tcho
Scenario: OOS Policy change
    Given Create a Personal Account for home owners policy
    When I quickly need to quote a home owners with policy as Rental
    Then Issue the quoted home owners policy
    Then Change the issued home owners policy as future dated and back dated
