/**
 * @author Mehmet Yucer
 */

package com.Utilities;

import java.io.IOException;
import java.util.logging.ConsoleHandler;
import java.util.logging.FileHandler;
import java.util.logging.Level;
import java.util.logging.LogManager;

import io.cucumber.java.Scenario;

public class LoggersUtil extends BaseClass {
	
	public static String currentDateTime;
	public static Scenario scenario;
	
	public static void logSetUp() {
 		currentDateTime = CommonMethods.currentDateTime();
		LogManager.getLogManager().reset();
		logger.setLevel(Level.ALL);
		
		ConsoleHandler ch = new ConsoleHandler();
		ch.setLevel(Level.INFO);
		logger.addHandler(ch);
		try {
			FileHandler fh = new FileHandler("target\\Logs");
			fh.setLevel(Level.ALL);
			logger.addHandler(fh);
		} catch (IOException e) {
			logger.warning("-------->>\tFileHandler is not working!!");
			System.out.println(e.getMessage());
		}
	}

	public void info(String msg) {
		logger.info(msg);
	}

	public void warning(String msg) {
		logger.warning(msg);
	}

	public void severe(String msg) {
		logger.severe(msg);
	}
}
