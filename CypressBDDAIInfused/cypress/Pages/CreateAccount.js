class CreateAccount{


    getactionbuttonicon(){
 
     return cy.get('#Desktop-DesktopMenuActions > :nth-child(1)')
    
    }
    getcreateAccountlink(){
 
        return cy.get('#Desktop-DesktopMenuActions-DesktopMenuActions_Create-DesktopMenuActions_NewAccount > .gw-action--inner > .gw-label')    
    }

    getcompanynametextbox(){
        return cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-GlobalContactNameInputSet-Name > .gw-vw--value > .gw-noTrack')  
    }
    getClickonSearch(){
 
        return cy.get('#NewAccount-NewAccountScreen-NewAccountSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search')
    }
    getclickoncreatenewaccount(){
        return cy.get('#NewAccount-NewAccountScreen-NewAccountButton > [data-gw-click="toggleSubMenu"]')      
    }
    getclickonNewPerson(){
        return cy.get('#NewAccount-NewAccountScreen-NewAccountButton-NewAccount_Person > .gw-action--inner > .gw-label') 
    }
    getCreateAccountFirstname(){
        return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-FirstName > .gw-vw--value > input')
    }

    getCreateAccountLastname(){
        return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-CreateAccountContactInputSet-GlobalPersonNameInputSet-LastName > .gw-vw--value > input')
    }
    getCreateAccountAddressone(){
 
       return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1 > .gw-vw--value > input')
    }
    getCreateAccountCity(){
 
        return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City > .gw-vw--value > input')
    }
    
    getCreateAccountState(){
        return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-State > .gw-vw--value > .gw-select-wrapper > select')
    }

    getCreateAccountStateZipCode(){
        return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-PostalCode > .gw-vw--value > input')
    }

    getCreateAccountorgnizationSearch(){
      return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-Producer-SelectOrganization')  
    }

    getCreateAccountaddressType(){
        return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType > .gw-vw--value > .gw-select-wrapper > select')
      
      }
  
      getCreateAccountOrgSearchinput(){
        return cy.get('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-GlobalContactNameInputSet-Name > .gw-vw--value > .gw-noTrack')
      }

      getCreateAccountOrgSearchButton(){
        return cy.get('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search')  
      }
  
      getCreateAccountOrgselect(){
        return cy.get('#OrganizationSearchPopup-OrganizationSearchPopupScreen-OrganizationSearchResultsLV-0-_Select > .gw-action--inner > .gw-label')  
      }

      getCreateAccountProdCode(){
       return cy.get('#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode > .gw-vw--value > .gw-select-wrapper > select')
        
      }
      getCreateAccountUpdateClick(){
        return cy.get('#CreateAccount-CreateAccountScreen-Update > .gw-action--inner > .gw-label')  
       
       }   

        
       
}

 
 export default CreateAccount