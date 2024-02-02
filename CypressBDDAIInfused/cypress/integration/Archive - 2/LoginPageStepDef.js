/// <refernce  types="Cypress"/>
import Loginpage from '../../../Pages/PCLogin'
import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

///mport {Given,When,Then} from "cypress-cucumber-preprocessor/steps";


const loginpage=new Loginpage()

Given('Open GW PC Application',()=>
{
    cy.visit("http://in-pnq-coe31:5180/pc/PolicyCenter.do")
})

When('User try to Login to Application',()=>
{
    cy.wait(4000)
    loginpage.getUsername().type("su")
    cy.wait(1000)
    loginpage.getpassword().type("gw")
    cy.wait(1000)
     
})

Then('then Login to the Application' ,()=>
{
    loginpage.getloginbutton().click()
    cy.wait(4000) 

})


Then('Verify if the User is logged in to the Application' ,()=>
{
    cy.wait(4000) 

})


