import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the Guidewire Policy Center application', () => {
  cy.visit('https://policycenterurl.com'); // Replace with the URL of your Guidewire Policy Center
});

When('I fill in the account creation form with valid information', () => {
  cy.get('#firstName').type('John');
  cy.get('#lastName').type('Doe');
  cy.get('#email').type('john.doe@example.com');
  // Fill in other form fields with appropriate data  
});

When('I submit the account creation form', () => {
  cy.get('#submitBtn').click(); // Replace with the selector of the submit button
});

Then('the account should be created successfully', () => {
  cy.get('#successMessage').should('be.visible'); // Replace with the selector of the success message element
});

Then('an error message should be displayed', () => {
  cy.get('#errorMessage').should('be.visible'); // Replace with the selector of the error message element
});