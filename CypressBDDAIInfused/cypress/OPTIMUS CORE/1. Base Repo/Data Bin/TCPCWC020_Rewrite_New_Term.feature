Feature: Rewrite New Term

Background:
  Given I am a user with the Super User role

  @tcpcwc020
  Scenario: Rewrite New Term Of Cancelled Policy
    Given a Insurer initiated cancelled Policy with Policy Rewritten reason
    When I need to rewrite the policy terms 
    Then Quote, issue and View the Policy and check Billing Options