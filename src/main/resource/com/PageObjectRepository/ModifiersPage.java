package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class ModifiersPage extends BaseClass {

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//div[contains(@id,'_checkbox')]//input")
	public WebElement GLExperienceModifierEligibleCheckbox;
	
	public ModifiersPage() {
		PageFactory.initElements(driver,this);
	}
}