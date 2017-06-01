import { Component } from '@angular/core';

//new providers

import {HttpClient} from "../../providers/http-client";
import {Synchronization} from "../../providers/synchronization";
import {SqlLite} from "../../providers/sql-lite";
import {OrganisationUnit} from "../../providers/organisation-unit";
import {NetworkAvailability} from "../../providers/network-availability";
import {DataSets} from "../../providers/data-sets";
import {DashboardService} from "../../providers/dashboard-service";
import {Program} from "../../providers/program";
import {PeriodService} from "../../providers/period-service";
import {User} from "../../providers/user";
import { IonicPage, NavController, NavParams, Nav, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {	

homePage = HomePage;	
  public loginData : any ={};
  public loadingData : boolean = false;
  public isLoginProcessActive :boolean = false;
  public loadingMessages : any = [];
  public logoUrl : string;
  public loggedInInInstance : string = "";
  public isLoginProcessCancelled : boolean = false;

  //progress tracker object
  public progress : string = "0";
  public progressTracker : any;
  public completedTrackedProcess : any;
  public currentResourceType : string = "";
  //organisationUnit, entryForm,event

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, public synchronization:Synchronization,public DataSets : DataSets,public Program : Program,public DashboardService: DashboardService, public NetworkAvailability : NetworkAvailability, public httpClient : HttpClient, public OrganisationUnit : OrganisationUnit, public user : User,public sqlLite : SqlLite ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
