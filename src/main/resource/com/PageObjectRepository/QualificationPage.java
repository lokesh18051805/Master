package com.PageObjectRepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class QualificationPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;

	@FindBy (xpath = "//input[contains(@name,'BooleanRadioInput_NoPost')]")
	public List<WebElement> RadioButtons;
	
	@FindBy (xpath = "//div[contains(text(),'employed or contracted')]")
	public WebElement EmployedOrContractedQuestion;
	
	
	public QualificationPage() {
		PageFactory.initElements(driver,this);
	}
}
