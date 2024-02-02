@ignore
Feature: Commercial Auto Policies Using Company or Personal Account

 Background: 
   Given I am a user with the Super User role 

@pctc003
Scenario: Creating a quick Quote of Company Account
    Given a Company account for Quick quote
    When I create new Quick Quote policy
    When I add the required coverages

@pctc006
Scenario: Creating a full application Quote of Personal Account
    Given a Person account
    When I create a new full application policy for 2 vehicles and 2 drivers 
    When I add the required coverages with 2 drivers and 2 vehicles

@pctc009
Scenario:Create a full application quote of Company Account
    Given a Company account for full application quote for payment options
    When I create new full application policy
    When I add the required coverages with modifiers and payment option 

@pctc012
Scenario: Changing a issued policy
    Given a issued policy
    When I change policy with new primary name isured
    When I issue policy

@pctc024
Scenario: Creating a two time date change in policy 
    Given a issued policy for two time date change
    When I change policy with new coverages and driver information