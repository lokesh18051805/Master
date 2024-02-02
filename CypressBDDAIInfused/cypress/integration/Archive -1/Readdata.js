const neatCSV =require('neat-csv');

describe('readCSV', () =>{

let table;

    before(() => {

cy.fixture('TestData.csv')
.then(neatCSV)
.then(data =>{

    table= data;
})

.then(console.table)
    });

    it("readdata", ()=>{
    
        cy.visit("http://in-pnq-coe31:5180/pc/PolicyCenter.do")
        cy.wait(3000)
    
        cy.get('#Login-LoginScreen-LoginDV-username_Input > .gw-label').then(function(text2){
    
    cy.log(text2.text())

    cy.writeFile('sample.json',{Pnumber:text2.text()})


        })
    
    
    
        })
        


})


