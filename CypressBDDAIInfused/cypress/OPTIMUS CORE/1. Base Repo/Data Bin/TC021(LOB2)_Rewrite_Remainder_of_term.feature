@ignore
Feature: Policy Rewrite Remainder of term

Background: 
    Given I am a user with the Super User role

@tcpc021LOB2
Scenario: Rewrite Remainder of term on Workers Compensation Policy
    Given a Business account for workers compensation policy
    When I need to do Rewrite Remainder of term on Workers Compensation Policy
    Then I can see the details of the rewritten remainder of term Workers Compensation Policy