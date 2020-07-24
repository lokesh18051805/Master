package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class CommonButtonActions extends BaseClass{
	
	@FindBy (xpath = "//div[text()='Back']/..")
	public WebElement BackBtn;
	
	@FindBy (xpath = "//div[text()='Next']/..")
	public WebElement NextBtn;
	
	@FindBy (xpath = "//div[text()='OK']/..")
	public WebElement OkBtn;
	
	@FindBy (xpath = "//div[text()='Cance']/..")
	public WebElement CancelBtn;
	
	@FindBy (xpath = "//div[text()='earch']")
	public WebElement SearchBtn;
	
	@FindBy (xpath = "//div[text()='eset']")
	public WebElement ResetBtn;
	
	@FindBy (xpath = "//div[text()='uote']/..")
	public WebElement QuoteBtn;
	
	@FindBy (xpath = "//div[text()='ave Draft']/..")
	public WebElement SaveDraftBtn;
	
	@FindBy (xpath = "//div[text()='Release Loc']/..")
	public WebElement ReleaseLockBtn;
	
	public CommonButtonActions() {
		PageFactory.initElements(driver,this);
	}
}
