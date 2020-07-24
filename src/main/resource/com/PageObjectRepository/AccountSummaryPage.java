package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class AccountSummaryPage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[@id='AccountFile-AccountFileMenuActions']/div")
	public WebElement ActionsBtn;
	
	@FindBy (xpath = "//div[contains(@id,'AccountFileMenuActions_NewSubmission')]")
	public WebElement NewSubmissionBtn;
	
	public AccountSummaryPage() {
		PageFactory.initElements(driver,this);
	}
}
