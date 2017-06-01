import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

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

//Providers 
import {HttpClient} from "../providers/http-client";
import {Synchronization} from "../providers/synchronization";
import {SqlLite} from "../providers/sql-lite";
import {OrganisationUnit} from "../providers/organisation-unit";
import {NetworkAvailability} from "../providers/network-availability";
import {DataSets} from "../providers/data-sets";
import {DashboardService} from "../providers/dashboard-service";
import {Program} from "../providers/program";
import {PeriodService} from "../providers/period-service";
import {User} from "../providers/user";

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
	SiteInfo,
		
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
	SiteInfo,
		
  ],  
  providers: [
    StatusBar, 
    SplashScreen,HttpClient, Synchronization,SqlLite,OrganisationUnit,NetworkAvailability,DataSets,DashboardService,Program, PeriodService,
	User,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
