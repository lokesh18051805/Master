Feature: Non-Renew Reason

Background:
  Given I am a user with the Super User role

  @tcpcwc025
  Scenario: Pre Renewal Direction
    Given a workers Compensation with Inforce status
    When I Choose None renew as Pre-Renewal Directions and add explanation and Update
    Then Policy is Updated with 'This Policy has pre-renewal' Direction