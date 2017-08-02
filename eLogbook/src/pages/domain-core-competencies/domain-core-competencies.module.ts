import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomainCoreCompetencies } from './domain-core-competencies';

@NgModule({
  declarations: [
    DomainCoreCompetencies,
  ],
  imports: [
    IonicPageModule.forChild(DomainCoreCompetencies),
  ],
  exports: [
    DomainCoreCompetencies
  ]
})
export class DomainCoreCompetenciesModule {}
