import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { DomainDashboard } from '../pages/domain-dashboard/domain-dashboard';
import { DomainGeneralInfo } from '../pages/domain-general-info/domain-general-info';
import { DomainSetting } from '../pages/domain-setting/domain-setting';
import { UserProfile } from '../pages/user-profile/user-profile';
import { About } from '../pages/about/About';
import { Help } from '../pages/help/Help';
import { Login } from '../pages/login/Login';
import { ReportIssues } from '../pages/report-issues/report-issues';
import { SiteInfo } from '../pages/site-info/site-info';
import {ObgynProcedureForm} from '../pages/obgyn-procedure-form/obgyn-procedure-form';

import {DomainSignOff} from '../pages/domain-sign-off/domain-sign-off';
import {DomainForm139} from '../pages/domain-form139/domain-form139';
import {DomainSurvey} from '../pages/domain-survey/domain-survey';
import {CpdActivities} from '../pages/cpd-activities/cpd-activities';
import {DomainMortalityMobidity} from '../pages/domain-mortality-mobidity/domain-mortality-mobidity';
import {DomainConditionsExposed} from '../pages/domain-conditions-exposed/domain-conditions-exposed';
import {DomainEthicalIssues} from '../pages/domain-ethical-issues/domain-ethical-issues';
import {DomainRelevantProcedures} from '../pages/domain-relevant-procedures/domain-relevant-procedures';
import {DomainRelevantConditions} from '../pages/domain-relevant-conditions/domain-relevant-conditions';
import {DomainCoreCompetencies} from '../pages/domain-core-competencies/domain-core-competencies';
import {DomainObjective} from '../pages/domain-objective/domain-objective';
import {ObgynProcedureFormList} from '../pages/obgyn-procedure-form-list/obgyn-procedure-form-list';


ReportIssues

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  
 //rootPage: any = Login;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage},
	 // { title: 'General', component: DomainGeneralInfo},
	  { title: 'Domains', component: DomainSetting},
      { title: 'User Profile', component: UserProfile},	 
	 // { title: 'Dashboard', component: DomainDashboard},
	 // { title: 'List', component: ListPage },
	//  { title: 'About', component: About },
	  { title: 'Login', component: Login },
	  { title: 'Facility Information', component: SiteInfo },
	  { title: 'Help', component: Help },
	  { title: 'Report an Issue', component: ReportIssues },
	  { title: 'Procedures', component: ObgynProcedureForm },
	  { title: 'Ethical Issues', component: DomainEthicalIssues },
	  { title: 'M&M Meetings', component: DomainMortalityMobidity },
	  { title: 'CPD', component: CpdActivities },	 
	  { title: 'Domain Survey', component: DomainSurvey },  
	  
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
