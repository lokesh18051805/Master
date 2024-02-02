@ignore
Feature: Policy cancel Insurer Initiated Prorata


Background: 
    Given I am a user with the Super User role

@tcpc016LOB2
Scenario: Policy cancel Insurer Initiated Prorata on Workers Compensation Policy
    Given a Business account for workers compensation Policy
    When I need to do Policy cancel Insurer Initiated Prorata on Workers Compensation Policy
    Then I can see the details of the canceled Workers Compensation Policy