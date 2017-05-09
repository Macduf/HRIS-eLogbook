import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomainDashboard } from '../domain-dashboard/domain-dashboard';

/**
 * Generated class for the DomainSetting page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-domain-setting',
  templateUrl: 'domain-setting.html',  
})
export class DomainSetting {
	
	dashBoardPage = DomainDashboard;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DomainSetting');
  }

}



 