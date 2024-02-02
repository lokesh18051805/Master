beforeEach(()=> {

    cy.fixture('PCLoginCredentials').then(function(Usrdata)
    {
        globalThis.Usrdata = Usrdata  

    })

});

