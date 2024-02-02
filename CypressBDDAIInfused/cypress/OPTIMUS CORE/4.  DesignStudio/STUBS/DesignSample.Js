Requirement :PC102938

Summary:
In Guidewire Policycenter Commerical Auto LOB for all states When policy type is "BP" and coverage is "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected more than 100000$ then Form number CS90251, CO89453 should be generated sucessfuly.



Test Scenarios:

Positive scenarios 1:

When user selects policy type as "BP" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected more than 100000$ then Form number CS90251, CO89453 should be generated sucessfuly.

Positive scenarios 2:

When user selects policy type as "BP" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected less than 100000$ then Form number CS90251, CO89453 should not be generated sucessfuly.

Positive scenarios 3:

When user selects policy type as "BP" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected equal to 100000$ then Form number CS90251, CO89453 should be generated sucessfuly.

Positive scenarios 4:

When user selects policy type as "BP" and "BPO" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected more than 100000$ then Form number CS90251, CO89453 should be generated sucessfuly.

Negative sceanrio 1:

When user selects policy type as "BP" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected more than 100000$ then Form number CS90251, CO89453 should not be generated sucessfuly.

Negative sceanrio 2:

When user selects policy type as "BP" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected less than 100000$ then Form number CS90251, CO89453 should be generated sucessfuly.

Negative sceanrio 3:

When user selects policy type as "BP" and coverage as "Business Auto coverage" and when Liability limit is selected under "Form E" and Liability value is selected equal to 100000$ then Form number CS90251, CO89453 should not be generated sucessfuly.

Test case 1: Positive scenarios 1:

Step:1 Navigate to Policy Center
Step:2 Create a new submission
Step:3 Select policy type as "BP" and coverage as "Business Auto coverage"
Step:4 Select Liability limit under "Form E" and Liability value is selected more than 100000$
Step:5 Click on Quote button
Step:6 Click on Forms button
Step:7 Verify Form number CS90251, CO89453 should be generated sucessfuly.

Test case 2: Positive scenarios 2:

Step:1 Navigate to Policy Center
Step:

Test case 3: Positive scenarios 3:

Step:1 Navigate to Policy Center
Step:2 Create a new submission
Step:3 Select policy type as "BP" and coverage as "Business Auto coverage"
Step:4 Select Liability limit under "Form E" and Liability value is selected equal to 100000$
Step:5 Click on Quote button
Step:6 Click on Forms button
Step:7 Verify Form number CS90251, CO89453 should be generated sucessfuly.

Test case 4: Positive scenarios 4:

Step:1 Navigate to Policy Center
Step:2 Create a new submission
Step:3 Select policy type as "BP" and "BPO" and coverage as "Business Auto coverage"
Step:4 Select Liability limit under "Form E" and Liability value is selected more than 100000$
Step:5 Click on Quote button
Step:6 Click on Forms button
Step:7 Verify Form number CS90251, CO89453 should be generated sucessfuly.

Test case 5: Negative sceanrio 1:

Step:1 Navigate to Policy Center
Step:2 Create a new submission
Step:3 Select policy type as "BP" and coverage as "Business Auto coverage"
Step:4 Select Liability limit under "Form E" and Liability value is selected more than 100000$
Step:5 Click on Quote button
Step:6 Click on Forms button
Step:7 Verify Form number CS90251, CO89453 should not be generated sucessfuly.

Test case 6: Negative sceanrio 2:

Step:1 Navigate to Policy Center
Step:2 Create a new submission
Step:3 Select policy type as "BP" and coverage as "Business Auto coverage"
Step:4 Select Liability limit under "Form E" and Liability value is selected less than 100000$
Step:5 Click on Quote button
Step:6 Click on Forms button
Step:7 Verify Form number CS90251, CO89453 should be generated sucessfuly.

Test case 7: Negative sceanrio 3:

Step:1 Navigate to Policy Center
Step:2 Create a new submission
Step:3 Select policy type as "BP" and coverage as "Business Auto coverage"
Step:4 Select Liability limit under "Form E" and Liability value is selected equal to 100000$
Step:5 Click on Quote button
Step:6 Click on Forms button

Step:7 Verify Form number CS90251, CO89453 should not be generated sucessfuly.

Test Data:

Step:1 Navigate to Policy Center | URL : http://pcforsapienttest.com:8080/pc/PolicyCenter.do
Step:2 Login with valid credentials | Username :su | Password :gw
Step:3 Click on New Submission button
Step:4 Select policy type as "BP" and coverage as "Business Auto coverage" | Policy type : BP | Coverage : Business Auto coverage
Step:5 Select Liability limit under "Form E" and Liability value is selected more than 100000$ | Liability limit : 100000$
Step:6 Click on Quote button
Step:7 Click on Forms button

Expected Result:

Form number CS90251, CO89453 should be generated sucessfuly.

Feature: PC102938

Scenario: Positive scenarios 1

