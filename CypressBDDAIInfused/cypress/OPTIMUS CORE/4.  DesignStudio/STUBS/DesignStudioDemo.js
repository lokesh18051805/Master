    
Requirment number: G - BC-051 - TC1

Test scenario number : G - BC-051 - TC1
creation date : 10/10/2024
Author Name : lnagara
Reviewer Name : mathan
Scenario Type : E2E
Test Type : Automation
Regression Flag : Yes
Automation Flag : Yes
Release Name : AMS
State : IL
LOB : CPP

Summary:
Given When valid user login into Billing center with Billing manager Permission
Then User search Policy summary screen with policy number
And User select the policy
And user click on new Payment   
ANd the user select the payment method as Cash
And user enter the amount
Then validate if the amount entered is lesser than 100$ and the user should get the warning message and Activity is triggered to the Manager 
And the manager approve the activity

Pre requisites:

Policy Center inferences: Yes

PC Inferences steps : intiate the policy for IL state for CPP LOB in Policy center and complete the policy

Positive scenario:

Positive scenario 1:

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 100$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is not triggered as the amount is  100$


Negative scenario:

Negative scenario 1:

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 99$
Validate the user is able to click on submit button
Validate the user is able to see the warning message
Validate the activity is triggered to the Manager
Validate the manager approve the activity
And the user is able to see the success message


Test case number : G - BC-051 - TC1

Test case Steps :

Step 1 : Open the URL
Step 2 : Enter the valid user name
Step 3 : Enter the valid password
Step 4 : Click on the login button
Step 5 : Enter the policy number
Step 6 : Click on the search button
Step 7 : Select the policy
Step 8 : Click on new Payment
Step 9 : Select the payment method as Cash
Step 10 : Enter the amount as 99$
Step 11 : Click on submit button
Step 12 : Validate the warning message


Cypress script for Test case G - BC-051 - TC1:

Import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from '../../pageObjects/LoginPage';
import PolicySummaryPage from '../../pageObjects/PolicySummaryPage';
import NewPaymentPage from '../../pageObjects/NewPaymentPage';
import PaymentMethodPage from '../../pageObjects/PaymentMethodPage';
import PaymentPage from '../../pageObjects/PaymentPage';

consstructor(data){
    this.data = data;
}



Given('User is able to login into Billing center with Billing manager Permission', function () {
    LoginPage.login(this.data.username, this.data.password)
}
When('User search Policy summary screen with policy number', function () {
    PolicySummaryPage.searchPolicy(this.data.policyNumber)
}
And('User select the policy', function () {
    PolicySummaryPage.selectPolicy()
}
And('user click on new Payment', function () {
    PolicySummaryPage.newPayment()
}
ANd('the user select the payment method as Cash', function () {
    PaymentMethodPage.selectCash()
}
And('user enter the amount', function () {

    PaymentPage.enterAmount(this.data.amount)
}
Then('validate if the amount entered is lesser than 100$ and the user should get the warning message and Activity is triggered to the Manager', function () {
    PaymentPage.validateAmount()
}
And('the manager approve the activity', function () {
    PaymentPage.approveActivity()
}


