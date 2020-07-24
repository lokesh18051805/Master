package com.PageObjectRepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class NewSubmissionsPage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//input[contains(@name,'Producer')]")
	public WebElement OrganizationTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'SelectOrganization')]")
	public WebElement OrganizationSearchBtn;
	
	@FindBy (xpath = "//select[contains(@name,'ProducerCode')]")
	public List<WebElement> ProducerCodeList;
	
	@FindBy (xpath = "//select[contains(@name,'ProducerCode')]")
	public WebElement ProducerCodeElement;
	
	@FindBy (xpath = "//select[contains(@name,'QuoteType')]")
	public List<WebElement> QuoteTypeList;
	
	@FindBy (xpath = "//select[contains(@name,'QuoteType')]")
	public WebElement QuoteTypeElement;
	
	@FindBy (xpath = "//select[contains(@name,'DefaultBaseState')]")
	public List<WebElement> DefaultBaseStateList;
	
	@FindBy (xpath = "//select[contains(@name,'DefaultBaseState')]")
	public WebElement DefaultBaseStateElement;
	
	@FindBy (xpath = "//table[@class='gw-ListViewWidget--table gw-table']")
	public WebElement ProductSelectionTable;
	
	public NewSubmissionsPage() {
		PageFactory.initElements(driver,this);
	}
}
