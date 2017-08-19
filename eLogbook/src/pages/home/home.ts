import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';


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
import {ObgynForms} from '../../pages/obgyn-forms/obgyn-forms';
import {AnaesthesiologyForms} from '../../pages/anaesthesiology-forms/anaesthesiology-forms';
import {GeneralEthics} from '../../pages/general-ethics/general-ethics';
import {GeneralmedicineForms} from '../../pages/generalmedicine-forms/generalmedicine-forms';
import {OrthopaedicsForms} from '../../pages/orthopaedics-forms/orthopaedics-forms';
import {PsychiatryForms} from '../../pages/psychiatry-forms/psychiatry-forms';
import {GeneralsurgeryForms} from '../../pages/generalsurgery-forms/generalsurgery-forms';
import {FamilymedicineForms} from '../../pages/familymedicine-forms/familymedicine-forms';
import {PaediatricsForms} from '../../pages/paediatrics-forms/paediatrics-forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
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
 obgynForms: any;
anaesthesiologyForms: any;
generalEthics: any;
generalmedicineForms: any;
orthopaedicsForms: any;
psychiatryForms: any;
generalsurgeryForms: any;
familymedicineForms: any;
paediatricsForms: any;
 
constructor(public navCtrl: NavController) {
    
    
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
  
  this.obgynForms = ObgynForms;
  this.anaesthesiologyForms = AnaesthesiologyForms;
  this.generalEthics = GeneralEthics;
  this.generalmedicineForms = GeneralmedicineForms;
  this.orthopaedicsForms = OrthopaedicsForms;
  this.psychiatryForms = PsychiatryForms;
  this.generalsurgeryForms = GeneralsurgeryForms;
  this.familymedicineForms = FamilymedicineForms;
  this.paediatricsForms = PaediatricsForms;

  }
  
  pushPage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(this.obgynForms);
  }

  pushanaesthesiologyForms(){
    this.navCtrl.push(this.anaesthesiologyForms);
  }

  pushgeneralEthics(){
    this.navCtrl.push(this.generalEthics);
  }
pushgeneralmedicineForms(){
  this.navCtrl.push(GeneralmedicineForms);
}

pushorthopaedicsForms(){
  this.navCtrl.push(this.orthopaedicsForms);
}

pushpsychiatryForms(){
  this.navCtrl.push(this.psychiatryForms);
}

pushgeneralsurgeryForms(){
  this.navCtrl.push(this.generalsurgeryForms);
}

pushfamilymedicineForms(){
  this.navCtrl.push(this.familymedicineForms);
}

pushpaediatricsForms(){
  this.navCtrl.push(this.paediatricsForms);
}
}
