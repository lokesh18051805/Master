Feature: Insurer Initiated Prorata Cancel

Background:
  Given I am a user with the Super User role

  @tcpcho012
  Scenario: Cancel the Policy Initiated by Insurer
    Given a issued Policy of Home Owners
    When Insurer Initiated Policy Cancellation with Pro Rata Reason