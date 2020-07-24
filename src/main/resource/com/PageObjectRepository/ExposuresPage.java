package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class ExposuresPage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[contains(@id,'Add')]/div")
	public WebElement AddBtn;
	
	@FindBy (xpath = "//select[contains(@name,'Location')]")
	public WebElement LocationDropDown;
	
	@FindBy (xpath = "//input[contains(@name,'ClassCode')]")
	public WebElement ClassCodeTextBox;
	
	@FindBy (xpath = "//input[contains(@name,'BasisAmount')]")
	public WebElement BasisTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'SelectClassCode')]")
	public WebElement ClassCodeSearchBtn;
	
	@FindBy (xpath = "//div[text()='No data to display']")
	public WebElement NoDataToDisplayedTableMessage;
	
	public ExposuresPage() {
		PageFactory.initElements(driver,this);
	}
}