/**
 * @author Mehmet Yucer
 */

package com.StepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;

import com.Utilities.BaseClass;
import com.Utilities.CommonMethods;
import com.Utilities.ExcelUtils;
import com.Utilities.LoggersUtil;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;

public class Hooks extends BaseClass {

	@Before
	public void beforeScenario(Scenario scenario) throws IOException {
		try {
		LoggersUtil.logSetUp(); // logger setup
		logger.info("Test execution started: " + scenario.getName());
		setUp(); // driver setup
		inputStream = LoadFileInputStream("TestData");
		CommonMethods.takeScreenShot();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	@After
	public void afterScenario(Scenario scenario) throws IOException {
		try {
			logger.info("Test execution completed: " + scenario.getName());
			if (scenario.isFailed()) {
				logger.info("Test execution failed. Taking screenshot...");
				byte[] screenshot = CommonMethods.takesScreenShot();
				scenario.embed(screenshot, "image/png", "Failed Screen Screenshot");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			inputStream.close();
			close();
		}
	}

	public static ExcelUtils EU;
	public static FileInputStream inputStream;
	public static String strValue;
}