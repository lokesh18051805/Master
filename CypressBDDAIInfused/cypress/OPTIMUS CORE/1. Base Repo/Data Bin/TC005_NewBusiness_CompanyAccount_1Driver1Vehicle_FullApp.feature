@ignore
Feature: New Business Company Account creation

Background: 
    Given I am a user with the Super User role

@tcpc005
Scenario: Binding new Business Company Account 
    Given a Business account for Commercial Auto
    When I need to issue a Commercial Auto policy with Company Account 1Driver 1Vehicle
    Then I can see the details of the issued Commercial Auto policy