@ignore
Feature: Create a New Business Home Owners policy

Background: 
    Given I am a user with the Super User role

@tcpc003LOB3
Scenario: Creating a New Business Home Owners policy
    Given a Personal account for Home Owners policy
    When I need to create a quote Business Home Owners policy with Person Account 
    Then I can see the details of the created Quote