class CreateSubmission{


    getCreateSubactionbuttonicon(){
 
     return cy.get('#AccountFile-AccountFileMenuActions > :nth-child(1)')
     cy.get('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission > .gw-action--inner > .gw-label')
    }

    getCreateSubcick(){
 
       return  cy.get('#AccountFile-AccountFileMenuActions-AccountFileMenuActions_Create-AccountFileMenuActions_NewSubmission > .gw-action--inner > .gw-label')
 
       }
       getCreateSubPersonAutoSelect(){
       return cy.get('#NewSubmission-NewSubmissionScreen-ProductOffersDV-ProductSelectionLV-8-addSubmission')
        }

        getCreateSubofferingselect(){
            return cy.get('select')
        }

        getCreateSubNext(){
           return cy.get('#SubmissionWizard-Next > .gw-action--inner > .gw-label')
           
        }

        getCreateSubQualificationNext(){
      
            return cy.get('#SubmissionWizard-Next > .gw-action--inner > .gw-label')
            cy.get('#SubmissionWizard-Next > .gw-action--inner > .gw-label')
         }

         getCreateSubPolicyInfoNext(){
      
            return cy.get('#SubmissionWizard-Next > .gw-action--inner > .gw-label')
            cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver > :nth-child(1)')
         }
           

         getCreateSubAddDriver(){

            return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver > :nth-child(1)')
            
         }

         getCreateSubAddnewdriver(){
 
            return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact > [data-gw-click="toggleSubMenu"] > .gw-label')
         }

           getCreateSubexisitngdriver(){
 
            return  cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriversLV_tb-AddDriver-AddExistingContact-0-UnassignedDriver > .gw-action--inner > .gw-label') 
          
        }

        getCreateSubDriverLicense(){
 
            return  cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseNumber > .gw-vw--value > input')
        }

        
        getCreateSubDriverLicenseState(){
 
            return  cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-PolicyContactDetailsDV-LicenseInputSet-LicenseState > .gw-vw--value > .gw-select-wrapper > select')
        }

        getCreateSubDriverdateofbirth(){
 
            return  cy.get('.gw-DateValueWidget--dateInput')        
        }
       
                
        getCreateSubRolesClick(){
 
            return  cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-RolesCardTab > .gw-action--inner > .gw-label')
            
        }

        getCreateSubRolesYears(){
           return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverInfoDV-yearlicensed > .gw-vw--value > input')
        }

        getCreateSubRolesPolicyLevelAccidents(){
            return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfAccidents > .gw-vw--value > .gw-select-wrapper > select')
        }

        getCreateSubRolesPolicyLevelvoilations(){
            return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PADriversScreen-PADriversPanelSet-DriversListDetailPanel-DriverDetailsCV-1-PolicyContactRolePanelSet-PolicyDriverNumberOfViolations > .gw-vw--value > .gw-select-wrapper > select')
        }
            
        
        
    




       
        getCreateSubAddDriverNext(){
            return cy.get('#SubmissionWizard-Next > .gw-action--inner > .gw-label')
         }


        
        
       
   
}

 
 export default CreateSubmission