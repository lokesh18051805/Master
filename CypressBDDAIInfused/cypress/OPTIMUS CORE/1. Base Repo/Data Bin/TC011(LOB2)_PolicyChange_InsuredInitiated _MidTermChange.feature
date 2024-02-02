@ignore
Feature: Policy Change Insured Initiated Mid Term Change

Background: 
    Given I am a user with the Super User role

@tcpc011LOB2
Scenario: Mid Term policy change on Workers Compensation Policy
    Given a Business account for Workers Compensation Policy
    When I need to do Policy Change Insured Initiated Mid Term Change on Workers Compensation Policy
    Then I can see the details of the changed Workers Compensation Policy
       
       