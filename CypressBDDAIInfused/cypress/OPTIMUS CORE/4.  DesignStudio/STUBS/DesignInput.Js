Requirement Number:PC356478

Summary:
given in Agent portal application,
for"commercial Auto" Line of buiness, 
When the user selects "package policy" as "product type",
then user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Test Scenarios:

Positive scenario 1:

When the user selects "package policy" as "product type",
then user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Positive scenario 2:

When the user select "commercial Property" as "product type",
then user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Positive scenario 3:

When the user select "inland Marine" as "product type",
then user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Positive scenario 4:

When the user select "general liability" as "product type",
then user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Positive scenario 5:

When the user select "Crime" as "product type",
then user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Test case 1: positive scenario 1:

Step:1 enter the url
Step:2 enter the username
Step:3 enter the password
Step:4 click on login button
Step:5 click on "commercial Auto" link
Step:6 click on "package policy" link
Step:7 click on "product type" dropdown
Step:8 select "commercial Property" option
Step:10 verify that user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Test case 2: positive scenario 2:

Step:1 enter the url
Step:2 enter the username and password
Step:3 click on login button
Step:4 click on "commercial Auto" link
Step:5 click on "package policy" link
Step:6 click on "product type" dropdown
Step:7 select "commercial Property" option
Step:8 verify that user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Test case 3: positive scenario 3:

Step:1 enter the url
Step:2 enter the username and password
Step:3 click on login button
Step:4 click on "commercial Auto" link
Step:5 click on "package policy" link
Step:6 click on "product type" dropdown
Step:7 select "commercial Property" option
Step:8 verify that user should be able to see  "commercial Property", "inland Marine","general liability", "Crime" options in the screen.

Cypress base script for Test case 1:

describe('Test case 1: positive scenario 1', function () {

    it('should enter the url', function () {
        cy.visit('https://logindev.wn.nasinsurance.com/')
    })

    it('should enter the username', function () {
        cy.get('#username').type('testagent')
    })

    it('should enter the password', function () {
        cy.get('#password').type('testagent')
    })

    it('should click on login button', function () {
        cy.get('#kc-login').click()
    })

    it('should click on "commercial Auto" link', function () {
        cy.get('#root > div > div > div > div > div)

    it('should click on "package policy" link', function () {
        cy.get('#r)

    it('should click on "product type" dropdown', function () {
        cy.get('#react-select-2-input').click()
    }