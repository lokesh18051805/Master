
Feature: Inception Policy Change

Background:
  Given I am a user with the Super User role

  @tcpcca010
  Scenario: Changing the Policy
    Given Issued Policy.
    When I Enter effective date field and perform changes
    Then I Quote and Issue Policy.
    