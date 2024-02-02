class NBRiskAnalysis{


    getNBRANextButton(){
 
     return cy.get('#SubmissionWizard-Next > .gw-action--inner')
     cy.get('#SubmissionWizard-RiskAnalysis > .gw-action--inner > .gw-label')
     
    }

    getNBRASidePanelClick(){
 
     
       return cy.get('#SubmissionWizard-RiskAnalysis > .gw-action--inner > .gw-label')
      
       }

       
    getNBRAUWApproveButton(){
 
        return cy.get('#SubmissionWizard-Job_RiskAnalysisScreen-RiskAnalysisCV-RiskEvaluationPanelSet-1-UWIssueRowSet-Approve')
        cy.get('#RiskApprovalDetailsPopup-Update > .gw-action--inner')
        }

    getNBRAUWOkButton(){
 
           return  cy.get('#RiskApprovalDetailsPopup-Update > .gw-action--inner')
     }

    
   
}

 
 export default  NBRiskAnalysis
