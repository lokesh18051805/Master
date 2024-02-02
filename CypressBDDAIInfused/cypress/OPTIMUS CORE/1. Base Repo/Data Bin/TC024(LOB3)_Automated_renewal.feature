@ignore
Feature: Automated Renewal On Home Owners Policy

Background: 
    Given I am a user with the Super User role

@tcpc024LOB3
Scenario: Automated Renewal On Home Owners Policy
    Given a Policy with Backdate
    When I need to do Automated Renewal on New Business Home Owners Policy
    Then I can see the details of Auto Renewed policy