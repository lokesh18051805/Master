@ignore
Feature: Policy Rewrite New Term

Background: 
    Given I am a user with the Super User role

@tcpc021
Scenario: Rewrite New Term on Commercial Auto policy
    Given a Business account for commercial auto
    When I need to do Rewrite New Term on Commercial Auto policy
    Then I can see the details of the rewritten Commercial Auto policy