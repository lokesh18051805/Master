Requirement number : G - BC-001

Scenario Number : G - BC-051 - TC1
Creation Date : 01/31/2024
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

Positive scenario 2 :

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount greater than 100$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is not triggered as the amount is greater than 100$

Negative scenario :

Negative scenario 1 :

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 99$
Validate the user is able to click on submit button

Test case number : G - BC-051 - TC1

Test case description : Validate the user is able to enter the amount as 99$ and validate the activity is triggered to the manager

Test case Steps:

Step 1 : Validate a valid user is able to login into Billing center with Billing manager Permission
Step 2 : Validate the user is able to search Policy summary screen with policy number
Step 3 : Validate the user is able to select the policy
Step 4 : Validate the user is able to click on new Payment
Step 5 : Validate the user is able to select the payment method as Cash
Step 6 : Validate the user is able to enter the amount as 99$
Step 7 : Validate the user is able to click on submit button
Step 8 : Validate the user is able to see the success message
Step 9 : Validate the activity is triggered as the amount is lesser than 100$

Test case 2 : Negative scenario 1:

Test case number : G - BC-051 - TC2

Test case description : Validate the user is able to enter the amount as 0$ and validate the activity is triggered to the manager

Test case Steps:

Step 1 : Validate a valid user is able to login into Billing center with Billing manager Permission
Step 2 : Validate the user is able to search Policy summary screen with policy number
Step 3 : Validate the user is able to select the policy
Step 4 : Validate the user is able to click on new Payment
Step 5 : Validate the user is able to select the payment method as Cash
Step 6 : Validate the user is able to enter the amount as 0$
Step 7 : Validate the user is able to click on submit button
Step 8 : Validate the user is able to see the success message
Step 9 : Validate the activity is triggered as the amount is 0$


cypress test script : test case 1: positive scenario 1

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import loginpage from "../../pages/loginpage";
import homepage from "../../pages/homepage";
import policysearchpage from "../../pages/policysearchpage";
import policydetailpage from "../../pages/policydetailpage";
import paymentpage from "../../pages/paymentpage";
import paymentdetailpage from "../../pages/paymentdetailpage";
import activitydetailpage from "../../pages/activitydetailpage";
import activitysearchpage from "../../pages/activitysearchpage";
import activityapprovalpage from "../../pages/activityapprovalpage";
import activityapprovaldetailpage from "../../pages/activityapprovaldetailpage";
import activityapprovalsearchpage from "../../pages/activityapprovalsearchpage";
import activityapprovalresultpage from "../../pages/activityapprovalresultpage";
import paymentsearchpage from "../../pages/paymentsearchpage";


const login = new loginpage();
const home = new homepage();
const policysearch = new policysearchpage();
const policydetail = new policydetailpage();
const payment = new paymentpage();
const paymentdetail = new paymentdetailpage();
const activitydetail = new activitydetailpage();
const activitysearch = new activitysearchpage();
const activityapproval = new activityapprovalpage();
const activityapprovaldetail = new activityapprovaldetailpage();
const activityapprovalsearch = new activityapprovalsearchpage();
const activityapprovalresult = new activityapprovalresultpage();
const paymentsearch = new paymentsearchpage();


Given('User login into Billing center with Billing manager Permission', () => {
    login.login();
    cy.wait(10000);
}
);

When('User search Policy summary screen with policy number', () => {
    home.searchPolicy();
    cy.wait(10000);
}

);

And('User select the policy', () => {
    policysearch.selectPolicy();
}

);

And('User click on new Payment', () => {
    policydetail.newPayment();
}

);

And('User select the payment method as Cash', () => {

    payment.selectPaymentMethod();
}

);

And('User enter the amount as 100$', () => {
    payment.enterAmount();
}

);

And('User click on submit button', () => {

    payment.submitPayment();
}
