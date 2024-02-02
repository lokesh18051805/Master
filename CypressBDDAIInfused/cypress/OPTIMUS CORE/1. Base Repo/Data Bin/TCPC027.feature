Feature: Auto-Renewal Policy

Background:
  Given I am a user with the Super User role

  @tcpc027
  Scenario: AutoRenew the Policy
    Given a Policy with Backdate 
    When I run Renewal Start Job, navigate policy and verify Transaction
    Then I Issue the Policy and Click Ok