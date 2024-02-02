@ignore
Feature:Home Owners Policy using Personal Account

Background:
    Given I am a user with the Super User role

@tcho004
Scenario:Create a Quick Quote Policy for Home Owners
    Given a Personal account for home owners 
    When I create Full application policy for Home Owners 
    When I quote the Quick Quote policy of Home Owners

@tcho011
Scenario:Cancel a issued Policy of Home Owners
    Given a issued Policy of Home Owners
    When I flat cancel the Policy of Home Owners taking source as insured

@tcho018
Scenario:Rewrite mid term of home owners policy
    Given a canceled policy of home owners by insurer for rewrite mid-term 
    When I rewrite mid -term the policy of home owners 