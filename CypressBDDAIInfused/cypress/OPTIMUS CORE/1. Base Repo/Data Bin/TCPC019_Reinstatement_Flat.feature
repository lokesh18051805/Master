Feature: Reinstate the Policy

Background:
  Given I am a user with the Super User role

  @tcpcca019
  Scenario: Reinstate the Policy
    Given a Cancelled Commercial Auto Policy
    When I quickly need to perforrm Reinstate the Cancelled Policy
    Then I can view the Policy Details