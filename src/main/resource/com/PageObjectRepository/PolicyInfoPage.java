package com.PageObjectRepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class PolicyInfoPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//input[contains(@name,'DateQuoteNeeded')]")
	public WebElement DateQuoteNeededTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'OfficialIDDV_Input')]")
	public WebElement FEINTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'IndustryCode')]")
	public WebElement IndustryCodeTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'IndustryCode-SelectIndustryCode')]")
	public WebElement IndustryCodeSearchBtn;
	
	@FindBy (xpath = "//input[contains(@name,'YearBusinessStarted')]")
	public WebElement YearBusinessStartedTextBox;
	
	@FindBy (xpath = "//textarea[contains(@name,'BusOps')]")
	public WebElement DescriptionOfBusinessAndOperationsTextBox;
	
	@FindBy (xpath = "//select[contains(@name,'OrganizationType')]")
	public List<WebElement> OrganizationTypeDropDownList;
	
	@FindBy (xpath = "//select[contains(@name,'OrganizationType')]")
	public WebElement OrganizationTypeDropDownElement;
	
	@FindBy (xpath = "//input[contains(@name,'EffectiveDate')]")
	public WebElement EffectiveDateTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'WrittenDate')]")
	public WebElement WrittenDateTextBox;
	
	@FindBy (xpath = "//select[contains(@name,'ProducerCode')]")
	public List<WebElement> ProducerCodeList;
	
	@FindBy (xpath = "//select[contains(@name,'ProducerCode')]")
	public WebElement ProducerCodeElement;
	
	public PolicyInfoPage() {
		PageFactory.initElements(driver,this);
	}
}