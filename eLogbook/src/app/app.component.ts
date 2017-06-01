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
