/**
 * @author Mehmet Yucer
 */

package com.StepDefinitions;

import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.Helper.InitializerClass;
import com.Utilities.CommonMethods;

import io.cucumber.java.en.Then;

public class QuoteCreation extends InitializerClass{
	
	String companyName = "Company32ForTest";
	
	@Then("User will do validation in the my summary page")
	public void user_will_do_validation_in_the_my_summary_page() {
		CommonMethods.waitForElementBeVisible(MS.pageTitle, time);
		ActualValue = MS.pageTitle.getText();
		assertEquals(ActualValue, "My Summary", "Verification of page title in My Summary Page is failed");
	}

	@Then("User click on create new Account")
	public void user_click_on_create_new_Account() {
		CommonMethods.click(MS.ActionsBtn);
		CommonMethods.click(MS.NewAccountBtn);
	}

	@Then("User Enters infromation to search for account")
	public void user_Enters_infromation_to_search_for_account() {
		CommonMethods.waitForElementBeClickable(EAI.SearchBtn, time);
		ActualValue = EAI.pageTitle.getText();
		assertEquals(ActualValue, "Enter Account Information", "Verification of page title in Enter Account Information page is failed");
		CommonMethods.sendKeys(EAI.CompanyNameTextBox, companyName);
		CommonMethods.selectByTextFromList(EAI.CountryDropDown, "United States");
		CommonMethods.sendKeys(EAI.ZipCodeTextBox, "43235");
		CommonMethods.click(EAI.SearchBtn);
		CommonMethods.click(EAI.SearchBtn);
		CommonMethods.waitForElementBeVisible(EAI.WarningMessage, time);
		ActualValue = EAI.WarningMessage.getText();
		assertEquals(ActualValue, "The search returned zero results.", "Verification of warning message is failed");
		CommonMethods.click(EAI.CreateNewAccountBtn);
		CommonMethods.click(EAI.CompanyBtn);
	}

	@Then("User creates a new Account")
	public void user_creates_a_new_Account() throws InterruptedException {
		CommonMethods.waitForElementBeClickable(CA.UpdateBtn, time);
		ActualValue = CA.pageTitle.getText();
		assertEquals(ActualValue, "Create account", "Verification of page title in Create Account page is failed");
		ActualValue = CA.NameTextBox.getAttribute("value");
		assertEquals(ActualValue, companyName, "Verification of Company Name in Create Account page is failed");
		CommonMethods.sendKeys(CA.OfficePhoneTextBox, "2039948857");
		CommonMethods.sendKeys(CA.PrimaryEmailTextBox, "abc@capgemini.com");
		CommonMethods.sendKeys(CA.SecondaryEmailTextBox, "def@capgemini.com");
		CommonMethods.sendKeys(CA.AddressLine1TextBox, "1540 Slade Ave");
		CommonMethods.sendKeys(CA.CityTextBox, "Columbus");
		CommonMethods.selectByVisibleTextFromList(CA.AddressTypeDropDownElement, "Business");
		CommonMethods.sendKeys(CA.StateDropDownElement, "O");
//		CommonMethods.selectByVisibleTextFromList(CA.StateDropDownElement, "Ohio");
		CommonMethods.selectByVisibleTextFromList(CA.OrganizationTypeDropDownElement, "LLC");
		CommonMethods.click(CA.OrganizationSearchBtn);
//		CommonMethods.sendKeys(CA.OrganizationTextBox, "Default Organization");
		
		CommonMethods.waitForElementBeClickable(ORG.SearchBtn, time);
		ActualValue = ORG.pageTitle.getText();
		assertEquals(ActualValue, "Organizations", "Verification of page title in Organizations page is failed");
		CommonMethods.sendKeys(ORG.ProducerCodeTextBox, "1111");
		CommonMethods.click(ORG.SearchBtn);
		CommonMethods.waitForElementBeClickable(ORG.SelectBtn, time);
		CommonMethods.click(ORG.SelectBtn);
		CommonMethods.waitForElementBeClickable(CA.UpdateBtn, time);
		ActualValue = CA.OrganizationTextBox.getAttribute("value");
		assertEquals(ActualValue, "Default Organization", "Verification of Organization in Create Account page is failed");	
		CommonMethods.click(CA.UpdateBtn);
	}
	
