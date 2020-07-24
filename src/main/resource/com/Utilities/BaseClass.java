/**
 * @author Mehmet Yucer
 */

package com.Utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.StepDefinitions.Hooks;

public class BaseClass {

	public static WebDriver driver;
	public static CommonMethods CM;

	/**
	 * Initialize the WebDriver
	 */
	public static void setUp() {

		ConfigsReader.readProperties(Constants.APPSETTINGS_FILEPATH);
		String browser = ConfigsReader.getProperty("browser");

		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", Constants.CHROMEDRIVER_PATH);
			ChromeOptions chromeOptions = new ChromeOptions();
			chromeOptions.addArguments("--no-sandbox");
			chromeOptions.addArguments("--disable-notifications");
//			chromeOptions.addArguments("--touch-events");
			driver = new ChromeDriver(chromeOptions);
		} 
		else if (browser.equalsIgnoreCase("ie")) {
			System.setProperty("webdriver.chrome.driver", Constants.IEDRIVER_PATH);
			driver = new InternetExplorerDriver();
		} 
		else if (browser.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver", Constants.GECKODRIVER_PATH);
			driver = new FirefoxDriver();
		} 
		else {
			logger.warning("--- Browser cannot be defined ---");
		}
		
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		driver.get(ConfigsReader.getProperty("url"));
	}

	/**
	 * Close the WebDriver
	 */
	public static void close() {
		try {
			if (driver != null) {
				CM.takeScreenShot();
				driver.quit();
				logger.info("WebDriver closed");
				driver = null;
				
				if (driver != null) {
					logger.warning("Error in closing WebDriver");
				}
			}
		} catch (Exception e) {

		}
	}
	
	public static FileInputStream LoadFileInputStream(String fileName) {
		File directoryPath = new File(Constants.TESTDATA_FOLDER);
		String contents[] = directoryPath.list();
		for (int i = 0; i < contents.length; i++) {
			if (fileName.contains(" ")) {
				fileName = fileName.replace(" ", "");
			}
			if (contents[i].contains(fileName)) {
				try {
					Hooks.inputStream = new FileInputStream(Constants.TESTDATA_FOLDER + "/" + contents[i]);
				} catch (FileNotFoundException e) {
					logger.warning("Unable to load FileInputStream...");
					e.printStackTrace();
				}
			}
		}
		return Hooks.inputStream;
	}

	public static Logger logger = Logger.getLogger(BaseClass.class.getName());
}
