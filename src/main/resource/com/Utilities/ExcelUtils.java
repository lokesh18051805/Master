/**
 * @author Mehmet Yucer
 */

package com.Utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import com.StepDefinitions.Hooks;

import io.cucumber.java.Scenario;

public class ExcelUtils extends BaseClass {

//	private final static String filePath = Constants.TESTDATA_FOLDER;
//	private static FileInputStream fis = Hooks.inputStream;
//	private static Workbook workbook;
//	private static Sheet workSheet;
//	private static Cell cell;
//	
//	private static Workbook getWorkbook() throws IOException {
//		File directoryPath = new File(filePath);
//		String contents[] = directoryPath.list();
//		for (int i = 0; i < contents.length; i++) {
//			String fileName = ConfigsReader.getProperty("filename").replace(" ", "");
//			if (contents[i].contains(fileName)) {
//				try {
//					String fileExtensionName = contents[i].substring(contents[i].indexOf("."));
//					if (fileExtensionName.equals(".xlsx")) {
//						workbook = new XSSFWorkbook(fis);
//					} else if (fileExtensionName.equals(".xls")) {
//						workbook = new HSSFWorkbook(fis);
//					}
//				} catch (IOException e) {
//					logger.warning("Document cannot be loaded: " + e.getMessage());
//					fis.close();
//				}
//			}
//		}
//		logger.info("Excel File successfully uploaded...");
//		return workbook;
//	}
//
//	public static String readTestCaseID() throws IOException {
//		String strValue = null;
//		boolean flag = true;
//		
//		workSheet = workbook.getSheet("Global Variable");
//		int rowCount = workSheet.getLastRowNum(); // doesn't count the header
//		// gets the total # of cell which has data in the 1st row
//		int colCount = workSheet.getRow(0).getPhysicalNumberOfCells();
//		
//		PARENT_LOOP: for (int i = 0; i <= rowCount; i++) {
//			for (int j = 0; j < colCount; j++) {
//				strValue = workSheet.getRow(i).getCell(j).getStringCellValue();
//				if (strValue.equalsIgnoreCase("Scenario Name")) {
//					while (flag) {
//						strValue = workSheet.getRow(i).getCell(j).getStringCellValue();
//						if (strValue.equals(Hooks.strValue)) {
//							strValue = workSheet.getRow(i).getCell(0).getStringCellValue(); // gets the test case id
//							flag = false;
//						} else {
//							i++;
//						}
//					}
//					break PARENT_LOOP;
//				}
//			}
//		}
//		return strValue;
//	}
//
//	public static String readFlow() throws IOException {
//		
//		workSheet = workbook.getSheet("Master");
//		int rowCount = workSheet.getLastRowNum();
//		int colCount = workSheet.getRow(0).getPhysicalNumberOfCells();
//		String CellValue;
//		String TestCaseID = readTestCaseID();
//		
//		PARENT_LOOP: for (int i = 0; i <= rowCount; i++) {
//			for (int j = 1; j < colCount; j++) {
//				workSheet = workbook.getSheet("Master");
//				CellValue = workSheet.getRow(i).getCell(0).getStringCellValue();
//				if (CellValue.equals(TestCaseID)) {
//					logger.info("Test Case ID: " + CellValue);
//					if (workSheet.getRow(i).getCell(j) != null) {
//						CellValue = workSheet.getRow(i).getCell(j).getStringCellValue();
//						return CellValue;
//						
//					}else {
//						break PARENT_LOOP;
//					}
//				} else {
//					continue PARENT_LOOP;
//				}
//			}
//		}
//		return null;
//	}
//
//	public static String readCellValuefromExcel(String elementName) throws IOException {
//		if(workbook == null) {
//			getWorkbook();
//		}
//		workSheet = workbook.getSheet(readFlow());
//		int rowCount = workSheet.getLastRowNum();
//		int colCount = workSheet.getRow(0).getPhysicalNumberOfCells();
//		int valueColNum = 0;
//		String CellValue = null;
//
//		PARENT_LOOP: for (int i = 0; i <= rowCount; i++) {
//			for (int j = 0; j < colCount; j++) {
//				CellValue = workSheet.getRow(i).getCell(j).getStringCellValue();
//
//				if (CellValue.equalsIgnoreCase(elementName)) {
//					valueColNum = j;
//					CellValue = workSheet.getRow(i).getCell(0).getStringCellValue();
//					boolean flag1 = true;
//
//					while (flag1) {
//						CellValue = workSheet.getRow(i).getCell(0).getStringCellValue();
//						if (CellValue.equals(readTestCaseID())) {
//							logger.info("Test Case ID: " + CellValue);
//							workSheet = workbook.getSheet(readFlow());
//							cell = workSheet.getRow(i).getCell(valueColNum);
//
//							if (cell != null) {
//								switch (cell.getCellType()) {
//								case NUMERIC:
//									CellValue = Double.toString(cell.getNumericCellValue());
//									flag1 = false;
//									break;
//								case STRING:
//									CellValue = cell.getStringCellValue();
//									flag1 = false;
//									break;
//								case BOOLEAN:
//									CellValue = Boolean.toString(cell.getBooleanCellValue());
//									flag1 = false;
//									break;
//								default:
//									logger.warning("Unknown Cell Value Type...");
//									flag1 = false;
//									break;
//								}
//							}
//
//						} else {
//							i++;
//						}
//					}
//					break PARENT_LOOP;
//				}
//			}
//			logger.info("Cell Value: " + CellValue);
//		}
//		return CellValue;
//	}
}
