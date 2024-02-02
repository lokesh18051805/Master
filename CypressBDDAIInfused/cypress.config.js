const { defineConfig } = require("cypress");
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const csv =require('@fast-csv/parse')
const { writeToPath }= require('@fast-csv/format');module.exports=defineConfig
//const sqlServer= required('cypress-sql-server');


async function setupNodeEvents(on, config){


  on("task", {

    readFromCsv()
    {
      return new Promise(resolve=>
          {
            let dataArray=[];
            csv.parseFile("./TestData.csv",{headers: true})
            .on('data', (data) =>{
              dataArray.push(data);  
            })
                   
              .on('end', ()=>
              {
                resolve(dataArray)
              })
          })
    }

  });

  on("task", {

    WritetoCsv({name, rows})
    {
     writeToPath('./${name}.csv', rows)
     return null;
    }
    

  });




}



module.exports = defineConfig({
  projectId: 'pu27xu',
  defaultCommandTimeout: 10000,
  
  env: {

    OOTBurl:"http://in-pnq-coe31:5180/pc/PolicyCenter.do"
  },

  retries: {
    runMode : 0,
    openMode : 0,
  },

  e2e: {
    

    setupNodeEvents,
    //specPattern: 'cypress/integration/BDD/*.feature'
    specPattern: 'cypress/integration/TestCases/*.js'
    // implement node event listeners here
    },

   


  });



      
  



  
  

