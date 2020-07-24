package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class LoginPage extends BaseClass{

	@FindBy (xpath = "//input[contains(@name,'username')]")
	public WebElement usernameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'password')]")
	public WebElement passwordTextBox;
	
	@FindBy (xpath = "//div[@aria-label='Log In' and @role='button']")
	public WebElement loginButton;
	
	@FindBy (xpath = "//div[contains(@class,'logo gw-styleTag')]")
	public WebElement loginPageGWLogo;
	
	
	public LoginPage() {
		PageFactory.initElements(driver,this);
	}
}
