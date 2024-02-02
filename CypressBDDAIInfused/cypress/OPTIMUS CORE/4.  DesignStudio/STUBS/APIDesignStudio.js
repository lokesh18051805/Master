import cypress = require("cypress")

Generate Output for the API set 
https://dummy.restapiexample.com/api/v1/employees

{  

    "id": 1,

    "employee_name": "Tiger Nixon",

    "employee_salary": 320800,

}

Generate cypress code for the API set

describe('API Test', function() {
    
        it('API Test', function() {
    
            cy.request('https://dummy.restapiexample.com/api/v1/employees').then(function(response){
    
                expect(response.status).to.eq(200)
    
                expect(response.body.data[0].employee_name).to.eq("Tiger Nixon")
    
            })
    
        })
    
    }