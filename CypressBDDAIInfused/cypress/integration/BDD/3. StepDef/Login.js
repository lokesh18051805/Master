import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open the Guidewire Policy Center application', () => {
  cy.visit('https://policycenterurl.com'); // Replace with the URL of your Guidewire Policy Center
});

When('I enter my username as {string} and password as {string}', (username, password) => {
  cy.get('#username').type(username); // Replace with the selector of the username input field
  cy.get('#password').type(password); // Replace with the selector of the password input field
});

When('I click on the login button', () => {
  cy.get('#loginBtn').click(); // Replace with the selector of the login button
});

Then('I should be logged in to Guidewire Policy Center', () => {
  cy.get('#dashboard').should('be.visible'); // Replace with the selector of a visible element on the dashboard page
});
