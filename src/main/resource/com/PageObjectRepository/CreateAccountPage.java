package com.PageObjectRepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class CreateAccountPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-Name')]")
	public WebElement NameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'-Phone-GlobalPhoneInputSet')]")
	public WebElement OfficePhoneTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'FaxPhone-GlobalPhoneInputSet')]")
	public WebElement FaxTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-EmailAddress1')]")
	public WebElement PrimaryEmailTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-EmailAddress2')]")
	public WebElement SecondaryEmailTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Country') and @data-gw-getset='select']")
	public List<WebElement> CountryDropDownList;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Country') and @data-gw-getset='select']")
	public WebElement CountryDropDownElement;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-AddressLine1')]")
	public WebElement AddressLine1TextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-AddressLine2')]")
	public WebElement AddressLine2TextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-AddressLine3')]")
	public WebElement AddressLine3TextBox;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-City')]")
	public WebElement CityTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-City-AutoFillIcon')]")
	public WebElement CityAutoFillBtn;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-County')]")
	public WebElement CountyTextBox;
	
	@FindBy (xpath = "//select[contains(@name,'State')]")
	public List<WebElement> StateDropDownList;
	
	@FindBy (xpath = "//select[contains(@name,'State')]")
	public WebElement StateDropDownElement;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-PostalCode')]")
	public WebElement ZipCodeTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'PostalCode-AutoFillIcon')]")
	public WebElement ZipCodeAutoFillBtn;
	
	@FindBy (xpath = "//select[contains(@name,'AddressType')]")
	public List<WebElement> AddressTypeDropDownList;
	
	@FindBy (xpath = "//select[contains(@name,'AddressType')]")
	public WebElement AddressTypeDropDownElement;
	
	@FindBy (xpath = "//input[contains(@name,'AddressDescription')]")
	public WebElement DescriptionTextBox;
	
	@FindBy (xpath = "//select[contains(@name,'OrgType')]")
	public List<WebElement> OrganizationTypeDropDownList;
	
	@FindBy (xpath = "//select[contains(@name,'OrgType')]")
	public WebElement OrganizationTypeDropDownElement;
	
	@FindBy (xpath = "//input[contains(@name,'DescriptionOfBusiness')]")
	public WebElement DescriptionOfBusinessTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'OfficialIDDV_Input')]")
	public WebElement FEINTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'Nickname')]")
	public WebElement NicknameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'IndustryCode')]")
	public WebElement IndustryCodeTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'SelectIndustryCode')]")
	public WebElement IndustryCodeSearchBtn;
	
	@FindBy (xpath = "//input[contains(@name,'Producer')]")
	public WebElement OrganizationTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'SelectOrganization')]")
	public WebElement OrganizationSearchBtn;
	
	@FindBy (xpath = "//div[text()='Up']/../..")
	public WebElement UpdateBtn;
	
	@FindBy (xpath = "//div[text()='Cance']/..")
	public WebElement CancelBtn;
	
	public CreateAccountPage() {
		PageFactory.initElements(driver,this);
	}
}
