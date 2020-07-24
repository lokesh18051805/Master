Feature: Create a Basic Quote in policy center 
	GW user should be able to login to Applicaiton and create a General Quote
	
@quote
Scenario: Login into GW with correct credentials 
	Given User will login to the application using valid credentials
	Then User will do validation in the my summary page
	Then User click on create new Account
	Then User Enters infromation to search for account
	Then User creates a new Account
	Then User creates a new submission
	Then User will enter all details for GL Submission