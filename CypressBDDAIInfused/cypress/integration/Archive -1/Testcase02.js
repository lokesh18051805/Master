/// <reference types="cypress"/>

import LoginPage from "../../Pages/PCLogin"
import CreateAccount from "../../Pages/CreateAccount"
import CreateSubmission from "../../Pages/CreateSubmission"

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


  })

  
     
it('PolicyCreation',function () {

const loginpage=new LoginPage()
const createaccount=new CreateAccount()
const createSubmission=new CreateSubmission()

cy.visit("http://in-pnq-coe31:5180/pc/PolicyCenter.do")

cy.wait(1000)
loginpage.getUsername().type(this.Usrdata.Username)
cy.wait(1000)
loginpage.getpassword().type(this.Usrdata.password)
cy.wait(1000)
//loginpage.getloginbutton().click()
//cy.wait(2000)

//create Acount starts from here

createaccount.getactionbuttonicon().click()
cy.wait(2000)
createaccount.getcreateAccountlink().click()
cy.wait(1000)
createaccount.getcompanynametextbox().type(this.data.CompanyName)
cy.wait(1000)
createaccount.getClickonSearch().click()
createaccount.getclickoncreatenewaccount().click()
createaccount.getclickonNewPerson().click()
createaccount.getCreateAccountFirstname().type(this.data.createAccountFirstname)
cy.wait(1000)
createaccount.getCreateAccountLastname().type(this.data.createAccountLastname)
cy.wait(1000)
createaccount.getCreateAccountAddressone().type(this.data.createAccountAddressone)
cy.wait(1000)
createaccount.getCreateAccountCity().type(this.data.createAccountCity)
cy.wait(1000)


createaccount.getCreateAccountState()
.select(this.data.createAccountState, { force: true })
.invoke('val')
.should('eq', 'OH')

createaccount.getCreateAccountStateZipCode().type(this.data.createAccountZipCode)


createaccount.getCreateAccountaddressType()
.select(this.data.createAddressType, { force: true })
.invoke('val')
.should('eq', 'billing')

createaccount.getCreateAccountorgnizationSearch().click()
cy.wait(2000)

createaccount.getCreateAccountOrgSearchinput().type(this.data.randomdata)

createaccount.getCreateAccountOrgSearchButton().click()
cy.wait(1000)

createaccount.getCreateAccountOrgselect().click()
cy.wait(1000)

createaccount.getCreateAccountProdCode()
.select(this.data.producerCode, { force: true })
.invoke('val')
.should('eq', 'ProducerCode:201')


createaccount.getCreateAccountUpdateClick().click()
cy.wait(1000)

//CreateSubmission Folow Starts from Here

createSubmission.getCreateSubactionbuttonicon().click()
createSubmission.getCreateSubcick().click()

createSubmission.getCreateSubPersonAutoSelect().click()

})

})
