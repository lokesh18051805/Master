@ignore
Feature: Reinstatement midterm cancel On Home Owners Policy

Background: 
    Given I am a user with the Super User role

@tcpc017LOB3
Scenario: Reinstatement midterm cancel On Home Owners Policy
    Given a Personal account for home owners policy
    When I need to do reinstatement midterm cancel on New Business Home Owners Policy
    Then I can see the details of Reinstate for mid term cancelled policy