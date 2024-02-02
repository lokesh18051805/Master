 class LoginPage{


   getUsername(){

    return cy.get('#Login-LoginScreen-LoginDV-username > .gw-vw--value > .gw-noTrack')

   }

   getpassword(){

    return cy.get('#Login-LoginScreen-LoginDV-password > .gw-vw--value > .gw-noTrack')

   }

   getloginbutton(){

    return cy.get(".gw-action--inner")

   }

    
 
}

export default LoginPage
