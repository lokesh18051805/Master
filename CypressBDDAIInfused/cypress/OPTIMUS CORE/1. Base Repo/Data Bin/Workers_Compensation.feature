@ignore
Feature: Workers Compensation policy using Company or Personal Account

Background: 
   Given I am a user with the Super User role 

@tcwc006
Scenario:Verify ability to Quote a Full App Workers Compensation Policy with Company Account and 2 location
    Given a Company account for workers Compensation
    When I create Workers Compensation full application Policy with 2 locations

@tcwc012
Scenario: Perform a Inception policy change on Workers Compensation Policy
    Given a issued Policy of Workers Compensation
    When I make date and PNI changes in workers Compensation Policy

@tcwc017
Scenario:perform schedule cancellation and rescind on a Workers Compensation policy
    Given a issued Policy of Workers Compensation for scheduling cancellation
    When I cancel policy of Workers Compensation

@tcwc022
Scenario:
    Given a policy which was cancelled with insurer  
    When I rewrite full term of the policy

