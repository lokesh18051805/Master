package com.TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\main\\java\\com\\Feature\\QuoteCreation.feature"
		,glue = "com\\StepDefinitions"
//		,dryRun = true
		,monochrome = true
		,strict = true
		,tags = {""}
		,plugin = {	"pretty", "html:target/Basic Cucumber Reports", "json:target/JSON Reports/cucumber.json"}
		)

public class TestRunner extends AbstractTestNGCucumberTests {

}

//"src\\main\\java\\com\\Feature\\QuoteCreation.feature"
//"src\\main\\java\\com\\Feature\\LoginFunctionality.feature"