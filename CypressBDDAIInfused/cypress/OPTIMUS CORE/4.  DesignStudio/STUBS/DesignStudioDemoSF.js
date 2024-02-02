Requirement number: G - BC-001

Scenario number: G - BC-051 - TC1
creation date: 2020-07-28
Author name : Sujitha
Reviewer name : Sujitha
scenario type : E2E
Application : Billing center
Test type : Automation
Regression flag : Yes
Automation flag : Yes
Release name : AMS
State : IL
LOB : CPP

Requirement description: Validate a valid user is able to login into Billing center with Billing manager Permission


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

Positive scenario :

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

Positive scenario 2:

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount greater than 100$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is not triggered as the amount is greater than 100$

Positive scenario 3:

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 99$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is triggered as the amount is lesser than 100$

Negative Scenario

Negative scenario 1:

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as check
Validate the user is able to enter the amount 0$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is triggered as the amount is less than 100$

Negative scenario 2:

Validate a valid user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as check
user do not enter the amount in the field and click on submit button
Validate the user is able to see the success message
Validate the activity is triggered as the amount is 0$
Test case 1 : Positive scenario 1:

Test case number: G - BC-051 - TC1

Test case description: Validate a valid user is able to login into Billing center with Billing manager Permission

Test case steps:

Step 1: User login into Billing center with Billing manager Permission
Step 2: User search Policy summary screen with policy number
Step 3: User select the policy
Step 4: User click on new Payment
Step 5: User select the payment method as Cash
Step 6: User enter the amount as 100$
Step 7: User click on submit button
Step 8: Validate the user is able to see the success message
Step 9: Validate the activity is not triggered as the amount is  100$

Test case 1: expected result:

Validate the user is able to login into Billing center with Billing manager Permission
Validate the user is able to search Policy summary screen with policy number
Validate the user is able to select the policy
Validate the user is able to click on new Payment
Validate the user is able to select the payment method as Cash
Validate the user is able to enter the amount as 100$
Validate the user is able to click on submit button
Validate the user is able to see the success message
Validate the activity is not triggered as the amount is  100$

Cypress test script : Test case 1: Positive scenario 1:

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Loginpage from '../../../Pages/PCLogin'
import PolicySummary from '../../../Pages/PolicySummary'
import Payment from '../../../Pages/Payment'
import PaymentDetails from '../../../Pages/PaymentDetails'
import PaymentConfirmation from '../../../Pages/PaymentConfirmation'
import Activity from '../../../Pages/Activity'
import ActivityDetails from '../../../Pages/ActivityDetails'
import ActivityConfirmation from '../../../Pages/ActivityConfirmation'
import ActivityApproval from '../../../Pages/ActivityApproval'
import ActivityApprovalDetails from '../../../Pages/ActivityApprovalDetails'

const loginpage = new Loginpage()
const policysummary = new PolicySummary()
const payment = new Payment()

const paymentdetails = new PaymentDetails()
const paymentconfirmation = new PaymentConfirmation()
const activity = new Activity()
const activitydetails = new ActivityDetails()
const activityconfirmation = new ActivityConfirmation()
const activityapproval = new ActivityApproval()
const activityapprovaldetails = new ActivityApprovalDetails()

Given('User login into Billing center with Billing manager Permission', () => {
    cy.visit("http://in-pnq-coe31:5180/bc/PolicyCenter.do")
    loginpage.getUsername().type("su")
    loginpage.getpassword().type("gw")
    loginpage.getloginbutton().click()
    cy.wait(4000)
})

When('User search Policy summary screen with policy number', () => {
    policysummary.getsearchbox().type("01-000000-01")
    policysummary.getsearchbutton().click()
    cy.wait(4000)
})

Then('User select the policy', () => {
    policysummary.getpolicy().click()
    cy.wait(4000)
})

Then('User click on new Payment', () => {
    payment.getnewpayment().click()
    cy.wait(4000)
})

Then('User select the payment method as Cash', () => {
    paymentdetails.getpaymentmethod().select("Cash")
    cy.wait(4000)
})

Then('User enter the amount as 100$', () => {
    paymentdetails.getamount().type("100")
    cy.wait(4000)
})

Then('User click on submit button', () => {
    paymentdetails.getsubmitbutton().click()
    cy.wait(4000)
})

Then('Validate the user is able to see the success message', () => {
    paymentconfirmation.getsuccessmessage().should("be.visible")
    cy.wait(4000)
})

Then('Validate the activity is not triggered as the amount is  100$', () => {
    activity.getactivitytab().click()
    cy.wait(4000)
    activity.getactivitytable().should("be.visible")
    cy.wait(4000)
    activity.getactivitytable().contains("No records found")
    cy.wait(4000)
})

Test case 2 : Positive scenario 2: