package com.PageObjectRepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class LocationsPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	public LocationsPage() {
		PageFactory.initElements(driver,this);
	}
}