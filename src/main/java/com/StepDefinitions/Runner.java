package com.StepDefinitions;

import org.testng.TestNG;

public class Runner {
	
	public static TestNG testNG;
	
	
	public static void main(String[] args) {
		testNG= new TestNG();
		testNG.setTestClasses(new Class[] {com.TestRunner.TestRunner.class});
		testNG.run();
		
	}
		

}
