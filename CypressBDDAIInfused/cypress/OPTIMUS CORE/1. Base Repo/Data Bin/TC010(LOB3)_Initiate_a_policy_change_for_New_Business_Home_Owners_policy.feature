@ignore
Feature: Policy change for New Business Home Owners Policy

Background: 
    Given I am a user with the Super User role

@tcpc010LOB3
Scenario: Policy change for New Business Home Owners Policy
    Given a Personal account for Home Owners Policy
    When I need to do mid term policy change on New Business Home Owners Policy
    Then I can see the details of the changed New Business Home Owners Policy