@ignore
Feature: Verify ability to Quote a Home Owners policy

 Background: 
   Given I am a user with the Super User role 

@tcho002 @tcho
Scenario: Quoting a Home Owners policy with Person Account ,  Quote with 1 locations, 1 building with valid person address and term type as  anuual, policy type as Rental
    Given a Personal Account to create home owners policy
    When I quickly need to quote a home owners with policy as Rental
    Then I can issue the quoted home owners policy

@tcho009 @tcho
Scenario: Initiate a policy change for New Business Home Owners  policy
    Given a Personal Account to create home owners policy
    When I quickly need to quote a home owners with policy as Condominium
    Then I can issue the quoted home owners policy
    Then I can change the issued home owners policy

@tcho016 @tcho
Scenario: Reinstate for flat cancelled home owners policy
    Given a Personal Account to create home owners policy
    When I quickly need to quote a home owners with policy as Rental
    Then I can issue the quoted home owners policy
    Then I can cancel the issued home owners policy
    Then I can reinstate the cancelled home owners policy

@tcho023 @tcho
Scenario: Initiate a policy change for New Business Home Owners  policy
    Given a Personal Account to create home owners policy
    When I quickly need to quote a home owners with policy as Condominium
    Then I can issue the quoted home owners policy
    Then I can perform Pre-renewal direction for the issued home owners policy



