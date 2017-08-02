import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainRelevantConditions } from './domain-relevant-conditions';

@NgModule({
  declarations: [
    DomainRelevantConditions,
  ],
  imports: [
    IonicPageModule.forChild(DomainRelevantConditions),
  ],
  exports: [
    DomainRelevantConditions
  ]
})
export class DomainRelevantConditionsModule {}
