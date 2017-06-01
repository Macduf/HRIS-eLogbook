import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppVersion } from '@ionic-native/app-version';

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
import {SqlLite} from "../providers/sql-lite";
import { SQLite } from '@ionic-native/sqlite';
import {OrganisationUnit} from "../providers/organisation-unit";
import {HttpClient} from "../providers/http-client";
import { HttpModule   } from '@angular/http';
import {DataValues} from "../providers/data-values";
import {EntryForm} from "../providers/entry-form";
import {DataSets} from "../providers/data-sets";
import {Setting} from "../providers/setting";
import {NetworkAvailability} from "../providers/network-availability";
import {EventCaptureFormProvider} from "../providers/event-capture-form-provider";
import {MetadataDictionaryService} from "../providers/metadata-dictionary-service";
import {PeriodService} from "../providers/period-service";
import {Program} from "../providers/program";
import {ProgramStageDataElements} from "../providers/program-stage-data-elements";
import {ProgramStageSections} from "../providers/program-stage-sections";
import {Report} from "../providers/report";
import {Synchronization} from "../providers/synchronization";
import {User} from "../providers/user";
import {VisualizerService} from "../providers/visualizer-service";


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
    IonicModule.forRoot(MyApp),HttpModule,
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
    SplashScreen,
	OrganisationUnit,SqlLite,SQLite,HttpClient,HttpModule ,DataValues,NetworkAvailability, EntryForm,DataSets,Setting,EventCaptureFormProvider,
	MetadataDictionaryService,PeriodService, Program,ProgramStageDataElements,ProgramStageSections,Report,Synchronization,User,VisualizerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
})
export class AppModule {}
