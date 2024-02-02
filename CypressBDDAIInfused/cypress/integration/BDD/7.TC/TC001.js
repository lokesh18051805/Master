/// <reference types="cypress"/>

import LoginPage from "../../Pages/PCLogin"
import CreateAccount from "../../Pages/CreateAccount"
import CreateSubmission from "../../Pages/CreateSubmission"
import CreateNewVehicle from "../../Pages/CreateNewVehicle"
import CreateNewCoverage from "../../Pages/CreateNewCoverage"
import NBRiskAnalysis from "../../Pages/NBRiskAnalysis"
import NBPolicyReview from "../../Pages/NBPolicyReview"
import SubmissionBound from "../../Pages/SubmissionBound"


describe('SmokeSuite', function() 

{

  before(function() {

    cy.fixture('PCLoginCredentials').then(function(Usrdata)

    {
this.Usrdata=Usrdata
    })

    cy.fixture('CreateAccount').then(function(data)

    {
this.data=data
    })

    cy.fixture('CreateSubmission').then(function(CSdata)

    {
this.CSdata=CSdata
    })

    cy.fixture('CreateNewVehicle').then(function(CSNVdata)

    {
this.CSNVdata=CSNVdata
    })
    
    cy.fixture('CreateNewCoverage').then(function(CSCVdata)

    {
this.CSCVdata=CSCVdata
    })

    cy.fixture('NBRiskAnalysis').then(function(CSRAdata)

    {
this.CSRAdata=CSRAdata
    })

    cy.fixture('NBPolicyReview').then(function(CSPRdata)

    {
this.CSPRdata=CSPRdata
    })

  })

  
it('PolicyCreation',function () {

const loginpage=new LoginPage()
const createaccount=new CreateAccount()
const createSubmission=new CreateSubmission()
const createNewVehicle=new CreateNewVehicle()
const createNewCoverage=new CreateNewCoverage()
const nBRiskAnalysis=new NBRiskAnalysis()
const nBPolicyReview=new NBPolicyReview()
const submissionBound=new SubmissionBound()



cy.visit(Cypress.env('OOTBurl'))

cy.intercept('GET', '/pc', {totalpost:5}).as('pc')

loginpage.getUsername().should('be.visible').type(this.Usrdata.Username)

loginpage.getpassword().should('be.visible').type(this.Usrdata.password)

loginpage.getloginbutton().should('be.visible').click()


//create Acount starts from here

createaccount.getactionbuttonicon().should('be.visible').click()

createaccount.getcreateAccountlink().should('be.visible').click()

createaccount.getcompanynametextbox().should('be.visible').type(this.data.CompanyName)

createaccount.getClickonSearch().should('be.visible').click()

createaccount.getclickoncreatenewaccount().should('be.visible').click()


createaccount.getclickonNewPerson().should('be.visible').click()

createaccount.getCreateAccountFirstname().should('be.visible').type(this.data.createAccountFirstname)

createaccount.getCreateAccountLastname().should('be.visible').type(this.data.createAccountLastname)

createaccount.getCreateAccountAddressone().should('be.visible').type(this.data.createAccountAddressone)

createaccount.getCreateAccountCity().should('be.visible').type(this.data.createAccountCity)


createaccount.getCreateAccountState()
.select(this.data.createAccountState, { force: true })
.invoke('val')
.should('eq', 'OH')

cy.wait(2000)

createaccount.getCreateAccountStateZipCode().should('be.visible').type(this.data.createAccountZipCode)

createaccount.getCreateAccountaddressType()
.select(this.data.createAddressType, { force: true })
.invoke('val')
.should('eq', 'billing')

createaccount.getCreateAccountorgnizationSearch().should('be.visible').click()


createaccount.getCreateAccountOrgSearchinput().should('be.visible').type(this.data.randomdata)

createaccount.getCreateAccountOrgSearchButton().should('be.visible').click()


createaccount.getCreateAccountOrgselect().should('be.visible').click()


createaccount.getCreateAccountProdCode()
.select(this.data.producerCode, { force: true })
.invoke('val')
.should('eq', 'ProducerCode:201')

createaccount.getCreateAccountUpdateClick().should('be.visible').click()


//CreateSubmission Folow Starts from Here

createSubmission.getCreateSubactionbuttonicon().should('be.visible').click()
createSubmission.getCreateSubcick().should('be.visible').click()
cy.get('.gw-picker-input').should('be.visible').click

cy.get('#gw-center-bottom-section').scrollTo('0%','25%')

createSubmission.getCreateSubPersonAutoSelect().should('be.visible').click()
cy.wait(2000)

createSubmission.getCreateSubofferingselect().select(this.CSdata.Offerings).should('have.value', 'Basic Program')

createSubmission.getCreateSubNext().should('be.visible').click()

cy.wait(2000)

createSubmission.getCreateSubQualificationNext().click()


submissionBound.getAccountNumber().should('be.visible').then(function(text2){

cy.log(text2.text())
  
cy.writeFile('\\Users\\lonagara\\Documents\\Automation\\CypressFrameworkNonBDD\\cypress\\fixtures\\NBPolicyData.json',{Accountnumber:text2.text()})

createSubmission.getCreateSubPolicyInfoNext().click()
cy.wait(1000)

createSubmission.getCreateSubAddDriver().click()
cy.wait(1000)

createSubmission.getCreateSubAddnewdriver().click()
cy.wait(1000)

createSubmission.getCreateSubAddnewdriver().click()
cy.wait(1000)

createSubmission.getCreateSubexisitngdriver().click()
cy.wait(3000)

createSubmission.getCreateSubDriverLicense().type(this.CSdata.Licensenumber)
cy.wait(1000)

//createSubmission.getCreateSubDriverLicenseState()
//.select(this.CSdata.State, { force: true })
//.invoke('val')
//.should('eq', 'OH')

//createSubmission.getCreateSubDriverdateofbirth().type(this.CSdata.DOB)
//cy.wait(1000)

createSubmission.getCreateSubRolesClick().click()
cy.wait(1000)

createSubmission.getCreateSubRolesYears().type(this.CSdata.Year)

createSubmission.getCreateSubRolesPolicyLevelvoilations()
.select(this.CSdata.policylevelvoilations, { force: true })
.invoke('val')
.should('eq', '0')

createSubmission.getCreateSubRolesPolicyLevelAccidents()
.select(this.CSdata.policylevelaccidents, { force: true })
.invoke('val')
.should('eq', '0')

createSubmission.getCreateSubAddDriverNext().click()
cy.wait(1000)

createNewVehicle.getCreateNVButton().click()
cy.wait(1000)

createNewVehicle.getCreateNVVinNumber().type(this.CSNVdata.VIN)

createNewVehicle.getCreateNVLicenseState()
.select(this.CSNVdata.LicenseState, { force: true })
.invoke('val')
.should('eq', 'OH')

createNewVehicle.getCreateNVCostnew().type(this.CSNVdata.CostNew)

createNewVehicle.getCreateNVAddAssignedVehicle().click()

createNewVehicle.getCreateNVselectdriver().click()

createNewVehicle.getCreateNVClickNext().click()
cy.wait(2000)

createNewCoverage.getCreateNCNextButton().click()
cy.wait(3000)

nBRiskAnalysis.getNBRANextButton().click()

nBPolicyReview.getNBPRQuoteButton().click()
cy.wait(2000)

nBPolicyReview.getNBPRQuoteButton().click()
cy.wait(3000)

nBRiskAnalysis.getNBRASidePanelClick().click()
cy.wait(2000)

nBRiskAnalysis.getNBRAUWApproveButton().click()
cy.wait(2000)

nBRiskAnalysis.getNBRAUWOkButton().click()
cy.wait(2000)

nBPolicyReview.getNBPRBindOptionclick().click()
cy.wait(2000)

nBPolicyReview.getNBPRissueOptionclick().click()
cy.wait(2000)

submissionBound.getSubmissionnumber().then(function(text4){
cy.log(text4.text())

submissionBound.getPolicyNumber().then(function(text3){
cy.log(text3.text())
cy.writeFile('\\Users\\lonagara\\Documents\\Automation\\CypressFrameworkNonBDD\\cypress\\fixtures\\NBPolicyData.json',{Accountnumber:text2.text(),Policynumber:text3.text(),Submissionnumber:text4.text()})

})

})


})


})

})