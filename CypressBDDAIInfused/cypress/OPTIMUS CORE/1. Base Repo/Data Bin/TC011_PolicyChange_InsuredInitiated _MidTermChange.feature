@ignore
Feature: Policy Change Insured Initiated Mid Term Change

Background: 
    Given I am a user with the Super User role

@tcpc011
Scenario: Mid Term policy change on Commercial Auto policy
    Given a Business account for commercial Auto
    When I need to do mid term policy change on Commercial Auto policy
    Then I can see the details of the changed Commercial Auto policy