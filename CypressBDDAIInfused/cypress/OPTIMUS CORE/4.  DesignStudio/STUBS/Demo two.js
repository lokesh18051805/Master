Requiremnt:PCU7805

Summary:
given in Agent portal application
for"commercial Auto" Line of buiness, 
When the user selects "package policy" as "product type"
And Then selects either or all of "Commercial Package", "general Libility","commercial vehicle" as product,
then user should see only 1  select "button" to select all the products added,
and when  "product type" other than "package policy" is selected 
then user should see 1 individual select "button"  for each products added in the new submission.

Test scenario :

Positive scenario 1 :
When user selects "package policy" as "product type"
and then selects "commercial package" as product
then user should see only 1  select "button" to select all the products added

Positive scenario 2 :
When user selects "package policy" as "product type"
and then selects "general Libility" as product
then user should see only 1  select "button" to select all the products added

Positive scenario 3 :
When user selects "package policy" as "product type"
and then selects "commercial vehicle" as product
then user should see only 1  select "button" to select all the products added

Positive scenario 4 :
When user selects "package policy" as "product type"
and then selects "commercial package" and "general Libility" as product
then user should see only 1  select "button" to select all the products added

Positive scenario 5 :
When user selects "package policy" as "product type"
and then selects "commercial package" and "commercial vehicle" as product
then user should see only 1  select "button" to select all the products added

Positive scenario 6 :
When user selects "package policy" as "product type"
and then selects "general Libility","commercial vehicle","commercial package" as product
then user should see only 1  select "button" to select all the products added

Positive scenario 7 :
When user selects "Business Owners Policy" as "product type"
then user should see 1 individual select "button"  for each products added in the new submission.

Positive scenario 8 :
When user selects "Commercial Auto" as "product type"
then user should see 1 individual select "button"  for each products added in the new submission.

Positive scenario 9 :
When user selects "Commercial Property" as "product type"
then user should see 1 individual select "button"  for each products added in the new submission.

Positive scenario 10 :
When user selects "Commercial Umbrella" as "product type"
then user should see 1 individual select "button"  for each products added in the new submission.

Positive scenario 11 :
When user selects "Crime" as "product type"
then user should see 1 individual select "button"  for each products added in the new submission.

Test case 1 : positive scenario 1:
Step:1 Enter the URL:https://Policycenter.com
Step:2	Enter the USername:"su"
Step:3 	Enter the Password:"gw"
Step:4 	Click on "Login" button
Step:5 	Click on "New Submission" button
Step:6 	Select "Commercial Auto" as "Line of business"
Step:7 	Select "package policy" as "product type"
Step:8 	Select "commercial package" as product
Step:9 	Then user should see only 1  select "button" in the new submission

Test case 2 : positive scenario 2:
Step:1 Enter the URL:https://Policycenter.com
Step:2	Enter the USername:"su"
Step:3 	Enter the Password:"gw"
Step:4 	Click on "Login" button
Step:5 	Click on "New Submission" button
Step:6 	Select "Commercial Auto" as "Line of business"
Step:7 	Select "package policy" as "product type"
Step:8 	Select "general Libility" as product
Step:9 	Then user should see only 1  select "button" in the new submission


Cypress Base script for the above test case:

describe('Test suite for PCU7805', function() {
it('Test case 1 : positive scenario 1', function() {
cy.visit('https://Policycenter.com')
cy.get('#Login:LoginScreen:LoginDV:username-inputEl').type('su')
cy.get('#Login:LoginScreen:LoginDV:password-inputEl').type('gw')
cy.get('#Login:LoginScreen:LoginDV:submit').click()
cy.get('#Desktop:DesktopMenuActions-btnInnerEl').click()
cy.get('#Desktop:DesktopMenuActions:DesktopMenuActions_NewSubmission-textEl').click()
cy.get('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HomeownersHOEScreen:HOProduct-inputEl').select('Commercial Auto')
cy.get('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProductType-inputEl').select('package policy')
cy.get('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProduct-inputEl').select('commercial package')
cy.get('#SubmissionWizard:Next-btnInnerEl').click()

Validaiton:

cy.visible('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProduct-inputEl').should('be.visible')

})

it('Test case 2 : positive scenario 2', function() {
cy.visit('https://Policycenter.com')
cy.get('#Login:LoginScreen:LoginDV:username-inputEl').type('su')
cy.get('#Login:LoginScreen:LoginDV:password-inputEl').type('gw')
cy.get('#Login:LoginScreen:LoginDV:submit').click()
cy.get('#Desktop:DesktopMenuActions-btnInnerEl').click()
cy.get('#Desktop:DesktopMenuActions:DesktopMenuActions_NewSubmission-textEl').click()
cy.get('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProduct-inputEl').select('Commercial Auto')
cy.get('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProductType-inputEl').select('package policy')
cy.get('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProduct-inputEl').select('general Libility')

Validaiton:

cy.visible('#SubmissionWizard:LOBWizardStepGroup:LineWizardStepSet:HOWizardStepGroup:HOLineWizardStepSet:HOProduct-inputEl').should('be.visible')

})




