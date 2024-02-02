@ignore
Feature: Quote Commercial Auto Policy

Background:
  Given I am a user with the Super User role

  @tcpcca004
  Scenario: Quote Commercial Auto Policy With Applying Discount On it
    Given I Create a Commerical Auto company Account
    When I quote a Policy With Discount On It
    Then Quote is Created With Discount Applied