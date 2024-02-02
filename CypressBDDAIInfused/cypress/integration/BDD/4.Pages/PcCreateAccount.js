class CreateAccount{

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

    

}