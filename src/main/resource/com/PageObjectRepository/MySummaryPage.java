package com.PageObjectRepository;

import org.openqa.selenium.WebElement;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class MySummaryPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[@id='Desktop-DesktopMenuActions']/div")
	public WebElement ActionsBtn;
	
	@FindBy (xpath = "//div[@class='gw-subMenu gw-open']//div[@aria-label='New Account']")
	public WebElement NewAccountBtn;
	

	public MySummaryPage() {
		PageFactory.initElements(driver,this);
	}
}
