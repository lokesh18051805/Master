package com.PageObjectRepository;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Utilities.BaseClass;

public class CoveragesPage extends BaseClass{

	@FindBy (xpath = "//div[@class='gw-TitleBar--title']")
	public WebElement pageTitle;
	
	@FindBy (xpath = "//select[contains(@name,'GLPolicyClaimsMade')]")
	public List<WebElement> PolicyBasisList;
	
	@FindBy (xpath = "//select[contains(@name,'GLPolicyClaimsMade')]")
	public WebElement PolicyBasisElement;
	
	@FindBy (xpath = "//div[text()='Occurrence Limit']/..//select[contains(@name,'OptionTermInput')]")
	public List<WebElement> OccuranceLimitList;
	
	@FindBy (xpath = "//div[text()='Occurrence Limit']/..//select[contains(@name,'OptionTermInput')]")
	public WebElement OccuranceLimitElement;
	
	@FindBy (xpath = "//div[text()='Aggregate Limit']/..//select[contains(@name,'OptionTermInput')]")
	public List<WebElement> AggregateLimitList;
	
	@FindBy (xpath = "//div[text()='Aggregate Limit']/..//select[contains(@name,'OptionTermInput')]")
	public WebElement AggregateLimitElement;
	
	@FindBy (xpath = "//div[text()='Standard Coverages']")
	public WebElement StandartCoveragesTab;
	
	@FindBy (xpath = "//div[text()='Additional Coverages']")
	public WebElement AdditionalCoveragesTab;
	
	@FindBy (xpath = "//div[text()='Exclusions & Conditions']")
	public WebElement ExclusionsConditionsTab;
	
	@FindBy (xpath = "//div[text()='Additional Insureds']")
	public WebElement AdditionalInsuredsTab;
	
	@FindBy (xpath = "//div[@aria-label='Add Coverages']")
	public WebElement AddCoveragesBtn;
	
	@FindBy (xpath = "//div[@aria-label='Add Selected Coverages']")
	public WebElement AddSelectedCoveragesBtn;
	
	@FindBy (xpath = "//input[contains(@name,'StringTermInput')]")
	public WebElement DesignatedPollutantsTextBox;
	
	@FindBy (xpath = "//div[contains(@id,'StringTermInput_Input')]/div")
	public WebElement DesignatedPollutantsElement;
	
	public CoveragesPage() {
		PageFactory.initElements(driver,this);
	}
}