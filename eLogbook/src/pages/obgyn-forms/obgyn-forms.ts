import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import {DomainSignOff} from '../../pages/domain-sign-off/domain-sign-off';
import {DomainForm139} from '../../pages/domain-form139/domain-form139';
import {DomainSurvey} from '../../pages/domain-survey/domain-survey';
import {CpdActivities} from '../../pages/cpd-activities/cpd-activities';
import {DomainMortalityMobidity} from '../../pages/domain-mortality-mobidity/domain-mortality-mobidity';
import {DomainConditionsExposed} from '../../pages/domain-conditions-exposed/domain-conditions-exposed';
import {DomainEthicalIssues} from '../../pages/domain-ethical-issues/domain-ethical-issues';
import {DomainRelevantProcedures} from '../../pages/domain-relevant-procedures/domain-relevant-procedures';
import {DomainRelevantConditions} from '../../pages/domain-relevant-conditions/domain-relevant-conditions';
import {DomainCoreCompetencies} from '../../pages/domain-core-competencies/domain-core-competencies';
import {DomainObjective} from '../../pages/domain-objective/domain-objective';
import {ObgynProcedureFormList} from '../../pages/obgyn-procedure-form-list/obgyn-procedure-form-list';
import {ObgynProcedureForm} from '../../pages/obgyn-procedure-form/obgyn-procedure-form';

/**
 * Generated class for the ObgynForms page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-obgyn-forms',
  templateUrl: 'obgyn-forms.html',
})
export class ObgynForms {  
 domainSignOff: any;
 domainForm139: any;
 domainSurvey: any;
 cpdActivities: any;
 domainMortalityMobidity: any;
 domainConditionsExposed: any;
 domainEthicalIssues: any;
 domainRelevantProcedures: any;
 domainRelevantConditions: any;
 domainCoreCompetencies: any;
 domainObjective: any;
 obgynProcedureFormList: any;
  obgynProcedureForm : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
 this.domainSignOff = DomainSignOff;
 this.domainForm139 = DomainForm139;
 this.domainSurvey = DomainSurvey;
 this.cpdActivities = CpdActivities; 
 this.domainMortalityMobidity = DomainMortalityMobidity;
 this.domainConditionsExposed = DomainConditionsExposed;
 this.domainEthicalIssues = DomainEthicalIssues;
 this.domainRelevantProcedures = DomainRelevantProcedures;
 this.domainRelevantConditions = DomainRelevantConditions;
 this.domainCoreCompetencies = DomainCoreCompetencies;
 this.domainObjective = DomainObjective;
 this.obgynProcedureFormList = ObgynProcedureFormList; 
 this.obgynProcedureForm =   ObgynProcedureForm;
  }
  
    pushobgynProcedureForm(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.obgynProcedureForm);
  }
  
  pushdomainSignOff(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainSignOff);
  }
    pushdomainForm139(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainForm139);
  }
    pushdomainSurvey(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainSurvey);
  }
    pushcpdActivities(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.cpdActivities);
  }
    pushdomainMortalityMobidity(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainMortalityMobidity);
  }
    pushdomainConditionsExposed(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainConditionsExposed);
  }
    pushdomainEthicalIssues(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainEthicalIssues);
  }
    pushdomainRelevantProcedures(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainRelevantProcedures);
  }
    pushdomainRelevantConditions(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainRelevantConditions);
  }
  
      pushdomainCoreCompetencies(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainCoreCompetencies);
  }
  
        pushdomainObjective(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.domainObjective);
  }
  
         pushobgynProcedureFormList(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.obgynProcedureFormList);
  }
 
    

}
