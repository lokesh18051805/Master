class login{
    visit(){
        cy.visit("http://localhost:8080/pc/PolicyCenter.do")
    }
    fillUsername(value){
        const field = cy.get('#Login:LoginScreen:LoginDV:username-inputEl')
        field.clear()
        field.type(value)
        return this
    }
    fillPassword(value){
        const field = cy.get('#Login:LoginScreen:LoginDV:password-inputEl')
        field.clear()
        field.type(value)
        return this
    }
    submit(){
        const button = cy.get('#Login:LoginScreen:LoginDV:submit')
        button.click()
    }
}

