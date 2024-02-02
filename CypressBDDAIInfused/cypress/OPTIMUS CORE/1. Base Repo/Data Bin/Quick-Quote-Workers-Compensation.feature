@ignore
Feature: Quick Quote Workers Compensation

Background: 
    Given I am a user with the Super User role

@tc_wc_pc001 @quick_quote_policy_wc
Scenario: Verify ability to Quote a Workers Compensation Policy with Perosn Account and 1 location
    Given a Personal account
    When I create and submit a quick quote for Workers Compensation Policy
    Then the submission is quoted and a premium should be displayed on the screen