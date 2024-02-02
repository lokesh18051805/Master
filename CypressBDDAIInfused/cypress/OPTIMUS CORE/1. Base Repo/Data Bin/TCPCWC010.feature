Feature: Inception Policy Change

Background:
  Given I am a user with the Super User role

  @tcpcwc010
  Scenario: Changing the Policy
    Given Issued the Policy.
    When I Enter effective date field and perform change
    Then I Quote and Issue the Policy.