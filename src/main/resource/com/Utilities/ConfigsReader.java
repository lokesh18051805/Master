/**
 * @author Mehmet Yucer
 */

package com.Utilities;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class ConfigsReader {

	public static Properties properties;
	
	/**
	 * Uploads the the config properties file to stream and reads it
	 * @param filePath
	 */
	public static void readProperties (String filePath) {
		
		try {
			FileInputStream fis = new FileInputStream(filePath);
			properties = new Properties();
			properties.load(fis);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * Returns the value of the key provided by user.
	 */
	public static String getProperty (String key) {
		return properties.getProperty(key);
	}
	
}
