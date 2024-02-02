class CreateNewVehicle{


    getCreateNVButton(){
 
     return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel_tb-Add > .gw-action--inner > .gw-label')
     
    }

    
    getCreateNVVinNumber(){
 
        return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-Vin_DV > .gw-vw--value > input')        
       }

       
    getCreateNVLicenseState(){
 
        return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-LicenseState_DV > .gw-vw--value > .gw-select-wrapper > select')
        
       }


       getCreateNVCostnew(){
 
        return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-CostNew_DV > .gw-vw--value > input')
        
       }

       getCreateNVClickNext(){
 
        return cy.get('#SubmissionWizard-Next > .gw-action--inner')
        cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver > [data-gw-click="toggleSubMenu"]')
       }

       getCreateNVAddAssignedVehicle(){
 
        return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver > [data-gw-click="toggleSubMenu"]')
    
        cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-0-Driver > .gw-action--inner > .gw-label')

    }

    getCreateNVselectdriver(){
 
       return cy.get('#SubmissionWizard-LOBWizardStepGroup-LineWizardStepSet-PAVehiclesScreen-PAVehiclesPanelSet-VehiclesListDetailPanel-VehiclesDetailsCV-PersonalAuto_VehicleDV-PersonalAuto_AssignDriversInputSet-DriverPctLV_tb-AddDriver-0-Driver > .gw-action--inner > .gw-label')

    }






           
   
}

 
 export default CreateNewVehicle