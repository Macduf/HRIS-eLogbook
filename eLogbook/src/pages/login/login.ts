import { Component } from '@angular/core';

//new providers
import {OrganisationUnit} from "../../providers/organisation-unit";
import {SqlLite} from "../../providers/sql-lite";
import {HttpClient} from "../../providers/http-client";
import {HttpModule   } from '@angular/http';
import {DataSets} from "../../providers/data-sets";
import {User} from "../../providers/user";
import {Program} from "../../providers/program";
import {PeriodService} from "../../providers/period-service";
import {DashboardService} from "../../providers/dashboard-service";

import { IonicPage, NavController, NavParams, Nav, Platform, ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import {Synchronization} from "../../providers/synchronization";
import {NetworkAvailability} from "../../providers/network-availability";

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
  public navParams: NavParams, public OrganisationUnit : OrganisationUnit, public httpClient : HttpClient, public sqlLite : SqlLite,  public DataSets : DataSets,  public PeriodService : PeriodService, public Program : Program, public synchronization:Synchronization, public toastCtrl: ToastController, public NetworkAvailability : NetworkAvailability
  ) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

}
