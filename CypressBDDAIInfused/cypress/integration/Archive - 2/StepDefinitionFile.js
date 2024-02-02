import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;

public class LoginStepDefinitions {
  
  @Given("I am on the Guidewire PC login page")
  public void goToLoginPage() {
      // Code to navigate to the Guidewire PC login page
  }
  
  @When("I enter valid credentials and click {string}")
  public void enterValidCredentials(String buttonText) {
      // Code to enter valid credentials (e.g., username and password)
      // Code to click the login button with the provided buttonText
  }
  
  @Then("I should be logged in to the Guidewire PC system")
  public void verifyLogin() {
      // Code to verify successful login (e.g., check for dashboard page)
  }
  
  @Then("I should see an error message indicating the failed login")
  public void verifyFailedLoginErrorMessage() {
      // Code to verify the presence of an error message indicating failed login
  }
  
  @Then("I should see an error message indicating the missing credentials")
  public void verifyMissingCredentialsErrorMessage() {
      // Code to verify the presence of an error message indicating missing credentials
  }
  
  @Then("I should see an error message indicating the account is locked")
  public void verifyAccountLockedErrorMessage() {
      // Code to verify the presence of an error message indicating the locked account
  }
}