	@Then("User creates a new submission")
	public void user_creates_a_new_submission() {
		CommonMethods.waitForElementBeClickable(AS.ActionsBtn, time);
		ActualValue = AS.pageTitle.getText();
		assertEquals(ActualValue, "Account Summary: "+companyName, "Verification of page title in Account Summary page is failed");
		CommonMethods.click(AS.ActionsBtn);
		CommonMethods.click(AS.NewSubmissionBtn);
		CommonMethods.waitForElementBeClickable(NS.OrganizationSearchBtn, time);
		ActualValue = NS.pageTitle.getText();
		assertEquals(ActualValue, "New Submissions", "Verification of page title in New Submissions page is failed");
		ActualValue = NS.OrganizationTextBox.getAttribute("value");
		assertEquals(ActualValue, "Default Organization", "Verification of Organization in New Submissions page is failed");
		driver.findElement(By.xpath("//table[@class='gw-ListViewWidget--table gw-table']//tr[6]/td[1]")).click();
	}
	
	@Then("User will enter all details for GL Submission")
	public void user_will_enter_all_details_for_GL_Submission() {
		CommonMethods.waitForElementBeClickable(CBA.NextBtn, time);
		CommonMethods.click(CBA.NextBtn);
		
		//Qualification Page
		CommonMethods.waitForElementBeVisible(QUAL.EmployedOrContractedQuestion, time);
		ActualValue = QUAL.pageTitle.getText();
		assertEquals(ActualValue, "Qualification", "Verification of page title in Qualification page is failed");
		CommonMethods.click(CBA.NextBtn);
		
		//Policy Info Page
		CommonMethods.waitForElementBeVisible(PI.IndustryCodeSearchBtn, time);
		ActualValue = PI.pageTitle.getText();
		assertEquals(ActualValue, "Policy Info", "Verification of page title in Policy Info page is failed");
		CommonMethods.sendKeys(PI.DateQuoteNeededTextBox, "07/24/2020");
		CommonMethods.sendKeys(PI.YearBusinessStartedTextBox, "2020");
		CommonMethods.sendKeys(PI.DescriptionOfBusinessAndOperationsTextBox, "important");
		CommonMethods.click(CBA.NextBtn);
		
		//Locations Page
		WebElement element0 = driver.findElement(By.xpath("//div[contains(@id,'Loc_button')]"));
		CommonMethods.waitForElementBeClickable(element0, time);
		ActualValue = LOC.pageTitle.getText();
		assertEquals(ActualValue, "Locations", "Verification of page title in Locations page is failed");
		element0.click();
		CommonMethods.waitForElementBeClickable(CBA.OkBtn, time);
		ActualValue = LI.pageTitle.getText();
		assertEquals(ActualValue, "Location Information", "Verification of page title in Location Information page is failed");
		CommonMethods.click(CBA.OkBtn);
		CommonMethods.click(CBA.NextBtn);
		
		//Coverages Page
		CommonMethods.waitForElementBeClickable(COV.PolicyBasisElement, time);
		ActualValue = COV.pageTitle.getText();
		assertEquals(ActualValue, "Coverages", "Verification of page title in Coverages page is failed");
		ActualValue = COV.PolicyBasisElement.getAttribute("value");
		assertEquals(ActualValue, "Occurrence", "Verification of Policy Basis in Coverages page is failed");
		CommonMethods.selectByVisibleTextFromList(COV.AggregateLimitElement, "500,000");
		CommonMethods.click(COV.AdditionalCoveragesTab);
		CommonMethods.waitForElementBeClickable(COV.AddCoveragesBtn, time);
		CommonMethods.click(COV.AddCoveragesBtn);
		CommonMethods.waitForElementBeClickable(CBA.SearchBtn, time);
		CommonMethods.click(CBA.SearchBtn);
		driver.findElement(By.xpath("//table[@class='gw-ListViewWidget--table gw-table']//tr[2]//td[1]//input")).click();
		CommonMethods.waitForElementBeClickable(COV.AddSelectedCoveragesBtn, time);
		CommonMethods.click(COV.AddSelectedCoveragesBtn);
		CommonMethods.waitForElementBeClickable(CBA.NextBtn, time);
		CommonMethods.sendKeys(COV.DesignatedPollutantsTextBox, "2");
		CommonMethods.click(CBA.NextBtn);
		
		//Exposures Page
		CommonMethods.waitForElementBeClickable(EXPO.AddBtn, time);
		CommonMethods.waitForElementBeVisible(EXPO.NoDataToDisplayedTableMessage, time);
		ActualValue = EXPO.pageTitle.getText();
		assertEquals(ActualValue, "Exposures", "Verification of page title in Exposures page is failed");
		CommonMethods.click(EXPO.AddBtn);
		CommonMethods.waitForElementBeClickable(EXPO.LocationDropDown, time);
		CommonMethods.selectByIndexFromList(EXPO.LocationDropDown, 1);
		CommonMethods.waitForElementBeClickable(EXPO.ClassCodeSearchBtn, time);
		CommonMethods.click(EXPO.ClassCodeSearchBtn);
		CommonMethods.waitForElementBeClickable(CBA.SearchBtn, time);
		CommonMethods.click(CBA.SearchBtn);
		WebElement element = driver.findElement(By.xpath("//table[@class='gw-ListViewWidget--table gw-table']//div[text()='0001']"));
		CommonMethods.waitForElementBeVisible(element, time);
		driver.findElement(By.xpath("//table[@class='gw-ListViewWidget--table gw-table']//tr[2]//td[1]//div[@role='button']")).click();
		CommonMethods.sendKeys(EXPO.BasisTextBox, "2");
		CommonMethods.click(CBA.NextBtn);
		
		//Modifiers Page
		CommonMethods.waitForElementBeClickable(MOD.GLExperienceModifierEligibleCheckbox, time);
		ActualValue = MOD.pageTitle.getText();
		assertEquals(ActualValue, "Modifiers", "Verification of page title in Modifiers page is failed");
		CommonMethods.click(CBA.NextBtn);
		
		//Risk Analysis Page
		CommonMethods.waitForElementBeClickable(RA.AddUWIssueBtn, time);
		ActualValue = RA.pageTitle.getText();
		assertEquals(ActualValue, "Risk Analysis", "Verification of page title in Risk Analysis page is failed");
		CommonMethods.click(CBA.NextBtn);
		
		//Policy Review Page
		CommonMethods.waitForElementBeVisible(PR.PolicyNamedInsuredElement, time);
		ActualValue = PR.pageTitle.getText();
		assertEquals(ActualValue, "Policy Review", "Verification of page title in Policy Review page is failed");
		CommonMethods.click(CBA.QuoteBtn);
		
		//Quote Page
		CommonMethods.waitForElementBeClickable(CBA.ReleaseLockBtn, time);
		ActualValue = QUO.pageTitle.getText();
		assertEquals(ActualValue, "Quote", "Verification of page title in Quote page is failed");
		ActualValue = QUO.SubmissionNumberText.getText();
		assertEquals(ActualValue, "Submission Number", "Verification of Submission Number Text in Quote page is failed");
		System.out.println("Submission #: "+QUO.SubmissionNumber.getText());
	}
	
	
	
	
	
	
	
	String ActualValue;
	int time = 30;
	
}
