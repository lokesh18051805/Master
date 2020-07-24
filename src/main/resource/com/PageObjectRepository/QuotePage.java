package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class QuotePage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[text()='Submission Number']")
	public WebElement SubmissionNumberText;
	
	@FindBy (xpath = "//div[contains(@id,'JobNumber_Input')]//div[contains(@class,'gw-value-readonly-wrapper')]")
	public WebElement SubmissionNumber;
	
	public QuotePage() {
		PageFactory.initElements(driver,this);
	}
}