Given Navigate to Policy Center
When Create a new submission
Then Select policy type as "BP" and coverage as "Business Auto coverage"
And Select Liability limit under "Form E" and Liability value is selected more than 100000$
And Click on Quote button
Then Click on Forms button
And Verify Form number CS90251, CO89453 should be generated sucessfuly.

Scenario: Positive scenarios 2

Given Navigate to Policy Center
When Create a new submission
Then Select policy type as "BP" and coverage as "Business Auto coverage"
And Select Liability limit under "Form E" and Liability value is selected less than 100000$
And Click on Quote button
Then Click on Forms button
And Verify Form number CS90251, CO89453 should not be generated sucessfuly.


Stepdefination:

when('Navigate to Policy Center', () => {

    cy.visit('http://pcforsapienttest.com:8080/pc/PolicyCenter.do')

}

)

when('Create a new submission', () => {

    cy.get('#TabBar-NewSubmission').click()

}

)

when('Select policy type as "BP" and coverage as "Business Auto coverage"', () => {

    cy.get('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_NewSubmissionScreen-SubmissionWizard_NewSubmissionWizard_BusinessAutoCardTab').click()

}

)

when('Select Liability limit under "Form E" and Liability value is selected more than 100000$', () => {

    cy.get('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_NewSubmissionScreen-SubmissionWizard_NewSubmissionWizard_BusinessAutoCardTab-SubmissionWizard_NewSubmissionWizard_BusinessAutoCV-BusinessAutoDV-FormInputSet-FormE').click()

}

)

when('Click on Quote button', () => {

    cy.get('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_NewSubmissionScreen-SubmissionWizard_NewSubmissionWizard_BusinessAutoCardTab-SubmissionWizard_NewSubmissionWizard_BusinessAutoCV-BusinessAutoDV-QuoteOrReview').click()

}

)

then('Click on Forms button', () => {

    cy.get('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_NewSubmissionScreen-SubmissionWizard_NewSubmissionWizard_BusinessAutoCardTab-SubmissionWizard_NewSubmissionWizard_BusinessAutoCV-BusinessAutoDV-Forms').click()

}

)

then('Verify Form number CS90251, CO89453 should be generated sucessfuly.', () => {

    cy.get('#SubmissionWizard-LOBWizardStepGroup-SubmissionWizard_NewSubmissionScreen-SubmissionWizard_NewSubmissionWizard_BusinessAutoCardTab-SubmissionWizard_NewSubmissionWizard_BusinessAutoCV-BusinessAutoDV-Forms').should('be.visible')

}

)

TestRunner:

Feature: PC102938

Import : PC102938.feature

import login from '../PageObject/login.js'
import createSubmission from '../PageObject/createSubmission.js'
import createAccount from '../PageObject/createAccount.js'
import createPolicy from '../PageObject/createPolicy.js'
import createAccountOrg from '../PageObject/createAccountOrg.js'
import createAccountOrgSearch from '../PageObject/createAccountOrgSearch.js'

const loginpage = new login()
const createSubmissionpage = new createSubmission()
const createAccountpage = new createAccount()
const createPolicypage = new createPolicy()
const createAccountOrgpage = new createAccountOrg()
const createAccountOrgSearchpage = new createAccountOrgSearch()

describe('PC102938', function () {

    before(function () {

        cy.fixture('login').then(function (data) {

            this.data = data
        })

        cy.fixture('createSubmission').then(function (CSdata) {

            this.CSdata = CSdata
        })

        cy.fixture('createAccount').then(function (CAdata) {

            this.CAdata = CAdata
        })

        cy.fixture('createPolicy').then(function (CPdata) {

            this.CPdata = CPdata
        })

        cy.fixture('createAccountOrg').then(function (CAOdata) {

            this.CAOdata = CAOdata
        })

        cy.fixture('createAccountOrgSearch').then(function (CAOSdata) {

            this.CAOSdata = CAOSdata
        })

    })

    it('PC102938', function () {

        const loginpage = new login()
        const createSubmissionpage = new createSubmission()
        const createAccountpage = new createAccount()
        const createPolicypage = new createPolicy()
        const createAccountOrgpage = new createAccountOrg()
        const createAccountOrgSearchpage = new createAccountOrgSearch()

        cy.visit(Cypress.env('OOTBurl'))

        loginpage.getUsername().should('be.visible').type(this.data.Username)

        loginpage.getpassword().should('be.visible').type(this.data.password)

        loginpage.getloginbutton().should('be.visible').click()

        createSubmissionpage.getNewSubmission().should('be.visible').click()

        createSubmissionpage.getPolicyType().should('be.visible').select(this.CSdata.PolicyType)

        createSubmissionpage.getLOB().should('be.visible').select(this.CSdata.LOB)

        createSubmissionpage.getContinue().should('be.visible').click()

        createSubmissionpage.getContinue().should('be.visible').click()

        createSubmissionpage.getContinue().should('be.visible').click()

        

        


