import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
	DomainDashboard,
	DomainGeneralInfo,
	DomainSetting,
	UserProfile,
	About, 
	Help, 
	Login,
	ReportIssues,
	SiteInfo
	
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
	DomainDashboard,
	DomainGeneralInfo,
	DomainSetting,
	UserProfile,
	About,
	Help,
	Login,
	ReportIssues,
	SiteInfo
	
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
