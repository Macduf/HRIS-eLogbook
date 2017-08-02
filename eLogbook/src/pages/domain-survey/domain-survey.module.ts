import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainSurvey } from './domain-survey';

@NgModule({
  declarations: [
    DomainSurvey,
  ],
  imports: [
    IonicPageModule.forChild(DomainSurvey),
  ],
  exports: [
    DomainSurvey
  ]
})
export class DomainSurveyModule {}
