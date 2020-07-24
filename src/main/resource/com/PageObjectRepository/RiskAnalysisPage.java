package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class RiskAnalysisPage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[text()='Add UW Issue']/..")
	public WebElement AddUWIssueBtn;
	
	public RiskAnalysisPage() {
		PageFactory.initElements(driver,this);
	}
}