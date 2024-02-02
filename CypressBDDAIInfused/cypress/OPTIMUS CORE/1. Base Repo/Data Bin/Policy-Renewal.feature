@ignore
Feature: Policy renewal

Background: 
    Given I am a user with the Super User role

@tcpc026 @policy_non_renewal
Scenario: User to perform pre-renewal directions
    Given a Company account
    #Given An active commercial auto policy
    When I need to create a full application quote for Commercial Auto Policy
    Then I can view the details of the created full application quote 
    When I quickly add pre-renewal direction
    Then Pre-renewal direction section is displayed