package com.PageObjectRepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class EnterAccountInformationPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-Name')]")
	public WebElement CompanyNameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'CompanyNameExact')]")
	public WebElement CompanyNameExactMatchCheckBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-FirstName')]")
	public WebElement FirstNameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-LastName')]")
	public WebElement LastNameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'FirstNameExact')]")
	public WebElement FirstNameExactMatchCheckBox;
	
	@FindBy (xpath = "//input[contains(@name,'LastNameExact')]")
	public WebElement LastNameExactMatchCheckBox;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Country') and @data-gw-getset='select']")
	public List<WebElement> CountryDropDown;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-City')]")
	public WebElement CityTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-County')]")
	public WebElement CountyTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-State') and @data-gw-getset='select']")
	public List<WebElement> StateDropDown;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-PostalCode')]")
	public WebElement ZipCodeTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Search') and text()='earch']")
	public WebElement SearchBtn;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Reset') and text()='eset']")
	public WebElement ResetBtn;
	
	@FindBy (xpath = "//div[@class='gw-message']")
	public WebElement WarningMessage;
	
	@FindBy (xpath = "//div[contains(@id,'NewAccountButton')]//div[@role='button']")
	public WebElement CreateNewAccountBtn;
	
	@FindBy (xpath = "//div[contains(@id,'NewAccount_Company')]/div")
	public WebElement CompanyBtn;
	
	@FindBy (xpath = "//div[contains(@id,'NewAccount_Person')]/div")
	public WebElement PersonBtn;
	
	@FindBy (xpath = "//div[contains(@id,'NewAccount_FromAB')]/div")
	public WebElement FromAddressBookBtn;
	
	public EnterAccountInformationPage() {
		PageFactory.initElements(driver,this);
	}
}
