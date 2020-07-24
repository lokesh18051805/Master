/**
 * @author Mehmet Yucer
 */

package com.Utilities;

import static org.testng.Assert.expectThrows;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.Scenario;

public class CommonMethods extends BaseClass {

	public static WebDriverWait wait;
	private static Scenario scenario;
	public static CommonMethods CM;
	public static ExcelUtils EU;
	private static String StrValue;

	/**
	 * The method will wait until the element is clickable, read the value from
	 * excel sheet, and send the value to the element.
	 * 
	 * @param element, Value
	 */
	public static void setValue(WebElement element, String elementName) {
		waitForElementBeClickable(element, 30);
		CommonMethods.takeScreenShot();

//		try {
//			element.sendKeys(ExcelUtils.readCellValuefromExcel(elementName));
//		} catch (IOException e) {
//			e.printStackTrace();
//		}

		logger.info("Value is successfully sent");
	}

	/**
	 * The method will wait until the element is clickable, and send the value to
	 * the element.
	 * 
	 * @param element, Value
	 */
	public static void sendKeys(WebElement element, String Value) {
		waitForElementBeClickable(element, 30);
		element.sendKeys(Value);
		CommonMethods.takeScreenShot();
		logger.info("Value is successfully sent: "+Value);
	}

	/**
	 * The method will wait until the element is clickable and click on the element.
	 * 
	 * @param element
	 */
	public static void click(WebElement element) {
		waitForElementBeClickable(element, 30);
		element.click();
		CommonMethods.takeScreenShot();
		logger.info("WebDriver clicked on the element");
	}

	/**
	 * The method will wait until the element is visible or wait until provided time
	 * exceeded
	 * 
	 * @param element, time
	 */
	public static void waitForElementBeVisible(WebElement element, int time) {
		try {
			wait = new WebDriverWait(driver, time);
			wait.until(ExpectedConditions.visibilityOf(element));
		} catch (Exception e) {
			logger.warning("Element is not visibile: " + e.getMessage());
			e.getStackTrace();
		}
	}

	/**
	 * The method will wait until the element is visible or wait until provided time
	 * exceeded
	 * 
	 * @param locator, time
	 */
	public static void waitForElementBeVisible(By locator, int time) {
		try {
			wait = new WebDriverWait(driver, time);
			wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
		} catch (Exception e) {
			logger.warning("Element is not visibile: " + e.getMessage());
			e.getStackTrace();
		}
	}

	/**
	 * The method will wait until the element is clickable or wait until provided
	 * time exceeded
	 * 
	 * @param element, time
	 */
	public static void waitForElementBeClickable(WebElement element, int time) {
		try {
			wait = new WebDriverWait(driver, time);
			wait.until(ExpectedConditions.elementToBeClickable(element));
		} catch (Exception e) {
			logger.warning("Element is not clickable: " + e.getMessage());
			e.getStackTrace();
		}
	}

	/**
	 * The method will wait until the element is clickable or wait until provided
	 * time exceeded
	 * 
	 * @param locator, time
	 */
	public static void waitForElementBeClickable(By locator, int time) {
		try {
			wait = new WebDriverWait(driver, time);
			wait.until(ExpectedConditions.elementToBeClickable(locator));
		} catch (Exception e) {
			logger.warning("Element is not clickable: " + e.getMessage());
			e.getStackTrace();
		}
	}

	/**
	 * The method will wait until the element is presence or wait until provided
	 * time exceeded
	 * 
	 * @param locator, time
	 */
	public static void waitForElementBePresence(By locator, int time) {
		try {
			wait = new WebDriverWait(driver, time);
			wait.until(ExpectedConditions.presenceOfElementLocated(locator));
		} catch (Exception e) {
			logger.warning("Element is not clickable: " + e.getMessage());
			e.getStackTrace();
		}
	}

	/**
	 * If the element has not "select" tag The method will find and select the value
	 * from the list
	 * 
	 * @param element, text
	 */
	public static void selectByTextFromList(List<WebElement> element, String text) {
		List<WebElement> elementList = element;
		String elementText = null;
		for (WebElement elementOfList : elementList) {
			elementText = elementOfList.getAttribute("innerHTML");
//					System.out.println(elementText);
			if (elementText != null && elementText.contains(text)) {
				logger.info("Value is found in the list...");
				waitForElementBeClickable(elementOfList, 30);
				elementOfList.click();
				logger.info("Value is selected: "+elementOfList);
				break;
			}
		}
	}

	/**
	 * If the element has "select" tag The method will find and select the value
	 * from the list by visible text
	 * 
	 * @param element, visibleValue
	 */
	public static void selectByVisibleTextFromList(WebElement element, String visibleText) {
		Select select = new Select(element);
		List<WebElement> options = select.getOptions();
		for (WebElement option : options) {
			String optionText = option.getText();
			if (optionText != null && optionText.equals(visibleText)) {
				logger.info("Value is found in the list...");
				waitForElementBeClickable(element, 30);
				select.selectByVisibleText(visibleText);
				break;
			}
		}
		WebElement option = select.getFirstSelectedOption();
		String selectedItem = option.getText();
		if (selectedItem.contains("none")) {
			logger.warning("Value '" + visibleText + "' is not available in the list");
		}
		logger.info("Value is selected: " + selectedItem);
	}

	/**
	 * If the element has "select" tag The method will find and select the value
	 * from the list by visible text
	 * 
	 * @param element, visibleValue
	 */
	public static void selectByIndexFromList(WebElement element, int IndexNum) {
		Select select = new Select(element);
		waitForElementBeClickable(element, 30);
		select.selectByIndex(IndexNum);
		logger.info("Value is found in the list...");

		WebElement option = select.getFirstSelectedOption();
		String selectedItem = option.getText();
		if (selectedItem.contains("none")) {
			logger.warning("Value '" + selectedItem + "' is not available in the list");
		}
		logger.info("Value is selected: " + selectedItem);
	}

	/**
	 * Take a screen shot and embed it to html report
	 */
	public static byte[] takesScreenShot() {
		try {
			TakesScreenshot ts = (TakesScreenshot) driver;
			byte[] screen = ts.getScreenshotAs(OutputType.BYTES);
			logger.info("Last page's screenshot has been taken");
			return screen;
		} catch (Exception e) {
			logger.warning("Driver could not take a screenshot");
			e.getStackTrace();
			return null;
		}
	}

	/**
	 * Return the current formatted date & time as a String.
	 */
	public static String currentDateTime() {
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();
		return dtf.format(now).replace(":", "_").replace("/", "_").replace(" ", "-");
	}

	/**
	 * Take a screenshot and store inside the reports file
	 */
	public static String takeScreenShot() {
		Date d = new Date();
		String screenshotFile = d.toString().replace(":", "_").replace(" ", "_") + ".png";
		String filePath = "";
		try {
			filePath = "target\\Reports\\Execution_" + LoggersUtil.currentDateTime + "\\" + screenshotFile;
			File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(scrFile, new File(filePath));
		} catch (IOException e) {
			logger.warning(scenario.getName() + " Exception while taking a screenshot");
			e.printStackTrace();
		}
		return filePath;
	}

	public static void SelectValueFromTable(WebElement element, String Value) {

	}

}