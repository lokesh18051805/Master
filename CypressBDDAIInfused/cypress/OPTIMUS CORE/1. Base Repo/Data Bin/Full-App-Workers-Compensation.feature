@ignore
Feature: Full Application Workers Compensation

Background: 
    Given I am a user with the Super User role

@tc_wc_pc005 @full_application_quote_policy_wc
Scenario: Verify ability to Quote a Full Application Workers Compensation Policy with Perosn Account and 1 location
    Given a Personal account
    When I create and submit a quote for full application Workers Compensation Policy
    Then the full application submission is quoted and a premium should be displayed on the screen
    When I perform bind option
    Then the workers compensation policy should be issued

@tc_wc_pc007 @full_application_quote_wc_different_coverage
Scenario: Verify ability to Quote a Full Application Workers Compensation Policy with different coverage value combinations
    Given a Company account
    When I create and submit a quote for full application WC with different coverage value combinations
    Then the full application submission is quoted and a premium should be displayed on the screen
    When I perform bind option
    Then the workers compensation policy should be issued