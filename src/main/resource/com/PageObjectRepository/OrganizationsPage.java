package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class OrganizationsPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//input[contains(@name,'InputSet-Name')]")
	public WebElement OrganizationNameTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'ProducerCode')]")
	public WebElement ProducerCodeTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Search') and text()='earch']")
	public WebElement SearchBtn;
	
	@FindBy (xpath = "//div[contains(@id,'InputSet-Reset') and text()='eset']")
	public WebElement ResetBtn;
	
	@FindBy (xpath = "//div[text()='Select']")
	public WebElement SelectBtn;
	
	public OrganizationsPage() {
		PageFactory.initElements(driver,this);
	}
}
