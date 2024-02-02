Feature: Quote Workers Compensation Product Policy

Background:
  Given I am a user with the Super User role

  @tcpcwc004
  Scenario: Quote Workers Compensation Product Policy
    Given I Create a Workers Compensation Account
    When I quote a Policy 
    Then Quote is Created