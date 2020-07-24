package com.StepDefinitions;

import com.PageObjectRepository.LoginPage;
import com.Utilities.BaseClass;
import com.Utilities.CommonMethods;
import com.Utilities.ConfigsReader;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginFunctionality extends BaseClass {

	LoginPage LP;

	@When("User will login to the application using valid credentials")
	public void User_will_login_to_the_application_using_valid_credentials() throws InterruptedException {
		LP = new LoginPage();
		CommonMethods.waitForElementBeClickable(LP.loginButton, 30);
		CommonMethods.sendKeys(LP.usernameTextBox, ConfigsReader.getProperty("username"));
		CommonMethods.sendKeys(LP.passwordTextBox, ConfigsReader.getProperty("password"));
		CommonMethods.click(LP.loginButton);
	}
}
