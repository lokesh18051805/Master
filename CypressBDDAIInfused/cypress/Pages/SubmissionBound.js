class SubmissionBound{


    getSubmissionnumber(){
 
     return cy.get('#JobComplete-JobCompleteScreen-JobCompleteDV-ViewJob > .gw-vw--value > .gw-BulletPointTextValueWidget--inner > .gw-action')
    
    }

    getPolicyNumber(){

       return cy.get('#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy > .gw-vw--value > .gw-BulletPointTextValueWidget--inner > .gw-action')
       
       }

       getAccountNumber(){

        return cy.get('#SubmissionWizard-JobWizardInfoBar-AccountNumber > .gw-infoValue')
   
       }
       

   
}

 
 export default  SubmissionBound
