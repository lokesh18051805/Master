package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class PolicyReviewPage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[text()='Primary Named Insured']")
	public WebElement PolicyNamedInsuredElement;
	
	public PolicyReviewPage() {
		PageFactory.initElements(driver,this);
	}
}