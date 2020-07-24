/**
 * @author Mehmet Yucer
 */

package com.Helper;

import com.PageObjectRepository.AccountSummaryPage;
import com.PageObjectRepository.CommonButtonActions;
import com.PageObjectRepository.CoveragesPage;
import com.PageObjectRepository.CreateAccountPage;
import com.PageObjectRepository.EnterAccountInformationPage;
import com.PageObjectRepository.ExposuresPage;
import com.PageObjectRepository.LocationInformationPage;
import com.PageObjectRepository.LocationsPage;
import com.PageObjectRepository.ModifiersPage;
import com.PageObjectRepository.MySummaryPage;
import com.PageObjectRepository.NewSubmissionsPage;
import com.PageObjectRepository.OrganizationsPage;
import com.PageObjectRepository.PolicyInfoPage;
import com.PageObjectRepository.PolicyReviewPage;
import com.PageObjectRepository.QualificationPage;
import com.PageObjectRepository.QuotePage;
import com.PageObjectRepository.RiskAnalysisPage;
import com.Utilities.BaseClass;

public class InitializerClass extends BaseClass {

	public MySummaryPage MS = new MySummaryPage();
	public EnterAccountInformationPage EAI = new EnterAccountInformationPage();
	public CreateAccountPage CA = new CreateAccountPage();
	public OrganizationsPage ORG = new OrganizationsPage();
	public AccountSummaryPage AS = new AccountSummaryPage();
	public NewSubmissionsPage NS = new NewSubmissionsPage();
	public CommonButtonActions CBA = new CommonButtonActions();
	public QualificationPage QUAL = new QualificationPage();
	public PolicyInfoPage PI = new PolicyInfoPage();
	public LocationsPage LOC = new LocationsPage();
	public LocationInformationPage LI = new LocationInformationPage();
	public CoveragesPage COV = new CoveragesPage();
	public ExposuresPage EXPO = new ExposuresPage();
	public ModifiersPage MOD = new ModifiersPage();
	public RiskAnalysisPage RA = new RiskAnalysisPage();
	public PolicyReviewPage PR = new PolicyReviewPage();
	public QuotePage QUO = new QuotePage();

	
}
