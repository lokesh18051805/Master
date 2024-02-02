class NBPolicyReview{


    getNBPRQuoteButton(){
 
     return cy.get('#SubmissionWizard-SubmissionWizard_PolicyReviewScreen-JobWizardToolbarButtonSet-QuoteTypeToolbarButtonSet-Quote > .gw-action--inner')
    
    }

    getNBPRBindOptionclick(){

       return cy.get('#SubmissionWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-BindOptions > [data-gw-click="toggleSubMenu"]')
       
       }

       getNBPRissueOptionclick(){

        return cy.get('#SubmissionWizard-Job_RiskAnalysisScreen-JobWizardToolbarButtonSet-BindOptions-BindAndIssue > .gw-action--inner > .gw-label')
        }
   

   
}

 
 export default  NBPolicyReview
