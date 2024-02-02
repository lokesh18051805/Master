
// cypress/plugins/index.js
module.exports = (on, config) => {};

// cypress/support/commands.js
Cypress.Commands.add("login", (username, password) => {
  // Visit the GW Policy Center login page
  cy.visit('https://policycenter.gwu.edu/user');

  // Enter the username
  cy.get('#edit-name').type(username);

  // Enter the password
  cy.get('#edit-pass').type(password);

  // Submit the login form
  cy.get('#edit-submit').click();

  // Wait for the main content to load after login
  cy.get('#main-content', { timeout: 5000 }).should('be.visible');
});

// cypress/integration/gw_policy_center.spec.js
describe('GW Policy Center', () => {
  it('should log in successfully', () => {
    // Log in with your GW Policy Center credentials
    const username = 'your_username';
    const password = 'your_password';
    cy.login(username, password);

    // Assert that the login was successful
    cy.contains('Logged in successfully to GW Policy Center!').should('be.visible');
  });
});