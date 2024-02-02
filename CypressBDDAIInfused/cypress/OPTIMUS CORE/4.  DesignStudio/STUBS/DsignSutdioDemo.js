Requirement Number : G - BC-001

Scenario Number : G - BC-051 - TC1
Creation Date : 10/10/2024
Author Name : lnagara
Reviewer Name : mathan
Scenario Type : E2E
Test Type : Automation
Regression Flag : Yes
Automation Flag : Yes
Release Name : AMS
State : IL
LOB : CPP

Summary :
Given When valid user login into Billing center with Billing manager Permission
Then User search Policy summary screen with policy number
And User select the policy
And user click on new Payment   
ANd the user select the payment method as Cash
And user enter the amount
Then validate if the amount entered is lesser than 100$ and the user should get the warning message and Activity is triggered to the Manager 
And the manager approve the activity

Pre requisites :

Policy Center inferences : Yes
PC Inferences steps : intiate the policy for IL state for CPP LOB in Policy center and complete the policy

Positive scenario :

Positive scenario 1 :

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 100$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is not triggered as the amount is  100$

Negative scenario :

Negative scenario 1 :

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 99$
Validate the user is able to click on submit button


Negative scenario 2 :

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
