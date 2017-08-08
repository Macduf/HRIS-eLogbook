import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { Synchronization } from "../providers/synchronization";
import { SQLite } from '@ionic-native/sqlite';
import {SqlLite} from "../providers/sql-lite";
import {OrganisationUnit} from "../providers/organisation-unit";
import {NetworkAvailability} from "../providers/network-availability";
import {DataSets} from "../providers/data-sets";
import {DashboardService} from "../providers/dashboard-service";
import {Program} from "../providers/program";
import {PeriodService} from "../providers/period-service";
import {User} from "../providers/user";
import { IonicStorageModule } from '@ionic/storage';


//pages
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
import {ObgynProcedureForm} from '../pages/obgyn-procedure-form/obgyn-procedure-form';
import {ObgynProcedureFormList} from '../pages/obgyn-procedure-form-list/obgyn-procedure-form-list';


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
	ObgynProcedureForm,
	DomainSignOff, DomainForm139, DomainSurvey, CpdActivities, DomainMortalityMobidity, DomainConditionsExposed, DomainEthicalIssues, DomainRelevantProcedures, DomainRelevantConditions, DomainCoreCompetencies, DomainObjective,
	ObgynProcedureFormList,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
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
	ObgynProcedureForm,
	DomainSignOff, DomainForm139, DomainSurvey, CpdActivities, DomainMortalityMobidity, DomainConditionsExposed, DomainEthicalIssues, DomainRelevantProcedures, DomainRelevantConditions, DomainCoreCompetencies, DomainObjective,
	ObgynProcedureFormList,
  ],
  providers: [
  StatusBar,
  SplashScreen,HttpClient, SqlLite,OrganisationUnit,NetworkAvailability,DataSets,DashboardService,Program, PeriodService,
  User, SQLite,
  {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]

})
export class AppModule {}
