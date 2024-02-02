@ignore
Feature: Policy Rewrite Remainder of term

Background: 
    Given I am a user with the Super User role

@tcpc022
Scenario: Rewrite Remainder of term on Commercial Auto policy
    Given a Business account For commercial auto 
    When I need to do Rewrite Remainder of term on Commercial Auto policy
    Then I can see the details of the rewritten remainder of term Commercial Auto policy